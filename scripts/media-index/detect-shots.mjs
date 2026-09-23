#!/usr/bin/env node
// T3 -- shot-boundary detection + one keyframe per shot, streamed directly
// off Dropbox share links via ffmpeg's scene filter. No full video is ever
// written to disk -- only the small showinfo log and keyframe JPEGs.
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { assetId } from './lib/asset-id.mjs';
import { toDirectUrl, headCheck } from './lib/dropbox.mjs';

const execFileAsync = promisify(execFile);
const SCENE_THRESHOLD = Number(process.env.SCENE_THRESHOLD ?? 0.35);
const ONLY = process.env.ONLY_ASSET; // optional: limit to one asset_id for spot-checking

async function resolveFreshUrl(shareUrl) {
  const head = await headCheck(toDirectUrl(shareUrl), { timeoutSeconds: 20 });
  if (head.error || !head.httpCode || head.httpCode >= 400) {
    throw new Error(`resolve failed: ${head.error ?? `http ${head.httpCode}`}`);
  }
  return head.urlEffective;
}

async function detectShotBoundaries(url, durationS) {
  // select+showinfo logs one line per frame that passes the scene-change filter.
  // We don't care about stdout (null muxer); the boundaries are in stderr.
  const { stderr } = await execFileAsync(
    'ffmpeg',
    ['-i', url, '-vf', `select='gt(scene,${SCENE_THRESHOLD})',showinfo`, '-f', 'null', '-'],
    { maxBuffer: 50 * 1024 * 1024, timeout: 600_000 },
  ).catch((err) => ({ stderr: err.stderr ?? '' })); // ffmpeg exits non-zero on -f null in some builds; stderr still has the log

  const boundaries = new Set([0]);
  const re = /pts_time:([\d.]+)/g;
  let m;
  while ((m = re.exec(stderr)) !== null) {
    boundaries.add(Number(m[1]));
  }
  boundaries.add(Number(durationS.toFixed(3)));

  return [...boundaries].sort((a, b) => a - b);
}

async function extractKeyframe(url, atSeconds, outPath) {
  await execFileAsync(
    'ffmpeg',
    ['-y', '-ss', String(atSeconds), '-i', url, '-frames:v', '1', '-q:v', '3', outPath],
    { timeout: 60_000 },
  );
}

async function buildContactSheet(keyframeDir, count, outPath) {
  if (count === 0) return;
  const cols = Math.min(6, count);
  const rows = Math.ceil(count / cols);
  // Using -i with N separate flags only feeds input 0 into a single-stream
  // filter like `tile` -- it needs one continuous image-sequence input instead.
  const pattern = path.join(keyframeDir, 'shot-%03d.jpg');
  await execFileAsync(
    'ffmpeg',
    ['-y', '-i', pattern, '-vf', `tile=${cols}x${rows}`, '-frames:v', '1', outPath],
    { timeout: 60_000 },
  ).catch(() => {}); // contact sheet is a nicety, not load-bearing -- don't fail the run over it
}

async function processVideo(record) {
  const label = `${record.case_study}/${record.relative_path}`;
  const dir = path.join('media-index', 'data', 'assets', record.asset_id);
  const keyframeDir = path.join(dir, 'keyframes');
  await mkdir(keyframeDir, { recursive: true });

  console.log(`[shots] ${label} (${record.duration_s.toFixed(1)}s) resolving URL...`);
  const url = await resolveFreshUrl(record.dropbox_share_url);

  console.log(`[shots] ${label} scanning for scene changes (threshold ${SCENE_THRESHOLD})...`);
  const boundaries = await detectShotBoundaries(url, record.duration_s);

  const shots = [];
  for (let i = 0; i < boundaries.length - 1; i++) {
    const t_in = boundaries[i];
    const t_out = boundaries[i + 1];
    if (t_out - t_in < 0.05) continue; // guard against duplicate/degenerate boundaries
    shots.push({ ordinal: shots.length, t_in, t_out, duration_s: Number((t_out - t_in).toFixed(3)) });
  }

  console.log(`[shots] ${label} -> ${shots.length} shots, extracting keyframes...`);
  const keyframePaths = [];
  for (const shot of shots) {
    const mid = shot.t_in + (shot.t_out - shot.t_in) / 2;
    const kfName = `shot-${String(shot.ordinal).padStart(3, '0')}.jpg`;
    const kfPath = path.join(keyframeDir, kfName);
    try {
      await extractKeyframe(url, mid, kfPath);
    } catch (err) {
      // token may have expired mid-run on long videos -- re-resolve once and retry
      const freshUrl = await resolveFreshUrl(record.dropbox_share_url);
      await extractKeyframe(freshUrl, mid, kfPath);
    }
    shot.keyframe_path = path.relative('media-index', kfPath);
    keyframePaths.push(kfPath);
  }

  const contactSheetPath = path.join(dir, 'contact-sheet.jpg');
  await buildContactSheet(keyframeDir, shots.length, contactSheetPath);

  const csvLines = ['ordinal,t_in,t_out,duration_s,keyframe_path'];
  for (const s of shots) csvLines.push(`${s.ordinal},${s.t_in},${s.t_out},${s.duration_s},${s.keyframe_path}`);
  await writeFile(path.join(dir, 'shots.csv'), csvLines.join('\n') + '\n');
  await writeFile(path.join(dir, 'shots.json'), JSON.stringify(shots, null, 2));

  console.log(`[shots] ${label} done: ${shots.length} shots, ${keyframePaths.length} keyframes.`);
  return { asset_id: record.asset_id, case_study: record.case_study, relative_path: record.relative_path, shot_count: shots.length };
}

async function main() {
  const probeResults = JSON.parse(await readFile('media-index/data/probe-results.json', 'utf8'));
  const targets = ONLY ? probeResults.filter((r) => r.asset_id === ONLY) : probeResults;

  const summary = [];
  const failures = [];
  for (const record of targets) {
    try {
      summary.push(await processVideo(record));
    } catch (err) {
      console.log(`[shots] ${record.case_study}/${record.relative_path} FAILED: ${err.message}`);
      failures.push({ asset_id: record.asset_id, case_study: record.case_study, relative_path: record.relative_path, reason: err.message });
    }
  }

  await writeFile('media-index/data/shots-summary.json', JSON.stringify(summary, null, 2));
  await writeFile('media-index/data/shots-failures.json', JSON.stringify(failures, null, 2));

  const totalShots = summary.reduce((sum, s) => sum + s.shot_count, 0);
  console.log(`\nDone. ${summary.length} videos processed, ${failures.length} failed, ${totalShots} total shots.`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
