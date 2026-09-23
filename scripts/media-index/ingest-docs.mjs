#!/usr/bin/env node
// Brand-guide document ingest: unlike video, these PDFs are small (<15MB),
// so we download them fully rather than stream. Raw layer = per-page text
// via pdftotext (poppler, already on the machine -- no new dependency),
// with page numbers preserved exactly as they appear in the source PDF.
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { assetId } from './lib/asset-id.mjs';
import { toDirectUrl } from './lib/dropbox.mjs';

const execFileAsync = promisify(execFile);

async function downloadFile(shareUrl, destPath) {
  await execFileAsync('curl', ['-sL', '--max-time', '120', '-o', destPath, toDirectUrl(shareUrl)]);
}

async function extractPages(pdfPath) {
  // -layout preserves reading order better than raw stream order; pdftotext
  // inserts a form-feed (\f) between pages by default, which is what we split on.
  const { stdout } = await execFileAsync('pdftotext', ['-layout', pdfPath, '-'], {
    maxBuffer: 50 * 1024 * 1024,
  });
  const rawPages = stdout.split('\f');
  // pdftotext emits a trailing \f after the last page -> trailing empty string; drop it.
  if (rawPages.length > 0 && rawPages[rawPages.length - 1].trim() === '') rawPages.pop();
  return rawPages.map((text, i) => ({ page_number: i + 1, text: text.trim() }));
}

async function main() {
  const { documents } = JSON.parse(await readFile('media-index/doc-share-urls.json', 'utf8'));
  const results = [];

  for (const doc of documents) {
    const id = assetId(doc.case_study, doc.relative_path);
    const label = `${doc.case_study}/${doc.relative_path}`;
    const dir = path.join('media-index', 'data', 'documents', id);
    await mkdir(dir, { recursive: true });

    console.log(`[docs] ${label} downloading...`);
    const sourcePath = path.join(dir, 'source.pdf');
    await downloadFile(doc.share_url, sourcePath);

    console.log(`[docs] ${label} extracting per-page text...`);
    const pages = await extractPages(sourcePath);

    const record = {
      doc_id: id,
      case_study: doc.case_study,
      relative_path: doc.relative_path,
      dropbox_share_url: doc.share_url,
      filename: path.basename(doc.relative_path),
      page_count: pages.length,
      extracted_at: new Date().toISOString(),
    };

    await writeFile(path.join(dir, 'document.json'), JSON.stringify(record, null, 2));
    await writeFile(path.join(dir, 'pages.json'), JSON.stringify(pages, null, 2));

    results.push(record);
    console.log(`[docs] ${label} done: ${pages.length} pages.`);
  }

  await writeFile('media-index/data/documents-index.json', JSON.stringify(results, null, 2));
  console.log(`\nDone. ${results.length} documents ingested.`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
