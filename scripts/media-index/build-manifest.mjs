#!/usr/bin/env node
// T2 -- reconcile the six local dropbox-index-*.md file-level crawls into one
// asset manifest (~1,880 files), merge in T1's probe data for the 23 videos,
// and group known renditions (same content, different export) into families.
import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { assetId } from './lib/asset-id.mjs';

const SOURCE_DIR = path.join('media-index', 'source-index', 'case-studies');

const EXT_KIND = {
  '.mp4': 'video', '.mov': 'video',
  '.mp3': 'audio', '.wav': 'audio',
  '.jpg': 'image', '.jpeg': 'image', '.png': 'image', '.gif': 'image', '.cr3': 'image',
  '.ai': 'design', '.pdf': 'document', '.txt': 'document', '.ttf': 'font', '.otf': 'font',
};

function kindFromFilename(name) {
  const ext = path.extname(name).toLowerCase();
  return EXT_KIND[ext] || 'other';
}

function parseSize(str) {
  const m = str.trim().match(/^([\d,.]+)\s*(B|KB|MB|GB)$/i);
  if (!m) return null;
  const num = parseFloat(m[1].replace(/,/g, ''));
  const mult = { B: 1, KB: 1024, MB: 1024 ** 2, GB: 1024 ** 3 }[m[2].toUpperCase()];
  return Math.round(num * mult);
}

function folderFromHeader(line) {
  let h = line.replace(/^#+\s*/, '').trim();
  if (/^root\b/i.test(h)) return '';
  h = h.replace(/`/g, '').replace(/\/$/, '');
  return h;
}

// The Allied Arts Sculpture Walk table was condensed in the original crawl to
// a sample + a verified count/range/no-gaps summary. Expand it back to the
// full sequential file list rather than leaving 620 files unrepresented.
function expandCr3Range(placeholderLine, folder) {
  const m = placeholderLine.match(/(\d+)\s*more files,\s*(\S+)\.CR3\s*[–-]\s*(\S+)\.CR3/i);
  if (!m) return [];
  const prefix = m[2].replace(/\d+$/, '');
  const startNum = parseInt(m[2].match(/(\d+)$/)[1], 10);
  const endNum = parseInt(m[3].match(/(\d+)$/)[1], 10);
  const files = [];
  for (let n = startNum; n <= endNum; n++) {
    files.push({ relative_path: `${folder}/${prefix}${n}.CR3`, modified: null, size_bytes: null, size_confidence: 'unknown (condensed in source crawl)' });
  }
  return files;
}

function parseIndexMd(text, caseStudy) {
  const lines = text.split('\n');
  let folder = '';
  let colCount = 3;
  const files = [];

  for (const line of lines) {
    if (/^#{2,3}\s/.test(line) && !/^##\s*Files$/i.test(line) && !/^##\s*Folder tree/i.test(line) && !/^##\s*Summary/i.test(line)) {
      folder = folderFromHeader(line);
      continue;
    }
    if (!line.trim().startsWith('|')) continue;
    const cells = line.split('|').slice(1, -1).map((c) => c.trim());
    if (cells.length === 0) continue;

    const headerish = /relative path|filename|modified|size/i.test(cells[0] + (cells[1] ?? ''));
    if (headerish) { colCount = cells.length; continue; }
    if (cells.every((c) => /^-+$/.test(c))) continue;

    if (cells[0] === '...') {
      files.push(...expandCr3Range(line, folder));
      continue;
    }

    if (colCount === 2) {
      const [filename, size] = cells;
      files.push({
        relative_path: folder ? `${folder}/${filename}` : filename,
        modified: null,
        size_bytes: parseSize(size),
      });
    } else {
      const [pathOrName, modified, size] = cells;
      const relPath = pathOrName.includes('/') ? pathOrName : (folder ? `${folder}/${pathOrName}` : pathOrName);
      const isUnknownDate = /gallery view|not shown|—/i.test(modified);
      files.push({
        relative_path: relPath,
        modified: isUnknownDate ? null : modified,
        size_bytes: parseSize(size),
      });
    }
  }
  return files;
}

// Known rendition families: same logical asset, different export/format.
// Matched by filename (stem) equality within paired sibling folders.
const RENDITION_PAIR_RULES = {
  VFW: [
    ['Photos/Dallas - Silkies Hike/Hi Res Photos', 'Photos/Dallas - Silkies Hike/Web Optimized'],
    ['Photos/DC - Kristina Photos/Hi Res', 'Photos/DC - Kristina Photos/Web Optimized'],
    ["Photos/Lee's Summit Clean Up/High Res", "Photos/Lee's Summit Clean Up/Web Optimized"],
  ],
  'Blue River Greenway': [
    ['BRG Logos/Digital Use - JPEGs/Regular', 'BRG Logos/Digital Use - PNGs/Regular', 'BRG Logos/Print Files - CMYK/Regular'],
    ['BRG Logos/Digital Use - JPEGs/Vision', 'BRG Logos/Digital Use - PNGs/Vision', 'BRG Logos/Print Files - CMYK/Vision'],
  ],
  'Full Circle GIS': [
    ['Brand Book/Full Circle Brand Book - print version.pdf', 'Brand Book/Full Circle Brand Book - web optimized.pdf'],
  ],
};

function assignRenditionFamilies(assets, caseStudy) {
  const rules = RENDITION_PAIR_RULES[caseStudy];
  if (!rules) return;

  const byFolder = new Map();
  for (const a of assets) {
    const folder = path.dirname(a.relative_path);
    if (!byFolder.has(folder)) byFolder.set(folder, []);
    byFolder.get(folder).push(a);
  }

  for (const group of rules) {
    // Single-file rendition group (e.g. print vs web-optimized PDF pair) -- match by exact relative_path list.
    if (group.every((p) => assets.some((a) => a.relative_path === p))) {
      const familyId = assetId(caseStudy, `family:${group[0]}`);
      for (const p of group) {
        const a = assets.find((x) => x.relative_path === p);
        if (a) { a.rendition_family_id = familyId; a.rendition_role = p.toLowerCase().includes('print') ? 'print' : 'web'; }
      }
      continue;
    }
    // Folder-based rendition group -- match by identical basename across sibling folders.
    const [primary, ...siblings] = group;
    const primaryFiles = byFolder.get(primary) ?? [];
    for (const pf of primaryFiles) {
      const stem = path.basename(pf.relative_path, path.extname(pf.relative_path));
      const familyId = assetId(caseStudy, `family:${primary}/${stem}`);
      pf.rendition_family_id = familyId;
      pf.rendition_role = primary.toLowerCase().includes('web') ? 'web' : (primary.toLowerCase().includes('print') || primary.toLowerCase().includes('cmyk') ? 'print' : 'master');
      for (const sib of siblings) {
        const sibFiles = byFolder.get(sib) ?? [];
        const match = sibFiles.find((sf) => path.basename(sf.relative_path, path.extname(sf.relative_path)) === stem);
        if (match) {
          match.rendition_family_id = familyId;
          match.rendition_role = sib.toLowerCase().includes('web') ? 'web' : (sib.toLowerCase().includes('print') || sib.toLowerCase().includes('cmyk') ? 'print' : 'master');
        }
      }
    }
  }
}

async function main() {
  const caseStudies = await readdir(SOURCE_DIR);
  const allAssets = [];
  const probeResults = JSON.parse(await readFile('media-index/data/probe-results.json', 'utf8').catch(() => '[]'));
  const probeById = new Map(probeResults.map((p) => [p.asset_id, p]));

  for (const caseStudy of caseStudies) {
    const indexPath = path.join(SOURCE_DIR, caseStudy, 'index.md');
    const text = await readFile(indexPath, 'utf8').catch(() => null);
    if (!text) continue;

    const files = parseIndexMd(text, caseStudy);
    const assets = files.map((f) => {
      const id = assetId(caseStudy, f.relative_path);
      const probe = probeById.get(id);
      return {
        asset_id: id,
        case_study: caseStudy,
        relative_path: f.relative_path,
        filename: path.basename(f.relative_path),
        ext: path.extname(f.relative_path).toLowerCase(),
        kind: probe ? 'video' : kindFromFilename(f.relative_path),
        modified_at: f.modified ?? 'unknown',
        size_bytes: f.size_bytes ?? (probe ? probe.size_bytes : null),
        rendition_family_id: null,
        rendition_role: 'master',
        duration_s: probe?.duration_s ?? null,
        codec: probe?.codec ?? null,
        width: probe?.width ?? null,
        height: probe?.height ?? null,
        fps: probe?.fps ?? null,
        stage_status: probe?.stage_status ?? { manifest: 'done', probe: 'n/a', extract: 'n/a', transcribe: 'pending', vision: 'pending', synth: 'pending' },
      };
    });

    assignRenditionFamilies(assets, caseStudy);
    // Everything not assigned a family is its own singleton family.
    for (const a of assets) {
      if (!a.rendition_family_id) a.rendition_family_id = a.asset_id;
    }

    allAssets.push(...assets);
  }

  await writeFile('media-index/manifest.json', JSON.stringify(allAssets, null, 2));

  const familyCount = new Set(allAssets.map((a) => a.rendition_family_id)).size;
  const byCaseStudy = {};
  for (const a of allAssets) byCaseStudy[a.case_study] = (byCaseStudy[a.case_study] ?? 0) + 1;

  console.log(`Done. ${allAssets.length} assets across ${caseStudies.length} case studies.`);
  console.log(`Rendition families: ${familyCount} (vs ${allAssets.length} raw files)`);
  console.log(byCaseStudy);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
