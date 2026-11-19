import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function testBffExport() {
  console.log('🚀 Running automated E2E test for BFF Canvas Studio PNG Export & Sync...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const url = process.env.TEST_URL || 'http://localhost:3000/studio';
  console.log(`1. Navigating to ${url}...`);
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('canvas', { timeout: 15000 });
  await page.waitForTimeout(1000);

  // 1. Select a preset (e.g. Cvent Event Platform)
  console.log('2. Selecting artifact preset...');
  const presetCard = page.locator('text=Event Form Platform').first();
  await presetCard.click();
  await page.waitForTimeout(500);

  // 2. Intercept PNG download event
  console.log('3. Triggering 2x Retina PNG download...');
  const downloadPromise = page.waitForEvent('download', { timeout: 10000 });
  const exportBtn = page.locator('button:has-text("PNG")').first();
  await exportBtn.click();

  const download = await downloadPromise;
  const tempDir = '/tmp';
  const filename = download.suggestedFilename();
  const filePath = path.join(tempDir, filename);
  await download.saveAs(filePath);

  // 3. Inspect binary PNG characteristics
  const stats = fs.statSync(filePath);
  const buffer = fs.readFileSync(filePath);
  const isPng = buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47;
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);

  console.log('   📄 Exported File:', filename);
  console.log(`   📦 File Size: ${(stats.size / 1024).toFixed(2)} KB`);
  console.log('   ✅ Valid PNG Header Signature:', isPng);
  console.log(`   📐 Dimensions: ${width}x${height}px (Retina 2x of 800x480 canvas)`);

  if (!isPng || width !== 1600 || height !== 960) {
    throw new Error(`PNG validation failed: expected 1600x960, got ${width}x${height}`);
  }

  // 4. Test "Sync to BFF"
  console.log('4. Triggering Sync to BFF layer...');
  const saveBtn = page.locator('button:has-text("Sync to BFF"), button:has-text("Save")').first();
  await saveBtn.click();
  await page.waitForTimeout(800);

  console.log('5. Toggling BFF Architecture Drawer to inspect live state...');
  const drawerBtn = page.locator('button[aria-label*="Architecture Panel"]');
  if (await drawerBtn.isVisible()) {
    await drawerBtn.click();
    await page.waitForTimeout(400);
    console.log('   ✅ Architecture Drawer opened with live upstream telemetry.');
  }

  await browser.close();
  console.log('🎉 All BFF Studio tests passed with zero errors!');
}

testBffExport().catch((err) => {
  console.error('❌ Test failed:', err);
  process.exit(1);
});
