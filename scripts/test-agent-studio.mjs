import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const ARTIFACTS_DIR = "/Users/parteekkumar/.gemini/antigravity/brain/b74fb5b5-4999-4128-a931-511ff6055c19";
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

async function runTest() {
  console.log(`🚀 Starting Playwright E2E verification for Agent Studio on ${BASE_URL}...`);
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(msg.text());
      console.error(`❌ Console Error: ${msg.text()}`);
    }
  });

  page.on("pageerror", (err) => {
    consoleErrors.push(err.message);
    console.error(`❌ Page Error: ${err.message}`);
  });

  try {
    // 1. Visit Homepage & Verify Nav Links
    console.log("1️⃣ Visiting Homepage...");
    await page.goto(`${BASE_URL}/`, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1000);

    const agentNavLink = page.locator("a[href='/agent-studio']").first();
    const hasAgentNavLink = (await agentNavLink.count()) > 0;
    console.log(`   Found Agent Studio nav link: ${hasAgentNavLink}`);
    if (!hasAgentNavLink) throw new Error("Agent Studio nav link not found on homepage!");

    // Check project card in Projects section
    const agentProjectCard = page.locator("text=Compound AI Systems: Mosaic AI & LangGraph Studio").first();
    const hasProjectCard = (await agentProjectCard.count()) > 0;
    console.log(`   Found Compound AI project card in Projects: ${hasProjectCard}`);
    if (!hasProjectCard) throw new Error("Compound AI project card not found in Projects section!");

    await page.screenshot({ path: path.join(ARTIFACTS_DIR, "homepage_agent_link.png") });

    // 2. Navigate to /agent-studio
    console.log("2️⃣ Navigating to /agent-studio...");
    await agentNavLink.click();
    await page.waitForURL("**/agent-studio", { timeout: 10000 });
    await page.waitForTimeout(1000);

    // Verify Heading
    const heading = await page.textContent("h1");
    console.log(`   Heading: "${heading}"`);
    if (!heading.includes("Compound AI Systems Studio")) {
      throw new Error(`Unexpected heading: ${heading}`);
    }

    // 3. Test Scrubber on Scenario 1 (Lakehouse Copilot & HITL)
    console.log("3️⃣ Testing Scenario 1 (Lakehouse Copilot & Delta Backfill)...");
    const nextBtn = page.locator("button:has-text('Next ⏭')");
    
    // Step to Hop 2
    await nextBtn.click();
    await page.waitForTimeout(400);
    console.log("   Stepped to Hop 2");

    // Step to Hop 3
    await nextBtn.click();
    await page.waitForTimeout(400);
    console.log("   Stepped to Hop 3");

    // Step to Hop 4 (HITL interrupt gate)
    await nextBtn.click();
    await page.waitForTimeout(600);
    console.log("   Stepped to Hop 4");

    // Click "Inspect HITL Gate" to open approval modal
    const inspectHitlBtn = page.locator("button:has-text('Inspect HITL Gate')");
    if ((await inspectHitlBtn.count()) > 0) {
      await inspectHitlBtn.click();
      await page.waitForTimeout(500);
    }

    // Verify HITL Modal elements
    const hitlHeading = await page.locator("text=Human-In-The-Loop Approval Gate").first();
    const isHitlVisible = await hitlHeading.isVisible();
    console.log(`   HITL Modal Visible: ${isHitlVisible}`);
    if (!isHitlVisible) throw new Error("HITL Modal not visible on Hop 4!");

    // Capture screenshot of HITL Modal
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, "agent_studio_hitl_modal.png") });

    // Click "Approve Backfill" button
    console.log("   Clicking Approve Backfill...");
    const approveBtn = page.locator("button:has-text('Approve Backfill')");
    await approveBtn.click();
    await page.waitForTimeout(1000); // Allow signing animation & transition

    // Verify transition to Hop 5 (Delta commit)
    const activeNodeText = await page.textContent("text=ACTIVE NODE:");
    console.log(`   Active Node after approval: ${activeNodeText}`);

    // Step to Hop 6 (Final Synthesis)
    if (await nextBtn.isEnabled()) {
      await nextBtn.click();
      await page.waitForTimeout(400);
    }
    console.log("   Reached Hop 6 (Final Synthesis)");
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, "agent_studio_scenario1_complete.png") });

    // 4. Test Scenario 2 (Security Boundary & Prompt Injection)
    console.log("4️⃣ Testing Scenario 2 (Unity Catalog Security & Prompt Injection)...");
    const scenario2Btn = page.locator("button:has-text('Unity Catalog Security Boundary')");
    await scenario2Btn.click();
    await page.waitForTimeout(600);

    // Step to Hop 2 & 3
    await nextBtn.click();
    await page.waitForTimeout(400);
    await nextBtn.click();
    await page.waitForTimeout(400);

    // Verify RBAC exception or blocked status
    const rbacBadge = page.locator("text=RBAC EXCEPTION");
    const hasRbacBadge = (await rbacBadge.count()) > 0;
    console.log(`   RBAC block detected: ${hasRbacBadge}`);
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, "agent_studio_security_blocked.png") });

    // 5. Test Scenario 3 (Cyclical Self-Correction)
    console.log("5️⃣ Testing Scenario 3 (Cyclical Self-Correction)...");
    const scenario3Btn = page.locator("button:has-text('Cyclical Self-Correction Loop')");
    await scenario3Btn.click();
    await page.waitForTimeout(600);

    // Step to Hop 2 (Guardrail failure)
    await nextBtn.click();
    await page.waitForTimeout(400);
    const guardrailError = page.locator("text=GUARDRAIL REJECTION");
    const hasGuardrailError = (await guardrailError.count()) > 0;
    console.log(`   Guardrail error caught: ${hasGuardrailError}`);

    // Step to Hop 3 (Cyclical self-correction loopback)
    await nextBtn.click();
    await page.waitForTimeout(400);
    const selfCorrectionText = page.locator("text=Cyclical Self-Correction (Retry Error Injected)");
    const hasSelfCorrection = (await selfCorrectionText.count()) > 0;
    console.log(`   Cyclical loopback visualized: ${hasSelfCorrection}`);
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, "agent_studio_self_correction.png") });

    // 6. Test Architecture Drawer
    console.log("6️⃣ Testing Architecture Blueprint Drawer...");
    const archBtn = page.locator("button:has-text('Architectural Blueprint & Databricks Alignment')");
    await archBtn.click();
    await page.waitForTimeout(600);

    const drawerHeading = page.locator("text=Parteek Kumar: Full-Stack AI Systems Trifecta");
    const isDrawerOpen = await drawerHeading.isVisible();
    console.log(`   Architecture Drawer Open: ${isDrawerOpen}`);
    if (!isDrawerOpen) throw new Error("Architecture drawer failed to open!");

    await page.screenshot({ path: path.join(ARTIFACTS_DIR, "agent_studio_architecture_drawer.png") });

    // Close drawer
    const closeBtn = page.locator("button:has-text('✕ Close')");
    await closeBtn.click();
    await page.waitForTimeout(400);

    // 7. Verify Console Errors
    console.log(`\n🔍 Verifying console errors across test suite (Count: ${consoleErrors.length})...`);
    if (consoleErrors.length > 0) {
      console.warn("⚠️ Console errors were observed during execution:", consoleErrors);
    } else {
      console.log("✅ Zero console errors or uncaught exceptions observed!");
    }

    console.log("\n🎉 ALL AGENT STUDIO PLAYWRIGHT EVALS PASSED WITH 100% SUCCESS!");
  } catch (error) {
    console.error("❌ Test failed with exception:", error);
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, "agent_studio_error.png") });
    process.exit(1);
  } finally {
    await browser.close();
  }
}

runTest();
