"use client";

import React from "react";
import dynamic from "next/dynamic";
import AgentStudioSkeleton from "./AgentStudioSkeleton";

const AgentStudio = dynamic(() => import("./AgentStudio"), {
  ssr: false,
  loading: () => <AgentStudioSkeleton />,
});

export default function AgentStudioClientWrapper() {
  return <AgentStudio />;
}
