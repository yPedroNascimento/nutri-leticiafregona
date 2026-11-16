import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';
import { ensureServer, parseTestArgs } from './test-utils.mjs';

const { headed, url: URL } = parseTestArgs(process.argv.slice(2));

mkdirSync('test-results', { recursive: true });

const server = await ensureServer(URL);
const browser = await chromium.launch({ headless: !headed, slowMo: headed ? 200 : 0 });
const context = await browser.newContext({
  viewport: { width: 375, height: 667 },
  isMobile: true,
  hasTouch: true,
});
const page = await context.newPage();
await page.goto(URL, { waitUntil: 'networkidle' });

// Open drawer
await page.tap('.header__toggle');
await page.waitForTimeout(500);
const state = await page.evaluate(() => {
  const nav = document.querySelector('.header__nav');
  const r = nav.getBoundingClientRect();
  return { visible: getComputedStyle(nav).visibility, left: Math.round(r.left), right: Math.round(r.right), innerWidth: window.innerWidth };
});
console.log('Drawer open:', state);
await page.screenshot({ path: 'test-results/drawer-open.png' });

// Close via toggle
await page.tap('.header__toggle');
await page.waitForTimeout(600);
const closed = await page.evaluate(() => getComputedStyle(document.querySelector('.header__nav')).visibility);
console.log('Drawer closed visibility:', closed);

if (state.visible !== 'visible' || state.right !== state.innerWidth || closed !== 'hidden') {
  console.error('FAIL: drawer did not behave as expected');
  process.exitCode = 1;
} else {
  console.log('PASS: drawer opens and closes correctly');
}

await browser.close();
server?.close();
