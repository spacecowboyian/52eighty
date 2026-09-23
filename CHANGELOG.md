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
