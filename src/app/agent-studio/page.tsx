import { Metadata } from "next";
import AgentStudioClientWrapper from "@/components/agent-studio/AgentStudioClientWrapper";

export const metadata: Metadata = {
  title: "Compound AI Systems: Mosaic AI & LangGraph Agent Studio | Parteek Kumar",
  description:
    "Interactive Databricks Mosaic AI & LangGraph agent studio demonstrating cyclical ReAct state machines, MLflow tracing flamegraphs, Unity Catalog governance, and cryptographic Human-In-The-Loop (HITL) Delta Lake partition backfills.",
  openGraph: {
    title: "Compound AI Systems: Mosaic AI & LangGraph Agent Studio | Parteek Kumar",
    description:
      "Interactive Databricks Mosaic AI & LangGraph agent studio demonstrating cyclical ReAct loops, MLflow tracing flamegraphs, and Unity Catalog governance.",
  },
};

export default function AgentStudioPage() {
  return <AgentStudioClientWrapper />;
}
