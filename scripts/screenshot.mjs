// Ad-hoc verification driver — not a test suite. Usage:
//   node scripts/screenshot.mjs <url> <output-path> [--viewport=mobile|tablet|desktop] [--full-page] [--scroll-y=<px>]
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
    'Usage: node scripts/screenshot.mjs <url> <output-path> [--viewport=mobile|tablet|desktop] [--full-page] [--scroll-y=<px>]',
  );
  process.exit(1);
}

const fullPage = rest.includes('--full-page');
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

const consoleErrors = [];
page.on('console', (msg) => {
  if (msg.type() === 'error') consoleErrors.push(msg.text());
});
page.on('pageerror', (err) => consoleErrors.push(String(err)));

await page.goto(url, { waitUntil: 'networkidle' });
if (scrollY) {
  await page.evaluate((y) => window.scrollTo(0, y), scrollY);
  await page.waitForTimeout(200);
}
await page.screenshot({ path: outPath, fullPage });
await browser.close();

console.log(`Saved ${viewportName} (${viewport.width}x${viewport.height}) screenshot to ${outPath}`);
if (consoleErrors.length) {
  console.log('Console errors:');
  for (const e of consoleErrors) console.log(`  - ${e}`);
  process.exitCode = 1;
}
