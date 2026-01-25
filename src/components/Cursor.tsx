"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // Use requestAnimationFrame for smoother performance
        let requestRef: number;

        const onMouseMove = (event: MouseEvent) => {
            // Direct DOM manipulation is performant enough here
            // But wrapping in rAF ensures it aligns with paint cycles
            cancelAnimationFrame(requestRef);
            requestRef = requestAnimationFrame(() => {
                cursor.style.left = `${event.clientX}px`;
                cursor.style.top = `${event.clientY}px`;
            });
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(requestRef);
        };
    }, []);

    return (
        <div className="cursor-wrapper">
            <div className="cursor" ref={cursorRef}></div>
        </div>
    );
}
