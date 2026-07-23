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

### Fixed
- `Field` labels are now associated with their controls (`htmlFor`/`id`) — previously no
  input in the design system had an accessible name from its visible label.
- `Field` focus ring no longer mixes the `border` shorthand with `borderColor`, which
  triggered React style-conflict warnings when a focused field was also invalid.
