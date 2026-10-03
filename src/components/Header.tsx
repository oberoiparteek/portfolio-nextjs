"use client";
import React from "react";
import { useSettings } from "@/providers/SettingsProvider";
import HorizontalNav from "./HorizontalNav";
import SidebarNav from "./SidebarNav";

export default function Header() {
    const { layout } = useSettings();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Provide a stable default for server-side rendering
    if (!mounted) {
        return <SidebarNav />;
    }

    if (layout === "top" || layout === "bottom") {
        return <HorizontalNav position={layout} />;
    }

    return <SidebarNav />;
}
