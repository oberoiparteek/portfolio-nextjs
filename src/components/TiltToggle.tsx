"use client";
import React, { useEffect, useState } from "react";
import { useSettings } from "@/providers/SettingsProvider";
import { Box, Layers } from "lucide-react";

export default function TiltToggle() {
    const { enableTilt, setEnableTilt } = useSettings();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <div className="w-8 h-8" />;
    }

    return (
        <button
            aria-label="Toggle 3D Tilt Effect"
            type="button"
            title={enableTilt ? "Disable 3D Effects" : "Enable 3D Effects"}
            style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', borderRadius: '9999px', transition: 'background-color 0.2s', color: 'var(--color-marine)', cursor: 'pointer', border: 'none', background: 'transparent'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-marine-light)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            onClick={() => setEnableTilt(!enableTilt)}
        >
            {enableTilt ? (
                <Box size={20} />
            ) : (
                <Layers size={20} />
            )}
        </button>
    );
}
