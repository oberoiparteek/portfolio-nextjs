"use client";

import { useMobileNav } from "@/context/MobileNavContext";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/app/images/logo.png";
import ThemeToggle from "./ThemeToggle";

export default function MobileTopBar() {
    const { toggle, isOpen } = useMobileNav();
    const { scrollY } = useScroll();
    const [isMounted, setIsMounted] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Avoid hydration mismatch by waiting for mount
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = lastScrollY;
        // Update last scroll position
        setLastScrollY(latest);

        // Logic: 
        // 1. If at top (< 50px), always show.
        // 2. If scrolling down (latest > previous) AND not at top, Hide.
        // 3. If scrolling up (latest < previous), Show.

        if (latest < 50) {
            setHidden(false);
        } else if (latest > previous && latest > 50) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // background opacity: start transparent, become solid dark after 50px
    const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.85]);
    const borderOpacity = useTransform(scrollY, [0, 50], [0, 0.3]);
    const blurValue = useTransform(scrollY, [0, 50], [0, 12]);

    // Name animation: start hidden, fade in as we scroll past 100px
    const nameOpacity = useTransform(scrollY, [50, 150], [0, 1]);
    const nameY = useTransform(scrollY, [50, 150], [10, 0]);

    // Transform outputs must be defined at top level to avoid Hook rules violation
    const backgroundColor = useTransform(
        bgOpacity,
        (v) => `rgba(15, 23, 42, ${v})`
    );
    const borderBottom = useTransform(
        borderOpacity,
        (v) => `1px solid rgba(92, 229, 213, ${v})`
    );
    const backdropFilter = useTransform(blurValue, (v) => `blur(${v}px)`);

    if (!isMounted) return null;

    return (
        <motion.div
            className="mobile-top-bar"
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
                zIndex: 50,
                position: "sticky",
                top: 0,
                width: "calc(100% + 2rem)",
                marginLeft: "-1rem",
                marginRight: "-1rem",
                backgroundColor,
                borderBottom,
                backdropFilter,
                WebkitBackdropFilter: backdropFilter,
            }}
        >
            <div className="mobile-top-bar-content">
                <motion.div
                    className="mobile-brand-logo"
                    style={{
                        opacity: nameOpacity,
                        y: nameY,
                        display: 'block'
                    }}
                >
                    <Image
                        src={logo}
                        alt="Parteek Kumar"
                        height={40}
                        width={40}
                        style={{ width: 'auto', height: '40px', objectFit: 'contain' }}
                        priority
                    />
                </motion.div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <ThemeToggle />
                    <button
                        onClick={toggle}
                        className="mobile-menu-btn"
                        aria-label="Toggle navigation menu"
                        // Keep button always fully visible
                        style={{ opacity: 1 }}
                    >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )}
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
