"use client";

import { useEffect } from "react";

const DRIVE_FALLBACK_URL =
  "https://drive.google.com/file/d/1Nu0E-t-xt2XM0RI5DjFbfNUwMn73K69i/view?usp=sharing";

export default function ResumeRedirect() {
  useEffect(() => {
    window.location.replace("/resume.pdf");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontFamily: "var(--font-sans, system-ui, sans-serif)",
        gap: "1rem",
        backgroundColor: "var(--color-background, #0f172a)",
        color: "var(--text-heading-color, #ffffff)",
      }}
    >
      <p style={{ fontSize: "1.1rem", fontWeight: 500 }}>Redirecting to resume...</p>
      <a
        href="/resume.pdf"
        style={{
          color: "var(--color-marine, #0d9488)",
          textDecoration: "underline",
          fontSize: "0.9rem",
        }}
      >
        Click here if not redirected automatically
      </a>
      <a
        href={DRIVE_FALLBACK_URL}
        target="_blank"
        rel="noreferrer"
        style={{ fontSize: "0.8rem", opacity: 0.6, color: "inherit" }}
      >
        Alternative Google Drive Link
      </a>
    </div>
  );
}
