"use client";

import React from "react";
import dynamic from "next/dynamic";
import StudioSkeleton from "./StudioSkeleton";

const CanvasStudio = dynamic(() => import("./CanvasStudio"), {
  ssr: false,
  loading: () => <StudioSkeleton />,
});

export default function StudioClientWrapper() {
  return <CanvasStudio />;
}
