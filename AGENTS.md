# Agent Instructions

- GitHub Flow: feature branches, PRs into `main`. No direct pushes to `main` once the site is live.
- Ask before committing.
- Conventional Commits for the PR squash-merge title.
- Log notable changes in `CHANGELOG.md` under `[Unreleased]`.
- The 5280 design system (React + TS components, tokens, Storybook) lives in the `clayground` repo at `projects/5280-design-system/`. Reuse it rather than re-deriving the brand system here.

## Brains

Project background, brand voice, competitive analysis, and the intake-flow design doc live in Brains under `projects/5280-creative/`.

**Use the `brains-staging` MCP server (`mcp__brains-staging__*` tools), not the prod `claude_ai_Brains` server**, for all reads and write-backs on this project. It's mapped to the same `projects/5280-creative/` slug/structure as prod, initialized 2026-07-08. They matched at init time but aren't guaranteed to stay in sync — if something looks stale, check prod too.

At the start of a session touching this repo:
1. `mcp__brains-staging__read_page` on `instructions/5280-creative-claude.md` for the full boot sequence / write-back contract, or `mcp__brains-staging__pull_session_bundle({ tags: ["5280-creative"] })` for exploratory work.
2. Read relevant pages (`canonical/portfolio.md`, `canonical/company-facts.md`, `website-intake-flow.md`, `decisions/decisions-log.md`, `state/next-actions.md`) before planning or building.

After material work (decisions made, features scoped, open questions resolved), write back to `brains-staging`:
- Decisions → `projects/5280-creative/decisions/decisions-log.md` (append)
- Next actions → `projects/5280-creative/state/next-actions.md`
- Open loops → `projects/5280-creative/open-loop-5280-creative.md` + rollup entry in `open-loops.md`
