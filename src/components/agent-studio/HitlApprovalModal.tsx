"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MutationManifestData } from "@/types/agent-studio";

interface HitlApprovalModalProps {
  isOpen: boolean;
  onClose: () => void;
  stagedMutation: MutationManifestData;
  onApprove: (signedToken: string) => void;
  onReject: (reason: string) => void;
  onSimulateTimeout: () => void;
}

export default function HitlApprovalModal({
  isOpen,
  onClose,
  stagedMutation,
  onApprove,
  onReject,
  onSimulateTimeout,
}: HitlApprovalModalProps) {
  const [rejectFeedback, setRejectFeedback] = useState("Discrepancy is attributable to EUR/USD foreign exchange volatility; recalculate with hedge adjustment.");
  const [showRejectInput, setShowRejectInput] = useState(false);
  const [isSigning, setIsSigning] = useState(false);

  const handleApproveClick = () => {
    setIsSigning(true);
    setTimeout(() => {
      const simulatedJwt = `jwt.eyJhbGciOiJSUzI1NiIsInN1YiI6InBhcnRlZWsiLCJyb2xlIjoiVlBfRklOQU5DRSIsImlhdCI6MTc5NDkxMjAwMH0.${stagedMutation.checksumSha256.slice(0, 16)}`;
      setIsSigning(false);
      onApprove(simulatedJwt);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            background: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{
              width: "100%",
              maxWidth: "680px",
              maxHeight: "90vh",
              overflowY: "auto",
              background: "#0F172A",
              border: "1px solid rgba(244, 63, 94, 0.4)",
              borderRadius: "20px",
              boxShadow: "0 25px 60px -15px rgba(244, 63, 94, 0.25), 0 0 40px rgba(0,0,0,0.8)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              color: "#F8FAFC",
            }}
          >
            {/* Modal Header */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(244, 63, 94, 0.15)",
                    color: "#F43F5E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    border: "1px solid rgba(244, 63, 94, 0.3)",
                  }}
                >
                  🛑
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700, color: "#FFFFFF" }}>
                      Human-In-The-Loop Approval Gate
                    </h3>
                    <span
                      style={{
                        fontSize: "0.65rem",
                        padding: "2px 8px",
                        borderRadius: "9999px",
                        background: "rgba(244, 63, 94, 0.2)",
                        color: "#FDA4AF",
                        fontWeight: 700,
                        border: "1px solid rgba(244, 63, 94, 0.4)",
                      }}
                    >
                      interrupt() ACTIVE
                    </span>
                  </div>
                  <p style={{ margin: "4px 0 0 0", fontSize: "0.78rem", color: "#94A3B8" }}>
                    LangGraph yielded execution. Staged Delta Lake partition write exceeds autonomous approval threshold.
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close modal"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#94A3B8",
                  padding: "6px 10px",
                  cursor: "pointer",
                  fontSize: "0.8rem",
                }}
              >
                ✕
              </button>
            </div>

            {/* Target Lakehouse Table & Partition Meta */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "10px",
                padding: "12px",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <div>
                <span style={{ fontSize: "0.7rem", color: "#94A3B8", display: "block" }}>TARGET TABLE</span>
                <code style={{ fontSize: "0.78rem", color: "#5CE5D4", fontWeight: 700 }}>
                  {stagedMutation.targetCatalog}.{stagedMutation.targetSchema}.{stagedMutation.targetTable}
                </code>
              </div>
              <div>
                <span style={{ fontSize: "0.7rem", color: "#94A3B8", display: "block" }}>AFFECTED PARTITION</span>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF" }}>
                  {stagedMutation.affectedPartition}
                </span>
              </div>
              <div>
                <span style={{ fontSize: "0.7rem", color: "#94A3B8", display: "block" }}>AFFECTED ROWS</span>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#38BDF8" }}>
                  {stagedMutation.deltaRows.toLocaleString()}
                </span>
              </div>
              <div>
                <span style={{ fontSize: "0.7rem", color: "#94A3B8", display: "block" }}>NET REVENUE DELTA</span>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#34D399" }}>
                  +${stagedMutation.patchDeltaUsd.toLocaleString()} USD
                </span>
              </div>
            </div>

            {/* SHA-256 Checksum & Manifest ID */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 12px",
                borderRadius: "8px",
                background: "rgba(0, 0, 0, 0.4)",
                fontSize: "0.72rem",
                fontFamily: "monospace",
                color: "#CBD5E1",
              }}
            >
              <span>MANIFEST ID: {stagedMutation.manifestId}</span>
              <span style={{ color: "#FBBF24" }}>SHA256: {stagedMutation.checksumSha256}</span>
            </div>

            {/* SQL Patch Diff Preview */}
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#94A3B8", marginBottom: "6px", display: "block" }}>
                DELTA LAKE MERGE STATEMENT (DRY-RUN MANIFEST)
              </span>
              <pre
                style={{
                  margin: 0,
                  padding: "12px",
                  borderRadius: "10px",
                  background: "#030712",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#A7F3D0",
                  fontSize: "0.72rem",
                  lineHeight: "1.5",
                  overflowX: "auto",
                  fontFamily: "monospace",
                }}
              >
                {stagedMutation.patchSqlPreview}
              </pre>
            </div>

            {/* Reject Critique Input if expanded */}
            {showRejectInput && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "#FDA4AF" }}>
                  Human Rejection Critique (Injected directly into Agent Scratchpad):
                </label>
                <textarea
                  value={rejectFeedback}
                  onChange={(e) => setRejectFeedback(e.target.value)}
                  rows={2}
                  style={{
                    width: "100%",
                    background: "rgba(0,0,0,0.5)",
                    border: "1px solid rgba(244, 63, 94, 0.4)",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    padding: "8px",
                    fontSize: "0.75rem",
                  }}
                />
                <button
                  onClick={() => onReject(rejectFeedback)}
                  style={{
                    alignSelf: "flex-end",
                    background: "#F43F5E",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "6px",
                    padding: "6px 14px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Submit Critique & Trigger Agent Loopback ↺
                </button>
              </motion.div>
            )}

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "10px",
                paddingTop: "12px",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={() => setShowRejectInput(!showRejectInput)}
                  style={{
                    background: "rgba(244, 63, 94, 0.12)",
                    border: "1px solid rgba(244, 63, 94, 0.35)",
                    color: "#FDA4AF",
                    borderRadius: "10px",
                    padding: "8px 14px",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Reject with Feedback...
                </button>

                <button
                  onClick={onSimulateTimeout}
                  style={{
                    background: "rgba(251, 191, 36, 0.12)",
                    border: "1px solid rgba(251, 191, 36, 0.35)",
                    color: "#FDE68A",
                    borderRadius: "10px",
                    padding: "8px 14px",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Simulate Warehouse Error
                </button>
              </div>

              <button
                onClick={handleApproveClick}
                disabled={isSigning}
                style={{
                  background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                  border: "none",
                  borderRadius: "10px",
                  color: "#FFFFFF",
                  padding: "10px 22px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(16, 185, 129, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {isSigning ? (
                  <>
                    <span style={{ animation: "spin 1s linear infinite" }}>🔄</span>
                    Signing Cryptographic JWT...
                  </>
                ) : (
                  <>
                    <span>✓</span>
                    Approve Backfill (Commit Delta Version 412)
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
