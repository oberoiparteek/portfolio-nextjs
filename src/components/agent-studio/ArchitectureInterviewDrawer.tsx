"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function ArchitectureInterviewDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"trifecta" | "contracts" | "alignment">("trifecta");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 99999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "24px 16px",
            background: "rgba(3, 7, 18, 0.88)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            cursor: "pointer",
          }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            data-testid="arch-modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            style={{
              width: "100%",
              maxWidth: "1080px",
              maxHeight: "90vh",
              background: "#090E1A",
              border: "1px solid rgba(92, 229, 212, 0.4)",
              borderRadius: "24px",
              padding: "32px 36px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              color: "#E2E8F0",
              boxShadow: "0 30px 80px -15px rgba(0,0,0,0.95), 0 0 60px rgba(92, 229, 212, 0.15)",
              cursor: "default",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "16px",
                paddingBottom: "18px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <span style={{ fontSize: "1.8rem" }}>⚡</span>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      letterSpacing: "-0.5px",
                      color: "#FFFFFF",
                    }}
                  >
                    Parteek Kumar: Full-Stack AI Systems Trifecta
                  </h2>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "1rem",
                    color: "#94A3B8",
                    lineHeight: "1.5",
                  }}
                >
                  Senior Architecture Blueprint: Bridging Enterprise UI, Distributed Systems & Empirical AI for Databricks Mosaic AI
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close dialog"
                style={{
                  background: "rgba(244, 63, 94, 0.15)",
                  border: "1px solid rgba(244, 63, 94, 0.4)",
                  borderRadius: "10px",
                  color: "#FDA4AF",
                  padding: "8px 18px",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(244, 63, 94, 0.25)";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(244, 63, 94, 0.15)";
                  e.currentTarget.style.color = "#FDA4AF";
                }}
              >
                ✕ Close (Esc)
              </button>
            </div>

            {/* Navigation Tabs */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                overflowX: "auto",
                paddingBottom: "4px",
              }}
            >
              <button
                onClick={() => setActiveTab("trifecta")}
                style={{
                  background: activeTab === "trifecta" ? "var(--color-marine, #5CE5D4)" : "rgba(255, 255, 255, 0.05)",
                  color: activeTab === "trifecta" ? "#0F172A" : "var(--text-heading-color)",
                  border: "none",
                  borderRadius: "10px",
                  padding: "12px 22px",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                🏆 The Trifecta: Experience & Platform
              </button>
              <button
                onClick={() => setActiveTab("contracts")}
                style={{
                  background: activeTab === "contracts" ? "var(--color-marine, #5CE5D4)" : "rgba(255, 255, 255, 0.05)",
                  color: activeTab === "contracts" ? "#0F172A" : "var(--text-heading-color)",
                  border: "none",
                  borderRadius: "10px",
                  padding: "12px 22px",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                📜 Technical Contracts (Schema, SQL & OTel)
              </button>
              <button
                onClick={() => setActiveTab("alignment")}
                style={{
                  background: activeTab === "alignment" ? "var(--color-marine, #5CE5D4)" : "rgba(255, 255, 255, 0.05)",
                  color: activeTab === "alignment" ? "#0F172A" : "var(--text-heading-color)",
                  border: "none",
                  borderRadius: "10px",
                  padding: "12px 22px",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                🎯 Databricks Fit & Strategic Narrative
              </button>
            </div>

            {/* TAB 1: THE TRIFECTA */}
            {activeTab === "trifecta" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {/* Pillar 1 */}
                <div
                  style={{
                    padding: "24px 28px",
                    borderRadius: "18px",
                    background: "rgba(15, 23, 42, 0.8)",
                    border: "1px solid rgba(92, 229, 212, 0.35)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
                    <span style={{ color: "#5CE5D4", fontWeight: 800, fontSize: "1.2rem" }}>
                      1. Enterprise UI & Platform Ownership
                    </span>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        padding: "4px 12px",
                        borderRadius: "6px",
                        background: "rgba(92, 229, 212, 0.15)",
                        color: "#5CE5D4",
                        fontWeight: 800,
                        letterSpacing: "0.5px",
                      }}
                    >
                      CVENT & CIENA
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "1.05rem",
                      color: "#F1F5F9",
                      lineHeight: "1.75",
                    }}
                  >
                    Owner of <strong>4 production micro-frontends</strong> and lead architect for a unified drag-and-drop form builder platform powering 3 engineering squads. Maintained <strong>99.9% UI operational reliability</strong> via comprehensive Datadog APM tracing, client-side latency profiling, and defensive error boundaries.
                  </p>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "4px" }}>
                    <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#CBD5E1" }}>
                      Micro-Frontend Architecture
                    </span>
                    <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#CBD5E1" }}>
                      Drag-and-Drop Form Engine
                    </span>
                    <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#CBD5E1" }}>
                      99.9% UI APM Reliability
                    </span>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div
                  style={{
                    padding: "24px 28px",
                    borderRadius: "18px",
                    background: "rgba(15, 23, 42, 0.8)",
                    border: "1px solid rgba(56, 189, 248, 0.35)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
                    <span style={{ color: "#38BDF8", fontWeight: 800, fontSize: "1.2rem" }}>
                      2. Distributed Systems & Schema Rigor
                    </span>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        padding: "4px 12px",
                        borderRadius: "6px",
                        background: "rgba(56, 189, 248, 0.15)",
                        color: "#38BDF8",
                        fontWeight: 800,
                        letterSpacing: "0.5px",
                      }}
                    >
                      AWS ECS FARGATE
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "1.05rem",
                      color: "#F1F5F9",
                      lineHeight: "1.75",
                    }}
                  >
                    Engineered asynchronous rendering pipelines processing <strong>1,000,000+ visual artifacts</strong> on AWS ECS Fargate. Decoupled microservices via server-to-server GraphQL & OpenSearch, cutting payload overhead by <strong>50%</strong>. Built strict Pydantic V2 & Zod validation bounds to prevent tool argument hallucination in autonomous multi-step agent skills.
                  </p>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "4px" }}>
                    <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#CBD5E1" }}>
                      AWS ECS Fargate Distributed Queues
                    </span>
                    <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#CBD5E1" }}>
                      GraphQL S2S Federation (-50% payload)
                    </span>
                    <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#CBD5E1" }}>
                      Pydantic V2 / Zod Schema Boundaries
                    </span>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div
                  style={{
                    padding: "24px 28px",
                    borderRadius: "18px",
                    background: "rgba(15, 23, 42, 0.8)",
                    border: "1px solid rgba(192, 132, 252, 0.35)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
                    <span style={{ color: "#C084FC", fontWeight: 800, fontSize: "1.2rem" }}>
                      3. Empirical AI Research & Evaluation
                    </span>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        padding: "4px 12px",
                        borderRadius: "6px",
                        background: "rgba(192, 132, 252, 0.15)",
                        color: "#C084FC",
                        fontWeight: 800,
                        letterSpacing: "0.5px",
                      }}
                    >
                      NAACL 2025 AUTHOR
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "1.05rem",
                      color: "#F1F5F9",
                      lineHeight: "1.75",
                    }}
                  >
                    Published researcher at <strong>NAACL 2025</strong> studying latent representations and capabilities in large language models. Extensive hands-on experience designing regression evaluation suites, tool-selection accuracy benchmarks, and LLM-as-a-judge faithfulness metrics to eliminate hallucinations in enterprise production environments.
                  </p>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "4px" }}>
                    <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#CBD5E1" }}>
                      NAACL 2025 Peer-Reviewed Research
                    </span>
                    <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#CBD5E1" }}>
                      LLM Probing & Latent Representations
                    </span>
                    <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#CBD5E1" }}>
                      Empirical Agent Evaluation & Benchmarks
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: TECHNICAL CONTRACTS */}
            {activeTab === "contracts" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                    <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "#5CE5D4" }}>
                      1. LangGraph Cyclical State Schema (`AgentState`)
                    </span>
                    <span style={{ fontSize: "0.85rem", color: "#94A3B8" }}>Python Pydantic V2 + TypedDict Reducer</span>
                  </div>
                  <pre
                    style={{
                      margin: 0,
                      padding: "20px 24px",
                      borderRadius: "14px",
                      background: "#030712",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      fontSize: "0.95rem",
                      lineHeight: "1.65",
                      fontFamily: "monospace",
                      color: "#93C5FD",
                      overflowX: "auto",
                    }}
                  >
{`from typing import Annotated, TypedDict, Literal, Optional, List, Dict, Any
from langgraph.graph.message import add_messages
from langchain_core.messages import BaseMessage

class AgentState(TypedDict):
    """
    Immutable state passed across all LangGraph nodes.
    Message reducers guarantee deterministic rollbacks and audit logs.
    """
    messages: Annotated[List[BaseMessage], add_messages]
    trace_id: str
    user_id: str
    user_role: Literal["VP_FINANCE", "SECURITY_ANALYST"]
    current_node: str
    
    # Active tools and retry budgeting (max 3 self-correction hops)
    active_tool_calls: List[ToolCallRecord]
    retry_budget: Dict[str, int]
    
    # Sensitive Human-In-The-Loop payloads (requires cryptographic signature)
    staged_mutation: Optional[MutationManifest]`}
                  </pre>
                </div>

                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                    <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "#38BDF8" }}>
                      2. Unity Catalog Governed Function Contract (SQL / Python)
                    </span>
                    <span style={{ fontSize: "0.85rem", color: "#94A3B8" }}>Zero Raw SQL Passthrough Sandbox</span>
                  </div>
                  <pre
                    style={{
                      margin: 0,
                      padding: "20px 24px",
                      borderRadius: "14px",
                      background: "#030712",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      fontSize: "0.95rem",
                      lineHeight: "1.65",
                      fontFamily: "monospace",
                      color: "#A7F3D0",
                      overflowX: "auto",
                    }}
                  >
{`-- Unity Catalog Governed Function Definition
CREATE OR REPLACE FUNCTION finance.gold.uc_propose_delta_backfill(
  target_partition STRING COMMENT 'Target month in YYYY-MM format',
  patch_delta_usd DECIMAL(18, 2) COMMENT 'Calculated revenue correction',
  audit_reason STRING COMMENT 'Detailed justification from LLM reasoning hop'
)
RETURNS TABLE (manifest_id STRING, affected_rows INT, checksum_sha256 STRING)
LANGUAGE PYTHON
ENVIRONMENT 'mosaic-ai-serverless-env'
AS $$
  # Unity Catalog deterministic security sandbox
  if not target_partition or len(target_partition) != 7:
      raise ValueError("Invalid partition specifier. Must be YYYY-MM.")
  if abs(patch_delta_usd) > 5000000.00:
      raise ValueError("Safety Guardrail: Adjustments >$5M require dual-executive quorum.")
  
  manifest_id = f"manifest-{uuid.uuid4()}"
  checksum = hashlib.sha256(f"{target_partition}:{patch_delta_usd}".encode()).hexdigest()
  return [(manifest_id, 1420, checksum)]
$$;

-- Strict Zero-Trust Grant: Only Copilot Service Principal can execute
GRANT EXECUTE ON FUNCTION finance.gold.uc_propose_delta_backfill 
TO \`finance_copilot_service_principal\`;`}
                  </pre>
                </div>
              </div>
            )}

            {/* TAB 3: DATABRICKS ALIGNMENT & TALKING POINTS */}
            {activeTab === "alignment" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      padding: "22px 26px",
                      background: "rgba(255, 255, 255, 0.04)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <strong style={{ color: "#5CE5D4", fontSize: "1.15rem", display: "block", marginBottom: "8px" }}>
                      1. State Machine Rigor in Compound AI Systems
                    </strong>
                    <p style={{ margin: 0, fontSize: "1.05rem", color: "#F1F5F9", lineHeight: "1.75" }}>
                      &ldquo;Linear chains fail in production because LLMs are stochastic while enterprise databases are deterministic. In LangGraph and Mosaic AI, an agent is fundamentally a cyclical state machine. If your state reducer is buggy, your agent loops infinitely. I bring 8 years of state machine discipline from building complex form platforms and micro-frontends at Cvent.&rdquo;
                    </p>
                  </div>

                  <div
                    style={{
                      padding: "22px 26px",
                      background: "rgba(255, 255, 255, 0.04)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <strong style={{ color: "#38BDF8", fontSize: "1.15rem", display: "block", marginBottom: "8px" }}>
                      2. Observability as the Only Antidote to Stochasticity
                    </strong>
                    <p style={{ margin: 0, fontSize: "1.05rem", color: "#F1F5F9", lineHeight: "1.75" }}>
                      &ldquo;In classical systems, you monitor HTTP 500s. In agentic systems, failures manifest as semantic regressions—hallucinated tool parameters, context drift, and latency spikes. As demonstrated in my NAACL 2025 research, you cannot fix what you cannot empirically benchmark. MLflow Tracing and continuous evaluation aren&apos;t optional telemetry; they are the compile-time checks of generative AI.&rdquo;
                    </p>
                  </div>

                  <div
                    style={{
                      padding: "22px 26px",
                      background: "rgba(255, 255, 255, 0.04)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <strong style={{ color: "#F43F5E", fontSize: "1.15rem", display: "block", marginBottom: "8px" }}>
                      3. The Moat of Databricks is Governance
                    </strong>
                    <p style={{ margin: 0, fontSize: "1.05rem", color: "#F1F5F9", lineHeight: "1.75" }}>
                      &ldquo;Anyone can wrap an API key in a LangChain chain. But Global 2000 enterprises cannot deploy agents that have unconstrained write access to gold tables. By coupling LangGraph Human-In-The-Loop interrupts with Unity Catalog governed functions, we give enterprises autonomous power with deterministic governance.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Quote Banner */}
            <div
              style={{
                marginTop: "auto",
                padding: "18px 24px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, rgba(92, 229, 212, 0.12) 0%, rgba(56, 189, 248, 0.06) 100%)",
                borderLeft: "4px solid #5CE5D4",
                fontSize: "1.02rem",
                fontStyle: "italic",
                color: "#E2E8F0",
                lineHeight: "1.65",
              }}
            >
              &ldquo;In compound AI systems, observability is the compile-time check, governance is the operating system, and the state machine is the CPU. Building this requires full-stack rigor.&rdquo;
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

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

      {/* Render via Portal on document.body so parent backdropFilter cannot trap it */}
      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}
