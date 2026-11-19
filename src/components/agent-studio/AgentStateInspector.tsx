"use client";

import React, { useState } from "react";
import { ExecutionHop } from "@/types/agent-studio";

interface AgentStateInspectorProps {
  currentHop: ExecutionHop;
}

export default function AgentStateInspector({ currentHop }: AgentStateInspectorProps) {
  const [activeTab, setActiveTab] = useState<"scratchpad" | "tool_call" | "raw_state">("scratchpad");

  const stateJson = {
    trace_id: currentHop.agentStateSnapshot.traceId,
    current_node: currentHop.agentStateSnapshot.currentNode,
    user_role: currentHop.agentStateSnapshot.userRole,
    retry_budget_remaining: currentHop.agentStateSnapshot.retryBudgetRemaining,
    hitl_status: currentHop.agentStateSnapshot.hitlStatus,
    active_tool: currentHop.agentStateSnapshot.activeTool,
    tool_call_payload: currentHop.toolCall || null,
    staged_mutation: currentHop.stagedMutation || null,
    error_detail: currentHop.errorDetail || null,
    security_interception: currentHop.securityInterception || null,
  };

  return (
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
      {/* Tab Navigation Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
          borderBottom: "1px solid var(--glass-border)",
          paddingBottom: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "6px" }}>
          <button
            onClick={() => setActiveTab("scratchpad")}
            style={{
              background: activeTab === "scratchpad" ? "var(--color-marine, #5CE5D4)" : "rgba(255, 255, 255, 0.05)",
              color: activeTab === "scratchpad" ? "#0F172A" : "var(--text-heading-color)",
              border: "none",
              borderRadius: "6px",
              padding: "4px 10px",
              fontSize: "0.75rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            💭 Agent Scratchpad & Thought
          </button>
          <button
            onClick={() => setActiveTab("tool_call")}
            style={{
              background: activeTab === "tool_call" ? "var(--color-marine, #5CE5D4)" : "rgba(255, 255, 255, 0.05)",
              color: activeTab === "tool_call" ? "#0F172A" : "var(--text-heading-color)",
              border: "none",
              borderRadius: "6px",
              padding: "4px 10px",
              fontSize: "0.75rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            ⚡ Tool & Observation
          </button>
          <button
            onClick={() => setActiveTab("raw_state")}
            style={{
              background: activeTab === "raw_state" ? "var(--color-marine, #5CE5D4)" : "rgba(255, 255, 255, 0.05)",
              color: activeTab === "raw_state" ? "#0F172A" : "var(--text-heading-color)",
              border: "none",
              borderRadius: "6px",
              padding: "4px 10px",
              fontSize: "0.75rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            📦 AgentState Reducer (JSON)
          </button>
        </div>

        {/* Retry Budget Badge */}
        <div
          style={{
            fontSize: "0.7rem",
            padding: "2px 8px",
            borderRadius: "4px",
            background: currentHop.agentStateSnapshot.retryBudgetRemaining > 1 ? "rgba(16, 185, 129, 0.15)" : "rgba(239, 68, 68, 0.15)",
            color: currentHop.agentStateSnapshot.retryBudgetRemaining > 1 ? "#34D399" : "#F87171",
            fontWeight: 700,
            border: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          Retry Budget: {currentHop.agentStateSnapshot.retryBudgetRemaining}/3
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "scratchpad" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div>
            <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)", textTransform: "uppercase", fontWeight: 700 }}>
              Chain-of-Thought (Mosaic AI Llama 3.3 70B Instruct):
            </span>
            <div
              style={{
                marginTop: "4px",
                padding: "12px",
                borderRadius: "8px",
                background: "rgba(0, 0, 0, 0.35)",
                border: "1px solid rgba(92, 229, 212, 0.2)",
                fontSize: "0.82rem",
                color: "#E2E8F0",
                lineHeight: "1.5",
              }}
            >
              {currentHop.scratchpadThought || "Awaiting agent reasoning turn..."}
            </div>
          </div>

          {currentHop.observation && (
            <div>
              <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)", textTransform: "uppercase", fontWeight: 700 }}>
                Environment Observation (Lakehouse Feedback):
              </span>
              <div
                style={{
                  marginTop: "4px",
                  padding: "12px",
                  borderRadius: "8px",
                  background: "rgba(0, 0, 0, 0.45)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: "0.8rem",
                  color: "#93C5FD",
                  lineHeight: "1.5",
                }}
              >
                {currentHop.observation}
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === "tool_call" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {currentHop.toolCall ? (
            <div
              style={{
                padding: "12px",
                borderRadius: "8px",
                background: "rgba(0,0,0,0.4)",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "#38BDF8" }}>
                  FUNCTION: {currentHop.toolCall.catalogFunction}
                </span>
                <span
                  style={{
                    fontSize: "0.68rem",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    background: currentHop.toolCall.status === "completed" ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)",
                    color: currentHop.toolCall.status === "completed" ? "#34D399" : "#F87171",
                    fontWeight: 700,
                  }}
                >
                  {currentHop.toolCall.status.toUpperCase()}
                </span>
              </div>

              <div>
                <span style={{ fontSize: "0.7rem", color: "var(--text-secondary)" }}>ARGUMENTS (JSON SCHEMA BOUND):</span>
                <pre
                  style={{
                    margin: "4px 0 0 0",
                    padding: "8px",
                    borderRadius: "6px",
                    background: "rgba(0, 0, 0, 0.6)",
                    fontSize: "0.72rem",
                    fontFamily: "monospace",
                    color: "#FDE68A",
                    overflowX: "auto",
                  }}
                >
                  {JSON.stringify(currentHop.toolCall.arguments, null, 2)}
                </pre>
              </div>

              {currentHop.toolCall.rawOutput && (
                <div>
                  <span style={{ fontSize: "0.7rem", color: "var(--text-secondary)" }}>RETURNED LAKEHOUSE ROWSET:</span>
                  <pre
                    style={{
                      margin: "4px 0 0 0",
                      padding: "8px",
                      borderRadius: "6px",
                      background: "rgba(0, 0, 0, 0.6)",
                      fontSize: "0.72rem",
                      fontFamily: "monospace",
                      color: "#A7F3D0",
                      overflowX: "auto",
                    }}
                  >
                    {JSON.stringify(currentHop.toolCall.rawOutput, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          ) : (
            <div style={{ padding: "16px", textAlign: "center", color: "var(--text-secondary)", fontSize: "0.8rem" }}>
              No active tool call in this hop (Node is in reasoning or synthesis state).
            </div>
          )}

          {/* Error detail if guardrail failed */}
          {currentHop.errorDetail && (
            <div
              style={{
                padding: "10px",
                borderRadius: "8px",
                background: "rgba(239, 68, 68, 0.12)",
                border: "1px solid rgba(239, 68, 68, 0.35)",
                color: "#FCA5A5",
                fontSize: "0.78rem",
              }}
            >
              <strong>GUARDRAIL EXCEPTION: </strong>
              {currentHop.errorDetail.schemaError}
            </div>
          )}
        </div>
      )}

      {activeTab === "raw_state" && (
        <pre
          style={{
            margin: 0,
            padding: "12px",
            borderRadius: "8px",
            background: "rgba(0,0,0,0.6)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            color: "#A5B4FC",
            fontSize: "0.72rem",
            fontFamily: "monospace",
            lineHeight: "1.45",
            overflowX: "auto",
            maxHeight: "220px",
          }}
        >
          {JSON.stringify(stateJson, null, 2)}
        </pre>
      )}
    </div>
  );
}
