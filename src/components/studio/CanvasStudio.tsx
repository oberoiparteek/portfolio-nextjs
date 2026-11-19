"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Konva from "konva";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Artifact,
  BFFCatalogResponse,
  SaveThumbnailRequest,
  SaveThumbnailResponse,
} from "@/types/bff";
import BffArchitectureDrawer from "./BffArchitectureDrawer";
import {
  ArrowLeft,
  Download,
  Save,
  Type,
  LayoutGrid,
  Trash2,
  Copy,
  RotateCcw,
  Sparkles,
  Layers,
  Palette,
  CheckCircle2,
  AlertCircle,
  Sun,
  Moon,
  Server,
  ZoomIn,
  ZoomOut,
  Maximize2,
  HelpCircle,
  Tag,
  Square,
  BarChart3,
  Sliders,
} from "lucide-react";

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 480;

interface InspectorState {
  id: string;
  name: string;
  type: "text" | "group" | "rect" | "circle";
  textValue?: string;
  fontSize?: number;
  fill?: string;
  opacity?: number;
  x: number;
  y: number;
}

const BG_PRESETS = [
  { name: "Cyber Marine", c1: "#0F172A", c2: "#0A192F" },
  { name: "Obsidian Void", c1: "#090D16", c2: "#111827" },
  { name: "Ciena Indigo", c1: "#0F172A", c2: "#1E1B4B" },
  { name: "Emerald Bio", c1: "#062A22", c2: "#0A192F" },
  { name: "Amber Forge", c1: "#18181B", c2: "#2A1F0C" },
  { name: "Crimson Red", c1: "#1C1024", c2: "#3B1115" },
];

const COLOR_SWATCHES = [
  "#FFFFFF",
  "#5CE5D4", // Marine Teal
  "#38BDF8", // Sky Blue
  "#4ADE80", // Emerald Green
  "#FBBF24", // Amber Yellow
  "#F472B6", // Rose Pink
  "#A78BFA", // Purple
  "#94A3B8", // Slate Muted
];

export default function CanvasStudio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<Konva.Stage | null>(null);
  const bgLayerRef = useRef<Konva.Layer | null>(null);
  const gridLayerRef = useRef<Konva.Layer | null>(null);
  const contentLayerRef = useRef<Konva.Layer | null>(null);
  const transformerLayerRef = useRef<Konva.Layer | null>(null);
  const transformerRef = useRef<Konva.Transformer | null>(null);

  // BFF State
  const [bffData, setBffData] = useState<BFFCatalogResponse | null>(null);
  const [artifacts, setArtifacts] = useState<Artifact[]>([]);
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoadingBff, setIsLoadingBff] = useState(true);

  // Studio UI State
  const [selectedNode, setSelectedNode] = useState<Konva.Node | null>(null);
  const [inspector, setInspector] = useState<InspectorState | null>(null);
  const [showGrid, setShowGrid] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [currentBg, setCurrentBg] = useState(BG_PRESETS[0]);
  const [isBffDrawerOpen, setIsBffDrawerOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "info" } | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const { theme, setTheme } = useTheme();

  // Show Toast Helper
  const showToast = useCallback((message: string, type: "success" | "info" = "info") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3800);
  }, []);

  // Sync selected node with inspector state
  const syncInspector = useCallback((node: Konva.Node | null) => {
    if (!node) {
      setInspector(null);
      return;
    }

    const nodeName = node.name();
    let textVal = "";
    let fontSizeVal: number | undefined;
    let fillVal = "#5CE5D4";

    if (node instanceof Konva.Text) {
      textVal = node.text();
      fontSizeVal = node.fontSize();
      fillVal = (node.fill() as string) || "#FFFFFF";
    } else if (node instanceof Konva.Group) {
      // Find primary text child inside group
      const textChild = node.findOne<Konva.Text>(".metric-value") ||
        node.findOne<Konva.Text>(".tag-text") ||
        node.findOne<Konva.Text>("Text");
      if (textChild) {
        textVal = textChild.text();
        fontSizeVal = textChild.fontSize();
        fillVal = (textChild.fill() as string) || "#5CE5D4";
      }
    } else if (node instanceof Konva.Rect) {
      fillVal = (node.fill() as string) || "rgba(15, 23, 42, 0.75)";
    }

    setInspector({
      id: node.id() || node._id.toString(),
      name: nodeName || "Element",
      type: node instanceof Konva.Group ? "group" : node instanceof Konva.Text ? "text" : "rect",
      textValue: textVal,
      fontSize: fontSizeVal,
      fill: fillVal,
      opacity: node.opacity(),
      x: Math.round(node.x()),
      y: Math.round(node.y()),
    });
  }, []);

  // Update background gradient on bgLayer
  const drawBackground = useCallback((c1: string, c2: string) => {
    const bgLayer = bgLayerRef.current;
    if (!bgLayer) return;

    bgLayer.destroyChildren();

    const bgRect = new Konva.Rect({
      x: 0,
      y: 0,
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      fillLinearGradientStartPoint: { x: 0, y: 0 },
      fillLinearGradientEndPoint: { x: CANVAS_WIDTH, y: CANVAS_HEIGHT },
      fillLinearGradientColorStops: [0, c1, 1, c2],
      name: "bg-rect",
      listening: true,
    });

    bgLayer.add(bgRect);
    bgLayer.batchDraw();
  }, []);

  // Update grid layer
  const drawGrid = useCallback((visible: boolean) => {
    const gridLayer = gridLayerRef.current;
    if (!gridLayer) return;

    gridLayer.destroyChildren();

    if (!visible) {
      gridLayer.batchDraw();
      return;
    }

    const gridSize = 40;
    for (let x = gridSize; x < CANVAS_WIDTH; x += gridSize) {
      const line = new Konva.Line({
        points: [x, 0, x, CANVAS_HEIGHT],
        stroke: "rgba(255, 255, 255, 0.04)",
        strokeWidth: 1,
        dash: [4, 4],
        listening: false,
        name: "grid-line",
      });
      gridLayer.add(line);
    }

    for (let y = gridSize; y < CANVAS_HEIGHT; y += gridSize) {
      const line = new Konva.Line({
        points: [0, y, CANVAS_WIDTH, y],
        stroke: "rgba(255, 255, 255, 0.04)",
        strokeWidth: 1,
        dash: [4, 4],
        listening: false,
        name: "grid-line",
      });
      gridLayer.add(line);
    }

    gridLayer.batchDraw();
  }, []);

  // Select a node and attach Transformer
  const selectNode = useCallback((node: Konva.Node | null) => {
    const tr = transformerRef.current;
    const trLayer = transformerLayerRef.current;
    if (!tr || !trLayer) return;

    if (!node) {
      tr.nodes([]);
      trLayer.batchDraw();
      setSelectedNode(null);
      syncInspector(null);
      return;
    }

    // If node is inside an editable composite group (like metric-card or tag-pill), select the group
    let target = node;
    const parent = node.getParent();
    if (
      parent &&
      parent instanceof Konva.Group
    ) {
      target = parent;
    }

    tr.nodes([target]);
    trLayer.batchDraw();
    setSelectedNode(target);
    syncInspector(target);
  }, [syncInspector]);

  // Load an Artifact's Preset from BFF onto Canvas
  const loadArtifactPreset = useCallback((art: Artifact) => {
    const contentLayer = contentLayerRef.current;
    const tr = transformerRef.current;
    const trLayer = transformerLayerRef.current;
    if (!contentLayer || !tr || !trLayer) return;

    // Deselect existing
    tr.nodes([]);
    trLayer.batchDraw();
    setSelectedNode(null);
    syncInspector(null);

    // Clear content
    contentLayer.destroyChildren();

    const preset = art.canvasPreset;

    // Set background preset
    const newBg = {
      name: art.themePresets.name,
      c1: preset.background.color1,
      c2: preset.background.color2,
    };
    setCurrentBg(newBg);
    drawBackground(newBg.c1, newBg.c2);

    // 1. Glow Container Card
    if (preset.glowCard) {
      const glowCard = new Konva.Rect({
        x: preset.glowCard.x,
        y: preset.glowCard.y,
        width: preset.glowCard.width,
        height: preset.glowCard.height,
        fill: preset.glowCard.fill,
        stroke: preset.glowCard.stroke,
        strokeWidth: 1.5,
        cornerRadius: preset.glowCard.cornerRadius || 16,
        shadowColor: art.themePresets.accentColor,
        shadowBlur: 24,
        shadowOpacity: 0.15,
        draggable: true,
        name: "glow-card",
        id: "glow_card_bg",
      });
      contentLayer.add(glowCard);
    }

    // 2. Category Pill
    if (preset.badgeCategory) {
      const catGroup = new Konva.Group({
        x: preset.badgeCategory.x,
        y: preset.badgeCategory.y,
        draggable: true,
        name: "badge-pill",
        id: "category_pill",
      });
      const catText = new Konva.Text({
        text: preset.badgeCategory.text,
        fontSize: 10,
        fontFamily: "Inter, sans-serif",
        fontStyle: "bold",
        letterSpacing: 1,
        fill: preset.badgeCategory.fill,
        x: 12,
        y: 6,
        name: "cat-text",
      });
      const pillWidth = catText.width() + 24;
      const catBg = new Konva.Rect({
        width: pillWidth,
        height: 24,
        fill: preset.badgeCategory.bg,
        stroke: preset.badgeCategory.border,
        strokeWidth: 1,
        cornerRadius: 12,
        name: "cat-bg",
      });
      catGroup.add(catBg);
      catGroup.add(catText);
      contentLayer.add(catGroup);
    }

    // 3. Title Text
    if (preset.title) {
      const titleText = new Konva.Text({
        text: preset.title.text,
        fontSize: preset.title.fontSize,
        fontFamily: "Inter, sans-serif",
        fontStyle: "bold",
        fill: preset.title.fill,
        x: preset.title.x,
        y: preset.title.y,
        draggable: true,
        name: "title-text",
        id: "primary_title",
      });
      contentLayer.add(titleText);
    }

    // 4. Subtitle Text
    if (preset.subtitle) {
      const subText = new Konva.Text({
        text: preset.subtitle.text,
        fontSize: preset.subtitle.fontSize,
        fontFamily: "Inter, sans-serif",
        fill: preset.subtitle.fill,
        x: preset.subtitle.x,
        y: preset.subtitle.y,
        draggable: true,
        name: "subtitle-text",
        id: "secondary_subtitle",
      });
      contentLayer.add(subText);
    }

    // 5. Metric Cards
    if (preset.metrics && preset.metrics.length > 0) {
      preset.metrics.forEach((m, idx) => {
        const mGroup = new Konva.Group({
          x: m.x,
          y: m.y,
          draggable: true,
          name: "metric-card",
          id: `metric_${idx}`,
        });

        const mBg = new Konva.Rect({
          width: m.width,
          height: m.height,
          fill: m.bg || "rgba(30, 41, 59, 0.85)",
          stroke: m.border || "rgba(92, 229, 212, 0.3)",
          strokeWidth: 1,
          cornerRadius: 10,
          shadowColor: "#000000",
          shadowBlur: 10,
          shadowOpacity: 0.25,
          name: "metric-bg",
        });

        const mVal = new Konva.Text({
          text: m.value,
          fontSize: 20,
          fontFamily: "Inter, sans-serif",
          fontStyle: "bold",
          fill: m.valueColor || art.themePresets.accentColor,
          x: 14,
          y: 16,
          name: "metric-value",
        });

        const mLbl = new Konva.Text({
          text: m.label,
          fontSize: 11,
          fontFamily: "Inter, sans-serif",
          fill: m.textColor || "#94A3B8",
          x: 14,
          y: 46,
          name: "metric-label",
        });

        mGroup.add(mBg);
        mGroup.add(mVal);
        mGroup.add(mLbl);
        contentLayer.add(mGroup);
      });
    }

    // 6. Tech Tags
    if (preset.tags && preset.tags.length > 0) {
      preset.tags.forEach((t, idx) => {
        const tagGroup = new Konva.Group({
          x: t.x,
          y: t.y,
          draggable: true,
          name: "tag-pill",
          id: `tag_${idx}`,
        });

        const tagText = new Konva.Text({
          text: t.text,
          fontSize: 11,
          fontFamily: "Inter, sans-serif",
          fontWeight: "500",
          fill: t.fill || art.themePresets.accentColor,
          x: 12,
          y: 6,
          name: "tag-text",
        });

        const tWidth = tagText.width() + 24;

        const tagBg = new Konva.Rect({
          width: tWidth,
          height: 25,
          fill: t.bg || "rgba(92, 229, 212, 0.12)",
          stroke: t.border || "rgba(92, 229, 212, 0.25)",
          strokeWidth: 1,
          cornerRadius: 6,
          name: "tag-bg",
        });

        tagGroup.add(tagBg);
        tagGroup.add(tagText);
        contentLayer.add(tagGroup);
      });
    }

    contentLayer.batchDraw();
    setSelectedArtifact(art);
    showToast(`Loaded BFF preset for "${art.title}"`, "success");
  }, [drawBackground, showToast, syncInspector]);

  // Fetch BFF Artifacts on Mount
  useEffect(() => {
    let isMounted = true;
    async function fetchBffCatalog() {
      setIsLoadingBff(true);
      try {
        const res = await fetch("/api/bff/artifacts");
        if (!res.ok) throw new Error("Failed to load BFF artifacts");
        const data: BFFCatalogResponse = await res.json();
        if (isMounted) {
          setBffData(data);
          setArtifacts(data.artifacts);
          if (data.artifacts.length > 0) {
            setSelectedArtifact(data.artifacts[0]);
          }
        }
      } catch (err) {
        console.error("BFF catalog fetch error:", err);
      } finally {
        if (isMounted) setIsLoadingBff(false);
      }
    }
    fetchBffCatalog();
    return () => {
      isMounted = false;
    };
  }, []);

  // Initialize Konva Stage & Layers
  useEffect(() => {
    if (!containerRef.current) return;

    // Create Stage
    const stage = new Konva.Stage({
      container: containerRef.current,
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
    });
    stageRef.current = stage;

    // Create Layers
    const bgLayer = new Konva.Layer({ name: "bg-layer" });
    const gridLayer = new Konva.Layer({ name: "grid-layer" });
    const contentLayer = new Konva.Layer({ name: "content-layer" });
    const trLayer = new Konva.Layer({ name: "tr-layer" });

    bgLayerRef.current = bgLayer;
    gridLayerRef.current = gridLayer;
    contentLayerRef.current = contentLayer;
    transformerLayerRef.current = trLayer;

    // Add Transformer
    const tr = new Konva.Transformer({
      rotateEnabled: true,
      borderStroke: "#5CE5D4",
      borderStrokeWidth: 1.5,
      borderDash: [5, 5],
      anchorStroke: "#5CE5D4",
      anchorFill: "#0F172A",
      anchorSize: 9,
      anchorCornerRadius: 2,
      padding: 6,
      enabledAnchors: [
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
        "middle-left",
        "middle-right",
      ],
    });
    transformerRef.current = tr;
    trLayer.add(tr);

    stage.add(bgLayer);
    stage.add(gridLayer);
    stage.add(contentLayer);
    stage.add(trLayer);

    // Initial Background & Grid
    drawBackground(currentBg.c1, currentBg.c2);
    drawGrid(showGrid);

    // Stage Click & Tap Event Handling
    stage.on("click tap", (e) => {
      // If clicking stage background or bgRect, deselect
      if (
        e.target === stage ||
        e.target.hasName("bg-rect") ||
        e.target.hasName("grid-line")
      ) {
        selectNode(null);
      } else {
        selectNode(e.target);
      }
    });

    // Node Drag End Event Handler
    contentLayer.on("dragend", (e) => {
      if (selectedNode && (e.target === selectedNode || e.target.getParent() === selectedNode)) {
        syncInspector(selectedNode);
      }
    });

    // Transformer Transform Event Handler
    tr.on("transform", () => {
      if (selectedNode) {
        syncInspector(selectedNode);
      }
    });

    return () => {
      stage.destroy();
      stageRef.current = null;
    };
  }, []); // Run once on mount

  // Load first artifact preset once both Konva and BFF data are ready
  useEffect(() => {
    if (stageRef.current && artifacts.length > 0 && !selectedArtifact) {
      loadArtifactPreset(artifacts[0]);
    } else if (stageRef.current && artifacts.length > 0 && selectedArtifact) {
      // load initial
      loadArtifactPreset(selectedArtifact);
    }
  }, [artifacts]); // Trigger once artifacts arrive

  // Toggle Grid Handler
  const handleToggleGrid = () => {
    const nextVal = !showGrid;
    setShowGrid(nextVal);
    drawGrid(nextVal);
  };

  // Zoom handlers
  const handleZoom = (delta: number) => {
    const nextZoom = Math.max(0.6, Math.min(1.4, Math.round((zoomLevel + delta) * 10) / 10));
    setZoomLevel(nextZoom);
  };

  // Add Custom Elements to Canvas
  const handleAddTitle = () => {
    const contentLayer = contentLayerRef.current;
    if (!contentLayer) return;

    const newTitle = new Konva.Text({
      text: "New Section Title",
      fontSize: 28,
      fontFamily: "Inter, sans-serif",
      fontStyle: "bold",
      fill: "#FFFFFF",
      x: 100,
      y: 120,
      draggable: true,
      name: "title-text",
      id: `title_${Date.now()}`,
    });

    contentLayer.add(newTitle);
    contentLayer.batchDraw();
    selectNode(newTitle);
    showToast("Added heading text to canvas");
  };

  const handleAddSubtitle = () => {
    const contentLayer = contentLayerRef.current;
    if (!contentLayer) return;

    const newSub = new Konva.Text({
      text: "Interactive Subtitle or Architecture Description",
      fontSize: 15,
      fontFamily: "Inter, sans-serif",
      fill: "#94A3B8",
      x: 100,
      y: 170,
      draggable: true,
      name: "subtitle-text",
      id: `sub_${Date.now()}`,
    });

    contentLayer.add(newSub);
    contentLayer.batchDraw();
    selectNode(newSub);
    showToast("Added subtitle text to canvas");
  };

  const handleAddMetricCard = () => {
    const contentLayer = contentLayerRef.current;
    if (!contentLayer) return;

    const mGroup = new Konva.Group({
      x: 120,
      y: 220,
      draggable: true,
      name: "metric-card",
      id: `metric_${Date.now()}`,
    });

    const mBg = new Konva.Rect({
      width: 155,
      height: 80,
      fill: "rgba(30, 41, 59, 0.85)",
      stroke: "rgba(92, 229, 212, 0.3)",
      strokeWidth: 1,
      cornerRadius: 10,
      shadowColor: "#000000",
      shadowBlur: 10,
      shadowOpacity: 0.25,
      name: "metric-bg",
    });

    const mVal = new Konva.Text({
      text: "99.99%",
      fontSize: 20,
      fontFamily: "Inter, sans-serif",
      fontStyle: "bold",
      fill: "#5CE5D4",
      x: 14,
      y: 16,
      name: "metric-value",
    });

    const mLbl = new Konva.Text({
      text: "Availability SLA",
      fontSize: 11,
      fontFamily: "Inter, sans-serif",
      fill: "#94A3B8",
      x: 14,
      y: 46,
      name: "metric-label",
    });

    mGroup.add(mBg);
    mGroup.add(mVal);
    mGroup.add(mLbl);
    contentLayer.add(mGroup);
    contentLayer.batchDraw();
    selectNode(mGroup);
    showToast("Added new metric pill card");
  };

  const handleAddTagPill = () => {
    const contentLayer = contentLayerRef.current;
    if (!contentLayer) return;

    const tagGroup = new Konva.Group({
      x: 140,
      y: 330,
      draggable: true,
      name: "tag-pill",
      id: `tag_${Date.now()}`,
    });

    const tagText = new Konva.Text({
      text: "TypeScript 5",
      fontSize: 11,
      fontFamily: "Inter, sans-serif",
      fontWeight: "500",
      fill: "#38BDF8",
      x: 12,
      y: 6,
      name: "tag-text",
    });

    const tWidth = tagText.width() + 24;

    const tagBg = new Konva.Rect({
      width: tWidth,
      height: 25,
      fill: "rgba(56, 189, 248, 0.12)",
      stroke: "rgba(56, 189, 248, 0.25)",
      strokeWidth: 1,
      cornerRadius: 6,
      name: "tag-bg",
    });

    tagGroup.add(tagBg);
    tagGroup.add(tagText);
    contentLayer.add(tagGroup);
    contentLayer.batchDraw();
    selectNode(tagGroup);
    showToast("Added tech tag badge");
  };

  const handleAddGlowCard = () => {
    const contentLayer = contentLayerRef.current;
    if (!contentLayer) return;

    const glowCard = new Konva.Rect({
      x: 100,
      y: 80,
      width: 600,
      height: 320,
      fill: "rgba(15, 23, 42, 0.8)",
      stroke: "rgba(92, 229, 212, 0.35)",
      strokeWidth: 1.5,
      cornerRadius: 16,
      shadowColor: "#5CE5D4",
      shadowBlur: 20,
      shadowOpacity: 0.15,
      draggable: true,
      name: "glow-card",
      id: `card_${Date.now()}`,
    });

    contentLayer.add(glowCard);
    // Send behind other content
    glowCard.moveToBottom();
    contentLayer.batchDraw();
    selectNode(glowCard);
    showToast("Added glass container card");
  };

  // Duplicate Selected Node
  const handleDuplicateSelected = () => {
    if (!selectedNode || !contentLayerRef.current) return;
    const clone = selectedNode.clone({
      x: selectedNode.x() + 20,
      y: selectedNode.y() + 20,
      id: `${selectedNode.id()}_copy_${Date.now()}`,
    });
    contentLayerRef.current.add(clone);
    contentLayerRef.current.batchDraw();
    selectNode(clone);
    showToast("Duplicated selected element");
  };

  // Delete Selected Node
  const handleDeleteSelected = () => {
    if (!selectedNode || !contentLayerRef.current) return;
    selectedNode.destroy();
    selectNode(null);
    contentLayerRef.current.batchDraw();
    showToast("Element removed from canvas");
  };

  // Reorder Layer
  const handleBringForward = () => {
    if (!selectedNode || !contentLayerRef.current) return;
    selectedNode.moveUp();
    contentLayerRef.current.batchDraw();
  };

  const handleSendBackward = () => {
    if (!selectedNode || !contentLayerRef.current) return;
    selectedNode.moveDown();
    contentLayerRef.current.batchDraw();
  };

  // Inspector Updates
  const handleTextChange = (newVal: string) => {
    if (!selectedNode || !contentLayerRef.current) return;

    if (selectedNode instanceof Konva.Text) {
      selectedNode.text(newVal);
    } else if (selectedNode instanceof Konva.Group) {
      const textChild =
        selectedNode.findOne<Konva.Text>(".metric-value") ||
        selectedNode.findOne<Konva.Text>(".tag-text") ||
        selectedNode.findOne<Konva.Text>("Text");
      if (textChild) {
        textChild.text(newVal);
        // Adjust background pill width if it's a tag
        const bgChild = selectedNode.findOne<Konva.Rect>(".tag-bg");
        if (bgChild) {
          bgChild.width(textChild.width() + 24);
        }
      }
    }

    contentLayerRef.current.batchDraw();
    transformerLayerRef.current?.batchDraw();
    syncInspector(selectedNode);
  };

  const handleFontSizeChange = (newSize: number) => {
    if (!selectedNode || !contentLayerRef.current) return;

    if (selectedNode instanceof Konva.Text) {
      selectedNode.fontSize(newSize);
    } else if (selectedNode instanceof Konva.Group) {
      const textChild =
        selectedNode.findOne<Konva.Text>(".metric-value") ||
        selectedNode.findOne<Konva.Text>(".tag-text") ||
        selectedNode.findOne<Konva.Text>("Text");
      if (textChild) {
        textChild.fontSize(newSize);
      }
    }

    contentLayerRef.current.batchDraw();
    transformerLayerRef.current?.batchDraw();
    syncInspector(selectedNode);
  };

  const handleColorChange = (color: string) => {
    if (!selectedNode || !contentLayerRef.current) return;

    if (selectedNode instanceof Konva.Text) {
      selectedNode.fill(color);
    } else if (selectedNode instanceof Konva.Group) {
      const textChild =
        selectedNode.findOne<Konva.Text>(".metric-value") ||
        selectedNode.findOne<Konva.Text>(".tag-text") ||
        selectedNode.findOne<Konva.Text>("Text");
      if (textChild) {
        textChild.fill(color);
      }
    } else if (selectedNode instanceof Konva.Rect) {
      selectedNode.stroke(color);
    }

    contentLayerRef.current.batchDraw();
    syncInspector(selectedNode);
  };

  const handleOpacityChange = (opacity: number) => {
    if (!selectedNode || !contentLayerRef.current) return;
    selectedNode.opacity(opacity);
    contentLayerRef.current.batchDraw();
    syncInspector(selectedNode);
  };

  // Change Canvas Background Preset
  const handleSelectBgPreset = (preset: typeof BG_PRESETS[0]) => {
    setCurrentBg(preset);
    drawBackground(preset.c1, preset.c2);
    showToast(`Applied "${preset.name}" background gradient`);
  };

  // Export to Image (PNG Download @ 2x Retina)
  const handleExportPng = () => {
    const stage = stageRef.current;
    if (!stage) return;

    // Deselect transformer so borders don't appear in export
    selectNode(null);

    // Generate high resolution 2x Retina dataURL
    const dataUrl = stage.toDataURL({ pixelRatio: 2 });

    const link = document.createElement("a");
    const filename = `${selectedArtifact?.id || "portfolio-artifact"}-thumbnail.png`;
    link.download = filename;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast(`Downloaded 2x Retina PNG: ${filename}`, "success");
  };

  // Save to BFF (Simulate AWS Fargate Persistence)
  const handleSaveToBff = async () => {
    if (!selectedArtifact) return;
    setIsSaving(true);

    try {
      const stage = stageRef.current;
      const dataUrl = stage ? stage.toDataURL({ pixelRatio: 1 }) : undefined;
      const elementsCount = contentLayerRef.current?.getChildren().length || 0;

      const payload: SaveThumbnailRequest = {
        artifactId: selectedArtifact.id,
        artifactTitle: selectedArtifact.title,
        thumbnailName: `${selectedArtifact.id}-custom-thumbnail.png`,
        canvasData: {
          elementsCount,
          previewDataUrl: dataUrl?.substring(0, 50) + "...", // Trim for payload brevity
        },
      };

      const res = await fetch("/api/bff/artifacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save to BFF");
      const result: SaveThumbnailResponse = await res.json();

      showToast(`Saved to BFF! AWS Fargate Job enqueued: ${result.jobId}`, "success");
    } catch (err) {
      console.error("Save to BFF error:", err);
      showToast("Error saving thumbnail to BFF layer", "info");
    } finally {
      setIsSaving(false);
    }
  };

  // Keyboard Shortcuts: Delete and Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "Backspace" || e.key === "Delete") {
        if (selectedNode) {
          e.preventDefault();
          handleDeleteSelected();
        }
      } else if (e.key === "Escape") {
        selectNode(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedNode, selectNode]);

  // Filter artifacts
  const filteredArtifacts = artifacts.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory =
      activeCategory === "all" ||
      art.category.toLowerCase().replace(/\s+/g, "-") === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: "var(--color-background, #0F172A)",
        color: "var(--text-heading-color, #D0DAED)",
        overflow: "hidden",
        fontFamily: "var(--font-sans, system-ui, sans-serif)",
      }}
    >
      {/* 1. STUDIO HEADER */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.65rem 1.25rem",
          background: "var(--glass-nav-bg, rgba(15, 23, 42, 0.85))",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--glass-border, rgba(255, 255, 255, 0.1))",
          zIndex: 30,
        }}
      >
        {/* Left: Back Link & Branding */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              textDecoration: "none",
              color: "var(--color-marine, #5CE5D4)",
              fontSize: "0.85rem",
              fontWeight: 600,
              padding: "0.35rem 0.75rem",
              borderRadius: "8px",
              background: "rgba(92, 229, 212, 0.1)",
              border: "1px solid rgba(92, 229, 212, 0.25)",
              transition: "all 0.2s ease",
            }}
          >
            <ArrowLeft size={16} />
            <span>Portfolio</span>
          </Link>

          <div style={{ height: "20px", width: "1px", background: "rgba(255, 255, 255, 0.15)" }} />

          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span style={{ fontSize: "1.05rem", fontWeight: 700, letterSpacing: "-0.2px" }}>
              Visual Artifact Studio
            </span>
            <span
              style={{
                fontSize: "0.7rem",
                padding: "2px 8px",
                borderRadius: "9999px",
                background: "rgba(56, 189, 248, 0.15)",
                color: "#38BDF8",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                fontWeight: 600,
              }}
            >
              BFF + Konva
            </span>
          </div>
        </div>

        {/* Right: Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <button
            onClick={() => setIsBffDrawerOpen(!isBffDrawerOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.4rem 0.8rem",
              borderRadius: "8px",
              background: isBffDrawerOpen
                ? "rgba(92, 229, 212, 0.2)"
                : "rgba(255, 255, 255, 0.05)",
              border: `1px solid ${isBffDrawerOpen ? "#5CE5D4" : "rgba(255, 255, 255, 0.12)"}`,
              color: isBffDrawerOpen ? "#5CE5D4" : "inherit",
              fontSize: "0.8rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
            title="Toggle BFF Architecture Panel"
          >
            <Server size={15} />
            <span>BFF Architecture</span>
          </button>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "34px",
              height: "34px",
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "var(--color-marine, #5CE5D4)",
              cursor: "pointer",
            }}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            onClick={handleSaveToBff}
            disabled={isSaving}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.4rem 0.85rem",
              borderRadius: "8px",
              background: "rgba(30, 41, 59, 0.8)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              color: "#38BDF8",
              fontSize: "0.8rem",
              fontWeight: 600,
              cursor: isSaving ? "not-allowed" : "pointer",
              opacity: isSaving ? 0.7 : 1,
            }}
          >
            <Save size={15} />
            <span>{isSaving ? "Saving..." : "Save to BFF"}</span>
          </button>

          <button
            onClick={handleExportPng}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.45rem",
              padding: "0.4rem 0.95rem",
              borderRadius: "8px",
              background: "var(--color-marine, #5CE5D4)",
              border: "none",
              color: "#0F172A",
              fontSize: "0.8rem",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 2px 10px rgba(92, 229, 212, 0.25)",
            }}
          >
            <Download size={15} />
            <span>Export PNG (2x)</span>
          </button>
        </div>
      </header>

      {/* 2. MAIN WORKSPACE (3 Columns: Left BFF Catalog, Center Canvas, Right Inspector) */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden", position: "relative" }}>
        {/* LEFT COLUMN: BFF Catalog & Presets */}
        <aside
          style={{
            width: "310px",
            background: "var(--glass-bg-start, rgba(15, 23, 42, 0.75))",
            borderRight: "1px solid var(--glass-border, rgba(255, 255, 255, 0.08))",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          {/* Catalog Header & Search */}
          <div style={{ padding: "1rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                BFF Catalog Presets
              </span>
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "var(--color-marine, #5CE5D4)",
                  background: "rgba(92, 229, 212, 0.12)",
                  padding: "1px 6px",
                  borderRadius: "4px",
                }}
              >
                {filteredArtifacts.length} loaded
              </span>
            </div>

            <input
              type="text"
              placeholder="Search projects, tags, companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "0.45rem 0.75rem",
                borderRadius: "6px",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                background: "rgba(15, 23, 42, 0.6)",
                color: "var(--text-heading-color, #D0DAED)",
                fontSize: "0.8rem",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Artifact Card List */}
          <div style={{ flex: 1, overflowY: "auto", padding: "0.75rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {isLoadingBff ? (
              <div style={{ padding: "2rem 1rem", textAlign: "center", fontSize: "0.85rem", color: "#94A3B8" }}>
                Loading BFF Artifacts...
              </div>
            ) : filteredArtifacts.length === 0 ? (
              <div style={{ padding: "2rem 1rem", textAlign: "center", fontSize: "0.85rem", color: "#94A3B8" }}>
                No artifacts match your filter.
              </div>
            ) : (
              filteredArtifacts.map((art) => {
                const isSelected = selectedArtifact?.id === art.id;
                return (
                  <div
                    key={art.id}
                    onClick={() => loadArtifactPreset(art)}
                    style={{
                      padding: "0.85rem",
                      borderRadius: "10px",
                      background: isSelected
                        ? "rgba(92, 229, 212, 0.12)"
                        : "rgba(30, 41, 59, 0.45)",
                      border: `1px solid ${isSelected ? "var(--color-marine, #5CE5D4)" : "rgba(255, 255, 255, 0.07)"}`,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      position: "relative",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                      <span
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          color: art.themePresets.accentColor,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {art.category}
                      </span>
                      {isSelected && (
                        <span
                          style={{
                            fontSize: "0.65rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "3px",
                            color: "var(--color-marine, #5CE5D4)",
                          }}
                        >
                          <CheckCircle2 size={12} /> Active
                        </span>
                      )}
                    </div>

                    <h4
                      style={{
                        margin: "0 0 0.25rem 0",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--text-heading-color, #D0DAED)",
                      }}
                    >
                      {art.title}
                    </h4>

                    <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.75rem", color: "rgb(var(--text-s-color, 148, 163, 184))", lineHeight: 1.35 }}>
                      {art.summary.substring(0, 78)}...
                    </p>

                    {/* Metric preview pills */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                      {art.metrics.slice(0, 2).map((m, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: "0.68rem",
                            padding: "2px 6px",
                            borderRadius: "4px",
                            background: "rgba(15, 23, 42, 0.6)",
                            color: "#94A3B8",
                            border: "1px solid rgba(255, 255, 255, 0.05)",
                          }}
                        >
                          <strong style={{ color: art.themePresets.accentColor }}>{m.value}</strong> {m.label}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </aside>

        {/* CENTER COLUMN: Interactive Canvas Stage & Floating Toolbar */}
        <main
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            background: "radial-gradient(circle at center, rgba(30, 41, 59, 0.3) 0%, rgba(15, 23, 42, 0.8) 100%)",
            overflow: "auto",
            position: "relative",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          {/* Floating Studio Toolbar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "var(--glass-bg-start, rgba(15, 23, 42, 0.9))",
              backdropFilter: "blur(20px)",
              padding: "0.35rem 0.75rem",
              borderRadius: "10px",
              border: "1px solid var(--glass-border, rgba(255, 255, 255, 0.12))",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
              marginBottom: "1rem",
              zIndex: 20,
              flexWrap: "wrap",
            }}
          >
            {/* Add Title */}
            <button
              onClick={handleAddTitle}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "0.35rem 0.65rem",
                borderRadius: "6px",
                border: "none",
                background: "rgba(255, 255, 255, 0.06)",
                color: "var(--text-heading-color, #D0DAED)",
                fontSize: "0.75rem",
                fontWeight: 500,
                cursor: "pointer",
              }}
              title="Add Heading Text"
            >
              <Type size={14} /> + Heading
            </button>

            {/* Add Subtitle */}
            <button
              onClick={handleAddSubtitle}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "0.35rem 0.65rem",
                borderRadius: "6px",
                border: "none",
                background: "rgba(255, 255, 255, 0.06)",
                color: "var(--text-heading-color, #D0DAED)",
                fontSize: "0.75rem",
                fontWeight: 500,
                cursor: "pointer",
              }}
              title="Add Subtitle Text"
            >
              <Type size={12} /> + Subtitle
            </button>

            {/* Add Metric Card */}
            <button
              onClick={handleAddMetricCard}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "0.35rem 0.65rem",
                borderRadius: "6px",
                border: "none",
                background: "rgba(255, 255, 255, 0.06)",
                color: "var(--text-heading-color, #D0DAED)",
                fontSize: "0.75rem",
                fontWeight: 500,
                cursor: "pointer",
              }}
              title="Add Metric Highlight Card"
            >
              <BarChart3 size={14} /> + Metric Pill
            </button>

            {/* Add Tech Tag */}
            <button
              onClick={handleAddTagPill}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "0.35rem 0.65rem",
                borderRadius: "6px",
                border: "none",
                background: "rgba(255, 255, 255, 0.06)",
                color: "var(--text-heading-color, #D0DAED)",
                fontSize: "0.75rem",
                fontWeight: 500,
                cursor: "pointer",
              }}
              title="Add Tech Tag Pill"
            >
              <Tag size={13} /> + Tech Tag
            </button>

            {/* Add Glow Card */}
            <button
              onClick={handleAddGlowCard}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "0.35rem 0.65rem",
                borderRadius: "6px",
                border: "none",
                background: "rgba(255, 255, 255, 0.06)",
                color: "var(--text-heading-color, #D0DAED)",
                fontSize: "0.75rem",
                fontWeight: 500,
                cursor: "pointer",
              }}
              title="Add Glow Card Container"
            >
              <Square size={13} /> + Card
            </button>

            <div style={{ height: "18px", width: "1px", background: "rgba(255, 255, 255, 0.15)", margin: "0 2px" }} />

            {/* Grid Toggle */}
            <button
              onClick={handleToggleGrid}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "0.35rem 0.65rem",
                borderRadius: "6px",
                border: "none",
                background: showGrid ? "rgba(92, 229, 212, 0.15)" : "rgba(255, 255, 255, 0.06)",
                color: showGrid ? "var(--color-marine, #5CE5D4)" : "var(--text-heading-color, #D0DAED)",
                fontSize: "0.75rem",
                fontWeight: 500,
                cursor: "pointer",
              }}
              title="Toggle Alignment Grid"
            >
              <LayoutGrid size={14} /> Grid
            </button>

            {/* Reset Canvas to Current Preset */}
            <button
              onClick={() => {
                if (selectedArtifact) loadArtifactPreset(selectedArtifact);
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "0.35rem 0.65rem",
                borderRadius: "6px",
                border: "none",
                background: "rgba(255, 255, 255, 0.06)",
                color: "var(--text-heading-color, #D0DAED)",
                fontSize: "0.75rem",
                fontWeight: 500,
                cursor: "pointer",
              }}
              title="Reset Canvas to Default Preset Layout"
            >
              <RotateCcw size={13} /> Reset
            </button>

            {/* Zoom Controls */}
            <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <button
                onClick={() => handleZoom(-0.1)}
                style={{
                  padding: "0.35rem",
                  borderRadius: "4px",
                  border: "none",
                  background: "transparent",
                  color: "#94A3B8",
                  cursor: "pointer",
                }}
                title="Zoom Out"
              >
                <ZoomOut size={14} />
              </button>
              <span style={{ fontSize: "0.7rem", color: "#94A3B8", minWidth: "32px", textAlign: "center" }}>
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => handleZoom(0.1)}
                style={{
                  padding: "0.35rem",
                  borderRadius: "4px",
                  border: "none",
                  background: "transparent",
                  color: "#94A3B8",
                  cursor: "pointer",
                }}
                title="Zoom In"
              >
                <ZoomIn size={14} />
              </button>
            </div>
          </div>

          {/* Konva Stage Wrapper */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `scale(${zoomLevel})`,
              transformOrigin: "top center",
              transition: "transform 0.15s ease-out",
            }}
          >
            <div
              ref={containerRef}
              style={{
                width: `${CANVAS_WIDTH}px`,
                height: `${CANVAS_HEIGHT}px`,
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                cursor: "crosshair",
              }}
            />
          </div>

          {/* Canvas Dimensions Indicator */}
          <div
            style={{
              marginTop: "0.75rem",
              fontSize: "0.75rem",
              color: "rgb(var(--text-s-color, 148, 163, 184))",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span>Stage: {CANVAS_WIDTH} × {CANVAS_HEIGHT} px (16:9)</span>
            <span>•</span>
            <span>Retina Export: 1600 × 960 px</span>
            <span>•</span>
            <span style={{ color: "#5CE5D4" }}>60 FPS Native Konva Engine</span>
          </div>
        </main>

        {/* RIGHT COLUMN: Inspector & Stage Properties */}
        <aside
          style={{
            width: "290px",
            background: "var(--glass-bg-start, rgba(15, 23, 42, 0.75))",
            borderLeft: "1px solid var(--glass-border, rgba(255, 255, 255, 0.08))",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            flexShrink: 0,
            padding: "1rem",
          }}
        >
          {selectedNode && inspector ? (
            /* Selected Node Inspector */
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255, 255, 255, 0.08)", paddingBottom: "0.75rem" }}>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "var(--color-marine, #5CE5D4)", fontWeight: 700, textTransform: "uppercase" }}>
                    Selected Node
                  </div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>{inspector.name}</div>
                </div>
                <button
                  onClick={handleDeleteSelected}
                  style={{
                    padding: "6px",
                    borderRadius: "6px",
                    border: "none",
                    background: "rgba(244, 63, 94, 0.15)",
                    color: "#FB7185",
                    cursor: "pointer",
                  }}
                  title="Delete Element (Del)"
                >
                  <Trash2 size={15} />
                </button>
              </div>

              {/* Text Content Editor */}
              {inspector.textValue !== undefined && (
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#94A3B8", marginBottom: "0.4rem" }}>
                    Text Content
                  </label>
                  <input
                    type="text"
                    value={inspector.textValue}
                    onChange={(e) => handleTextChange(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.45rem 0.65rem",
                      borderRadius: "6px",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      background: "rgba(15, 23, 42, 0.6)",
                      color: "#FFFFFF",
                      fontSize: "0.85rem",
                      boxSizing: "border-box",
                      outline: "none",
                    }}
                  />
                </div>
              )}

              {/* Font Size Slider */}
              {inspector.fontSize !== undefined && (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontWeight: 600, color: "#94A3B8", marginBottom: "0.4rem" }}>
                    <span>Font Size</span>
                    <span>{inspector.fontSize}px</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="64"
                    value={inspector.fontSize}
                    onChange={(e) => handleFontSizeChange(Number(e.target.value))}
                    style={{ width: "100%", accentColor: "var(--color-marine, #5CE5D4)" }}
                  />
                </div>
              )}

              {/* Color Swatches */}
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#94A3B8", marginBottom: "0.4rem" }}>
                  Fill / Accent Color
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.4rem" }}>
                  {COLOR_SWATCHES.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorChange(color)}
                      style={{
                        height: "28px",
                        borderRadius: "6px",
                        background: color,
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        cursor: "pointer",
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Opacity Slider */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontWeight: 600, color: "#94A3B8", marginBottom: "0.4rem" }}>
                  <span>Opacity</span>
                  <span>{Math.round((inspector.opacity ?? 1) * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.05"
                  value={inspector.opacity ?? 1}
                  onChange={(e) => handleOpacityChange(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "var(--color-marine, #5CE5D4)" }}
                />
              </div>

              {/* Layer Position Info */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.5rem",
                  fontSize: "0.75rem",
                  background: "rgba(30, 41, 59, 0.4)",
                  padding: "0.6rem",
                  borderRadius: "6px",
                  color: "#94A3B8",
                }}
              >
                <div>X: <strong style={{ color: "#FFF" }}>{inspector.x}px</strong></div>
                <div>Y: <strong style={{ color: "#FFF" }}>{inspector.y}px</strong></div>
              </div>

              {/* Layer Actions */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <button
                  onClick={handleDuplicateSelected}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "0.45rem",
                    borderRadius: "6px",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "var(--text-heading-color, #D0DAED)",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  <Copy size={13} /> Duplicate Element
                </button>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.4rem" }}>
                  <button
                    onClick={handleBringForward}
                    style={{
                      padding: "0.4rem",
                      borderRadius: "6px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      background: "rgba(255, 255, 255, 0.03)",
                      color: "var(--text-heading-color, #D0DAED)",
                      fontSize: "0.72rem",
                      cursor: "pointer",
                    }}
                  >
                    Bring Forward
                  </button>
                  <button
                    onClick={handleSendBackward}
                    style={{
                      padding: "0.4rem",
                      borderRadius: "6px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      background: "rgba(255, 255, 255, 0.03)",
                      color: "var(--text-heading-color, #D0DAED)",
                      fontSize: "0.72rem",
                      cursor: "pointer",
                    }}
                  >
                    Send Backward
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Canvas Background & Overall Settings */
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)", paddingBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.7rem", color: "var(--color-marine, #5CE5D4)", fontWeight: 700, textTransform: "uppercase" }}>
                  Stage Inspector
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>Canvas Background</div>
                <p style={{ margin: "0.3rem 0 0 0", fontSize: "0.75rem", color: "#94A3B8" }}>
                  Click any object on the canvas to inspect, transform, or edit it freely.
                </p>
              </div>

              {/* Background Theme Presets */}
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#94A3B8", marginBottom: "0.5rem" }}>
                  Gradient Presets
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  {BG_PRESETS.map((p) => {
                    const isCurrent = currentBg.name === p.name;
                    return (
                      <div
                        key={p.name}
                        onClick={() => handleSelectBgPreset(p)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          padding: "0.45rem 0.65rem",
                          borderRadius: "8px",
                          border: `1px solid ${isCurrent ? "var(--color-marine, #5CE5D4)" : "rgba(255, 255, 255, 0.08)"}`,
                          background: isCurrent ? "rgba(92, 229, 212, 0.08)" : "rgba(30, 41, 59, 0.3)",
                          cursor: "pointer",
                        }}
                      >
                        <div
                          style={{
                            width: "28px",
                            height: "28px",
                            borderRadius: "6px",
                            background: `linear-gradient(135deg, ${p.c1}, ${p.c2})`,
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                          }}
                        />
                        <span style={{ fontSize: "0.8rem", fontWeight: 500 }}>{p.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Shortcuts Guide */}
              <div
                style={{
                  background: "rgba(30, 41, 59, 0.35)",
                  border: "1px solid rgba(255, 255, 255, 0.07)",
                  borderRadius: "8px",
                  padding: "0.75rem",
                  fontSize: "0.72rem",
                  color: "#94A3B8",
                  lineHeight: 1.5,
                }}
              >
                <div style={{ fontWeight: 600, color: "#FFF", marginBottom: "0.3rem" }}>
                  Quick Canvas Tips:
                </div>
                <div>• Drag elements freely anywhere on stage</div>
                <div>• Click and drag corner anchors to resize/rotate</div>
                <div>• Press <kbd style={{ background: "rgba(255, 255, 255, 0.1)", padding: "1px 4px", borderRadius: "3px" }}>Del</kbd> to delete selected object</div>
                <div>• Click background to deselect transformer</div>
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* 3. COLLAPSIBLE BFF ARCHITECTURE DRAWER */}
      <BffArchitectureDrawer
        bffData={bffData}
        isOpen={isBffDrawerOpen}
        onToggle={() => setIsBffDrawerOpen(!isBffDrawerOpen)}
      />

      {/* 4. TOAST NOTIFICATION */}
      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(15, 23, 42, 0.95)",
            border: `1px solid ${toast.type === "success" ? "#5CE5D4" : "rgba(56, 189, 248, 0.4)"}`,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            color: "#FFFFFF",
            padding: "0.65rem 1.25rem",
            borderRadius: "9999px",
            fontSize: "0.825rem",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            zIndex: 100,
            backdropFilter: "blur(12px)",
          }}
        >
          {toast.type === "success" ? (
            <CheckCircle2 size={16} color="#5CE5D4" />
          ) : (
            <AlertCircle size={16} color="#38BDF8" />
          )}
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
}
