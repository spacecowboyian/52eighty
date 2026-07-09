# 5280 Design System

The **5280 Creative** component library — a warm, human, faith-based branding system,
presented as an interactive **Storybook**. _"Creative with a heartbeat."_

🔗 Live: `https://spacecowboyian.github.io/52eighty/storybook/`

This is the canonical home for the design system (moved from `clayground/projects/5280-design-system/`,
which still holds a stale copy). It's an npm workspace of the root `52eighty` package —
`npm install` at the repo root installs both.

## Stack

Storybook 8 + Vite + React 19 + TypeScript — components are inline-styled ports driven
by shared tokens (no Tailwind / React Aria).

## What's inside

- **Foundations** — `Foundations/Colors`, `Foundations/Typography`,
  `Foundations/Spacing & Elevation`.
- **Components** (each with stories for every variant/state):
  Button, Link, Navbar (+ mobile drawer), Field / Select / TextArea, NewsletterSignup,
  ContactForm, Card (work / case-study / blog), StatBar (scroll count-up), AwardBadge,
  LogoMarquee, Testimonial, SectionHeader, Accordion, Tabs, Modal, Toast, Footer.

Design tokens live in `src/tokens.ts` (colors, fonts, radii, spacing, elevation) and
`src/styles/theme.css` (CSS vars, fonts, keyframes). Hover/focus/in-view behavior comes
from the hooks in `src/utils/`.

## Develop

```bash
cd design-system
npm run storybook   # or: npm run storybook (from repo root, via workspace script)
```

Storybook runs on http://localhost:6007.

## Build

```bash
npm run build:storybook   # from repo root — outputs to ../dist/storybook
```

CI (`.github/workflows/deploy.yml`) builds the Astro site into `dist/`, then builds
Storybook into `dist/storybook/`, and uploads the whole `dist/` tree as the GitHub Pages
artifact — so Storybook is published alongside the site on every push to `main`.

## Provenance

Originally imported from **Claude Design** (`5280 Design System.dc.html`) via the
`claude_design` MCP connector, then translated from the design-canvas DSL into React
components + stories.
