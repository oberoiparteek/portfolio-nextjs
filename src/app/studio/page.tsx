import { Metadata } from "next";
import StudioClientWrapper from "@/components/studio/StudioClientWrapper";

export const metadata: Metadata = {
  title: "Visual Artifact Studio (BFF & Konva) | Parteek Kumar",
  description:
    "Interactive Konva.js canvas studio demonstrating Backend-For-Frontend (BFF) architecture, microservice decoupling, dynamic visual rendering, and automated artifact generation.",
  openGraph: {
    title: "Visual Artifact Studio (BFF & Konva) | Parteek Kumar",
    description:
      "Interactive Konva.js canvas studio demonstrating Backend-For-Frontend (BFF) architecture and 60fps dynamic visual rendering.",
  },
};

export default function StudioPage() {
  return <StudioClientWrapper />;
}
