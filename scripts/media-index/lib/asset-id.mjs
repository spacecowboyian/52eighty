import { createHash } from 'node:crypto';

// Stable, deterministic asset id derived from case study + path.
// No content_hash is available from a browser-crawled Dropbox index, so
// this is the id until a real content hash can be obtained (see design doc §4).
export function assetId(caseStudy, relativePath) {
  return createHash('sha1').update(`${caseStudy}/${relativePath}`).digest('hex').slice(0, 12);
}
