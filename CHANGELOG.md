# Changelog

## [Unreleased]

### Added
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

### Fixed
- `Field` labels are now associated with their controls (`htmlFor`/`id`) — previously no
  input in the design system had an accessible name from its visible label.
- `Field` focus ring no longer mixes the `border` shorthand with `borderColor`, which
  triggered React style-conflict warnings when a focused field was also invalid.
