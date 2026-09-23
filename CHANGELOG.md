# Changelog

## [Unreleased]

### Added
- Full-bleed action photo behind the intake opening screen: a rider on 5280's River Bluff
  Trails Park work, pulled from the case-study footage, darkened with a scrim so the pitch
  reads in light type over it (`public/intake/river-bluff-hero-*.jpg`, served responsively via
  `srcset`). `StepShell` gained a `background` slot and an `onDark` palette flip; `FlowFooter`
  gained an `onDark` variant so its escape-hatch links stay legible on the photo.
- Initial Astro + React islands + Sanity scaffold.
- Case study and site settings Sanity schemas.
- GitHub Pages deploy workflow.
- Placeholder intake-flow island (`src/components/islands/IntakeFlow.tsx`).
- Working prototype of the 3-step branching intake flow, replacing that placeholder
  (`src/components/islands/intake/`): hook → brand-mirror payoff → branch-specific close,
  plus a brief recap, a plain-form "doers" path, and an escape hatch back to the work.
- Case-study matching for the intake payoff step, tagged from `canonical/portfolio.md`.
- `ChoiceGrid` and `StepProgress` design-system components, with stories.
- Font Awesome icon support on `ChoiceGrid` options (`icon`, plus an optional `badgeIcon`
  for combo marks), via `@fortawesome/react-fontawesome`. Used on the step-1
  "What's driving this?" cards.
- Full-bleed discipline showcase for the second step-1 question
  (`intake/PathShowcase.tsx`): one viewport-height panel per discipline, stacked so you
  scroll from one into the next, each with copy on the left and a reel placeholder on the
  right. A nav tracks the panel you're on — floating rail beside the panels at ≥1024px, a
  chip row pinned under the site header below that — and jumps between them. Answering the
  first question scrolls the visitor in; a back-up control returns. Copy and reel drift at
  different rates on scroll (`intake/useParallax.ts`, disabled under
  `prefers-reduced-motion`).
- `--site-header-h` is published from the live header's measured height, so anything
  pinning beneath the sticky header lands correctly at any width.
- Every step in the flow now presents as its own full-height screen (`intake/StepShell.tsx`):
  the opening question, the discipline showcase (one screen per option), the site-mirror
  step, the closing questions, the brief recap, and the plain-message form each fill the
  viewport below the header and center their content, with in-screen step progress. The
  `/start` page dropped its page-level heading and reading-column cap — the flow owns its
  own layout.

- Opening "why go on this journey" screen for the intake flow: the `/start` page now leads
  with a single-message pitch (the anti-contact-form premise from `website-intake-flow.md` —
  "the first half of a discovery call, no email until you want to give one"), a smaller
  headline over a couple of sentences of lede, and one prominent "Let's do this" call to
  action that carries the visitor into the real first question. "What's driving this?" is now
  its own full-height screen reached from that CTA rather than the first thing on the page.
- URL-hash anchors for every screen and discipline (`intake/anchors.ts`): the opening pitch
  (`#start`), the "what's driving this" question (`#whats-driving-this`), each discipline
  panel (`#video`, `#brand-film`, `#brand-identity`, `#campaign`, `#not-sure`), and the
  continue screen (`#ready`). The address bar tracks whatever the visitor is looking at, and
  deep-linking straight to any anchor is honored on load — so a particular moment in the flow
  is linkable.

- Real mobile navigation for the site header (issue #13), replacing the stopgap that just
  hid the link row below 640px. `Navbar` now renders a hamburger toggle under that
  breakpoint and owns the open state; `MobileMenu` was rebuilt from a fixed-size
  (300×380) Storybook phone-frame mock into an actual off-canvas drawer — full-height,
  `min(80vw, 320px)` wide, with a dimmed backdrop. About / Our Work / Contact all live in
  the drawer as real `<a href>` links; the Contact pill leaves the narrow header because
  the wordmark (~205px) plus the pill (~110px) plus a 44px toggle overflows 375px once
  padding is counted. Closes on the close button, the backdrop, or Escape; moves focus to
  the close button on open and wraps Tab inside the panel; locks body scroll while open;
  and closes itself when the viewport widens past 640px, so it can't strand itself on a
  desktop header with no visible toggle. Honors `prefers-reduced-motion`.
- Pull-request preview deploys (issue #12). Opening or pushing to a PR builds that branch
  and publishes it to `pr-<number>/` on GitHub Pages, with a bot comment carrying the URL
  (updated in place per push, not one comment per build); closing the PR deletes the
  directory. Production and previews share a `gh-pages` branch, which required moving off
  `actions/upload-pages-artifact` + `deploy-pages` — that pair replaces the entire Pages
  deployment on every run and has no way to add a subfolder. Publishing is now
  `.github/scripts/publish-to-pages.sh`: production `rsync --delete`s into the branch root
  excluding `/pr-*`, so it clears its own stale files while leaving live previews alone,
  and each preview is scoped to its own directory. The three workflows share one
  concurrency group and the script re-applies onto a fresh tip if a concurrent publish
  lands first. It also maintains `.nojekyll`, which branch-served Pages needs or Jekyll
  drops Astro's `_astro/` directory and every asset 404s. Fork PRs are skipped — their
  token is read-only, and `pull_request_target` would run fork code with write access.

### Changed
- The intake commit CTAs — "Let's do this", the per-discipline "That's the one", and the
  "Show me what you see" advance — use the brighter `accent` (red) button so the call to
  action stands out from the pine primaries around it.
- Removed the founder team-guide from the opening screen; the illustrated/caricature team
  guides are still to come.

### Fixed
- `package.json` now declares the Font Awesome packages the intake flow imports
  (`@fortawesome/fontawesome-svg-core`, `-/free-solid-svg-icons`, `-/react-fontawesome`) —
  they were used in the merged step-1 rework but never added as dependencies, so a clean
  install couldn't build `/start`.
- `Field` labels are now associated with their controls (`htmlFor`/`id`) — previously no
  input in the design system had an accessible name from its visible label.
- `Field` focus ring no longer mixes the `border` shorthand with `borderColor`, which
  triggered React style-conflict warnings when a focused field was also invalid.
- `media-index/` -- content-level index of Miles's delivered case-study Dropbox assets (`scripts/media-index/`):
  - `probe.mjs` -- ffprobe metadata (duration/codec/resolution/fps) for all 23 videos, streamed via HTTP range requests, zero full downloads.
  - `build-manifest.mjs` -- asset manifest for all ~1,883 files across 6 case studies, with rendition-family grouping (VFW Hi-Res/Web-Optimized photo pairs, Blue River Greenway JPEG/PNG/CMYK logo sets, Full Circle GIS print/web PDF pair).
  - `detect-shots.mjs` -- shot-boundary detection + one keyframe per shot for all 23 videos (470 shots total), streamed via ffmpeg's scene filter, plus a per-video contact-sheet montage.
  - `ingest-docs.mjs` + `derive-vfw-design.mjs` -- raw per-page text extraction (page numbers preserved) and structured, page/file-cited synthesis for the 4 delivered brand-guide PDFs, plus an empirically-derived color/typography hypothesis for VFW (which has no written visual guide).
  - Shot-level content descriptions (subjects/setting/framing/people_count/faces_present/ocr_text/notable_details, per the design doc's `shot` schema) for 406 of 470 shots (22 of 23 videos -- `Farney Final.mp4`'s 64 shots skipped by request), written into each asset's `shots.json`. Per Ian's direction, keyframe JPEGs and contact-sheet montages are deleted once their content is captured as text -- the description + timecode is the durable record, regenerable on demand from the source video if ever needed again. Freed ~190MB (`media-index/` dropped from 281MB to 92MB, the remainder being Farney's still-undeleted keyframes).
  - Fixed a real bug found during verification: `ffmpeg -filter_complex tile=NxM` with N separate `-i` flags only fed the first input into the filter (all other tiles rendered black). Fixed to use a single image-sequence input (`-i shot-%03d.jpg`); all 23 contact sheets were regenerated locally before being deleted per the above.
  - Fixed a path-prefix bug: River Bluff Trails Park's index baked the Dropbox share's real folder name ("St Joseph Parks and Rec/") into every file path, inconsistent with every other case study's root-relative paths -- this silently broke asset-ID matching between the manifest and the video pipeline (all 4 River Bluff videos were missing from the merged manifest). Fixed at the source across all 3 index mirrors (repo, `~/Documents/5280`, brains-staging).
  - Scope: video shot detection + shot descriptions + brand-guide extraction (the "reel path" for GitHub issue #15, plus enough of T5 to make the shots queryable). Transcription and photo alt-text remain deferred -- see `projects/5280-creative/decisions/media-index-architecture.md` in brains-staging.
