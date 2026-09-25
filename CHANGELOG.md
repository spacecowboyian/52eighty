# Changelog

## [Unreleased]

### Added
- About page rebuilt as a sequence, not a document: a St. Joseph golden-hour photo hero that
  resolves into cream, the positioning sentence set large in serif beside the starburst with
  two short paragraphs, the five pillars as beats (numeral, title, key idea — no bullets) on
  jade with the squiggle, a pine studio band (Miles & Alysa, St. Joseph, contact, the mark; a
  trail still in the arch until there's a photo of them), and the invite closing on "Surface-level
  marketing is crowded. Good stories aren't." No frames anywhere.
- Selected work carries real photography. Three new case studies in Sanity from the media
  corpus — VFW Day of Service (marketing campaigns), National Outdoor Recreation Conference
  (video) and Allied Arts Council (branding) — with stills pulled from the footage as arched
  covers and galleries (`public/work/vfw-day-of-service`, `public/work/norc`). The homepage
  now features River Bluff, VFW and NORC; Nomad Trails and Uncommon Character stay as case
  studies but are unfeatured until they have imagery. Category pills show labels
  ("Marketing campaigns") instead of CMS slugs.
- First real stills from the media index. Seven frames pulled from the case-study footage
  (River Bluff Trails Park × 6, a St. Joseph aerial) as 4:5 arch crops under `public/work/`
  and `public/about/`: the River Bluff card and case-study cover is now the trailhead welcome
  stone, its case study gets a five-still gallery of arches, and the About page's arch holds
  downtown St. Joseph at golden hour. No identifiable people in any of them; the
  model-release question for the rest of the corpus is still open.
- The rest of the site as colour fields. `/work`: jade title band → cream arched grid →
  invite. Case studies: a header band in the project's own tone (the same one its card used)
  with the arched cover beside the title from 768px, a cream body doming over it, the invite.
  `/about`: the guide's positioning page (pine in a sky frame, its own copy), the five
  expanded messaging pillars (jade in a sky frame, new `Pillar` design-system component,
  1→2→3 columns) and a people band (cream in a blush frame; the arch is a field until there's
  a photo). `/start`: the opening photo resolves into cream and the next screen domes over the
  join; each discipline panel floods its own colour (video pine, brand film sky, brand +
  identity periwinkle, campaign jade, not-sure cream); the chip row and rail use the header's
  glass idiom instead of a border; the mirror step is sky and the "ready" and recap screens
  are lime. Storybook's Colors story is rewritten around fields — arched swatches, a
  Fields story per tone with its allowed type, and a WCAG pairings table from a new
  `utils/contrast.ts` helper.
- Homepage as colour fields. Reel (scrim now resolves into pine) → pine work band (lime
  "Portfolio" pill, paper type, arched cards) → jade statement ("GO FURTHER." in lime, the
  sky squiggle) → periwinkle invite doming over it (new `src/components/Invite.astro`, reused
  by `/work` and case studies) → pine footer. Zero rules on the page; the one hard edge is
  peri → pine at the footer. Motion: the reel's media parallaxes as it leaves
  (`animation-timeline: view()`, progressive), the statement and invite settle once as whole
  blocks (`src/scripts/reveal.ts`, guarded so nothing is hidden without it), and the intake
  flow's step scroll honours reduced motion.
- Contrast at the token level: `Button accent` is now lime on pine (8.95:1) — the red/white
  CTA was 3.53:1 and the most-clicked failing element; a red `signal` variant with ink text
  covers the rare red button; `colors.redDeep` (#D92B2B, 4.85:1 on white) for red text under
  24px, used by `Link` hover. Outline/ghost buttons, card text and the footer take their
  colours from the band they sit on. `scripts/contrast.mjs <url>` walks the rendered DOM and
  flags any text under 4.5:1 (3:1 large).
- Slimmer header band (60px, was 74px) closed by a 4px solid pine rule, with the same 50px mark centred on that rule.
- Marks. New design-system components from the brand guide's shape language: `Arch`
  (CSS semicircle-top frame), `Squiggle` (the hand-drawn loop, draws itself once on view),
  `Starburst` (16-point burst with the red heart, one pulse on mount), `Pill` (tilted
  sticker label) — plus a `useReducedMotion` util and a `projectTone(slug)` helper that gives
  each project a deterministic colour. Placements: starburst + heart at the hero's first word,
  the sky squiggle off the homepage statement, `SectionHeader variant="trail"` (squiggle
  beside the title, replacing the mile-marker) with the eyebrow as a Pill tucked under the
  title, work cards with arched covers and a category Pill over the arch's edge (River Bluff
  uses its real still; the rest are colour fields until Sanity carries covers), case-study
  headers with an arched cover. Colour swatches in Storybook are arches. The header mark is
  larger, tilted down-left and hangs over the header's bottom edge.
- Glass header. The sticky header is a `SiteHeader` island: transparent, borderless, a
  blurred glass layer on a pseudo-element, its palette following the colour field beneath
  it (`useHeaderTone` watches every band's `data-header-tone` through a header-height strip;
  pages pass `headerTone` so the server render is already right). `Navbar` gained a
  flush + dark combination (paper links, lime hover underline) and 0.3s colour transitions.
  The header and footer now carry the real “5280!” mark (new `Wordmark` component: paper
  digits + lime bang over dark fields, pine + red over light ones, linking home) in place of
  the text wordmark and the 34px “52” circle badge.
- Layout shell rebuilt as a named-track grid. `main.page` is a `[full] gutter | [content]
  column | gutter` grid; the new `Band` design-system primitive (`tone`, `frame`, `edge="arch"`,
  `pad`, `background`, `headerTone`) spans the full track and subgrids the same columns to
  its children, so every full-bleed colour field is built one way. No section uses
  `margin-inline: calc(50% - 50vw)` any more; `.site-shell` has no gap or padding hacks; the
  page starts under the header and the first section pays the header height back. The footer
  is a full-width `site-footer` band outside `main` (`Footer variant="band"`). `StepShell` is
  a thin wrapper over `Band` (`tone`/`first` props removed), `PathShowcase` is a `Band`, and
  the homepage reel and invite are `Band`s. `--site-header-h` is deterministic (header
  `min-height` + non-wrapping wordmark) with a layout-level ResizeObserver as a safety net.
- `scripts/layout-check.mjs <url>` — Playwright check at 375/768/1280: no sideways scroll,
  sticky header pins, `--site-header-h` matches the measured header, one `h1`, no skipped
  heading levels, and no running animations under reduced motion.
- Typography per the brand guide. A `text` token scale (`displayXL/LG/MD`, `heading`,
  `title`, `lead`, `body`, `eyebrow`) mirrored as `.t-*` classes: display type is now the
  hand-drawn face at its single weight, **uppercase**, with a hair of positive tracking and
  leading near 0.95 (no more synthesized 800-weight bold or negative tracking anywhere the
  display face is used); h3s and card titles are the serif. `SectionHeader` gained an
  `as` prop (`h1`/`h2`/`h3`) and its eyebrow now sits below the title; `/about`, `/work`
  and case studies render a real `h1`, the homepage statement and invite are `h2`s, and
  the hero's first word is lime.
- De-boxed the design system. Cards, section headers, the contact form, accordion, tabs,
  logo marquee, testimonials, award badges, the intake mirror/recap panels, the header, the
  step and showcase rules and the flow footer all lose their `1px` borders and card shells;
  content sits directly on its ground. Structural edges stay (inputs, focus rings, link
  underlines, accordion/recap row rules, the toast tone bar). Work cards are transparent
  with the image in its own clipped frame (a flat sky field until real images land) and a
  lime→pine title underline on hover instead of a lift and shadow. The footer loses its
  radius and meets the page bottom.
- One easing. `ease.out` / `ease.inOut` tokens replace the 56%-overshoot `spring` on all
  eleven hover/enter sites (`spring` is kept as a deprecated alias). A global
  `prefers-reduced-motion` guard in `theme.css` collapses every animation and transition,
  and `scripts/screenshot.mjs` gained `--reduced-motion`.
- Real brand fonts. The design system no longer imports Google Fonts (Baloo 2 / Source
  Serif 4 / Archivo); the licensed faces load from an Adobe Fonts kit when
  `PUBLIC_ADOBE_FONTS_KIT` is set, and beneath them sit self-hosted OFL stand-ins in
  `design-system/src/styles/fonts/` — Lilita One for Crumb, Source Serif 4 Variable (full
  optical-size axis) for Minion 3, Archivo Variable at 90% width for Owners Narrow — plus a
  metric-matched local `Display Fallback` so the layout holds before the display face
  arrives. The display face is preloaded from the layout.
- Brand marks extracted as vector SVG from the 2026-06-22 brand guide PDF
  (`design-system/src/assets/marks/`): the “5280!” logo (lime `!` as its own path), the
  hand-drawn squiggle, the 16-point starburst and the heart — all `currentColor`. A
  `Foundations/Marks` story shows them at 24px and 240px. `public/brand/5280-mark.svg`
  carries the logo for the site, and `public/favicon.svg` is now that mark on pine
  (replacing a Georgia “52” in an off-palette gold).
- Motion-first homepage (issue #15), replacing the static placeholder. A near-fullscreen
  hero (`100svh` minus the sticky header) carries one continuous slow drift — the
  behaviour of a held drone shot, 32s, one direction — plus a single orchestrated arrival
  on load (headline, then lede, then call to action). Everything below the fold is still:
  motion is spent in one place rather than scattered as fade-up-on-scroll per section,
  which the competitive analysis flagged as the anti-pattern to avoid. Both are disabled
  under `prefers-reduced-motion`.
  - **The hero is built to be the reel.** The reel itself is an explicit non-goal of #15
    and is gated on Miles's work samples, so the slot is real and checked at build time:
    drop an encoded file at `public/reel/hero.mp4` (optionally `.webm` alongside) and the
    hero plays it instead of the still, with no code change. Until then the River Bluff
    Trails Park frame already in the repo stands in — real 5280 work, not stock.
  - One `h1` on the page, per the SEO audit's heading-hierarchy finding (the old homepage
    had roughly five). Copy is minimal per the spec's Conversation 1, and the hero carries
    a single primary CTA to `/start` — an earlier "See the work" scroll cue was cut for
    competing with it.
  - Sections below: selected work from Sanity (real case studies, project-centered rather
    than service-bucketed), a positioning statement, and a closing invitation to `/start`.

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
- Full-bleed sections no longer scroll the page sideways. `.step` and the homepage hero
  break out with `margin-inline: calc(50% - 50vw)`, and `vw` includes the scrollbar, so on
  any page tall enough to scroll they ended up scrollbar-width wider than the viewport —
  a ~7px horizontal scroll on `/start` and the homepage. `body` now sets `overflow-x: clip`
  (`clip`, not `hidden`, which would make it a scroll container and break the sticky
  header — verified the header still pins at `top: 0` after scrolling).
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
