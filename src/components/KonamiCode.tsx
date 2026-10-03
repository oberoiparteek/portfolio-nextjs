"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

const KONAMI_CODE = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
];

export default function KonamiCode() {
    useEffect(() => {
        // Console Nudge
        console.log("%c🎮 Psst... Do you know the Konami Code? (↑ ↑ ↓ ↓ ← → ← → B A)", "color: #5ce5d4; font-size: 14px; font-weight: bold; font-family: monospace;");

        let inputSequence: string[] = [];

        const handleKeyDown = (e: KeyboardEvent) => {
            inputSequence.push(e.key);
            
            if (inputSequence.length > KONAMI_CODE.length) {
                inputSequence.shift();
            }

            if (inputSequence.join(",") === KONAMI_CODE.join(",")) {
                triggerEasterEgg();
                inputSequence = [];
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const triggerEasterEgg = () => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
        }, 250);
    };

    // Return a hidden div with the HTML comment nudge
    return <div dangerouslySetInnerHTML={{ __html: '<!-- 🎮 Psst... Do you know the Konami Code? (↑ ↑ ↓ ↓ ← → ← → B A) -->' }} />;
}
