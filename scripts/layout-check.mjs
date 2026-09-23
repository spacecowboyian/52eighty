// Layout invariants for a route, at the three breakpoints. Usage:
//   node scripts/layout-check.mjs <url> [<url> ...]
//
// Checks, per viewport (375 / 768 / 1280):
//   - no sideways scroll: scrollWidth <= innerWidth and scrollLeft stays 0
//   - the sticky header pins at top: 0 after scrolling 1200px
//   - --site-header-h equals the measured header height (±1px)
//   - exactly one <h1>; no skipped heading levels
//   - the header's data-tone (once PR 5 lands) is reported at three scroll positions
//   - under prefers-reduced-motion nothing is animating after load
// Exit code 1 if any check fails.
import { chromium } from 'playwright';

const VIEWPORTS = { mobile: 375, tablet: 768, desktop: 1280 };
const urls = process.argv.slice(2);
if (!urls.length) {
  console.error('Usage: node scripts/layout-check.mjs <url> [<url> ...]');
  process.exit(1);
}

const browser = await chromium.launch();
let failures = 0;
const fail = (msg) => {
  failures += 1;
  console.log(`  ✗ ${msg}`);
};
const pass = (msg) => console.log(`  ✓ ${msg}`);

for (const url of urls) {
  for (const [name, width] of Object.entries(VIEWPORTS)) {
    console.log(`\n${url} @ ${name} (${width})`);
    const page = await browser.newPage({ viewport: { width, height: name === 'mobile' ? 812 : 900 } });
    await page.goto(url, { waitUntil: 'networkidle' });

    const overflow = await page.evaluate(() => {
      window.scrollTo(9999, 0);
      const left = window.scrollX;
      window.scrollTo(0, 0);
      return { left, scrollWidth: document.documentElement.scrollWidth, innerWidth: window.innerWidth };
    });
    if (overflow.left === 0 && overflow.scrollWidth <= overflow.innerWidth) pass('no sideways scroll');
    else fail(`sideways scroll: scrollLeft=${overflow.left} scrollWidth=${overflow.scrollWidth} innerWidth=${overflow.innerWidth}`);

    const header = await page.evaluate(() => {
      const h = document.querySelector('.site-header');
      if (!h) return null;
      window.scrollTo({ top: 1200, behavior: 'instant' });
      const top = h.getBoundingClientRect().top;
      const measured = h.getBoundingClientRect().height;
      const declared = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--site-header-h'));
      const declaredPx = getComputedStyle(document.documentElement).getPropertyValue('--site-header-h').trim().endsWith('rem')
        ? declared * parseFloat(getComputedStyle(document.documentElement).fontSize)
        : declared;
      window.scrollTo(0, 0);
      return { top, measured, declaredPx };
    });
    if (!header) fail('no .site-header');
    else {
      if (Math.abs(header.top) < 1) pass('header pins at top after 1200px scroll');
      else fail(`header top=${header.top} after scroll`);
      if (Math.abs(header.measured - header.declaredPx) <= 1) pass(`--site-header-h ${header.declaredPx}px matches measured ${header.measured}px`);
      else fail(`--site-header-h ${header.declaredPx}px vs measured ${header.measured}px`);
    }

    const headings = await page.evaluate(() =>
      [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map((h) => Number(h.tagName[1])),
    );
    const h1s = headings.filter((n) => n === 1).length;
    if (h1s === 1) pass('one h1');
    else fail(`${h1s} h1 elements`);
    let prev = 0;
    let skipped = null;
    for (const n of headings) {
      if (prev && n > prev + 1) skipped = `h${prev} → h${n}`;
      prev = n;
    }
    if (!skipped) pass('no skipped heading levels');
    else fail(`skipped heading level ${skipped}`);

    const tones = await page.evaluate(async () => {
      const h = document.querySelector('.site-header');
      const out = [];
      for (const y of [0, 900, 2400]) {
        window.scrollTo({ top: y, behavior: 'instant' });
        await new Promise((r) => setTimeout(r, 400));
        out.push(`${y}:${h?.getAttribute('data-tone') ?? '-'}`);
      }
      window.scrollTo(0, 0);
      return out;
    });
    console.log(`  · header data-tone at scroll ${tones.join(' ')}`);

    await page.close();

    const rm = await browser.newPage({ viewport: { width, height: 900 } });
    await rm.emulateMedia({ reducedMotion: 'reduce' });
    await rm.goto(url, { waitUntil: 'networkidle' });
    await rm.waitForTimeout(300);
    const running = await rm.evaluate(() =>
      document.getAnimations().filter((a) => a.playState === 'running').map((a) => a.animationName ?? a.id ?? 'transition'),
    );
    if (running.length === 0) pass('reduced motion: nothing animating');
    else fail(`reduced motion: ${running.length} running (${running.slice(0, 5).join(', ')})`);
    await rm.close();
  }
}

await browser.close();
console.log(failures ? `\n${failures} check(s) failed` : '\nall checks passed');
process.exit(failures ? 1 : 0);
