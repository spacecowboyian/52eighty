# Agent Instructions

- GitHub Flow: feature branches, PRs into `main`. No direct pushes to `main` once the site is live.
- **All work starts in a fresh git worktree on a new branch from `main`** — use the `EnterWorktree` tool (branches from `origin/main`), not the primary checkout. Same pattern already in use in `repos/brains`.
- **When a PR is merged, prune the worktree** — `ExitWorktree` with `action: "remove"` (or `git worktree remove` + delete the branch, if the worktree was created outside a Claude Code session).
- Ask before committing.
- Conventional Commits for the PR squash-merge title.
- Log notable changes in `CHANGELOG.md` under `[Unreleased]`.
- The 5280 design system (React + TS components, tokens, Storybook) lives in this repo at `design-system/` (npm workspace). A stale copy remains in `clayground/projects/5280-design-system/`; this repo is now the source of truth. Storybook publishes to `/storybook` on GitHub Pages via CI (`npm run build:storybook`).
- **Design system components are mandatory.** Build UI from `design-system/src/components` rather than hand-rolling equivalents. If a component doesn't cover a need, first scrutinize the need (is this genuinely a new pattern, or does an existing component already fit with a prop tweak?). Only after that: extend the existing component, or add a new one to `design-system/` with a story — never a one-off local component that duplicates something the design system already owns.
- **Playwright is installed** (`playwright` devDependency + Chromium binary). Use `node scripts/screenshot.mjs <url> <output-path> [--viewport=mobile|tablet|desktop] [--full-page] [--scroll-y=<px>]` to actually look at UI changes before calling them done — run `npm run dev`, wait for it to serve, screenshot the affected route(s), and view the image. Don't report a visual/frontend change complete on build-success or rendered-HTML checks alone when Playwright is available to look at the real thing.
- **Mobile-first, always.** Author CSS mobile-first — base styles for the smallest viewport, `min-width` media queries layer up complexity for larger screens; never `max-width`-first overrides. Breakpoint scale (content-driven, not device-chasing — add one only where the design actually breaks): `640px`, `768px`, `1024px`. When verifying UI with the Playwright script above, **check `--viewport=mobile` (the default) first**, then `tablet`, then `desktop` — never the other order. Sources: [MDN — Mobile First](https://developer.mozilla.org/en-US/docs/Glossary/Mobile_First), and the Impeccable skill's own `reference/adapt.md` ("Mobile-First: Write It Right" + content-driven breakpoints), which we're also standardizing on below — so the authoring convention and the tool giving design feedback agree with each other.
- **Use the [Impeccable](https://github.com/pbakaus/impeccable) skill for UI work** — `/impeccable audit|polish|critique|craft|shape` etc. Installed project-locally under `.claude/skills/impeccable/` (gitignored like the rest of `.claude/` — reinstall anytime with `npx impeccable skills install --providers=.claude`, answer `y`). Read its `SKILL.md` before frontend work; it enforces concrete anti-pattern rules (contrast, typography, layout, motion, responsive) worth following even outside a formal `/impeccable` invocation.

## Brains

Project background, brand voice, competitive analysis, and the intake-flow design doc live in Brains under `projects/5280-creative/`.

**Use only the `brains-staging` MCP server (`mcp__brains-staging__*` tools) for this project — never the prod `claude_ai_Brains` server, for reads or writes, for right now.** It's mapped to the same `projects/5280-creative/` slug/structure as prod, initialized 2026-07-08. Confirmed 2026-07-09 (Ian): all 5280-creative/52eighty info lives in `brains-staging` exclusively until told otherwise — do not fall back to prod even to check for staleness.

At the start of a session touching this repo:
1. `mcp__brains-staging__read_page` on `instructions/5280-creative-claude.md` for the full boot sequence / write-back contract, or `mcp__brains-staging__pull_session_bundle({ tags: ["5280-creative"] })` for exploratory work.
2. Read relevant pages (`canonical/portfolio.md`, `canonical/company-facts.md`, `website-intake-flow.md`, `decisions/decisions-log.md`, `state/next-actions.md`) before planning or building.

**Before ending any session that touched this repo, write back to `brains-staging` — do this even if not asked, as a required last step, not an optional afterthought:**
- Decisions → `projects/5280-creative/decisions/decisions-log.md` (append)
- Next actions → `projects/5280-creative/state/next-actions.md`
- Open loops → `projects/5280-creative/open-loop-5280-creative.md` + rollup entry in `open-loops.md`
