"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ArchitectureInterviewDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating or Embedded Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "linear-gradient(135deg, rgba(92, 229, 212, 0.15) 0%, rgba(56, 189, 248, 0.1) 100%)",
          border: "1px solid rgba(92, 229, 212, 0.4)",
          borderRadius: "9999px",
          color: "var(--color-marine, #5CE5D4)",
          padding: "8px 16px",
          fontSize: "0.8rem",
          fontWeight: 700,
          cursor: "pointer",
          transition: "all 0.2s ease",
          boxShadow: "0 4px 12px rgba(92, 229, 212, 0.15)",
        }}
      >
        <span>📐</span>
        <span>Architectural Blueprint & Databricks Alignment</span>
        <span style={{ fontSize: "0.68rem", background: "var(--color-marine)", color: "#0F172A", padding: "1px 6px", borderRadius: "4px" }}>
          DEEP DIVE
        </span>
      </button>

      {/* Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1200,
              display: "flex",
              justifyContent: "flex-end",
              background: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              style={{
                width: "100%",
                maxWidth: "640px",
                height: "100%",
                background: "#0B1120",
                borderLeft: "1px solid rgba(92, 229, 212, 0.3)",
                padding: "24px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                color: "#E2E8F0",
                boxShadow: "-10px 0 40px rgba(0,0,0,0.8)",
              }}
            >
              {/* Drawer Header */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "1.2rem" }}>⚡</span>
                    <h3 style={{ margin: 0, fontSize: "1.15rem", fontWeight: 700, color: "#FFFFFF" }}>
                      Parteek Kumar: Full-Stack AI Systems Trifecta
                    </h3>
                  </div>
                  <p style={{ margin: "4px 0 0 0", fontSize: "0.8rem", color: "#94A3B8" }}>
                    Bridging Enterprise UI Architecture, Distributed Systems & Empirical AI Systems at Databricks
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#94A3B8",
                    padding: "6px 12px",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                  }}
                >
                  ✕ Close
                </button>
              </div>

              {/* The Trifecta Breakdown */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {/* Pillar 1 */}
                <div
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    background: "rgba(15, 23, 42, 0.7)",
                    border: "1px solid rgba(92, 229, 212, 0.25)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <span style={{ color: "#5CE5D4", fontWeight: 700, fontSize: "0.85rem" }}>
                      1. Enterprise UI & Platform Ownership
                    </span>
                    <span style={{ fontSize: "0.65rem", padding: "1px 6px", borderRadius: "4px", background: "rgba(92, 229, 212, 0.15)", color: "#5CE5D4" }}>
                      CVENT & CIENA
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: "0.78rem", color: "#CBD5E1", lineHeight: "1.5" }}>
                    Owner of 4 production micro-frontends and lead architect for a unified drag-and-drop form builder used across 3 engineering squads. Maintained <strong>99.9% UI operational reliability</strong> via client-side telemetry and APM dashboards.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    background: "rgba(15, 23, 42, 0.7)",
                    border: "1px solid rgba(56, 189, 248, 0.25)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <span style={{ color: "#38BDF8", fontWeight: 700, fontSize: "0.85rem" }}>
                      2. Distributed Systems & Schema Rigor
                    </span>
                    <span style={{ fontSize: "0.65rem", padding: "1px 6px", borderRadius: "4px", background: "rgba(56, 189, 248, 0.15)", color: "#38BDF8" }}>
                      AWS ECS FARGATE
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: "0.78rem", color: "#CBD5E1", lineHeight: "1.5" }}>
                    Engineered asynchronous rendering pipelines processing 1M+ visual artifacts on AWS ECS Fargate. Decoupled microservices via GraphQL S2S & OpenSearch (-50% payload size). Built strict Pydantic V2 & Zod validation bounds for multi-step agent tool calling.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    background: "rgba(15, 23, 42, 0.7)",
                    border: "1px solid rgba(192, 132, 252, 0.25)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <span style={{ color: "#C084FC", fontWeight: 700, fontSize: "0.85rem" }}>
                      3. Empirical AI Research & Evaluation
                    </span>
                    <span style={{ fontSize: "0.65rem", padding: "1px 6px", borderRadius: "4px", background: "rgba(192, 132, 252, 0.15)", color: "#C084FC" }}>
                      NAACL 2025 AUTHOR
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: "0.78rem", color: "#CBD5E1", lineHeight: "1.5" }}>
                    Published author at NAACL 2025 researching latent representations in language models. Extensive hands-on experience designing regression evaluation suites, tool-selection accuracy benchmarks, and LLM-as-a-judge faithfulness metrics.
                  </p>
                </div>
              </div>

              {/* Databricks Architectural Alignment Table */}
              <div>
                <h4 style={{ fontSize: "0.85rem", color: "#FFFFFF", marginBottom: "8px" }}>
                  Why Databricks Mosaic AI Needs This Profile:
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    fontSize: "0.75rem",
                  }}
                >
                  <div style={{ padding: "10px", background: "rgba(255, 255, 255, 0.03)", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                    <strong style={{ color: "#5CE5D4" }}>Cyclical State Machine Rigor:</strong> Linear chains fail when tools fail. LangGraph cyclical state graphs enable self-healing and zero-downtime recovery.
                  </div>
                  <div style={{ padding: "10px", background: "rgba(255, 255, 255, 0.03)", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                    <strong style={{ color: "#38BDF8" }}>Unity Catalog Zero-Trust Governance:</strong> Enterprise agents must never execute raw unparameterized SQL. Governed UC Functions enforce role delegation, row/column filters, and immutable audit logs.
                  </div>
                  <div style={{ padding: "10px", background: "rgba(255, 255, 255, 0.03)", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                    <strong style={{ color: "#F43F5E" }}>Cryptographic Human-In-The-Loop:</strong> Sensitive lakehouse backfills pause execution via LangGraph <code>interrupt()</code>, awaiting cryptographic JWT validation from authorized personas.
                  </div>
                </div>
              </div>

              {/* Bottom Quote */}
              <div
                style={{
                  padding: "14px",
                  borderRadius: "10px",
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
