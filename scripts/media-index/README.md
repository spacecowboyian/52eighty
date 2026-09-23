# Media index — T1–T3

Tooling that indexes 52Eighty's case-study media corpus **beyond file paths** — what is actually *inside* each file — so content pages, the homepage hero reel (issue #15), and alt text can be written from a queryable record instead of by scrubbing 26 GB of video by hand.

Design doc and full rationale: `projects/5280-creative/decisions/media-index-architecture.md` in Brains (`brains-staging`).

## ⚠️ Output data: allowlisted, not gitignored wholesale

These scripts write to `media-index/` at the repo root. **This repo is public**, so `.gitignore` treats that tree as an **allowlist**: everything under it is ignored, and only these credential-free record types are re-included by name —

- `media-index/data/assets/*/shots.json` — shot records (timecodes + descriptions)
- `media-index/data/shots-summary.json`
- `media-index/data/documents/*/synthesis.json` — brand-guide synthesis

**A new file added to that tree stays ignored unless it is explicitly listed.** That is deliberate. Everything else in there is unsafe to publish or not worth publishing:

| Excluded | Why |
|---|---|
| `*-share-urls.json`, `data/probe-results.json`, `data/documents-index.json`, `data/assets/*/probe.json` | Dropbox share URLs carrying live `rlkey` access tokens for the client's deliverables |
| `data/documents/*/source.pdf` | Copies of client brand-guide PDFs (~50 MB) |
| `data/assets/*/keyframes/` | Extracted frames of identifiable people, model-release status unknown |
| `manifest.json` | `relative_path` holds real Dropbox folder names, one containing a person's name. Redacting a path would break asset-ID matching (`sha1(caseStudy + relativePath)`) and make the file useless for locating anything. Regenerable via `build-manifest.mjs`. |

### Personal names are redacted in the committed records

The vision pass reads identities off lower-thirds, name badges and uniform patches. Those are replaced with `[name redacted]`, keeping roles, organisations, brands, place names and event names — so a badge reads:

```
"[name redacted] / ASSOCIATE DIRECTOR / NATIONAL LEGISLATIVE SERVICE / VETERANS OF FOREIGN WARS"
```

Unredacted originals live outside the repo at `~/Documents/5280/media-index-unscrubbed/`. **They are not cheaply regenerable** — the keyframes they were derived from were deleted once the text was captured, so recovering a name would mean re-extracting frames and re-running vision.

If you re-run the pipeline, it writes fresh unredacted values. Re-scrub before committing.

Where the working *index as a whole* should live is still undecided — see the design doc's preconditions. The exposure above rules this repo out for the bulk data; the scripts and the redacted records are fine here.

## Inputs

The scripts read per-file share URLs from `media-index/*-share-urls.json`, harvested by a read-only browser crawl. Those files are gitignored (they're the credentials). Without them, start from the six share links recorded in `data/case-study-resources-readme.md` in Brains.

Access to the corpus is **read-only**, through six separate `/scl/fo/` share links on Miles's Dropbox tenancy. Never attempt writes; never delete or move anything.

## Scripts

| Script | Stage | What it does |
|---|---|---|
| `probe.mjs` | T1 | `ffprobe` over HTTP range requests → duration, codec, resolution, fps, audio presence. Never downloads a full video. |
| `build-manifest.mjs` | T2 | Builds `asset` records across the corpus and assigns `rendition_family_id` / `rendition_role`. |
| `detect-shots.mjs` | T3 | Shot-boundary detection → shot list with in/out timecodes, one mid-shot keyframe per shot, contact sheet per asset. |
| `ingest-docs.mjs` | — | Page-cited extraction of the delivered brand-guide PDFs. |
| `derive-vfw-design.mjs` | — | Empirical color/typography hypothesis for VFW, which has no written visual guide — derived from applied deliverables (preflight reports, embedded PDF fonts, dominant-color sampling). |
| `lib/dropbox.mjs` | — | `dl=0` → `dl=1` direct-URL resolution, plus a cheap HEAD pre-check. Resolved `dl.dropboxusercontent.com` URLs are signed per request — never cache one. |
| `lib/asset-id.mjs` | — | Stable id from case study + path. A path hash, not a content hash — no `content_hash` is available from a browser-crawled index. |

## Status

T1–T3 ran to completion on 2026-07-16: 23 videos probed, ~1,883 files reconciled into rendition families, 470 shots detected, 0 failures.

Not started: **T4** transcription, **T5** vision on keyframes, **T6** reel-shortlist synthesis, **T7** photo alt-text. T7 is blocked on the model-release question.

## Requirements

`ffmpeg` / `ffprobe` and `curl` on `PATH`. Node 20+.

## Notes from the run

- The corpus is 23 videos, not the 22 the design doc scoped — NORC's `Video/Socials/` gained a third file between the original crawl and a later pass the same day, confirming the doc's own "NORC is live work" warning.
- `ffmpeg -filter_complex tile=NxM` with N separate `-i` flags only feeds input 0 into the filter. The contact-sheet step needs one continuous image-sequence input (`-i shot-%03d.jpg`) instead. Fixed; all 23 contact sheets regenerated locally with no re-fetch from Dropbox.
