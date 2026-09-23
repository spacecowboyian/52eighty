#!/usr/bin/env node
// T1 -- ffprobe metadata (duration/codec/resolution/fps) for the video corpus,
// streamed via HTTP range requests against Dropbox share links. Never
// downloads a full source video. See media-index/decisions/media-index-architecture
// notes and .claude/plans for the design this implements.
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { assetId } from './lib/asset-id.mjs';
import { toDirectUrl, headCheck } from './lib/dropbox.mjs';

const execFileAsync = promisify(execFile);

function parseFrameRate(str) {
  if (!str) return null;
  const [num, den] = str.split('/').map(Number);
  if (!den) return num || null;
  return Math.round((num / den) * 1000) / 1000;
}

async function ffprobe(url) {
  const { stdout } = await execFileAsync('ffprobe', [
    '-v', 'quiet',
    '-print_format', 'json',
    '-show_format',
    '-show_streams',
    url,
  ], { maxBuffer: 10 * 1024 * 1024, timeout: 60_000 });
  return JSON.parse(stdout);
}

async function main() {
  const urlsPath = path.join('media-index', 'video-share-urls.json');
  const { videos } = JSON.parse(await readFile(urlsPath, 'utf8'));

  const results = [];
  const failures = [];

  for (const video of videos) {
    const id = assetId(video.case_study, video.relative_path);
    const label = `${video.case_study}/${video.relative_path}`;
    const directUrl = toDirectUrl(video.share_url);

    process.stdout.write(`[probe] ${label} ... `);

    const head = await headCheck(directUrl);
    if (head.error || !head.httpCode || head.httpCode >= 400) {
      const reason = head.error ?? `http ${head.httpCode}`;
      console.log(`FAILED (head: ${reason})`);
      failures.push({ asset_id: id, case_study: video.case_study, relative_path: video.relative_path, stage: 'head', reason });
      continue;
    }

    try {
      const probe = await ffprobe(head.urlEffective || directUrl);
      const videoStream = probe.streams.find((s) => s.codec_type === 'video');
      const audioStreams = probe.streams.filter((s) => s.codec_type === 'audio');

      const record = {
        asset_id: id,
        case_study: video.case_study,
        relative_path: video.relative_path,
        dropbox_share_url: video.share_url,
        kind: 'video',
        duration_s: probe.format?.duration ? Number(probe.format.duration) : null,
        size_bytes: head.contentLength || (probe.format?.size ? Number(probe.format.size) : null),
        codec: videoStream?.codec_name ?? null,
        width: videoStream?.width ?? null,
        height: videoStream?.height ?? null,
        fps: parseFrameRate(videoStream?.avg_frame_rate),
        audio_channels: audioStreams[0]?.channels ?? 0,
        stage_status: {
          manifest: 'done',
          probe: 'done',
          extract: 'pending',
          transcribe: 'pending',
          vision: 'pending',
          synth: 'pending',
        },
        probed_at: new Date().toISOString(),
      };

      const dir = path.join('media-index', 'data', 'assets', id);
      await mkdir(dir, { recursive: true });
      await writeFile(path.join(dir, 'probe.json'), JSON.stringify(record, null, 2));

      results.push(record);
      console.log(`ok (${record.duration_s?.toFixed(1)}s, ${record.codec}, ${record.width}x${record.height}, ${record.fps}fps)`);
    } catch (err) {
      console.log(`FAILED (ffprobe: ${err.message})`);
      failures.push({ asset_id: id, case_study: video.case_study, relative_path: video.relative_path, stage: 'ffprobe', reason: err.message });
    }
  }

  await mkdir('media-index/data', { recursive: true });
  await writeFile('media-index/data/probe-results.json', JSON.stringify(results, null, 2));
  await writeFile('media-index/data/probe-failures.json', JSON.stringify(failures, null, 2));

  console.log(`\nDone. ${results.length} succeeded, ${failures.length} failed (of ${videos.length}).`);
  if (failures.length > 0) {
    console.log('Failures:', failures.map((f) => `${f.case_study}/${f.relative_path} (${f.stage}: ${f.reason})`).join('\n  '));
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
