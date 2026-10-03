"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FabButtons() {
    const [isFabOpen, setIsFabOpen] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleFab = () => setIsFabOpen(!isFabOpen);
    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
        setIsFabOpen(false);
    };
    const closeMobileNav = () => setIsMobileNavOpen(false);

    return (
        <>
            <AnimatePresence>
                {isMobileNavOpen && (
                    <motion.div
                        className="mobile-nav-overlay active" // Keep active class for CSS base styles if needed, or rely on framer. CSS has 'display: none' without active, so we might need to override.
                        // Actually, if we use conditional rendering, the overlay won't exist in DOM.
                        // We need to make sure the CSS doesn't hide it when it is mounted.
                        // The CSS .mobile-nav-overlay has display:none by default.
                        // We should probably just use inline styles or ensure the CSS matches.
                        // For safely, let's just use the classes but modify visibility handling.
                        // Wait, if I conditionally render it, I don't need 'display: none' in CSS.
                        // But I can't easily change the global CSS right now cleanly without a replace.
                        // Cleaner approach: Just render it and let Framer handle opacity.
                        // But standard "active" class toggle is simpler if we keep CSS.
                        // Framer Motion Approach:
                        style={{ display: 'block', pointerEvents: 'auto', opacity: 1 }} // Override CSS defaults
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="mobile-nav-backdrop"
                            onClick={closeMobileNav}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        <motion.div
                            className="mobile-nav-menu"
                            initial={{ y: "100%" }}
                            animate={{ y: "0%" }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        >
                            <div className="mobile-nav-header">
                                <h3>Navigation</h3>
                                <button
                                    className="mobile-nav-close"
                                    aria-label="Close navigation menu"
                                    onClick={closeMobileNav}
                                >
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
                                </button>
                            </div>
                            <ul className="mobile-nav-list">
                                {["About", "Skills", "Experience", "Projects", "Publications", "Volunteering"].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item.toLowerCase()}`} className="mobile-nav-link" onClick={closeMobileNav}>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button */}
            {/* Note: The CSS .fab-container has display:none on desktop, we should preserve that. */}
            <div className={`fab-container ${isFabOpen ? "active" : ""}`} style={{ zIndex: 100 }}> {/* Keep container for layout, manage state classes for children if needed */}
                <motion.button
                    className="fab-main"
                    aria-label="Open actions menu"
                    onClick={toggleFab}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.svg
                        className="fab-icon fab-icon-menu"
                        animate={{ rotate: isFabOpen ? -90 : 0, opacity: isFabOpen ? 0 : 1 }}
                        // CSS handles this but Framer gives smoother control if we want.
                        // Actually, the CSS implementation rotates them. Let's let CSS handle the icon rotation for now to avoid conflict or duplicate it.
                        // But the user asked for quick wins.
                        // Let's stick to the button scale/pop effect.
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        // Override CSS transition if we animate here? No, let's keep it simple.
                        style={{ position: 'absolute' }}
                    >
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </motion.svg>
                    <motion.svg
                        className="fab-icon fab-icon-close"
                        animate={{ rotate: isFabOpen ? 0 : 90, opacity: isFabOpen ? 1 : 0 }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ position: 'absolute' }}
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </motion.svg>
                </motion.button>

                <AnimatePresence>
                    {isFabOpen && (
                        <motion.div
                            className="fab-actions"
                            // CSS has opacity 0 and transformY(20px) by default
                            // We override with Framer
                            style={{ opacity: 1, pointerEvents: 'auto', transform: 'none' }}
                        >
                            <motion.a
                                href="/r"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="fab-action"
                                data-tooltip="Download Resume"
                                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                transition={{ delay: 0.1 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </motion.a>
                            <motion.button
                                className="fab-action fab-menu-trigger"
                                data-tooltip="Navigation Menu"
                                onClick={toggleMobileNav}
                                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                transition={{ delay: 0.05 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
