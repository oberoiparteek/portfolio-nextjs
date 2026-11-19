"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ArchitectureInterviewDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"trifecta" | "contracts" | "alignment">("trifecta");

  // Handle ESC key and body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating or Embedded Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="arch-blueprint-btn"
        aria-label="Open Architectural Blueprint and Databricks Alignment Drawer"
        title="Open Architectural Blueprint & Databricks Alignment"
      >
        <span className="arch-btn-icon">📐</span>
        <span className="arch-btn-full-text">Architectural Blueprint & Databricks Alignment</span>
        <span className="arch-btn-short-text">Architecture Blueprint</span>
        <span className="arch-btn-badge">DEEP DIVE</span>
      </button>

      {/* Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1200,
              display: "flex",
              justifyContent: "flex-end",
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              cursor: "pointer",
            }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              style={{
                width: "100%",
                maxWidth: "700px",
                height: "100%",
                background: "#0B1120",
                borderLeft: "1px solid rgba(92, 229, 212, 0.35)",
                padding: "24px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                color: "#E2E8F0",
                boxShadow: "-12px 0 50px rgba(0,0,0,0.85)",
                cursor: "default",
              }}
            >
              {/* Drawer Header */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "1.3rem" }}>⚡</span>
                    <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 800, color: "#FFFFFF" }}>
                      Parteek Kumar: Full-Stack AI Systems Trifecta
                    </h3>
                  </div>
                  <p style={{ margin: "4px 0 0 0", fontSize: "0.8rem", color: "#94A3B8" }}>
                    Bridging Enterprise UI Architecture, Distributed Systems & Empirical AI Systems for Databricks Mosaic AI
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close drawer"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#94A3B8",
                    padding: "6px 12px",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                >
                  ✕ Close (Esc)
                </button>
              </div>

              {/* Navigation Tabs Inside Drawer */}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  paddingBottom: "8px",
                }}
              >
                <button
                  onClick={() => setActiveTab("trifecta")}
                  style={{
                    background: activeTab === "trifecta" ? "var(--color-marine, #5CE5D4)" : "rgba(255, 255, 255, 0.05)",
                    color: activeTab === "trifecta" ? "#0F172A" : "var(--text-heading-color)",
                    border: "none",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  🏆 The Trifecta
                </button>
                <button
                  onClick={() => setActiveTab("contracts")}
                  style={{
                    background: activeTab === "contracts" ? "var(--color-marine, #5CE5D4)" : "rgba(255, 255, 255, 0.05)",
                    color: activeTab === "contracts" ? "#0F172A" : "var(--text-heading-color)",
                    border: "none",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  📜 Technical Contracts (Schema / SQL)
                </button>
                <button
                  onClick={() => setActiveTab("alignment")}
                  style={{
                    background: activeTab === "alignment" ? "var(--color-marine, #5CE5D4)" : "rgba(255, 255, 255, 0.05)",
                    color: activeTab === "alignment" ? "#0F172A" : "var(--text-heading-color)",
                    border: "none",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  🎯 Databricks Fit & Talking Points
                </button>
              </div>

              {/* TAB 1: THE TRIFECTA */}
              {activeTab === "trifecta" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {/* Pillar 1 */}
                  <div
                    style={{
                      padding: "16px",
                      borderRadius: "14px",
                      background: "rgba(15, 23, 42, 0.7)",
                      border: "1px solid rgba(92, 229, 212, 0.25)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <span style={{ color: "#5CE5D4", fontWeight: 700, fontSize: "0.9rem" }}>
                        1. Enterprise UI & Platform Ownership
                      </span>
                      <span style={{ fontSize: "0.65rem", padding: "1px 6px", borderRadius: "4px", background: "rgba(92, 229, 212, 0.15)", color: "#5CE5D4", fontWeight: 800 }}>
                        CVENT & CIENA
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: "0.8rem", color: "#CBD5E1", lineHeight: "1.55" }}>
                      Owner of 4 production micro-frontends and lead architect for a unified drag-and-drop form builder used across 3 engineering squads. Maintained <strong>99.9% UI operational reliability</strong> via client-side telemetry and APM dashboards.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div
                    style={{
                      padding: "16px",
                      borderRadius: "14px",
                      background: "rgba(15, 23, 42, 0.7)",
                      border: "1px solid rgba(56, 189, 248, 0.25)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <span style={{ color: "#38BDF8", fontWeight: 700, fontSize: "0.9rem" }}>
                        2. Distributed Systems & Schema Rigor
                      </span>
                      <span style={{ fontSize: "0.65rem", padding: "1px 6px", borderRadius: "4px", background: "rgba(56, 189, 248, 0.15)", color: "#38BDF8", fontWeight: 800 }}>
                        AWS ECS FARGATE
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: "0.8rem", color: "#CBD5E1", lineHeight: "1.55" }}>
                      Engineered asynchronous rendering pipelines processing 1M+ visual artifacts on AWS ECS Fargate. Decoupled microservices via GraphQL S2S & OpenSearch (-50% payload size). Built strict Pydantic V2 & Zod validation bounds for multi-step agent tool calling.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div
                    style={{
                      padding: "16px",
                      borderRadius: "14px",
                      background: "rgba(15, 23, 42, 0.7)",
                      border: "1px solid rgba(192, 132, 252, 0.25)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <span style={{ color: "#C084FC", fontWeight: 700, fontSize: "0.9rem" }}>
                        3. Empirical AI Research & Evaluation
                      </span>
                      <span style={{ fontSize: "0.65rem", padding: "1px 6px", borderRadius: "4px", background: "rgba(192, 132, 252, 0.15)", color: "#C084FC", fontWeight: 800 }}>
                        NAACL 2025 AUTHOR
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: "0.8rem", color: "#CBD5E1", lineHeight: "1.55" }}>
                      Published author at NAACL 2025 researching latent representations in language models. Extensive hands-on experience designing regression evaluation suites, tool-selection accuracy benchmarks, and LLM-as-a-judge faithfulness metrics.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 2: TECHNICAL CONTRACTS */}
              {activeTab === "contracts" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#5CE5D4", display: "block", marginBottom: "4px" }}>
                      1. LANGGRAPH STATE SCHEMA (PYTHON / TYPEDDICT)
                    </span>
                    <pre
                      style={{
                        margin: 0,
                        padding: "12px",
                        borderRadius: "8px",
                        background: "#030712",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        fontSize: "0.7rem",
                        fontFamily: "monospace",
                        color: "#93C5FD",
                        overflowX: "auto",
                      }}
                    >
{`class AgentState(TypedDict):
    messages: Annotated[List[BaseMessage], add_messages]
    trace_id: str
    user_role: Literal["VP_FINANCE", "SECURITY_ANALYST"]
    current_node: str
    active_tool_calls: List[ToolCallRecord]
    retry_budget: Dict[str, int]  # max 3 retries
    staged_mutation: Optional[MutationManifest]`}
                    </pre>
                  </div>

                  <div>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#38BDF8", display: "block", marginBottom: "4px" }}>
                      2. UNITY CATALOG GOVERNED FUNCTION CONTRACT (SQL)
                    </span>
                    <pre
                      style={{
                        margin: 0,
                        padding: "12px",
                        borderRadius: "8px",
                        background: "#030712",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        fontSize: "0.7rem",
                        fontFamily: "monospace",
                        color: "#A7F3D0",
                        overflowX: "auto",
                      }}
                    >
{`CREATE OR REPLACE FUNCTION finance.gold.uc_propose_delta_backfill(
  target_partition STRING,
  patch_delta_usd DECIMAL(18, 2),
  audit_reason STRING
)
RETURNS TABLE (manifest_id STRING, affected_rows INT, checksum_sha256 STRING)
ENVIRONMENT 'mosaic-ai-serverless-env'
AS $$
  # Unity Catalog deterministic sandbox execution
$$;
GRANT EXECUTE ON FUNCTION finance.gold.uc_propose_delta_backfill 
TO \`finance_copilot_service_principal\`;`}
                    </pre>
                  </div>
                </div>
              )}

              {/* TAB 3: DATABRICKS ALIGNMENT & TALKING POINTS */}
              {activeTab === "alignment" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      fontSize: "0.75rem",
                    }}
                  >
                    <div style={{ padding: "12px", background: "rgba(255, 255, 255, 0.03)", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                      <strong style={{ color: "#5CE5D4", display: "block", marginBottom: "4px" }}>
                        1. State Machine Rigor in Compound Systems
                      </strong>
                      <span style={{ color: "#CBD5E1" }}>
                        &ldquo;In LangGraph and Mosaic AI, an agent is just a cyclical state machine. If your state reducer is buggy, your agent loops infinitely. I bring 8 years of state machine discipline from complex micro-frontend platforms.&rdquo;
                      </span>
                    </div>

                    <div style={{ padding: "12px", background: "rgba(255, 255, 255, 0.03)", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                      <strong style={{ color: "#38BDF8", display: "block", marginBottom: "4px" }}>
                        2. Observability as the Only Antidote to Stochasticity
                      </strong>
                      <span style={{ color: "#CBD5E1" }}>
                        &ldquo;As demonstrated in my NAACL 2025 research, you cannot fix what you cannot empirically benchmark. MLflow Tracing and continuous evaluation aren&apos;t nice-to-haves; they are the compile-time checks of generative AI.&rdquo;
                      </span>
                    </div>

                    <div style={{ padding: "12px", background: "rgba(255, 255, 255, 0.03)", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                      <strong style={{ color: "#F43F5E", display: "block", marginBottom: "4px" }}>
                        3. The Moat of Databricks is Governance
                      </strong>
                      <span style={{ color: "#CBD5E1" }}>
                        &ldquo;Anyone can wrap an API key in a LangChain chain. But enterprises cannot deploy agents with unconstrained write access. By coupling LangGraph HITL interrupts with Unity Catalog governed functions, we give enterprises autonomous power with deterministic governance.&rdquo;
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Quote Banner */}
              <div
                style={{
                  marginTop: "auto",
                  padding: "14px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, rgba(92, 229, 212, 0.08) 0%, rgba(56, 189, 248, 0.04) 100%)",
                  borderLeft: "3px solid #5CE5D4",
                  fontSize: "0.78rem",
                  fontStyle: "italic",
                  color: "#94A3B8",
                }}
              >
                &ldquo;In compound AI systems, observability is the compile-time check, governance is the operating system, and the state machine is the CPU. Building this requires full-stack rigor.&rdquo;
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
