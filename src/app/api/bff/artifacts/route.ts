export const dynamic = "force-static";
import { NextRequest, NextResponse } from "next/server";
import { Artifact, BFFCatalogResponse, SaveThumbnailRequest, SaveThumbnailResponse } from "@/types/bff";

import { ARTIFACTS_CATALOG } from "@/data/artifactsCatalog";

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
