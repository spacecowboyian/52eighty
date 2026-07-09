# Agent Instructions

- GitHub Flow: feature branches, PRs into `main`. No direct pushes to `main` once the site is live.
- **All work starts in a fresh git worktree on a new branch from `main`** — use the `EnterWorktree` tool (branches from `origin/main`), not the primary checkout. Same pattern already in use in `repos/brains`.
- **When a PR is merged, prune the worktree** — `ExitWorktree` with `action: "remove"` (or `git worktree remove` + delete the branch, if the worktree was created outside a Claude Code session).
- Ask before committing.
- Conventional Commits for the PR squash-merge title.
- Log notable changes in `CHANGELOG.md` under `[Unreleased]`.
- The 5280 design system (React + TS components, tokens, Storybook) lives in this repo at `design-system/` (npm workspace). A stale copy remains in `clayground/projects/5280-design-system/`; this repo is now the source of truth. Storybook publishes to `/storybook` on GitHub Pages via CI (`npm run build:storybook`).
- **Design system components are mandatory.** Build UI from `design-system/src/components` rather than hand-rolling equivalents. If a component doesn't cover a need, first scrutinize the need (is this genuinely a new pattern, or does an existing component already fit with a prop tweak?). Only after that: extend the existing component, or add a new one to `design-system/` with a story — never a one-off local component that duplicates something the design system already owns.

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
