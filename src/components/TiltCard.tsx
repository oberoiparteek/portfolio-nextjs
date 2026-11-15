"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { useSettings } from "@/providers/SettingsProvider";

export default function TiltCard({ children }: { children: React.ReactNode }) {
    const { enableTilt } = useSettings();
    const [reducedMotion, setReducedMotion] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(motionQuery.matches);
        const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
        motionQuery.addEventListener?.("change", handleMotionChange);

        const pointerQuery = window.matchMedia("(hover: none), (pointer: coarse)");
        setIsTouchDevice(pointerQuery.matches);

        return () => {
            motionQuery.removeEventListener?.("change", handleMotionChange);
        };
    }, []);

    // Respect reduced motion accessibility and avoid mobile touch conflicts
    if (!enableTilt || reducedMotion || isTouchDevice) return <>{children}</>;

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
            className="tilt-wrapper"
            style={{ 
                transformStyle: "preserve-3d",
                willChange: isHovering ? "transform" : "auto"
            }}
        >
            {children}
        </motion.div>
    );
}
