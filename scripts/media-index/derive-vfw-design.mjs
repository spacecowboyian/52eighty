#!/usr/bin/env node
// Empirically derive brand data (colors/fonts) from VFW's *applied* design
// deliverables, since VFW's own Media Kit Guide.pdf has no colors/typography
// in it. Uses pdffonts (embedded typeface names), pdftoppm + ImageMagick
// (dominant color sampling from rendered PDF pages and JPEGs), and raw text
// from Illustrator preflight Report.txt files. All small files -> full
// download is fine (no streaming needed, unlike the video corpus).
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { assetId } from './lib/asset-id.mjs';
import { toDirectUrl } from './lib/dropbox.mjs';

const execFileAsync = promisify(execFile);
const DOC_ID = assetId('VFW', 'Design Deliverables (derived)');
const OUT_DIR = path.join('media-index', 'data', 'documents', DOC_ID);
const RAW_DIR = path.join(OUT_DIR, 'raw');

async function downloadFile(shareUrl, destPath) {
  await execFileAsync('curl', ['-sL', '--max-time', '120', '-o', destPath, toDirectUrl(shareUrl)]);
}

async function pdfFonts(pdfPath) {
  try {
    const { stdout } = await execFileAsync('pdffonts', [pdfPath]);
    return stdout.trim();
  } catch {
    return null;
  }
}

async function dominantColors(imagePath, count = 6) {
  try {
    const { stdout } = await execFileAsync('magick', [
      imagePath,
      '-resize', '200x200',
      '-colors', String(count),
      '-format', '%c',
      'histogram:info:',
    ]);
    // lines look like: "   1234: (255,0,0,255) #FF0000FF srgb(255,0,0)"
    return stdout
      .trim()
      .split('\n')
      .map((line) => {
        const m = line.match(/(\d+):.*?(#[0-9A-Fa-f]{6,8})/);
        return m ? { pixel_count: Number(m[1]), hex: m[2].slice(0, 7) } : null;
      })
      .filter(Boolean)
      .sort((a, b) => b.pixel_count - a.pixel_count);
  } catch (err) {
    return { error: err.message };
  }
}

async function pdfToPngFirstPage(pdfPath, outPrefix) {
  await execFileAsync('pdftoppm', ['-png', '-r', '100', '-f', '1', '-l', '1', pdfPath, outPrefix]);
  return `${outPrefix}-1.png`;
}

async function main() {
  await mkdir(RAW_DIR, { recursive: true });
  const { files } = JSON.parse(await readFile('media-index/vfw-design-deliverables-urls.json', 'utf8'));

  const findings = { preflight_reports: [], pdf_fonts: [], dominant_colors: [] };

  for (const file of files) {
    const base = path.basename(file.relative_path);
    const localPath = path.join(RAW_DIR, base);
    console.log(`[derive] downloading ${file.relative_path}...`);
    await downloadFile(file.share_url, localPath);

    if (file.kind === 'preflight_report') {
      const text = await readFile(localPath, 'utf8');
      findings.preflight_reports.push({ source_file: file.relative_path, text });
      console.log(`[derive] ${base}: captured raw preflight report (${text.length} chars)`);
    } else if (file.kind === 'pdf') {
      const fonts = await pdfFonts(localPath);
      if (fonts) findings.pdf_fonts.push({ source_file: file.relative_path, pdffonts_output: fonts });

      const pngPath = await pdfToPngFirstPage(localPath, localPath.replace(/\.pdf$/, ''));
      const colors = await dominantColors(pngPath);
      findings.dominant_colors.push({ source_file: file.relative_path, source_kind: 'pdf_page_1', colors });
      console.log(`[derive] ${base}: fonts + ${Array.isArray(colors) ? colors.length : 0} dominant colors`);
    } else if (file.kind === 'image') {
      const colors = await dominantColors(localPath);
      findings.dominant_colors.push({ source_file: file.relative_path, source_kind: 'jpeg', colors });
      console.log(`[derive] ${base}: ${Array.isArray(colors) ? colors.length : 0} dominant colors`);
    }
  }

  await writeFile(path.join(OUT_DIR, 'raw-findings.json'), JSON.stringify(findings, null, 2));
  console.log(`\nDone. Raw findings written to ${path.join(OUT_DIR, 'raw-findings.json')}`);
  console.log(`doc_id: ${DOC_ID}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
