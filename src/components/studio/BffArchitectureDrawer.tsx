"use client";

import React, { useState } from "react";
import { BFFCatalogResponse } from "@/types/bff";
import { Server, Cpu, Database, CloudLightning, ChevronDown, ChevronUp, Copy, Check, Terminal, ExternalLink } from "lucide-react";

interface Props {
  bffData: BFFCatalogResponse | null;
  isOpen: boolean;
  onToggle: () => void;
}

export default function BffArchitectureDrawer({ bffData, isOpen, onToggle }: Props) {
  const [copied, setCopied] = useState(false);
  const [showJson, setShowJson] = useState(false);

  const handleCopyJson = () => {
    if (!bffData) return;
    navigator.clipboard.writeText(JSON.stringify(bffData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        background: "var(--glass-bg-start, rgba(15, 23, 42, 0.95))",
        borderTop: "1px solid var(--glass-border, rgba(255, 255, 255, 0.12))",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: "0 -10px 30px rgba(0, 0, 0, 0.35)",
        zIndex: 40,
      }}
    >
      {/* Header bar / Drawer Toggle */}
      <div
        onClick={onToggle}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.85rem 1.5rem",
          cursor: "pointer",
          borderBottom: isOpen ? "1px solid var(--glass-border, rgba(255, 255, 255, 0.08))" : "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              padding: "6px",
              borderRadius: "8px",
              background: "var(--color-bg-marine-light, rgba(92, 229, 212, 0.15))",
              color: "var(--color-marine, #5CE5D4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Server size={18} />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-heading-color, #D0DAED)" }}>
                Backend-For-Frontend (BFF) Architecture
              </span>
              <span
                style={{
                  fontSize: "0.7rem",
                  padding: "2px 8px",
                  borderRadius: "9999px",
                  background: "rgba(92, 229, 212, 0.12)",
                  color: "var(--color-marine, #5CE5D4)",
                  border: "1px solid rgba(92, 229, 212, 0.3)",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                }}
              >
                Next.js Route /api/bff/artifacts
              </span>
            </div>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "rgb(var(--text-s-color, 148, 163, 184))" }}>
              Aggregating upstream domain services & decoupling dynamic Konva canvas rendering
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {bffData && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                fontSize: "0.75rem",
                color: "rgb(var(--text-s-color, 148, 163, 184))",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <CloudLightning size={14} color="#5CE5D4" />
                Latency: <strong style={{ color: "#5CE5D4" }}>{bffData.architecture.aggregationLatencyMs}ms</strong>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Database size={14} color="#38BDF8" />
                Upstream: <strong style={{ color: "#38BDF8" }}>{bffData.architecture.upstreamServices.length} Services</strong>
              </span>
            </div>
          )}
          <button
            type="button"
            style={{
              background: "transparent",
              border: "none",
              color: "var(--color-marine, #5CE5D4)",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
            }}
            aria-label={isOpen ? "Collapse Architecture Panel" : "Expand Architecture Panel"}
          >
            {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {isOpen && (
        <div style={{ padding: "1.25rem 1.75rem", maxHeight: "420px", overflowY: "auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
              marginBottom: "1.5rem",
            }}
          >
            {/* Column 1: Why BFF */}
            <div
              style={{
                background: "rgba(30, 41, 59, 0.4)",
                border: "1px solid var(--glass-border, rgba(255, 255, 255, 0.08))",
                borderRadius: "12px",
                padding: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <Cpu size={16} color="#5CE5D4" />
                <h4 style={{ margin: 0, fontSize: "0.875rem", color: "var(--text-heading-color, #D0DAED)" }}>
                  1. The Decoupling Challenge
                </h4>
              </div>
              <p style={{ margin: 0, fontSize: "0.8rem", color: "rgb(var(--text-s-color, 148, 163, 184))", lineHeight: 1.5 }}>
                Directly binding an interactive 60fps HTML5 Canvas to backend microservices leads to over-fetching, payload format mismatch, and high client-side CPU rendering overhead. The canvas requires specific font metrics, pre-calculated coordinates, and color tokens.
              </p>
            </div>

            {/* Column 2: The BFF Solution */}
            <div
              style={{
                background: "rgba(30, 41, 59, 0.4)",
                border: "1px solid var(--glass-border, rgba(255, 255, 255, 0.08))",
                borderRadius: "12px",
                padding: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <Server size={16} color="#38BDF8" />
                <h4 style={{ margin: 0, fontSize: "0.875rem", color: "var(--text-heading-color, #D0DAED)" }}>
                  2. BFF Normalization & Injection
                </h4>
              </div>
              <p style={{ margin: 0, fontSize: "0.8rem", color: "rgb(var(--text-s-color, 148, 163, 184))", lineHeight: 1.5 }}>
                Our Next.js BFF endpoint (<code style={{ color: "#38BDF8" }}>/api/bff/artifacts</code>) queries heterogeneous upstream sources (GraphQL, REST, telemetry streams), computes the layout presets, tags, and metric pills, and delivers a unified <code>CanvasLayoutPreset</code> ready for instant 1-click stage rendering.
              </p>
            </div>

            {/* Column 3: Async Render Fleet */}
            <div
              style={{
                background: "rgba(30, 41, 59, 0.4)",
                border: "1px solid var(--glass-border, rgba(255, 255, 255, 0.08))",
                borderRadius: "12px",
                padding: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <CloudLightning size={16} color="#FBBF24" />
                <h4 style={{ margin: 0, fontSize: "0.875rem", color: "var(--text-heading-color, #D0DAED)" }}>
                  3. Headless Fargate Integration
                </h4>
              </div>
              <p style={{ margin: 0, fontSize: "0.8rem", color: "rgb(var(--text-s-color, 148, 163, 184))", lineHeight: 1.5 }}>
                When you click &quot;Save to BFF&quot;, the JSON representation is dispatched via POST to the BFF, simulating an asynchronous job enqueue to an AWS Fargate serverless cluster for high-volume automated batch PDF/PNG exports.
              </p>
            </div>
          </div>

          {/* Interactive Flow Diagram */}
          <div
            style={{
              background: "rgba(15, 23, 42, 0.6)",
              border: "1px solid var(--glass-border, rgba(255, 255, 255, 0.08))",
              borderRadius: "12px",
              padding: "1rem 1.25rem",
              marginBottom: "1rem",
            }}
          >
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-marine, #5CE5D4)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "1px" }}>
              Data Flow Architecture
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.75rem",
                fontSize: "0.8rem",
              }}
            >
              {/* Box 1 */}
              <div
                style={{
                  background: "rgba(30, 41, 59, 0.8)",
                  border: "1px solid rgba(92, 229, 212, 0.3)",
                  borderRadius: "8px",
                  padding: "0.6rem 0.9rem",
                  textAlign: "center",
                  flex: "1 1 180px",
                }}
              >
                <div style={{ fontWeight: 600, color: "#5CE5D4" }}>Next.js Studio (Client)</div>
                <div style={{ fontSize: "0.7rem", color: "#94A3B8" }}>Konva Stage & Transformer</div>
              </div>

              <div style={{ color: "var(--color-marine)", fontWeight: "bold" }}>⇄</div>

              {/* Box 2 */}
              <div
                style={{
                  background: "rgba(30, 41, 59, 0.8)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  borderRadius: "8px",
                  padding: "0.6rem 0.9rem",
                  textAlign: "center",
                  flex: "1 1 200px",
                }}
              >
                <div style={{ fontWeight: 600, color: "#38BDF8" }}>Next.js BFF Route</div>
                <div style={{ fontSize: "0.7rem", color: "#94A3B8" }}>/api/bff/artifacts (Aggregator)</div>
              </div>

              <div style={{ color: "var(--color-marine)", fontWeight: "bold" }}>⇄</div>

              {/* Box 3 */}
              <div
                style={{
                  background: "rgba(30, 41, 59, 0.8)",
                  border: "1px solid rgba(251, 191, 36, 0.3)",
                  borderRadius: "8px",
                  padding: "0.6rem 0.9rem",
                  textAlign: "center",
                  flex: "1 1 180px",
                }}
              >
                <div style={{ fontWeight: 600, color: "#FBBF24" }}>Upstream Microservices</div>
                <div style={{ fontSize: "0.7rem", color: "#94A3B8" }}>Cvent, Ciena, Nagarro APIs</div>
              </div>

              <div style={{ color: "var(--color-marine)", fontWeight: "bold" }}>➔</div>

              {/* Box 4 */}
              <div
                style={{
                  background: "rgba(30, 41, 59, 0.8)",
                  border: "1px solid rgba(167, 139, 250, 0.3)",
                  borderRadius: "8px",
                  padding: "0.6rem 0.9rem",
                  textAlign: "center",
                  flex: "1 1 180px",
                }}
              >
                <div style={{ fontWeight: 600, color: "#A78BFA" }}>AWS Fargate Worker</div>
                <div style={{ fontSize: "0.7rem", color: "#94A3B8" }}>High-Res Headless Rendering</div>
              </div>
            </div>
          </div>

          {/* Action to Toggle Live JSON Payload */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <button
              onClick={() => setShowJson(!showJson)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.4rem 0.8rem",
                borderRadius: "6px",
                border: "1px solid var(--glass-border, rgba(255, 255, 255, 0.12))",
                background: "rgba(255, 255, 255, 0.05)",
                color: "var(--text-heading-color, #D0DAED)",
                fontSize: "0.75rem",
                cursor: "pointer",
              }}
            >
              <Terminal size={14} />
              {showJson ? "Hide BFF Payload JSON" : "Inspect Live BFF Response"}
            </button>

            {showJson && (
              <button
                onClick={handleCopyJson}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "6px",
                  border: "1px solid rgba(92, 229, 212, 0.3)",
                  background: "rgba(92, 229, 212, 0.1)",
                  color: "var(--color-marine, #5CE5D4)",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Copied to Clipboard!" : "Copy Full BFF Payload"}
              </button>
            )}
          </div>

          {showJson && bffData && (
            <pre
              style={{
                marginTop: "0.75rem",
                padding: "1rem",
                borderRadius: "8px",
                background: "#090D16",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#A7F3D0",
                fontSize: "0.72rem",
                fontFamily: "var(--font-martian, monospace)",
                overflowX: "auto",
                maxHeight: "220px",
              }}
            >
              {JSON.stringify(bffData, null, 2)}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}
