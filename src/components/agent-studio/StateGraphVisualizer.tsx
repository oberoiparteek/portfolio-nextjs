"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExecutionHop } from "@/types/agent-studio";

interface StateGraphVisualizerProps {
  currentHop: ExecutionHop;
  scenarioId: string;
}

interface GraphNode {
  id: string;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  icon: string;
  color: string;
  accent: string;
  badge?: string;
  description: string;
}

const NODES: GraphNode[] = [
  {
    id: "user_input",
    label: "User Query",
    sublabel: "Lakehouse Intent",
    x: 80,
    y: 180,
    icon: "💬",
    color: "rgba(148, 163, 184, 0.15)",
    accent: "#94A3B8",
    description: "Enterprise prompt or incident trigger entering the system boundary.",
  },
  {
    id: "agent_reasoning",
    label: "Agent Reasoning",
    sublabel: "Mosaic AI Llama 3.3",
    x: 260,
    y: 180,
    icon: "🧠",
    color: "rgba(92, 229, 212, 0.15)",
    accent: "#5CE5D4",
    badge: "LLM Node",
    description: "ReAct reasoning node generating thoughts, planning tool calls, and analyzing lakehouse feedback.",
  },
  {
    id: "guardrail",
    label: "Pydantic V2 Guardrail",
    sublabel: "Schema Validation",
    x: 460,
    y: 100,
    icon: "🛡️",
    color: "rgba(251, 191, 36, 0.15)",
    accent: "#FBBF24",
    badge: "Deterministic",
    description: "Strict schema boundary that catches hallucinations and malformed arguments before network I/O.",
  },
  {
    id: "uc_tool",
    label: "Unity Catalog Tool",
    sublabel: "Serverless SQL Wh",
    x: 660,
    y: 100,
    icon: "⚡",
    color: "rgba(56, 189, 248, 0.15)",
    accent: "#38BDF8",
    badge: "Governed UC",
    description: "Governed Python UDF or SQL routine executed under strict Unity Catalog RBAC.",
  },
  {
    id: "hitl_gate",
    label: "HITL Approval Gate",
    sublabel: "interrupt() Checkpoint",
    x: 460,
    y: 260,
    icon: "🛑",
    color: "rgba(244, 63, 94, 0.15)",
    accent: "#F43F5E",
    badge: "Cryptographic",
    description: "LangGraph execution yields thread. Staged partition backfill awaits signed JWT authorization.",
  },
  {
    id: "delta_commit",
    label: "Delta Lake ACID",
    sublabel: "Partition Replace",
    x: 660,
    y: 260,
    icon: "💎",
    color: "rgba(168, 85, 247, 0.15)",
    accent: "#C084FC",
    badge: "Versioned",
    description: "Atomic commit with time travel and immutable audit lineage on Delta Lake.",
  },
  {
    id: "synthesis",
    label: "Final Synthesis",
    sublabel: "Executive Report",
    x: 840,
    y: 180,
    icon: "📋",
    color: "rgba(52, 211, 153, 0.15)",
    accent: "#34D399",
    badge: "Audit Link",
    description: "Verified executive summary response synthesized with complete lineage citations.",
  },
];

export default function StateGraphVisualizer({ currentHop, scenarioId }: StateGraphVisualizerProps) {
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);

  const activeId = currentHop.activeNodeId;
  const isSelfCorrection = scenarioId === "self-correction" && (currentHop.hopNumber === 2 || currentHop.hopNumber === 3);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        borderRadius: "16px",
        background: "var(--glass-bg, rgba(15, 23, 42, 0.6))",
        border: "1px solid var(--glass-border, rgba(255, 255, 255, 0.08))",
        overflow: "hidden",
        boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
      }}
    >
      {/* Top Header of Visualizer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 18px",
          borderBottom: "1px solid var(--glass-border, rgba(255, 255, 255, 0.08))",
          background: "rgba(0,0,0,0.2)",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "1rem" }}>🔄</span>
          <span style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.5px", color: "var(--text-heading-color)" }}>
            CYCLICAL STATE GRAPH (LANGGRAPH RUNTIME)
          </span>
          <span
            style={{
              fontSize: "0.65rem",
              padding: "2px 8px",
              borderRadius: "9999px",
              background: "rgba(92, 229, 212, 0.15)",
              color: "var(--color-marine, #5CE5D4)",
              fontWeight: 600,
              border: "1px solid rgba(92, 229, 212, 0.3)",
            }}
          >
            ACTIVE NODE: {activeId.toUpperCase()}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.72rem", color: "var(--text-secondary)" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#5CE5D4", boxShadow: "0 0 8px #5CE5D4" }} />
            Active
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FBBF24" }} />
            Guardrail
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F43F5E" }} />
            HITL Gate
          </span>
        </div>
      </div>

      {/* SVG Canvas for Graph */}
      <div style={{ width: "100%", overflowX: "auto", position: "relative" }}>
        <svg
          viewBox="0 0 940 360"
          style={{ width: "100%", minWidth: "760px", height: "auto", display: "block" }}
        >
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="rgba(148, 163, 184, 0.4)" />
            </marker>
            <marker id="arrow-active" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="#5CE5D4" />
            </marker>
            <marker id="arrow-self-correct" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="#FBBF24" />
            </marker>
          </defs>

          {/* Grid lines for aesthetic tech lakehouse feel */}
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.025)" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Static Edges / Paths */}
          {/* User -> Agent */}
          <path d="M 130 180 L 210 180" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Agent -> Guardrail */}
          <path d="M 290 150 C 330 110, 370 100, 410 100" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />

          {/* Guardrail -> UC Tool */}
          <path d="M 510 100 L 610 100" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />

          {/* UC Tool -> Agent (Loopback / Observation) */}
          <path d="M 660 70 C 660 30, 260 30, 260 140" stroke="rgba(92, 229, 212, 0.25)" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" fill="none" />

          {/* Agent -> HITL Gate */}
          <path d="M 290 210 C 330 250, 370 260, 410 260" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />

          {/* HITL Gate -> Delta Commit */}
          <path d="M 510 260 L 610 260" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />

          {/* Delta Commit -> Agent (Observation of ACID commit) */}
          <path d="M 660 290 C 660 330, 260 330, 260 220" stroke="rgba(192, 132, 252, 0.3)" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" fill="none" />

          {/* Agent -> Synthesis */}
          <path d="M 310 180 L 790 180" stroke="rgba(148, 163, 184, 0.2)" strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#arrow)" fill="none" />

          {/* CYCLICAL SELF-CORRECTION EDGE (Guardrail -> Agent Reasoning) */}
          <path
            d="M 460 70 C 460 40, 320 40, 280 140"
            stroke={isSelfCorrection ? "#FBBF24" : "rgba(251, 191, 36, 0.2)"}
            strokeWidth={isSelfCorrection ? "3" : "1.5"}
            strokeDasharray={isSelfCorrection ? "none" : "3 3"}
            markerEnd={isSelfCorrection ? "url(#arrow-self-correct)" : "url(#arrow)"}
            fill="none"
          />

          {isSelfCorrection && (
            <text x="360" y="50" fill="#FBBF24" fontSize="10" fontWeight="bold" textAnchor="middle">
              ↺ Cyclical Self-Correction (Retry Error Injected)
            </text>
          )}

          {/* Graph Nodes */}
          {NODES.map((node) => {
            const isActive = activeId === node.id;
            const isHovered = selectedNode?.id === node.id;

            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                onClick={() => setSelectedNode(node)}
                style={{ cursor: "pointer" }}
              >
                {/* Active Outer Pulsing Halo */}
                {isActive && (
                  <motion.circle
                    r="46"
                    fill="none"
                    stroke={node.accent}
                    strokeWidth="2"
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: 1.25, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
                  />
                )}

                {/* Node Base Circle */}
                <circle
                  r="36"
                  fill={isActive ? node.accent : node.color}
                  stroke={isActive ? "#FFFFFF" : isHovered ? node.accent : "rgba(255, 255, 255, 0.15)"}
                  strokeWidth={isActive ? "3" : isHovered ? "2" : "1"}
                  style={{
                    transition: "all 0.3s ease",
                    filter: isActive ? `drop-shadow(0 0 12px ${node.accent})` : "none",
                  }}
                />

                {/* Node Icon */}
                <text
                  textAnchor="middle"
                  dy="-4"
                  fontSize="18"
                  style={{ pointerEvents: "none", userSelect: "none" }}
                >
                  {node.icon}
                </text>

                {/* Node Small Badge / Tag */}
                {node.badge && (
                  <g transform="translate(0, -38)">
                    <rect
                      x="-32"
                      y="-8"
                      width="64"
                      height="16"
                      rx="8"
                      fill="rgba(15, 23, 42, 0.85)"
                      stroke={isActive ? node.accent : "rgba(255, 255, 255, 0.2)"}
                      strokeWidth="1"
                    />
                    <text
                      textAnchor="middle"
                      dy="4"
                      fontSize="8"
                      fontWeight="700"
                      fill={isActive ? node.accent : "rgba(255, 255, 255, 0.8)"}
                    >
                      {node.badge}
                    </text>
                  </g>
                )}

                {/* Node Label Below */}
                <text
                  textAnchor="middle"
                  dy="48"
                  fontSize="11"
                  fontWeight="700"
                  fill={isActive ? "var(--text-heading-color)" : "rgba(255, 255, 255, 0.85)"}
                  style={{ pointerEvents: "none" }}
                >
                  {node.label}
                </text>
                <text
                  textAnchor="middle"
                  dy="60"
                  fontSize="9"
                  fill="var(--text-secondary, #94A3B8)"
                  style={{ pointerEvents: "none" }}
                >
                  {node.sublabel}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Node Details Drawer / Popover */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            style={{
              padding: "12px 18px",
              background: "rgba(15, 23, 42, 0.95)",
              borderTop: "1px solid var(--glass-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "1.2rem" }}>{selectedNode.icon}</span>
              <div>
                <span style={{ fontWeight: 700, fontSize: "0.85rem", color: selectedNode.accent }}>
                  {selectedNode.label} ({selectedNode.sublabel})
                </span>
                <p style={{ margin: "2px 0 0 0", fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                  {selectedNode.description}
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "none",
                borderRadius: "6px",
                color: "#FFFFFF",
                padding: "4px 10px",
                fontSize: "0.72rem",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
