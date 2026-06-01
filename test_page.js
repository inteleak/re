import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  console.log("Navigating to app...");
  await page.goto('http://localhost:3000/#/uygulamalar/otel-yonetimi-crm', { waitUntil: 'networkidle' });

  console.log("Checking page content...");
  const text = await page.evaluate(() => document.body.innerText);
  console.log("Page length:", text.length);
  console.log("Initial snippet:", text.substring(0, 100));

  await browser.close();
})();
