import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';
import { ensureServer, parseTestArgs } from './test-utils.mjs';

const { headed, url: URL } = parseTestArgs(process.argv.slice(2));
const OUT = 'test-results';

const devices = [
  { name: 'iphone-se', width: 375, height: 667 },
  { name: 'iphone-14', width: 390, height: 844 },
  { name: 'android', width: 360, height: 800 },
];

const sections = ['header', 'hero', 'sobre', 'servicos', 'metodologia', 'trajetoria', 'depoimentos', 'faq', 'blog', 'cta-final', 'footer'];

mkdirSync(OUT, { recursive: true });

const server = await ensureServer(URL);
const browser = await chromium.launch({ headless: !headed, slowMo: headed ? 150 : 0 });

for (const device of devices) {
  const context = await browser.newContext({
    viewport: { width: device.width, height: device.height },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  });
  const page = await context.newPage();
  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (err) => consoleErrors.push(String(err)));

  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  // Full page screenshot
  await page.screenshot({ path: `${OUT}/${device.name}-full.png`, fullPage: true });

  // Metrics
  const metrics = await page.evaluate(() => {
    const docW = document.documentElement.scrollWidth;
    const winW = window.innerWidth;
    const overflowing = [];
    document.querySelectorAll('*').forEach((el) => {
      if (getComputedStyle(el).visibility === 'hidden') return;
      const r = el.getBoundingClientRect();
      if (r.width > 0 && (r.right > winW + 1 || r.left < -1)) {
        const tag = el.tagName.toLowerCase();
        const cls = (el.className && typeof el.className === 'string') ? '.' + el.className.split(' ').filter(Boolean).join('.') : '';
        overflowing.push({
          el: tag + cls,
          left: Math.round(r.left),
          right: Math.round(r.right),
          width: Math.round(r.width),
        });
      }
    });
    // small text check
    const smallText = [];
    document.querySelectorAll('p, span, a, li, h1, h2, h3, h4, h5, h6, button, label').forEach((el) => {
      const fs = parseFloat(getComputedStyle(el).fontSize);
      const text = (el.textContent || '').trim();
      if (fs > 0 && fs < 12 && text.length > 0) {
        smallText.push({ el: el.tagName.toLowerCase(), fs, text: text.slice(0, 40) });
      }
    });
    // small touch targets
    const smallTargets = [];
    document.querySelectorAll('a, button').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0 && (r.width < 40 || r.height < 40) && r.top < document.body.scrollHeight) {
        smallTargets.push({
          el: el.tagName.toLowerCase() + '.' + String(el.className).split(' ')[0],
          w: Math.round(r.width),
          h: Math.round(r.height),
          text: (el.textContent || '').trim().slice(0, 30),
        });
      }
    });
    return { docW, winW, hOverflow: docW > winW, overflowing: overflowing.slice(0, 30), smallText: smallText.slice(0, 20), smallTargets: smallTargets.slice(0, 30), pageH: document.body.scrollHeight };
  });

  console.log(`\n=== ${device.name} (${device.width}x${device.height}) ===`);
  console.log(`scrollWidth=${metrics.docW} innerWidth=${metrics.winW} horizontalOverflow=${metrics.hOverflow} pageHeight=${metrics.pageH}`);
  if (metrics.overflowing.length) {
    console.log('Overflowing elements:');
    metrics.overflowing.forEach((o) => console.log(`  ${o.el} [${o.left} → ${o.right}] w=${o.width}`));
  }
  if (metrics.smallText.length) {
    console.log('Small text (<12px):');
    metrics.smallText.forEach((o) => console.log(`  ${o.el} ${o.fs}px "${o.text}"`));
  }
  if (metrics.smallTargets.length) {
    console.log('Small touch targets (<40px):');
    metrics.smallTargets.forEach((o) => console.log(`  ${o.el} ${o.w}x${o.h} "${o.text}"`));
  }
  if (consoleErrors.length) {
    console.log('Console errors:');
    consoleErrors.slice(0, 10).forEach((e) => console.log('  ' + e));
  }

  // Per-section screenshots (iPhone 14 only, to save time/space)
  if (device.name === 'iphone-14') {
    for (const s of sections) {
      try {
        const el = page.locator(`app-${s}`).first();
        if ((await el.count()) > 0) {
          await el.scrollIntoViewIfNeeded();
          await page.waitForTimeout(300);
          await el.screenshot({ path: `${OUT}/sec-${s}.png` });
          console.log(`  captured section: ${s}`);
        }
      } catch (e) {
        console.log(`  section ${s} not found`);
      }
    }
  }

  await context.close();
}

await browser.close();
server?.close();
console.log('\nDone. Screenshots in test-results/');
