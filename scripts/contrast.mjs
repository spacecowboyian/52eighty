// Walks the rendered DOM of a route and flags text that fails WCAG contrast
// against its effective background. Usage:
//   node scripts/contrast.mjs <url> [--viewport=mobile|tablet|desktop]
// Text under 24px (or 18.66px bold) needs 4.5:1; larger text 3:1. Text over a
// photo/gradient can't be measured and is listed separately as "over image".
import { chromium } from 'playwright';

const VIEWPORTS = { mobile: 375, tablet: 768, desktop: 1280 };
const [, , url, ...rest] = process.argv;
if (!url) {
  console.error('Usage: node scripts/contrast.mjs <url> [--viewport=mobile|tablet|desktop]');
  process.exit(1);
}
const vp = rest.find((a) => a.startsWith('--viewport='))?.split('=')[1] ?? 'mobile';
const width = VIEWPORTS[vp] ?? 375;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle' });

const results = await page.evaluate(() => {
  const parse = (c) => {
    const m = c.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const [r, g, b, a = '1'] = m[1].split(',').map((x) => parseFloat(x));
    return { r, g, b, a: Number.isNaN(a) ? 1 : a };
  };
  const lum = ({ r, g, b }) => {
    const f = (v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const blend = (fg, bg) => ({
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a),
    a: 1,
  });
  const ratio = (a, b) => {
    const l1 = lum(a);
    const l2 = lum(b);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  };
  // Effective background: composite ancestor background-colors bottom-up until opaque.
  const background = (el) => {
    const layers = [];
    let node = el;
    // Text inside a band that carries a photo layer, or under the dark glass
    // header, sits over an image: not measurable here.
    let image = !!el.closest('.band--has-bg, .site-header[data-tone="dark"]');
    while (node && node !== document.documentElement) {
      const cs = getComputedStyle(node);
      if (cs.backgroundImage && cs.backgroundImage !== 'none') image = true;
      const c = parse(cs.backgroundColor);
      if (c && c.a > 0) {
        layers.push(c);
        if (c.a >= 1) break;
      }
      node = node.parentElement;
    }
    let out = { r: 251, g: 249, b: 245, a: 1 }; // page cream
    const bodyBg = parse(getComputedStyle(document.body).backgroundColor);
    if (bodyBg && bodyBg.a > 0) out = blend(bodyBg, out);
    for (let i = layers.length - 1; i >= 0; i -= 1) out = blend(layers[i], out);
    return { color: out, image };
  };

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const seen = new Set();
  const out = [];
  let n;
  while ((n = walker.nextNode())) {
    const t = n.textContent.trim();
    if (!t) continue;
    const el = n.parentElement;
    if (!el || seen.has(el)) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || el.closest('.sr-only, [aria-hidden="true"], script, style')) continue;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) continue;
    seen.add(el);
    const fg = parse(cs.color);
    if (!fg) continue;
    const size = parseFloat(cs.fontSize);
    const bold = parseInt(cs.fontWeight, 10) >= 700;
    const large = size >= 24 || (bold && size >= 18.66);
    const { color: bg, image } = background(el);
    const r = ratio(blend(fg, bg), bg);
    const need = large ? 3 : 4.5;
    if (image) {
      out.push({ kind: 'over image', text: t.slice(0, 40), size, ratio: +r.toFixed(2), need });
    } else if (r < need) {
      out.push({ kind: 'fail', text: t.slice(0, 40), size, ratio: +r.toFixed(2), need, fg: cs.color, bg: `rgb(${Math.round(bg.r)},${Math.round(bg.g)},${Math.round(bg.b)})`, path: el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.split(' ')[0] : '') });
    }
  }
  return out;
});
await browser.close();

const fails = results.filter((r) => r.kind === 'fail');
const overImage = results.filter((r) => r.kind === 'over image');
console.log(`${url} @ ${vp}: ${fails.length} contrast failure(s), ${overImage.length} text node(s) over an image (unmeasured)`);
for (const f of fails) console.log(`  ✗ ${f.ratio}:1 (needs ${f.need}) ${f.path} "${f.text}" ${f.fg} on ${f.bg} @ ${f.size}px`);
process.exit(fails.length ? 1 : 0);
