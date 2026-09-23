# Media index — T1–T3

Tooling that indexes 52Eighty's case-study media corpus **beyond file paths** — what is actually *inside* each file — so content pages, the homepage hero reel (issue #15), and alt text can be written from a queryable record instead of by scrubbing 26 GB of video by hand.

Design doc and full rationale: `projects/5280-creative/decisions/media-index-architecture.md` in Brains (`brains-staging`).

## ⚠️ Output data is gitignored, and must stay that way

These scripts write to `media-index/` at the repo root, which `.gitignore` excludes. **This repo is public.** That tree contains:

- Dropbox share URLs carrying live `rlkey` access tokens for Miles's client deliverables
- copies of client brand-guide PDFs
- extracted keyframes of identifiable people, whose model-release status is an open question

None of that belongs in a public repo. It's also ~92 MB of derived output, reproducible by re-running the scripts.

Where the working index should ultimately live is **still undecided** — see the design doc's preconditions. The options were the repo, `~/Documents/5280/`, or a repo of its own. The public-repo exposure above rules out this repo for the *data*; the *scripts* are fine here.

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
