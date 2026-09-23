# 52Eighty Creative — Brand Website

Marketing site for 52Eighty Creative ("Creative with a heartbeat"), a brand-first agency in St. Joseph, MO run by Miles & Alysa Ramsay. Built with [Astro](https://astro.build) (static output, React islands, hosted on GitHub Pages) and [Sanity](https://www.sanity.io) as the content backend.

---

## Stack

| Tool | Purpose |
|---|---|
| [Astro 5](https://astro.build) | Site framework (TypeScript, static output, real SEO) |
| `@astrojs/react` | React islands for interactive pieces (the intake flow) |
| [Sanity v3](https://www.sanity.io) | Headless CMS — content API + hosted Studio (project `0qwzjrfs`) |
| `@sanity/client` | Fetch content from Sanity at build time |
| `@sanity/image-url` | Build CDN image URLs from Sanity image assets |
| Plain CSS | Styling — brand palette (pine/jade/gold), no framework |
| GitHub Pages | Static frontend hosting |

Design system: the 5280 component library (18 React + TS components, tokens, Storybook) lives in this repo at `design-system/` (npm workspace). Pull components/tokens from there as the intake flow and marketing pages get built out, rather than re-deriving the brand system from scratch. Storybook publishes to `/storybook` alongside the site — see `design-system/README.md`.

---

## Project Structure

```
52eighty/
├── astro.config.mjs          # Astro config (static output + React integration)
├── tsconfig.json
├── .env.example               # Required environment variables
├── design-system/             # 5280 component library (npm workspace) + Storybook
│   ├── src/
│   │   ├── components/
│   │   ├── stories/
│   │   ├── tokens.ts
│   │   └── styles/theme.css
│   └── .storybook/
├── sanity/                    # Sanity Studio project
│   ├── sanity.config.ts
│   ├── schemas/
│   │   ├── caseStudy.ts       # Portfolio taxonomy: Branding / Marketing Campaigns / Video / Social & Digital
│   │   └── siteSettings.ts
│   └── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── types/sanity.ts
    ├── utils/
    │   ├── sanityClient.ts
    │   ├── queries.ts
    │   └── imageUrl.ts
    ├── layouts/Layout.astro
    ├── components/
    │   └── islands/
    │       └── IntakeFlow.tsx  # Placeholder for the 3-step "anti-contact-form" intake flow
    ├── pages/
    │   ├── index.astro
    │   ├── about.astro
    │   ├── start.astro         # Intake flow entry point
    │   └── work/
    │       ├── index.astro
    │       └── [slug].astro
    └── styles/global.css
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env
```

`PUBLIC_SANITY_PROJECT_ID` is already filled in (`0qwzjrfs`, dataset `production`).

### 3. Run the dev server

```bash
npm run dev
```

### 4. Run the Sanity Studio (content editing)

```bash
cd sanity
npm install
npm run dev
```

---

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the Astro site, builds Storybook into `dist/storybook/`, and publishes the combined `dist/` tree to GitHub Pages — so the site is at the Pages root and Storybook is at `/storybook`. The `PUBLIC_SANITY_PROJECT_ID` repo secret must be set (see repo Settings → Secrets → Actions).

Pages serves from the **`gh-pages` branch**, not from an uploaded Actions artifact. That branch is generated — never commit to it by hand. Its layout:

```
gh-pages/
├── index.html, _astro/, …   ← production (from main)
├── storybook/               ← published Storybook
├── pr-20/                   ← preview for PR #20
└── pr-21/                   ← preview for PR #21
```

### PR previews

Opening or pushing to a pull request triggers `.github/workflows/pr-preview.yml`, which builds that branch with `BASE_PATH=/52eighty/pr-<number>` and publishes it to `pr-<number>/` on `gh-pages`. A bot comment on the PR carries the URL and is updated in place on each push. Closing the PR triggers `pr-preview-cleanup.yml`, which deletes the directory.

Both production and preview publishes go through `.github/scripts/publish-to-pages.sh`. Production is `rsync --delete`d into the branch root with `/pr-*` excluded, so it clears its own stale files without touching live previews; a preview is scoped to its own directory. All three workflows share one `gh-pages-publish` concurrency group, and the script re-applies onto a fresh branch tip if a concurrent publish lands first.

The script also maintains `.nojekyll` at the branch root. Branch-served Pages runs Jekyll, which drops directories beginning with an underscore — without that file every asset in Astro's `_astro/` 404s.

Previews are skipped for pull requests from forks: a fork's token is read-only and has no access to `PUBLIC_SANITY_PROJECT_ID`, so it cannot publish. Working around that with `pull_request_target` would run fork code with write access to this repo, which isn't a trade worth making for a preview.

## Content model

- **Case Study** — one per portfolio piece, tagged by 52Eighty's own 4-category taxonomy (Branding, Marketing Campaigns, Video, Social Media & Digital Strategy) plus client/industry, for the eventual portfolio-matching mechanic in the intake flow.
- **Site Settings** — singleton for hero copy, about text, contact info, social links.

## Background

Project context, brand voice research, competitive analysis, and the full intake-flow design doc live in Brains under `projects/5280-creative/`.
