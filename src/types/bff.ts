export interface MetricHighlight {
  label: string;
  value: string;
  trend?: string;
}

export interface CanvasTagPreset {
  text: string;
  x: number;
  y: number;
  fill?: string;
  bg?: string;
  border?: string;
}

export interface CanvasMetricPreset {
  value: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  bg?: string;
  border?: string;
  textColor?: string;
  valueColor?: string;
}

export interface CanvasLayoutPreset {
  background: {
    type: "gradient" | "solid";
    color1: string;
    color2: string;
    angle?: number;
  };
  glowCard?: {
    x: number;
    y: number;
    width: number;
    height: number;
    fill: string;
    stroke: string;
    cornerRadius?: number;
  };
  badgeCategory: {
    text: string;
    x: number;
    y: number;
    fill: string;
    bg: string;
    border: string;
  };
  title: {
    text: string;
    fontSize: number;
    fill: string;
    x: number;
    y: number;
    fontWeight?: string;
  };
  subtitle: {
    text: string;
    fontSize: number;
    fill: string;
    x: number;
    y: number;
  };
  metrics: CanvasMetricPreset[];
  tags: CanvasTagPreset[];
}

export interface Artifact {
  id: string;
  title: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  category: "Enterprise MFE" | "Network Telecom" | "Healthcare Telemetry" | "Distributed Service" | "Interactive Gaming";
  tags: string[];
  metrics: MetricHighlight[];
  themePresets: {
    name: string;
    accentColor: string;
    textColor: string;
    secondaryColor: string;
    bgGradient: [string, string];
    cardBg: string;
    cardBorder: string;
  };
  mockExportStatus: "ready" | "synced" | "draft" | "exported";
  canvasPreset: CanvasLayoutPreset;
  updatedAt: string;
}

export interface BFFCatalogResponse {
  success: boolean;
  timestamp: string;
  count: number;
  artifacts: Artifact[];
  architecture: {
    pattern: "Backend-For-Frontend (BFF)";
    upstreamServices: string[];
    aggregationLatencyMs: number;
    cacheHit: boolean;
    fargateQueueStatus: "online" | "idle" | "processing";
    notes: string;
  };
}

export interface SaveThumbnailRequest {
  artifactId: string;
  artifactTitle: string;
  thumbnailName?: string;
  canvasData: {
    elementsCount: number;
    previewDataUrl?: string;
    objectsMeta?: Array<{
      type: string;
      text?: string;
      x: number;
      y: number;
      width?: number;
      height?: number;
    }>;
  };
}

export interface SaveThumbnailResponse {
  success: boolean;
  message: string;
  jobId: string;
  savedAt: string;
  record: {
    artifactId: string;
    artifactTitle: string;
    thumbnailName: string;
    elementsSaved: number;
    storagePath: string;
    mockRenderQueue: "queued_aws_fargate" | "completed";
  };
}
