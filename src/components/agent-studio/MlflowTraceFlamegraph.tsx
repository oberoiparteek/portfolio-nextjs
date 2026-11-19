"use client";

import React, { useState } from "react";
import { ExecutionHop, TraceSpan } from "@/types/agent-studio";

interface MlflowTraceFlamegraphProps {
  currentHop: ExecutionHop;
  allHops: ExecutionHop[];
}

export default function MlflowTraceFlamegraph({ currentHop, allHops }: MlflowTraceFlamegraphProps) {
  // Aggregate spans up to the current hop so visitors see the trace grow
  const accumulatedSpans = allHops
    .filter((h) => h.hopNumber <= currentHop.hopNumber)
    .flatMap((h) => h.spansInHop);

  const [selectedSpan, setSelectedSpan] = useState<TraceSpan | null>(
    currentHop.spansInHop[currentHop.spansInHop.length - 1] || null
  );

  // Compute total duration and tokens across accumulated spans
  const maxTimeMs = Math.max(
    ...accumulatedSpans.map((s) => s.offsetMs + s.durationMs),
    500
  );

  const totalTokens = accumulatedSpans.reduce((acc, s) => acc + s.totalTokens, 0);
  const totalCost = accumulatedSpans.reduce((acc, s) => acc + s.costUsd, 0);

  const getStatusColor = (status: TraceSpan["status"]) => {
    switch (status) {
      case "OK":
        return "#34D399";
      case "INTERRUPTED":
        return "#F43F5E";
      case "BLOCKED":
        return "#EF4444";
      case "ERROR":
        return "#FBBF24";
      case "RETRYING":
        return "#38BDF8";
      default:
        return "#94A3B8";
    }
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
        gap: "14px",
      }}
    >
      {/* Telemetry KPI Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
          paddingBottom: "12px",
          borderBottom: "1px solid var(--glass-border)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "1.1rem" }}>📊</span>
          <div>
            <h4 style={{ margin: 0, fontSize: "0.9rem", fontWeight: 700, color: "var(--text-heading-color)" }}>
              MLflow Tracing & OpenTelemetry Flamegraph
            </h4>
            <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>
              Databricks Mosaic AI Native Trace: {currentHop.agentStateSnapshot.traceId}
            </span>
          </div>
        </div>

        {/* Micro KPI Pills */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <div
            style={{
              padding: "4px 8px",
              borderRadius: "6px",
              background: "rgba(92, 229, 212, 0.1)",
              border: "1px solid rgba(92, 229, 212, 0.25)",
              fontSize: "0.72rem",
              color: "var(--color-marine, #5CE5D4)",
            }}
          >
            <strong>{totalTokens.toLocaleString()}</strong> tokens
          </div>
          <div
            style={{
              padding: "4px 8px",
              borderRadius: "6px",
              background: "rgba(56, 189, 248, 0.1)",
              border: "1px solid rgba(56, 189, 248, 0.25)",
              fontSize: "0.72rem",
              color: "#38BDF8",
            }}
          >
            <strong>${totalCost.toFixed(4)}</strong> USD
          </div>
          <div
            style={{
              padding: "4px 8px",
              borderRadius: "6px",
              background: "rgba(168, 85, 247, 0.1)",
              border: "1px solid rgba(168, 85, 247, 0.25)",
              fontSize: "0.72rem",
              color: "#C084FC",
            }}
          >
            <strong>{maxTimeMs}ms</strong> wall-time
          </div>
        </div>
      </div>

      {/* Waterfall Spans Area */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxHeight: "280px", overflowY: "auto" }}>
        {accumulatedSpans.map((span) => {
          const isSelected = selectedSpan?.id === span.id;
          const leftPercent = Math.max(0, (span.offsetMs / maxTimeMs) * 100);
          const widthPercent = Math.max(6, (span.durationMs / maxTimeMs) * 100);
          const statusColor = getStatusColor(span.status);

          return (
            <div
              key={span.id}
              onClick={() => setSelectedSpan(span)}
              style={{
                cursor: "pointer",
                padding: "8px 10px",
                borderRadius: "8px",
                background: isSelected ? "rgba(92, 229, 212, 0.12)" : "rgba(255, 255, 255, 0.03)",
                border: isSelected ? "1px solid var(--color-marine, #5CE5D4)" : "1px solid rgba(255, 255, 255, 0.05)",
                transition: "all 0.2s ease",
              }}
            >
              {/* Span Title & Kind Line */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: isSelected ? "var(--color-marine)" : "var(--text-heading-color)" }}>
                  {span.name}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      color: statusColor,
                      background: "rgba(0,0,0,0.3)",
                      padding: "1px 5px",
                      borderRadius: "4px",
                    }}
                  >
                    {span.status}
                  </span>
                  <span style={{ fontSize: "0.7rem", color: "var(--text-secondary)" }}>
                    {span.durationMs}ms
                  </span>
                </div>
              </div>

              {/* Waterfall Timeline Bar */}
              <div
                style={{
                  height: "6px",
                  width: "100%",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "3px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: `${leftPercent}%`,
                    width: `${widthPercent}%`,
                    height: "100%",
                    background: isSelected ? "var(--color-marine, #5CE5D4)" : statusColor,
                    borderRadius: "3px",
                    transition: "width 0.4s ease, left 0.4s ease",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Span Inspector Details */}
      {selectedSpan && (
        <div
          style={{
            padding: "12px",
            borderRadius: "8px",
            background: "rgba(0, 0, 0, 0.35)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            fontSize: "0.75rem",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <span style={{ fontWeight: 700, color: "var(--color-marine, #5CE5D4)" }}>
              SPAN ATTRIBUTES: {selectedSpan.name}
            </span>
            <span style={{ color: "var(--text-secondary)" }}>Kind: {selectedSpan.kind}</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            {selectedSpan.model && (
              <div>
                <span style={{ color: "var(--text-secondary)" }}>Model: </span>
                <code style={{ color: "#38BDF8" }}>{selectedSpan.model}</code>
              </div>
            )}
            {selectedSpan.ttftMs && (
              <div>
                <span style={{ color: "var(--text-secondary)" }}>TTFT: </span>
                <span>{selectedSpan.ttftMs}ms</span>
              </div>
            )}
            {selectedSpan.promptTokens > 0 && (
              <div>
                <span style={{ color: "var(--text-secondary)" }}>Tokens (P/C): </span>
                <span>
                  {selectedSpan.promptTokens} / {selectedSpan.completionTokens}
                </span>
              </div>
            )}
            {selectedSpan.costUsd > 0 && (
              <div>
                <span style={{ color: "var(--text-secondary)" }}>Cost: </span>
                <span>${selectedSpan.costUsd.toFixed(4)}</span>
              </div>
            )}
          </div>

          {/* Raw JSON attributes of the selected span */}
          <div
            style={{
              background: "rgba(0,0,0,0.5)",
              padding: "8px",
              borderRadius: "6px",
              overflowX: "auto",
              fontFamily: "monospace",
              fontSize: "0.7rem",
              color: "#E2E8F0",
              maxHeight: "120px",
            }}
          >
            <pre style={{ margin: 0 }}>{JSON.stringify(selectedSpan.attributes, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
