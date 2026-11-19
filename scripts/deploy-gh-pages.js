const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const REPO_URL = 'https://github.com/oberoiparteek/oberoiparteek.github.io.git';
const TARGET_BRANCH = 'master'; // GitHub Pages serves from master on oberoiparteek.github.io
const OUT_DIR = path.join(__dirname, '..', 'out');

if (!fs.existsSync(OUT_DIR)) {
  console.error("❌ 'out' directory not found! Run npm run build:export first.");
  process.exit(1);
}

// Ensure .nojekyll exists
fs.writeFileSync(path.join(OUT_DIR, '.nojekyll'), '');

console.log("🚀 Deploying portfolio build to oberoiparteek.github.io...");

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gh-pages-deploy-'));

try {
  console.log(`📦 Cloning ${REPO_URL} (${TARGET_BRANCH})...`);
  execSync(`git clone --depth 1 --branch ${TARGET_BRANCH} ${REPO_URL} "${tempDir}"`, { stdio: 'inherit' });

  console.log("🧹 Clearing old site files in target repo...");
  const existingFiles = fs.readdirSync(tempDir);
  for (const file of existingFiles) {
    if (file === '.git') continue;
    fs.rmSync(path.join(tempDir, file), { recursive: true, force: true });
  }

  console.log("📂 Copying new export files from out/ into repo...");
  execSync(`cp -R "${OUT_DIR}/" "${tempDir}/"`, { stdio: 'inherit' });

  // Ensure .nojekyll exists in cloned repo root
  fs.writeFileSync(path.join(tempDir, '.nojekyll'), '');

  // For GitHub Pages root compatibility, create flat .html files alongside directory/index.html
  ['agent-studio', 'studio', 'resume', 'r'].forEach(route => {
    const dirHtml = path.join(tempDir, route, 'index.html');
    const flatHtml = path.join(tempDir, `${route}.html`);
    if (fs.existsSync(dirHtml) && !fs.existsSync(flatHtml)) {
      fs.copyFileSync(dirHtml, flatHtml);
    }
  });

  console.log("📝 Checking for git changes...");
  const status = execSync(`git -C "${tempDir}" status --porcelain`, { encoding: 'utf8' }).trim();

  if (!status) {
    console.log("✨ No changes to deploy. oberoiparteek.github.io is already up to date!");
  } else {
    console.log("💾 Committing changes...");
    execSync(`git -C "${tempDir}" add -A`, { stdio: 'inherit' });
    const commitMsg = `deploy: update portfolio from Next.js build (${new Date().toISOString()})`;
    execSync(`git -C "${tempDir}" commit -m "${commitMsg}"`, { stdio: 'inherit' });

    console.log("⬆️ Pushing to GitHub Pages (origin master)...");
    execSync(`git -C "${tempDir}" push origin ${TARGET_BRANCH}`, { stdio: 'inherit' });

    console.log("\n🎉 Successfully deployed to https://oberoiparteek.github.io !");
  }
} catch (err) {
  console.error("❌ Deployment failed:", err);
  process.exit(1);
} finally {
  try {
    fs.rmSync(tempDir, { recursive: true, force: true });
  } catch (_) {}
}
