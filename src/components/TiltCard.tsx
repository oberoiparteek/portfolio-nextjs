"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { useSettings } from "@/providers/SettingsProvider";

export default function TiltCard({ children }: { children: React.ReactNode }) {
    const { enableTilt } = useSettings();
    if (!enableTilt) return <>{children}</>;

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ x: 0, y: 0 });
            }}
            animate={{
                rotateX: isHovering ? mousePosition.y * -15 : 0, 
                rotateY: isHovering ? mousePosition.x * 15 : 0,
                transformPerspective: 1000,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="tilt-wrapper" style={{ transformStyle: "preserve-3d" }}
        >
            {children}
        </motion.div>
    );
}
