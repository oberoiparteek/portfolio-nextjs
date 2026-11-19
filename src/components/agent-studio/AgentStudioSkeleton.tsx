import React from "react";

export default function AgentStudioSkeleton() {
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
      {/* Top Navbar Skeleton */}
      <div
        style={{
          height: "64px",
          borderRadius: "16px",
          background: "rgba(255, 255, 255, 0.05)",
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      />

      {/* Tabs Skeleton */}
      <div style={{ display: "flex", gap: "10px" }}>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: "72px",
              borderRadius: "14px",
              background: "rgba(255, 255, 255, 0.04)",
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
          />
        ))}
      </div>

      {/* Scrubber Bar Skeleton */}
      <div
        style={{
          height: "56px",
          borderRadius: "16px",
          background: "rgba(255, 255, 255, 0.04)",
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      />

      {/* Main Grid Skeleton */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            height: "420px",
            borderRadius: "16px",
            background: "rgba(255, 255, 255, 0.03)",
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
        <div
          style={{
            height: "420px",
            borderRadius: "16px",
            background: "rgba(255, 255, 255, 0.03)",
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
      </div>
    </div>
  );
}
