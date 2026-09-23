# Fallback-tier fonts

Self-hosted latin subsets, all SIL Open Font License 1.1, copied from the
`@fontsource` packages (v5.3.0) so the site never reaches Google Fonts:

| file | face | stands in for |
| --- | --- | --- |
| `lilita-one-latin-400-normal.woff2` | Lilita One | Crumb (display) |
| `source-serif-4-latin-opsz-{normal,italic}.woff2` | Source Serif 4 Variable (`opsz` 8–60, `wght` 200–900) | Minion 3 (serif) |
| `archivo-latin-wdth-normal.woff2` | Archivo Variable (`wdth` 62–125, `wght` 100–900) | Owners Narrow (UI) |

The licensed brand faces (Crumb, Minion 3, Owners Narrow, Acumin Pro Wide,
Larken Black, Mangrove Sans Bold) load from an Adobe Fonts kit when
`PUBLIC_ADOBE_FONTS_KIT` is set — see `src/layouts/Layout.astro`. These files
are the tier beneath that: what a visitor sees if the kit is missing or slow.
