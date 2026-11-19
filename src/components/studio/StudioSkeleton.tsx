"use client";

import React from "react";
import { Loader2 } from "lucide-react";

export default function StudioSkeleton() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-background, #0F172A)",
        color: "var(--text-heading-color, #D0DAED)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          color: "var(--color-marine, #5CE5D4)",
        }}
      >
        <Loader2 className="animate-spin" size={32} />
        <span style={{ fontSize: "1.25rem", fontWeight: 600, letterSpacing: "0.5px" }}>
          Initializing Konva Canvas Studio & BFF Pipeline...
        </span>
      </div>
      <p style={{ color: "rgb(var(--text-s-color, 148, 163, 184))", fontSize: "0.9rem" }}>
        Loading interactive 60fps canvas engine and pulling live artifact catalog
      </p>
    </div>
  );
}
