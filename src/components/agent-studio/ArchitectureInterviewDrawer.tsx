"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function ArchitectureInterviewDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"subsystems" | "contracts" | "axioms">("subsystems");
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
            background: "rgba(3, 7, 18, 0.90)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            cursor: "pointer",
          }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            data-testid="arch-modal"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            style={{
              width: "100%",
              maxWidth: "1080px",
              maxHeight: "90vh",
              background: "#080D1A",
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
            {/* Header in Joseph D. Chapline Operational Manual Style */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "16px",
                paddingBottom: "20px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <span style={{ fontSize: "1.5rem" }}>⚡</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "0.75rem",
                        padding: "2px 8px",
                        borderRadius: "4px",
                        background: "rgba(92, 229, 212, 0.15)",
                        color: "#5CE5D4",
                        border: "1px solid rgba(92, 229, 212, 0.3)",
                        letterSpacing: "1px",
                        fontWeight: 700,
                      }}
                    >
                      MANUAL OF OPERATION & SPECIFICATION
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "#64748B" }}>REV 2026.4</span>
                  </div>
                </div>

                <h2
                  style={{
                    margin: 0,
                    fontSize: "1.65rem",
                    fontWeight: 800,
                    letterSpacing: "-0.5px",
                    color: "#FFFFFF",
                  }}
                >
                  Parteek Kumar: Full-Stack AI Systems Architecture
                </h2>
                <p
                  style={{
                    margin: "4px 0 0 0",
                    fontSize: "1.02rem",
                    color: "#94A3B8",
                    lineHeight: "1.5",
                  }}
                >
                  Functional Treatise on Coupling Stochastic Neural Units with Deterministic Lakehouse Governance for Databricks Mosaic AI
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

            {/* Navigation Tabs (Chapline's Functional Division) */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                overflowX: "auto",
                paddingBottom: "4px",
              }}
            >
              <button
                onClick={() => setActiveTab("subsystems")}
                style={{
                  background: activeTab === "subsystems" ? "#5CE5D4" : "rgba(255, 255, 255, 0.05)",
                  color: activeTab === "subsystems" ? "#0A101D" : "#E2E8F0",
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
                § 1. Functional Subsystems (The Trifecta)
              </button>
              <button
                onClick={() => setActiveTab("contracts")}
                style={{
                  background: activeTab === "contracts" ? "#5CE5D4" : "rgba(255, 255, 255, 0.05)",
                  color: activeTab === "contracts" ? "#0A101D" : "#E2E8F0",
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
                § 2. Machine Registers & Schemas (Contracts)
              </button>
              <button
                onClick={() => setActiveTab("axioms")}
                style={{
                  background: activeTab === "axioms" ? "#5CE5D4" : "rgba(255, 255, 255, 0.05)",
                  color: activeTab === "axioms" ? "#0A101D" : "#E2E8F0",
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
                § 3. Operational Axioms & Databricks Alignment
              </button>
            </div>

            {/* SECTION I: FUNCTIONAL DECOMPOSITION (THE SUBSYSTEMS) */}
            {activeTab === "subsystems" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                <div style={{ color: "#94A3B8", fontSize: "0.98rem", lineHeight: "1.6", fontStyle: "italic" }}>
                  &ldquo;A computer is not an isolated calculator, but a coordinated assembly of storage registers, control circuits, and operator interfaces. Similarly, a Compound AI System succeeds only when each functional subsystem is governed by explicit operational bounds.&rdquo; — In the tradition of J. D. Chapline
                </div>

                {/* Subsystem 1 */}
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
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontFamily: "monospace", fontSize: "0.9rem", color: "#5CE5D4", fontWeight: 700 }}>§ 1.1</span>
                      <span style={{ color: "#5CE5D4", fontWeight: 800, fontSize: "1.2rem" }}>
                        The Supervisory Control Subsystem (Enterprise UI Platform)
                      </span>
                    </div>
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
                      CVENT & CIENA PRODUCTION
                    </span>
                  </div>

                  <p style={{ margin: 0, fontSize: "1.05rem", color: "#F1F5F9", lineHeight: "1.8" }}>
                    <strong>Operational Function:</strong> Serves as the operator&apos;s control console and state observer. Engineered and owned <strong>4 production micro-frontends</strong> and architected the unified drag-and-drop form orchestration engine deployed across 3 cross-functional engineering squads. Maintained <strong>99.9% operational UI availability</strong> via distributed Datadog APM tracing, real-time client latency budgets, and isolated error boundaries.
                  </p>

                  <div style={{ padding: "12px 16px", borderRadius: "10px", background: "rgba(255, 255, 255, 0.03)", borderLeft: "3px solid #5CE5D4", fontSize: "0.95rem", color: "#CBD5E1" }}>
                    <strong>Chapline Translation:</strong> An autonomous agent cannot operate as a black box. The UI is not a cosmetic skin; it is the physical register through which the operator validates hops, inspects state transitions, and issues cryptographically signed mutations.
                  </div>

                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "4px" }}>
                    <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#CBD5E1" }}>
                      Micro-Frontend Isolation
                    </span>
                    <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#CBD5E1" }}>
                      Cyclical Form State Machines
                    </span>
                    <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#CBD5E1" }}>
                      Datadog APM Telemetry (99.9% Uptime)
                    </span>
                  </div>
                </div>

                {/* Subsystem 2 */}
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
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontFamily: "monospace", fontSize: "0.9rem", color: "#38BDF8", fontWeight: 700 }}>§ 1.2</span>
                      <span style={{ color: "#38BDF8", fontWeight: 800, fontSize: "1.2rem" }}>
                        The Deterministic Execution & Validation Subsystem (Distributed Systems)
                      </span>
                    </div>
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
                      AWS ECS FARGATE & FEDERATION
                    </span>
                  </div>

                  <p style={{ margin: 0, fontSize: "1.05rem", color: "#F1F5F9", lineHeight: "1.8" }}>
                    <strong>Operational Function:</strong> Enforces deterministic boundary validation between stochastic agent outputs and physical storage registers. Engineered asynchronous rendering clusters processing <strong>1,000,000+ visual artifacts</strong> on AWS ECS Fargate. Decoupled distributed microservices via server-to-server GraphQL federation and OpenSearch, slashing payload transmission overhead by <strong>50%</strong>. Built strict Pydantic V2 and Zod runtime schema barriers to intercept and neutralize hallucinated tool arguments in sub-5ms.
                  </p>

                  <div style={{ padding: "12px 16px", borderRadius: "10px", background: "rgba(255, 255, 255, 0.03)", borderLeft: "3px solid #38BDF8", fontSize: "0.95rem", color: "#CBD5E1" }}>
                    <strong>Chapline Translation:</strong> The arithmetic register of an electronic computer must never execute an instruction with ambiguous bit alignment. In agentic systems, raw LLM token outputs must never reach SQL engines without deterministic type coercion and schema invariant verification.
                  </div>

                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "4px" }}>
                    <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#CBD5E1" }}>
                      1,000,000+ Artifacts Rendered
                    </span>
                    <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#CBD5E1" }}>
                      GraphQL S2S Federation (-50% Payload)
                    </span>
                    <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#CBD5E1" }}>
                      Pydantic V2 / Zod Invariant Gates
                    </span>
                  </div>
                </div>

                {/* Subsystem 3 */}
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
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontFamily: "monospace", fontSize: "0.9rem", color: "#C084FC", fontWeight: 700 }}>§ 1.3</span>
                      <span style={{ color: "#C084FC", fontWeight: 800, fontSize: "1.2rem" }}>
                        The Stochastic Reasoning & Empirical Evaluation Subsystem (AI Research)
                      </span>
                    </div>
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
                      NAACL 2025 PEER-REVIEWED
                    </span>
                  </div>

                  <p style={{ margin: 0, fontSize: "1.05rem", color: "#F1F5F9", lineHeight: "1.8" }}>
                    <strong>Operational Function:</strong> Characterizes, measures, and benchmarks the non-deterministic behaviors of transformer representations. Published researcher at <strong>NAACL 2025</strong> investigating latent representations and capabilities in large language models. Designed rigorous regression test suites, tool-selection accuracy benchmarks, and LLM-as-a-judge faithfulness metrics to quantify and eliminate semantic hallucination before production deployment.
                  </p>

                  <div style={{ padding: "12px 16px", borderRadius: "10px", background: "rgba(255, 255, 255, 0.03)", borderLeft: "3px solid #C084FC", fontSize: "0.95rem", color: "#CBD5E1" }}>
                    <strong>Chapline Translation:</strong> You cannot stabilize what you cannot measure. Because neural weights lack static compile-time guarantees, the empirical test bench is the single source of truth for agent reliability.
                  </div>

                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "4px" }}>
                    <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#CBD5E1" }}>
                      NAACL 2025 Published Research
                    </span>
                    <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#CBD5E1" }}>
                      Latent Probing & Representation Analysis
                    </span>
                    <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#CBD5E1" }}>
                      LLM-as-a-Judge Faithfulness Metrics
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION II: MACHINE REGISTERS & INTERFACE CONTRACTS */}
            {activeTab === "contracts" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ color: "#94A3B8", fontSize: "0.98rem", lineHeight: "1.6", fontStyle: "italic" }}>
                  &ldquo;A complete specification must account for every field, boundary condition, and transfer register. Below are the four production contracts governing the Compound AI runtime.&rdquo;
                </div>

                {/* Contract 2.1 */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
                    <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "#5CE5D4" }}>
                      § 2.1 The Cyclical State Register (`AgentState` — LangGraph Runtime)
                    </span>
                    <span style={{ fontSize: "0.85rem", color: "#94A3B8", fontFamily: "monospace" }}>Python Pydantic V2 + TypedDict Reducer</span>
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
    OPERATIONAL REGISTER: Passed immutably across all LangGraph nodes.
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

                {/* Contract 2.2 */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
                    <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "#38BDF8" }}>
                      § 2.2 The Governed Tool Execution Contract (Databricks Unity Catalog)
                    </span>
                    <span style={{ fontSize: "0.85rem", color: "#94A3B8", fontFamily: "monospace" }}>Zero Raw SQL Passthrough Sandbox</span>
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

                {/* Contract 2.3 */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
                    <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "#C084FC" }}>
                      § 2.3 The Machine Telemetry Protocol (OpenTelemetry / MLflow Tracing)
                    </span>
                    <span style={{ fontSize: "0.85rem", color: "#94A3B8", fontFamily: "monospace" }}>Standardized Hierarchical Trace Span</span>
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
                      color: "#E9D5FF",
                      overflowX: "auto",
                    }}
                  >
{`interface MLflowTraceSpan {
  id: string;               // e.g. "sp-uc-commit-05"
  parentId?: string;        // Parent span identifier for flamegraph tree
  name: string;             // e.g. "ToolExecution('finance.gold.uc_execute_delta_backfill')"
  kind: "AGENT_NODE" | "GUARDRAIL" | "TOOL_EXECUTION" | "HITL_GATE" | "SYNTHESIS";
  durationMs: number;       // Latency in milliseconds
  status: "OK" | "INTERRUPTED" | "ERROR" | "RETRYING" | "BLOCKED";
  promptTokens: number;     // Prompt token consumption
  completionTokens: number; // Generated token count
  costUsd: number;          // Financial accounting per invocation ($0.0020 - $0.0092)
  attributes: {
    "databricks.warehouse_id"?: string;
    "delta.commit_version"?: number;
    "jwt.verified"?: boolean;
    "validator.type"?: "Pydantic_V2_Strict";
  };
}`}
                  </pre>
                </div>
              </div>
            )}

            {/* SECTION III: OPERATIONAL DOCTRINE & AXIOMS */}
            {activeTab === "axioms" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ color: "#94A3B8", fontSize: "0.98rem", lineHeight: "1.6", fontStyle: "italic" }}>
                  &ldquo;A sound machine must rest upon unshakeable operating principles. When integrating generative reasoning with enterprise data lakes, three axioms determine whether an agent thrives in production or collapses under stochastic drift.&rdquo;
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {/* Axiom 3.1 */}
                  <div
                    style={{
                      padding: "22px 26px",
                      background: "rgba(255, 255, 255, 0.04)",
                      borderRadius: "16px",
                      border: "1px solid rgba(92, 229, 212, 0.25)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                      <span style={{ fontFamily: "monospace", color: "#5CE5D4", fontWeight: 700, fontSize: "0.9rem" }}>AXIOM 3.1</span>
                      <strong style={{ color: "#5CE5D4", fontSize: "1.15rem" }}>
                        The Stochastic-Deterministic Duality
                      </strong>
                    </div>
                    <p style={{ margin: 0, fontSize: "1.05rem", color: "#F1F5F9", lineHeight: "1.8" }}>
                      &ldquo;Linear DAG chains fail in production because LLMs are non-deterministic token generators, whereas enterprise lakehouses are strictly deterministic and ACID-compliant. In LangGraph and Mosaic AI, an agent is fundamentally a cyclical state machine. If your state reducer is flawed, your agent enters infinite retry loops. Eight years of state machine discipline from building complex form platforms and micro-frontends at Cvent provides the exact architectural control needed to keep loops bounded and deterministic.&rdquo;
                    </p>
                  </div>

                  {/* Axiom 3.2 */}
                  <div
                    style={{
                      padding: "22px 26px",
                      background: "rgba(255, 255, 255, 0.04)",
                      borderRadius: "16px",
                      border: "1px solid rgba(56, 189, 248, 0.25)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                      <span style={{ fontFamily: "monospace", color: "#38BDF8", fontWeight: 700, fontSize: "0.9rem" }}>AXIOM 3.2</span>
                      <strong style={{ color: "#38BDF8", fontSize: "1.15rem" }}>
                        Observability as the Machine Parity Check
                      </strong>
                    </div>
                    <p style={{ margin: 0, fontSize: "1.05rem", color: "#F1F5F9", lineHeight: "1.8" }}>
                      &ldquo;In classical computer hardware, parity bits caught physical electrical dropouts. In agentic systems, failures manifest as subtle semantic dropouts: hallucinated tool parameters, context window degradation, and token latency regressions. As demonstrated in my NAACL 2025 research, you cannot stabilize what you cannot empirically benchmark. MLflow Tracing and continuous evaluation aren&apos;t optional telemetry; they are the compile-time checks of generative AI.&rdquo;
                    </p>
                  </div>

                  {/* Axiom 3.3 */}
                  <div
                    style={{
                      padding: "22px 26px",
                      background: "rgba(255, 255, 255, 0.04)",
                      borderRadius: "16px",
                      border: "1px solid rgba(244, 63, 94, 0.25)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                      <span style={{ fontFamily: "monospace", color: "#FDA4AF", fontWeight: 700, fontSize: "0.9rem" }}>AXIOM 3.3</span>
                      <strong style={{ color: "#FDA4AF", fontSize: "1.15rem" }}>
                        Governance as the Enterprise Operating System
                      </strong>
                    </div>
                    <p style={{ margin: 0, fontSize: "1.05rem", color: "#F1F5F9", lineHeight: "1.8" }}>
                      &ldquo;Any engineer can wrap an API key in a prompt template. But Global 2000 enterprises cannot deploy agents that possess unconstrained, un-audited write access to gold financial tables. By coupling LangGraph Human-In-The-Loop interrupts with Unity Catalog governed functions, we provide the enterprise with autonomous capability while preserving mathematical governance and immutable audit lineage.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Colophon / Operator Quote Banner */}
            <div
              style={{
                marginTop: "auto",
                padding: "18px 24px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, rgba(92, 229, 212, 0.12) 0%, rgba(56, 189, 248, 0.06) 100%)",
                borderLeft: "4px solid #5CE5D4",
                fontSize: "1.02rem",
                color: "#E2E8F0",
                lineHeight: "1.7",
              }}
            >
              <strong style={{ color: "#5CE5D4", display: "block", marginBottom: "4px" }}>
                OPERATOR&apos;S SYNTHESIS:
              </strong>
              &ldquo;In compound AI systems, observability is the compile-time check, governance is the operating system, and the cyclical state machine is the CPU. Building this requires end-to-end full-stack rigor.&rdquo;
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Trigger Button with full text matching E2E Playwright test assertions */}
      <button
        onClick={() => setIsOpen(true)}
        className="arch-blueprint-btn"
        aria-label="Open Architectural Blueprint and Databricks Alignment Drawer"
        title="Open Architectural Blueprint & Databricks Alignment"
      >
        <span className="arch-btn-icon">📐</span>
        <span className="arch-btn-full-text">Architectural Blueprint & Databricks Alignment</span>
        <span className="arch-btn-short-text">Architecture Blueprint</span>
        <span className="arch-btn-badge">SPECIFICATION</span>
      </button>

      {/* Render via Portal on document.body to prevent parent CSS containing block clipping */}
      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}
