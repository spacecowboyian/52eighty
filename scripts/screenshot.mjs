// Ad-hoc verification driver — not a test suite. Usage:
//   node scripts/screenshot.mjs <url> <output-path> [--viewport=mobile|tablet|desktop] [--full-page] [--scroll-y=<px>] [--reduced-motion]
//
// Defaults to `mobile`. Per this project's mobile-first convention
// (AGENTS.md), always check the mobile viewport first — the default
// here is deliberate, not an accident: you have to opt into desktop.
import { chromium } from 'playwright';

// Matches the content-driven breakpoint scale in AGENTS.md / the
// Impeccable skill's adapt.md reference (640 / 768 / 1024px).
const VIEWPORTS = {
  mobile: { width: 375, height: 812 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1280, height: 800 },
};

const [, , url, outPath, ...rest] = process.argv;

if (!url || !outPath) {
  console.error(
    'Usage: node scripts/screenshot.mjs <url> <output-path> [--viewport=mobile|tablet|desktop] [--full-page] [--scroll-y=<px>] [--reduced-motion]',
  );
  process.exit(1);
}

const fullPage = rest.includes('--full-page');
const reducedMotion = rest.includes('--reduced-motion');
const scrollYArg = rest.find((a) => a.startsWith('--scroll-y='));
const scrollY = scrollYArg ? Number(scrollYArg.split('=')[1]) : 0;
const viewportArg = rest.find((a) => a.startsWith('--viewport='));
const viewportName = viewportArg ? viewportArg.split('=')[1] : 'mobile';
const viewport = VIEWPORTS[viewportName];

if (!viewport) {
  console.error(
    `Unknown --viewport "${viewportName}". Use one of: ${Object.keys(VIEWPORTS).join(', ')}`,
  );
  process.exit(1);
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport });
if (reducedMotion) await page.emulateMedia({ reducedMotion: 'reduce' });

const consoleErrors = [];
page.on('console', (msg) => {
  if (msg.type() === 'error') consoleErrors.push(msg.text());
});
page.on('pageerror', (err) => consoleErrors.push(String(err)));

await page.goto(url, { waitUntil: 'networkidle' });
if (fullPage) {
  // Walk the page once so scroll-triggered state (reveals, lazy images, the
  // header tone) is what a visitor would have seen, then return to the top.
  await page.evaluate(async () => {
    const h = document.documentElement.scrollHeight;
    for (let y = 0; y < h; y += window.innerHeight / 2) {
      window.scrollTo({ top: y, behavior: 'instant' });
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
  await page.waitForTimeout(800);
}
if (scrollY) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), scrollY);
  await page.waitForTimeout(200);
}
await page.screenshot({ path: outPath, fullPage });
await browser.close();

console.log(
  `Saved ${viewportName} (${viewport.width}x${viewport.height})${reducedMotion ? ' reduced-motion' : ''} screenshot to ${outPath}`,
);
if (consoleErrors.length) {
  console.log('Console errors:');
  for (const e of consoleErrors) console.log(`  - ${e}`);
  process.exitCode = 1;
}
