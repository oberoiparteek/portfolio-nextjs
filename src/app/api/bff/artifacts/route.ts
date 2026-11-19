import { NextRequest, NextResponse } from "next/server";
import { Artifact, BFFCatalogResponse, SaveThumbnailRequest, SaveThumbnailResponse } from "@/types/bff";

const ARTIFACTS_CATALOG: Artifact[] = [
  {
    id: "cvent-event-platform",
    title: "Event Form Platform ・ Cvent",
    company: "Cvent Inc.",
    role: "Senior Frontend Engineer & MFE Lead",
    period: "May 2025 - Present",
    summary:
      "Enterprise multi-tenant event management platform powering dynamic visual rendering via Konva.js, AWS Fargate automated credentialing, and GraphQL federated micro-frontends.",
    category: "Enterprise MFE",
    tags: ["React 19", "Konva.js", "Micro-Frontends", "AWS Fargate", "GraphQL", "Tailwind CSS"],
    metrics: [
      { label: "Throughput", value: "1M+ Scaled", trend: "+32%" },
      { label: "Architecture", value: "4 Micro-Apps", trend: "Decoupled" },
      { label: "Canvas FPS", value: "60 FPS", trend: "Hardware Accel" },
      { label: "Rendering SLA", value: "< 120ms", trend: "P99" },
    ],
    themePresets: {
      name: "Cyber Marine",
      accentColor: "#5CE5D4",
      textColor: "#F8FAFC",
      secondaryColor: "#94A3B8",
      bgGradient: ["#0B132B", "#1C2541"],
      cardBg: "rgba(15, 23, 42, 0.75)",
      cardBorder: "rgba(92, 229, 212, 0.25)",
    },
    mockExportStatus: "synced",
    updatedAt: "2026-11-15T12:00:00Z",
    canvasPreset: {
      background: {
        type: "gradient",
        color1: "#0F172A",
        color2: "#0A192F",
        angle: 135,
      },
      glowCard: {
        x: 30,
        y: 30,
        width: 740,
        height: 420,
        fill: "rgba(15, 23, 42, 0.8)",
        stroke: "rgba(92, 229, 212, 0.35)",
        cornerRadius: 16,
      },
      badgeCategory: {
        text: "CVENT ENTERPRISE MFE",
        x: 60,
        y: 65,
        fill: "#5CE5D4",
        bg: "rgba(92, 229, 212, 0.15)",
        border: "rgba(92, 229, 212, 0.4)",
      },
      title: {
        text: "Event Form & Credential Platform",
        fontSize: 34,
        fill: "#FFFFFF",
        x: 60,
        y: 110,
        fontWeight: "bold",
      },
      subtitle: {
        text: "60 FPS Konva Canvas + AWS Fargate Automated Artifact Pipeline",
        fontSize: 16,
        fill: "#94A3B8",
        x: 60,
        y: 160,
      },
      metrics: [
        {
          value: "1M+ Scaled",
          label: "Live Event Capacity",
          x: 60,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(30, 41, 59, 0.85)",
          border: "rgba(92, 229, 212, 0.3)",
          valueColor: "#5CE5D4",
          textColor: "#94A3B8",
        },
        {
          value: "4 MFEs",
          label: "Federated Modules",
          x: 230,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(30, 41, 59, 0.85)",
          border: "rgba(92, 229, 212, 0.3)",
          valueColor: "#38BDF8",
          textColor: "#94A3B8",
        },
        {
          value: "60 FPS",
          label: "Canvas Rendering",
          x: 400,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(30, 41, 59, 0.85)",
          border: "rgba(92, 229, 212, 0.3)",
          valueColor: "#4ADE80",
          textColor: "#94A3B8",
        },
        {
          value: "<120ms",
          label: "BFF Aggregation",
          x: 570,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(30, 41, 59, 0.85)",
          border: "rgba(92, 229, 212, 0.3)",
          valueColor: "#FBBF24",
          textColor: "#94A3B8",
        },
      ],
      tags: [
        { text: "React 19", x: 60, y: 325, fill: "#5CE5D4", bg: "rgba(92, 229, 212, 0.12)", border: "rgba(92, 229, 212, 0.25)" },
        { text: "Konva.js", x: 165, y: 325, fill: "#38BDF8", bg: "rgba(56, 189, 248, 0.12)", border: "rgba(56, 189, 248, 0.25)" },
        { text: "Micro-Frontends", x: 275, y: 325, fill: "#F472B6", bg: "rgba(244, 114, 182, 0.12)", border: "rgba(244, 114, 182, 0.25)" },
        { text: "AWS Fargate", x: 425, y: 325, fill: "#FBBF24", bg: "rgba(251, 191, 36, 0.12)", border: "rgba(251, 191, 36, 0.25)" },
        { text: "GraphQL BFF", x: 555, y: 325, fill: "#A78BFA", bg: "rgba(167, 139, 250, 0.12)", border: "rgba(167, 139, 250, 0.25)" },
      ],
    },
  },
  {
    id: "ciena-mcp-controller",
    title: "Manage Control Plan (MCP) ・ Ciena",
    company: "Ciena Corporation",
    role: "Senior UI Software Engineer",
    period: "Oct 2022 - May 2025",
    summary:
      "Mission-critical carrier network optical management controller. Designed scalable UI components using Frost UI, Ember, and React for high-density network visualizers.",
    category: "Network Telecom",
    tags: ["Ember.js", "React", "TypeScript", "SCSS", "Frost UI", "Real-time Telemetry"],
    metrics: [
      { label: "Telemetry Feeds", value: "50K / sec", trend: "Real-time" },
      { label: "Core Screens", value: "10+ Shipped", trend: "Production" },
      { label: "Network Devices", value: "10,000+", trend: "Live Monitored" },
      { label: "Agile Teams", value: "3 Pods", trend: "Full Lifecycle" },
    ],
    themePresets: {
      name: "Ciena Indigo",
      accentColor: "#38BDF8",
      textColor: "#F1F5F9",
      secondaryColor: "#94A3B8",
      bgGradient: ["#0F172A", "#1E1B4B"],
      cardBg: "rgba(17, 24, 39, 0.8)",
      cardBorder: "rgba(56, 189, 248, 0.25)",
    },
    mockExportStatus: "ready",
    updatedAt: "2026-11-12T09:30:00Z",
    canvasPreset: {
      background: {
        type: "gradient",
        color1: "#0F172A",
        color2: "#1E1B4B",
        angle: 120,
      },
      glowCard: {
        x: 30,
        y: 30,
        width: 740,
        height: 420,
        fill: "rgba(17, 24, 39, 0.82)",
        stroke: "rgba(56, 189, 248, 0.35)",
        cornerRadius: 16,
      },
      badgeCategory: {
        text: "OPTICAL NETWORK CONTROLLER",
        x: 60,
        y: 65,
        fill: "#38BDF8",
        bg: "rgba(56, 189, 248, 0.15)",
        border: "rgba(56, 189, 248, 0.4)",
      },
      title: {
        text: "Manage Control Plan (MCP)",
        fontSize: 34,
        fill: "#F8FAFC",
        x: 60,
        y: 110,
        fontWeight: "bold",
      },
      subtitle: {
        text: "Carrier-Grade Optical Telemetry & Component Architecture",
        fontSize: 16,
        fill: "#94A3B8",
        x: 60,
        y: 160,
      },
      metrics: [
        {
          value: "50K/sec",
          label: "Telemetry Packets",
          x: 60,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(30, 41, 59, 0.85)",
          border: "rgba(56, 189, 248, 0.3)",
          valueColor: "#38BDF8",
          textColor: "#94A3B8",
        },
        {
          value: "10K+",
          label: "Nodes Monitored",
          x: 230,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(30, 41, 59, 0.85)",
          border: "rgba(56, 189, 248, 0.3)",
          valueColor: "#818CF8",
          textColor: "#94A3B8",
        },
        {
          value: "10+ UIs",
          label: "Frost Components",
          x: 400,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(30, 41, 59, 0.85)",
          border: "rgba(56, 189, 248, 0.3)",
          valueColor: "#5CE5D4",
          textColor: "#94A3B8",
        },
        {
          value: "99.999%",
          label: "Carrier Uptime",
          x: 570,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(30, 41, 59, 0.85)",
          border: "rgba(56, 189, 248, 0.3)",
          valueColor: "#4ADE80",
          textColor: "#94A3B8",
        },
      ],
      tags: [
        { text: "Ember.js", x: 60, y: 325, fill: "#F87171", bg: "rgba(248, 113, 113, 0.12)", border: "rgba(248, 113, 113, 0.25)" },
        { text: "React", x: 165, y: 325, fill: "#38BDF8", bg: "rgba(56, 189, 248, 0.12)", border: "rgba(56, 189, 248, 0.25)" },
        { text: "TypeScript", x: 250, y: 325, fill: "#60A5FA", bg: "rgba(96, 165, 250, 0.12)", border: "rgba(96, 165, 250, 0.25)" },
        { text: "Frost UI", x: 375, y: 325, fill: "#5CE5D4", bg: "rgba(92, 229, 212, 0.12)", border: "rgba(92, 229, 212, 0.25)" },
        { text: "SCSS Modules", x: 480, y: 325, fill: "#C084FC", bg: "rgba(192, 132, 252, 0.12)", border: "rgba(192, 132, 252, 0.25)" },
      ],
    },
  },
  {
    id: "biomedical-telemetry",
    title: "Biomedical Telemetry ・ Nagarro",
    company: "Nagarro Software",
    role: "Lead Frontend Engineer",
    period: "Feb 2021 - Sep 2022",
    summary:
      "ICU bedside telemetry streaming dashboard processing continuous ECG, SpO2, and hemodynamic vital signs via WebSockets, D3.js, and HIPAA-compliant WebWorkers.",
    category: "Healthcare Telemetry",
    tags: ["React", "WebSockets", "D3.js", "WebWorkers", "RxJS", "HL7 / FHIR"],
    metrics: [
      { label: "ECG Stream", value: "Sub-40ms", trend: "Lossless" },
      { label: "Clinical Alerts", value: "99.99%", trend: "Zero-drop" },
      { label: "Monitors", value: "500+ Beds", trend: "Simultaneous" },
      { label: "Canvas Graph", value: "1000 pts/s", trend: "60 FPS" },
    ],
    themePresets: {
      name: "Emerald Clinical",
      accentColor: "#4ADE80",
      textColor: "#ECFDF5",
      secondaryColor: "#94A3B8",
      bgGradient: ["#022C22", "#064E3B"],
      cardBg: "rgba(6, 44, 34, 0.85)",
      cardBorder: "rgba(74, 222, 128, 0.25)",
    },
    mockExportStatus: "synced",
    updatedAt: "2026-11-10T15:20:00Z",
    canvasPreset: {
      background: {
        type: "gradient",
        color1: "#062A22",
        color2: "#0A192F",
        angle: 150,
      },
      glowCard: {
        x: 30,
        y: 30,
        width: 740,
        height: 420,
        fill: "rgba(6, 38, 30, 0.8)",
        stroke: "rgba(74, 222, 128, 0.35)",
        cornerRadius: 16,
      },
      badgeCategory: {
        text: "CRITICAL HEALTHCARE TELEMETRY",
        x: 60,
        y: 65,
        fill: "#4ADE80",
        bg: "rgba(74, 222, 128, 0.15)",
        border: "rgba(74, 222, 128, 0.4)",
      },
      title: {
        text: "Biomedical Patient Telemetry",
        fontSize: 34,
        fill: "#FFFFFF",
        x: 60,
        y: 110,
        fontWeight: "bold",
      },
      subtitle: {
        text: "Sub-40ms Real-Time Vital Signs Visualization & Clinical Alerts",
        fontSize: 16,
        fill: "#A7F3D0",
        x: 60,
        y: 160,
      },
      metrics: [
        {
          value: "Sub-40ms",
          label: "Stream Latency",
          x: 60,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(6, 44, 34, 0.9)",
          border: "rgba(74, 222, 128, 0.3)",
          valueColor: "#4ADE80",
          textColor: "#A7F3D0",
        },
        {
          value: "500+ Beds",
          label: "Active Monitoring",
          x: 230,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(6, 44, 34, 0.9)",
          border: "rgba(74, 222, 128, 0.3)",
          valueColor: "#5CE5D4",
          textColor: "#A7F3D0",
        },
        {
          value: "99.99%",
          label: "Alert Delivery",
          x: 400,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(6, 44, 34, 0.9)",
          border: "rgba(74, 222, 128, 0.3)",
          valueColor: "#FBBF24",
          textColor: "#A7F3D0",
        },
        {
          value: "1000 pt/s",
          label: "Waveform Render",
          x: 570,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(6, 44, 34, 0.9)",
          border: "rgba(74, 222, 128, 0.3)",
          valueColor: "#38BDF8",
          textColor: "#A7F3D0",
        },
      ],
      tags: [
        { text: "WebSockets", x: 60, y: 325, fill: "#4ADE80", bg: "rgba(74, 222, 128, 0.12)", border: "rgba(74, 222, 128, 0.25)" },
        { text: "D3.js & Canvas", x: 185, y: 325, fill: "#34D399", bg: "rgba(52, 211, 153, 0.12)", border: "rgba(52, 211, 153, 0.25)" },
        { text: "WebWorkers", x: 330, y: 325, fill: "#38BDF8", bg: "rgba(56, 189, 248, 0.12)", border: "rgba(56, 189, 248, 0.25)" },
        { text: "HL7 / FHIR", x: 460, y: 325, fill: "#FBBF24", bg: "rgba(251, 191, 36, 0.12)", border: "rgba(251, 191, 36, 0.25)" },
        { text: "RxJS", x: 580, y: 325, fill: "#F472B6", bg: "rgba(244, 114, 182, 0.12)", border: "rgba(244, 114, 182, 0.25)" },
      ],
    },
  },
  {
    id: "pdf-generation-service",
    title: "PDF Generation Service",
    company: "Cloud Distributed Services",
    role: "System & UI Pipeline Engineer",
    period: "2024 - 2025",
    summary:
      "Distributed serverless PDF and badge rendering pipeline. Uses Konva canvas serialization and Headless Chromium to generate pixel-perfect high-resolution credentials at scale.",
    category: "Distributed Service",
    tags: ["Node.js", "Puppeteer", "Konva Server-Side", "AWS SQS", "Docker", "S3"],
    metrics: [
      { label: "Daily Batch", value: "250K+ Docs", trend: "High Volume" },
      { label: "Rendering", value: "480ms Avg", trend: "Sub-Second" },
      { label: "P99 SLA", value: "1.2s", trend: "Strict" },
      { label: "Storage Saved", value: "65%", trend: "Lossless WebP" },
    ],
    themePresets: {
      name: "Amber Forge",
      accentColor: "#F59E0B",
      textColor: "#FFFBEB",
      secondaryColor: "#94A3B8",
      bgGradient: ["#18181B", "#27272A"],
      cardBg: "rgba(24, 24, 27, 0.85)",
      cardBorder: "rgba(245, 158, 11, 0.25)",
    },
    mockExportStatus: "ready",
    updatedAt: "2026-11-08T18:10:00Z",
    canvasPreset: {
      background: {
        type: "gradient",
        color1: "#18181B",
        color2: "#2A1F0C",
        angle: 140,
      },
      glowCard: {
        x: 30,
        y: 30,
        width: 740,
        height: 420,
        fill: "rgba(24, 24, 27, 0.85)",
        stroke: "rgba(245, 158, 11, 0.35)",
        cornerRadius: 16,
      },
      badgeCategory: {
        text: "SERVERLESS ARTIFACT PIPELINE",
        x: 60,
        y: 65,
        fill: "#FBBF24",
        bg: "rgba(245, 158, 11, 0.15)",
        border: "rgba(245, 158, 11, 0.4)",
      },
      title: {
        text: "High-Throughput PDF Service",
        fontSize: 34,
        fill: "#FFFFFF",
        x: 60,
        y: 110,
        fontWeight: "bold",
      },
      subtitle: {
        text: "Konva Vector Serialization to Scalable Chromium Render Fleet",
        fontSize: 16,
        fill: "#FDE68A",
        x: 60,
        y: 160,
      },
      metrics: [
        {
          value: "250K+",
          label: "Daily Documents",
          x: 60,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(39, 39, 42, 0.9)",
          border: "rgba(245, 158, 11, 0.3)",
          valueColor: "#FBBF24",
          textColor: "#D4D4D8",
        },
        {
          value: "480ms",
          label: "Avg Generation",
          x: 230,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(39, 39, 42, 0.9)",
          border: "rgba(245, 158, 11, 0.3)",
          valueColor: "#5CE5D4",
          textColor: "#D4D4D8",
        },
        {
          value: "1.2s",
          label: "P99 SLA",
          x: 400,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(39, 39, 42, 0.9)",
          border: "rgba(245, 158, 11, 0.3)",
          valueColor: "#38BDF8",
          textColor: "#D4D4D8",
        },
        {
          value: "65%",
          label: "Storage Saved",
          x: 570,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(39, 39, 42, 0.9)",
          border: "rgba(245, 158, 11, 0.3)",
          valueColor: "#4ADE80",
          textColor: "#D4D4D8",
        },
      ],
      tags: [
        { text: "Puppeteer", x: 60, y: 325, fill: "#FBBF24", bg: "rgba(245, 158, 11, 0.12)", border: "rgba(245, 158, 11, 0.25)" },
        { text: "Node.js", x: 175, y: 325, fill: "#4ADE80", bg: "rgba(74, 222, 128, 0.12)", border: "rgba(74, 222, 128, 0.25)" },
        { text: "AWS SQS", x: 275, y: 325, fill: "#F97316", bg: "rgba(249, 115, 22, 0.12)", border: "rgba(249, 115, 22, 0.25)" },
        { text: "Docker Fleet", x: 385, y: 325, fill: "#38BDF8", bg: "rgba(56, 189, 248, 0.12)", border: "rgba(56, 189, 248, 0.25)" },
        { text: "S3 Storage", x: 515, y: 325, fill: "#E879F9", bg: "rgba(232, 121, 249, 0.12)", border: "rgba(232, 121, 249, 0.25)" },
      ],
    },
  },
  {
    id: "one-piece-crew-builder",
    title: "One Piece Crew Builder",
    company: "Interactive Web Experience",
    role: "Game Engine & UI Architect",
    period: "2024 - 2025",
    summary:
      "Interactive 2D tactical pirate crew builder featuring high-performance HTML5 Canvas sprite animations, synergy calculation matrices, and fluid sound synthesis.",
    category: "Interactive Gaming",
    tags: ["HTML5 Canvas", "Konva Engine", "Zustand", "Framer Motion", "Sprite Engine", "Web Audio"],
    metrics: [
      { label: "Pirate Roster", value: "100+ Crew", trend: "Full Grand Line" },
      { label: "Synergies", value: "500+ Combos", trend: "Dynamic Matrix" },
      { label: "Rendering", value: "120Hz VSync", trend: "Canvas 2D" },
      { label: "Bounty Calc", value: "Sub-10ms", trend: "Instant State" },
    ],
    themePresets: {
      name: "Grand Line Sunset",
      accentColor: "#F43F5E",
      textColor: "#FFF1F2",
      secondaryColor: "#FECDD3",
      bgGradient: ["#1F1322", "#431407"],
      cardBg: "rgba(31, 19, 34, 0.85)",
      cardBorder: "rgba(244, 63, 94, 0.3)",
    },
    mockExportStatus: "ready",
    updatedAt: "2026-11-05T14:40:00Z",
    canvasPreset: {
      background: {
        type: "gradient",
        color1: "#1C1024",
        color2: "#3B1115",
        angle: 135,
      },
      glowCard: {
        x: 30,
        y: 30,
        width: 740,
        height: 420,
        fill: "rgba(28, 16, 36, 0.85)",
        stroke: "rgba(244, 63, 94, 0.4)",
        cornerRadius: 16,
      },
      badgeCategory: {
        text: "TACTICAL BATTLEFIELD CANVAS",
        x: 60,
        y: 65,
        fill: "#FB7185",
        bg: "rgba(244, 63, 94, 0.15)",
        border: "rgba(244, 63, 94, 0.4)",
      },
      title: {
        text: "One Piece Crew Builder",
        fontSize: 34,
        fill: "#FFFFFF",
        x: 60,
        y: 110,
        fontWeight: "bold",
      },
      subtitle: {
        text: "60 FPS Interactive Canvas, Character Synergy Graphs & Web Audio",
        fontSize: 16,
        fill: "#FDA4AF",
        x: 60,
        y: 160,
      },
      metrics: [
        {
          value: "100+ Crew",
          label: "Pirate Roster",
          x: 60,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(40, 20, 35, 0.9)",
          border: "rgba(244, 63, 94, 0.3)",
          valueColor: "#FB7185",
          textColor: "#FECDD3",
        },
        {
          value: "500+",
          label: "Synergy Combos",
          x: 230,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(40, 20, 35, 0.9)",
          border: "rgba(244, 63, 94, 0.3)",
          valueColor: "#FBBF24",
          textColor: "#FECDD3",
        },
        {
          value: "120Hz",
          label: "Hardware V-Sync",
          x: 400,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(40, 20, 35, 0.9)",
          border: "rgba(244, 63, 94, 0.3)",
          valueColor: "#5CE5D4",
          textColor: "#FECDD3",
        },
        {
          value: "Sub-10ms",
          label: "Bounty State Calc",
          x: 570,
          y: 210,
          width: 155,
          height: 80,
          bg: "rgba(40, 20, 35, 0.9)",
          border: "rgba(244, 63, 94, 0.3)",
          valueColor: "#38BDF8",
          textColor: "#FECDD3",
        },
      ],
      tags: [
        { text: "HTML5 Canvas", x: 60, y: 325, fill: "#FB7185", bg: "rgba(244, 63, 94, 0.12)", border: "rgba(244, 63, 94, 0.25)" },
        { text: "Konva Engine", x: 195, y: 325, fill: "#38BDF8", bg: "rgba(56, 189, 248, 0.12)", border: "rgba(56, 189, 248, 0.25)" },
        { text: "Zustand State", x: 330, y: 325, fill: "#FBBF24", bg: "rgba(251, 191, 36, 0.12)", border: "rgba(251, 191, 36, 0.25)" },
        { text: "Framer Motion", x: 465, y: 325, fill: "#C084FC", bg: "rgba(192, 132, 252, 0.12)", border: "rgba(192, 132, 252, 0.25)" },
        { text: "Web Audio", x: 605, y: 325, fill: "#4ADE80", bg: "rgba(74, 222, 128, 0.12)", border: "rgba(74, 222, 128, 0.25)" },
      ],
    },
  },
];

export async function GET(request: NextRequest) {
  const startTime = Date.now();
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get("search")?.toLowerCase();
  const category = searchParams.get("category");

  let filtered = [...ARTIFACTS_CATALOG];

  if (category && category !== "all") {
    filtered = filtered.filter(
      (a) => a.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (search) {
    filtered = filtered.filter(
      (a) =>
        a.title.toLowerCase().includes(search) ||
        a.company.toLowerCase().includes(search) ||
        a.summary.toLowerCase().includes(search) ||
        a.tags.some((t) => t.toLowerCase().includes(search))
    );
  }

  const responsePayload: BFFCatalogResponse = {
    success: true,
    timestamp: new Date().toISOString(),
    count: filtered.length,
    artifacts: filtered,
    architecture: {
      pattern: "Backend-For-Frontend (BFF)",
      upstreamServices: [
        "Cvent Micro-Frontend Mesh (GraphQL)",
        "Ciena MCP Telemetry Service (REST)",
        "Nagarro FHIR Clinical Gateway (gRPC)",
        "PDF Renderer SQS Cluster",
      ],
      aggregationLatencyMs: Math.max(12, Date.now() - startTime + 8),
      cacheHit: true,
      fargateQueueStatus: "online",
      notes:
        "BFF aggregates upstream enterprise microservices into a unified schema tailored specifically for Konva canvas consumption, shielding client from upstream mutations.",
    },
  };

  return NextResponse.json(responsePayload, {
    status: 200,
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      "X-BFF-Layer": "NextJS-AppRouter-BFF-v2",
      "X-BFF-Architecture": "Aggregator-Decoupler",
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as SaveThumbnailRequest;

    if (!body || !body.artifactId) {
      return NextResponse.json(
        { success: false, message: "Missing required artifactId in payload" },
        { status: 400 }
      );
    }

    const matchedArtifact = ARTIFACTS_CATALOG.find(
      (a) => a.id === body.artifactId
    );
    const title = body.artifactTitle || matchedArtifact?.title || "Custom Thumbnail";
    const jobId = `job_fargate_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const savedAt = new Date().toISOString();

    const response: SaveThumbnailResponse = {
      success: true,
      message: `Canvas thumbnail configuration registered successfully via BFF for "${title}".`,
      jobId,
      savedAt,
      record: {
        artifactId: body.artifactId,
        artifactTitle: title,
        thumbnailName: body.thumbnailName || `${body.artifactId}-preview.png`,
        elementsSaved: body.canvasData?.elementsCount || 0,
        storagePath: `s3://portfolio-artifacts-thumbnails/exports/${body.artifactId}-${Date.now()}.png`,
        mockRenderQueue: "queued_aws_fargate",
      },
    };

    return NextResponse.json(response, {
      status: 201,
      headers: {
        "X-BFF-Layer": "NextJS-AppRouter-BFF-v2",
        "X-Fargate-JobId": jobId,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to parse thumbnail payload in BFF layer",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
