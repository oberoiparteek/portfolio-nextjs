"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AGENT_STUDIO_SCENARIOS } from "@/data/agentStudioScenarios";
import StateGraphVisualizer from "./StateGraphVisualizer";
import MlflowTraceFlamegraph from "./MlflowTraceFlamegraph";
import HitlApprovalModal from "./HitlApprovalModal";
import AgentStateInspector from "./AgentStateInspector";
import ArchitectureInterviewDrawer from "./ArchitectureInterviewDrawer";

export default function AgentStudio() {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>("lakehouse-copilot");
  const [currentHopIndex, setCurrentHopIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1); // 1x or 2x
  const [isHitlModalOpen, setIsHitlModalOpen] = useState<boolean>(false);
  const [simulatedFeedbackMessage, setSimulatedFeedbackMessage] = useState<string | null>(null);

  const scenario = AGENT_STUDIO_SCENARIOS.find((s) => s.id === selectedScenarioId) || AGENT_STUDIO_SCENARIOS[0];
  const currentHop = scenario.hops[currentHopIndex] || scenario.hops[0];

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Handle Scenario Change
  const handleSelectScenario = (id: string) => {
    setSelectedScenarioId(id);
    setCurrentHopIndex(0);
    setIsPlaying(false);
    setIsHitlModalOpen(false);
    setSimulatedFeedbackMessage(null);
  };

  // Scrubber controls
  const handleNextHop = () => {
    if (currentHopIndex < scenario.hops.length - 1) {
      setCurrentHopIndex((prev) => prev + 1);
    } else {
      setIsPlaying(false);
    }
  };

  const handlePrevHop = () => {
    if (currentHopIndex > 0) {
      setCurrentHopIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentHopIndex(0);
    setIsPlaying(false);
    setIsHitlModalOpen(false);
    setSimulatedFeedbackMessage(null);
  };

  // Auto-play scrubber logic
  useEffect(() => {
    if (isPlaying) {
      const intervalMs = playbackSpeed === 1 ? 2200 : 1100;
      timerRef.current = setTimeout(() => {
        if (currentHopIndex < scenario.hops.length - 1) {
          const nextIndex = currentHopIndex + 1;
          const nextHop = scenario.hops[nextIndex];

          // If the next hop is an HITL gate, automatically pause and prompt human modal
          if (nextHop.type === "hitl_interrupt") {
            setIsPlaying(false);
            setCurrentHopIndex(nextIndex);
            setIsHitlModalOpen(true);
          } else {
            setCurrentHopIndex(nextIndex);
          }
        } else {
          setIsPlaying(false);
        }
      }, intervalMs);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, currentHopIndex, scenario.hops, playbackSpeed]);

  // HITL Modal Callbacks
  const handleApproveMutation = (signedToken: string) => {
    setIsHitlModalOpen(false);
    setSimulatedFeedbackMessage(`Cryptographic JWT Verified (${signedToken.slice(0, 20)}...). Resuming LangGraph state machine.`);
    // Automatically advance to Hop 5 (Delta Commit)
    if (currentHopIndex < scenario.hops.length - 1) {
      setCurrentHopIndex((prev) => prev + 1);
    }
  };

  const handleRejectMutation = (reason: string) => {
    setIsHitlModalOpen(false);
    setSimulatedFeedbackMessage(`Critique Injected: "${reason}". State looped back to Agent Reasoning Node.`);
    // Loop back to Hop 1 or 2
    setCurrentHopIndex(1);
  };

  const handleSimulateTimeout = () => {
    setIsHitlModalOpen(false);
    setSimulatedFeedbackMessage("Simulated Serverless Warehouse Timeout (504 Gateway Timeout). Retry counter decremented (2 retries remaining).");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-bg, #0B1120)",
        color: "var(--text-color, #E2E8F0)",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      {/* Top Navbar */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "12px 20px",
          borderRadius: "16px",
          background: "var(--glass-nav-bg, rgba(15, 23, 42, 0.75))",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid var(--glass-border, rgba(255, 255, 255, 0.08))",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 12px",
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.06)",
              color: "var(--text-heading-color)",
              textDecoration: "none",
              fontSize: "0.8rem",
              fontWeight: 600,
              transition: "all 0.2s ease",
            }}
          >
            ← Back to Portfolio
          </Link>
          <div style={{ height: "20px", width: "1px", background: "var(--glass-border)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "1.3rem" }}>⚡</span>
            <div>
              <h1 style={{ margin: 0, fontSize: "1rem", fontWeight: 800, letterSpacing: "0.5px", color: "var(--text-heading-color)" }}>
                Compound AI Systems Studio
              </h1>
              <span style={{ fontSize: "0.68rem", color: "var(--text-secondary)" }}>
                Databricks Mosaic AI ・ LangGraph ReAct Cycle ・ Unity Catalog Governance
              </span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <ArchitectureInterviewDrawer />
          <Link
            href="/studio"
            className="studio-nav-btn"
            style={{ fontSize: "0.75rem", padding: "6px 12px" }}
          >
            <span className="studio-icon">🎨</span>
            <span>CANVAS STUDIO</span>
            <span className="studio-badge">BFF</span>
          </Link>
        </div>
      </header>

      {/* Scenario Switcher Tabs */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          paddingBottom: "4px",
        }}
      >
        {AGENT_STUDIO_SCENARIOS.map((sc) => {
          const isSelected = sc.id === selectedScenarioId;
          return (
            <button
              key={sc.id}
              onClick={() => handleSelectScenario(sc.id)}
              style={{
                flex: "1 1 260px",
                minWidth: "240px",
                textAlign: "left",
                padding: "12px 16px",
                borderRadius: "14px",
                background: isSelected
                  ? "linear-gradient(135deg, rgba(92, 229, 212, 0.15) 0%, rgba(56, 189, 248, 0.08) 100%)"
                  : "var(--glass-bg, rgba(15, 23, 42, 0.5))",
                border: isSelected
                  ? "1px solid var(--color-marine, #5CE5D4)"
                  : "1px solid var(--glass-border, rgba(255, 255, 255, 0.06))",
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: isSelected ? "0 4px 20px rgba(92, 229, 212, 0.15)" : "none",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                <span
                  style={{
                    fontSize: "0.65rem",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    background: isSelected ? "var(--color-marine)" : "rgba(255, 255, 255, 0.1)",
                    color: isSelected ? "#0F172A" : "var(--text-secondary)",
                    fontWeight: 800,
                  }}
                >
                  {sc.badge}
                </span>
                <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>
                  {sc.hops.length} Hops
                </span>
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: isSelected ? "var(--color-marine)" : "var(--text-heading-color)" }}>
                {sc.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Scrubber & Playback Controls Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          padding: "14px 20px",
          borderRadius: "16px",
          background: "var(--glass-bg, rgba(15, 23, 42, 0.7))",
          border: "1px solid var(--glass-border, rgba(255, 255, 255, 0.08))",
        }}
      >
        {/* Playback Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            onClick={handleReset}
            title="Reset Scrubber"
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              border: "none",
              borderRadius: "8px",
              color: "#FFFFFF",
              padding: "8px 12px",
              fontSize: "0.8rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            🔄 Reset
          </button>
          <button
            onClick={handlePrevHop}
            disabled={currentHopIndex === 0}
            title="Step Backward"
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              border: "none",
              borderRadius: "8px",
              color: currentHopIndex === 0 ? "rgba(255, 255, 255, 0.3)" : "#FFFFFF",
              padding: "8px 14px",
              fontSize: "0.8rem",
              fontWeight: 600,
              cursor: currentHopIndex === 0 ? "not-allowed" : "pointer",
            }}
          >
            ⏮ Prev
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? "Pause Playback" : "Start Playback"}
            style={{
              background: isPlaying ? "#F43F5E" : "var(--color-marine, #5CE5D4)",
              color: "#0F172A",
              border: "none",
              borderRadius: "8px",
              padding: "8px 18px",
              fontSize: "0.85rem",
              fontWeight: 800,
              cursor: "pointer",
              boxShadow: isPlaying ? "0 0 12px rgba(244, 63, 94, 0.5)" : "0 0 12px rgba(92, 229, 212, 0.4)",
            }}
          >
            {isPlaying ? "⏸ Pause" : "▶ Play Loop"}
          </button>
          <button
            onClick={handleNextHop}
            disabled={currentHopIndex === scenario.hops.length - 1}
            title="Step Forward"
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              border: "none",
              borderRadius: "8px",
              color: currentHopIndex === scenario.hops.length - 1 ? "rgba(255, 255, 255, 0.3)" : "#FFFFFF",
              padding: "8px 14px",
              fontSize: "0.8rem",
              fontWeight: 600,
              cursor: currentHopIndex === scenario.hops.length - 1 ? "not-allowed" : "pointer",
            }}
          >
            Next ⏭
          </button>

          {/* Speed Toggle */}
          <button
            onClick={() => setPlaybackSpeed(playbackSpeed === 1 ? 2 : 1)}
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              border: "none",
              borderRadius: "8px",
              color: "#38BDF8",
              padding: "8px 10px",
              fontSize: "0.75rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {playbackSpeed}x Speed
          </button>
        </div>

        {/* Hop Progress Indicators */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: "1 1 300px", maxWidth: "440px" }}>
          {scenario.hops.map((h, idx) => {
            const isCompleted = idx < currentHopIndex;
            const isCurrent = idx === currentHopIndex;
            return (
              <div
                key={h.hopNumber}
                onClick={() => {
                  setCurrentHopIndex(idx);
                  setIsPlaying(false);
                }}
                title={h.title}
                style={{
                  flex: 1,
                  height: "8px",
                  borderRadius: "4px",
                  background: isCurrent
                    ? "var(--color-marine, #5CE5D4)"
                    : isCompleted
                    ? "rgba(92, 229, 212, 0.4)"
                    : "rgba(255, 255, 255, 0.1)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: isCurrent ? "0 0 10px var(--color-marine)" : "none",
                }}
              />
            );
          })}
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-heading-color)", whiteSpace: "nowrap" }}>
            Hop {currentHopIndex + 1} of {scenario.hops.length}
          </span>
        </div>

        {/* Trigger HITL manually if stagedMutation is available */}
        {currentHop.stagedMutation && (
          <button
            onClick={() => setIsHitlModalOpen(true)}
            style={{
              background: "linear-gradient(135deg, rgba(244, 63, 94, 0.2) 0%, rgba(244, 63, 94, 0.35) 100%)",
              border: "1px solid #F43F5E",
              borderRadius: "8px",
              color: "#FDA4AF",
              padding: "6px 14px",
              fontSize: "0.75rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            🛑 Inspect HITL Gate
          </button>
        )}
      </div>

      {/* Simulated Feedback Banner if critique or action fired */}
      {simulatedFeedbackMessage && (
        <div
          style={{
            padding: "10px 16px",
            borderRadius: "10px",
            background: "rgba(56, 189, 248, 0.12)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            color: "#BAE6FD",
            fontSize: "0.8rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>ℹ️ {simulatedFeedbackMessage}</span>
          <button
            onClick={() => setSimulatedFeedbackMessage(null)}
            style={{ background: "none", border: "none", color: "#BAE6FD", cursor: "pointer", fontSize: "0.8rem" }}
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Dual-Pane Studio Workspace */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
          gap: "1.5rem",
          alignItems: "start",
        }}
      >
        {/* Left Column: Flow & State */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {/* Scenario Overview Card */}
          <div
            style={{
              padding: "16px",
              borderRadius: "16px",
              background: "var(--glass-bg, rgba(15, 23, 42, 0.6))",
              border: "1px solid var(--glass-border, rgba(255, 255, 255, 0.08))",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
              <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--color-marine, #5CE5D4)", textTransform: "uppercase" }}>
                Enterprise Prompt & Intent Trigger:
              </span>
              <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>
                Hop Type: <code style={{ color: "#FDE68A" }}>{currentHop.type}</code>
              </span>
            </div>
            <p style={{ margin: "4px 0 0 0", fontSize: "0.82rem", fontStyle: "italic", color: "#CBD5E1" }}>
              &ldquo;{scenario.initialQuery}&rdquo;
            </p>
          </div>

          {/* Interactive State Graph Visualizer */}
          <StateGraphVisualizer currentHop={currentHop} scenarioId={scenario.id} />

          {/* Agent State & Scratchpad Inspector */}
          <AgentStateInspector currentHop={currentHop} />
        </div>

        {/* Right Column: Telemetry & Lakehouse Governance */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {/* MLflow Flamegraph & Token Economics */}
          <MlflowTraceFlamegraph currentHop={currentHop} allHops={scenario.hops} />

          {/* Unity Catalog Lineage & Governance Card */}
          <div
            style={{
              borderRadius: "16px",
              background: "var(--glass-bg, rgba(15, 23, 42, 0.6))",
              border: "1px solid var(--glass-border, rgba(255, 255, 255, 0.08))",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "1.1rem" }}>🏛️</span>
                <h4 style={{ margin: 0, fontSize: "0.9rem", fontWeight: 700, color: "var(--text-heading-color)" }}>
                  Unity Catalog Lakehouse Governance
                </h4>
              </div>
              <span
                style={{
                  fontSize: "0.68rem",
                  padding: "2px 8px",
                  borderRadius: "9999px",
                  background: "rgba(16, 185, 129, 0.15)",
                  color: "#34D399",
                  fontWeight: 700,
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                }}
              >
                RBAC ENFORCED
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "10px",
                fontSize: "0.75rem",
              }}
            >
              <div style={{ padding: "8px", background: "rgba(0,0,0,0.3)", borderRadius: "8px" }}>
                <span style={{ color: "var(--text-secondary)", display: "block", fontSize: "0.68rem" }}>CATALOG</span>
                <strong style={{ color: "#FFFFFF" }}>finance</strong>
              </div>
              <div style={{ padding: "8px", background: "rgba(0,0,0,0.3)", borderRadius: "8px" }}>
                <span style={{ color: "var(--text-secondary)", display: "block", fontSize: "0.68rem" }}>SCHEMA</span>
                <strong style={{ color: "#FFFFFF" }}>gold</strong>
              </div>
              <div style={{ padding: "8px", background: "rgba(0,0,0,0.3)", borderRadius: "8px" }}>
                <span style={{ color: "var(--text-secondary)", display: "block", fontSize: "0.68rem" }}>SERVICE PRINCIPAL</span>
                <strong style={{ color: "#38BDF8" }}>finance_copilot</strong>
              </div>
              <div style={{ padding: "8px", background: "rgba(0,0,0,0.3)", borderRadius: "8px" }}>
                <span style={{ color: "var(--text-secondary)", display: "block", fontSize: "0.68rem" }}>ISOLATION LEVEL</span>
                <strong style={{ color: "#C084FC" }}>ACID Serializable</strong>
              </div>
            </div>

            <div
              style={{
                padding: "10px 12px",
                borderRadius: "8px",
                background: "rgba(0, 0, 0, 0.4)",
                fontSize: "0.72rem",
                color: "#94A3B8",
                lineHeight: "1.5",
              }}
            >
              <strong>Zero Raw-SQL Guarantee:</strong> Untrusted LLMs are never granted raw <code>spark.sql()</code> compute permissions. Tools are restricted strictly to registered Unity Catalog Governed Functions executed under user-delegated OAuth tokens.
            </div>
          </div>
        </div>
      </div>

      {/* HITL Modal */}
      {currentHop.stagedMutation && (
        <HitlApprovalModal
          isOpen={isHitlModalOpen}
          onClose={() => setIsHitlModalOpen(false)}
          stagedMutation={currentHop.stagedMutation}
          onApprove={handleApproveMutation}
          onReject={handleRejectMutation}
          onSimulateTimeout={handleSimulateTimeout}
        />
      )}
    </div>
  );
}
