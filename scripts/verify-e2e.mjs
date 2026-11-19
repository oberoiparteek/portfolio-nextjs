import { chromium } from 'playwright';

async function verify() {
  console.log('🚀 Starting Playwright verification run...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(`[${msg.type()}] ${msg.text()}`);
    }
  });
  page.on('pageerror', (err) => {
    consoleErrors.push(`[uncaught] ${err.message}`);
  });

  // 1. Verify Local Dev Server Homepage
  console.log('1. Checking http://localhost:3000 ...');
  const localRes = await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
  console.log(`   Local Dev HTTP Status: ${localRes.status()}`);
  const title = await page.title();
  console.log(`   Page Title: "${title}"`);

  // 2. Verify Local Dev Server /studio
  console.log('2. Checking http://localhost:3000/studio ...');
  const localStudioRes = await page.goto('http://localhost:3000/studio', { waitUntil: 'domcontentloaded', timeout: 15000 });
  console.log(`   Local Studio HTTP Status: ${localStudioRes.status()}`);
  await page.waitForSelector('canvas', { timeout: 5000 }).catch(() => null);
  const localCanvasCount = await page.locator('canvas').count();
  console.log(`   Local Canvas elements: ${localCanvasCount}`);

  // Test Canvas Interaction (Click preset, click download button)
  const downloadBtn = page.locator('button:has-text("PNG")').first();
  const hasDownload = await downloadBtn.isVisible().catch(() => false);
  console.log(`   Export PNG button ready: ${hasDownload}`);

  // 3. Verify Live GitHub Pages
  console.log('3. Checking live production https://oberoiparteek.github.io/ ...');
  const liveRes = await page.goto('https://oberoiparteek.github.io/', { waitUntil: 'domcontentloaded', timeout: 20000 });
  console.log(`   Live Production Status: ${liveRes.status()}`);

  console.log('4. Checking live production https://oberoiparteek.github.io/studio ...');
  const liveStudioRes = await page.goto('https://oberoiparteek.github.io/studio', { waitUntil: 'domcontentloaded', timeout: 20000 });
  console.log(`   Live Studio Status: ${liveStudioRes.status()}`);
  await page.waitForSelector('canvas', { timeout: 5000 }).catch(() => null);
  const liveCanvasCount = await page.locator('canvas').count();
  console.log(`   Live Canvas elements: ${liveCanvasCount}`);

  console.log('5. Error Report:');
  console.log(`   Total Console/Runtime Errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.log('   Errors found:', consoleErrors);
  }

  await browser.close();
  console.log('✅ All Playwright checks executed.');
}

verify().catch((err) => {
  console.error('❌ Verification script encountered an error:', err);
  process.exit(1);
});
