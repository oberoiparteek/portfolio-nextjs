"use client";

import Link from "next/link";
import { useMobileNav } from "@/context/MobileNavContext";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
    const { isOpen, close } = useMobileNav();

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="mobile-nav-overlay active"
                    style={{
                        display: 'block',
                        pointerEvents: 'auto',
                        opacity: 1,
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        zIndex: 1000
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="mobile-nav-backdrop"
                        onClick={close}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    <motion.div
                        className="mobile-nav-menu"
                        style={{
                            paddingTop: '80px', // Space for top bar or just aesthetic padding 
                            height: '100%',
                            background: 'var(--color-nav-uiblur-stuck)', // Apple style blur
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)'
                        }}
                        initial={{ y: "-100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                        <div className="mobile-nav-header">
                            <h3>Navigation</h3>
                            <button
                                className="mobile-nav-close"
                                aria-label="Close navigation menu"
                                onClick={close}
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
                            {[
                                { name: "About", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg> },
                                { name: "Skills", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> },
                                { name: "Experience", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> },
                                { name: "Education", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> },
                                { name: "Projects", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> },
                                { name: "Publications", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg> },
                                { name: "Volunteering", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> }
                            ].map((item) => (
                                <li key={item.name}>
                                    <a href={`#${item.name.toLowerCase()}`} className="mobile-nav-link" onClick={close} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <span style={{ color: 'var(--color-marine)', display: 'flex' }}>
                                            {item.icon}
                                        </span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                            {/* Studio Subapp Link */}
                            <li style={{ marginTop: '8px', borderTop: '1px solid var(--glass-border)', paddingTop: '10px' }}>
                                <Link
                                    href="/studio"
                                    className="mobile-nav-link"
                                    onClick={close}
                                    style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-marine)', fontWeight: 600 }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                                    </svg>
                                    Visual Artifact Studio (BFF)
                                </Link>
                            </li>
                            {/* Agent Studio Link */}
                            <li style={{ marginTop: '4px', paddingTop: '4px' }}>
                                <Link
                                    href="/agent-studio"
                                    className="mobile-nav-link"
                                    onClick={close}
                                    style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#38BDF8', fontWeight: 600 }}
                                >
                                    <span style={{ fontSize: '18px' }}>⚡</span>
                                    Mosaic AI Agent Studio (LangGraph)
                                </Link>
                            </li>
                            {/* Added Resume Download Link here since we removed FAB */}
                            <li style={{ marginTop: '12px', borderTop: '1px solid var(--glass-border)', paddingTop: '12px' }}>
                                <a
                                    href="/r"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mobile-nav-link"
                                    onClick={close}
                                    style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
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
                                    Download Resume
                                </a>
                            </li>

                            {/* Mobile Drawer Social Links */}
                            <li style={{ marginTop: '20px', borderTop: '1px solid var(--glass-border)', paddingTop: '18px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '0 12px' }}>
                                    <a href="https://github.com/oberoiparteek" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--text-heading-color)', opacity: 0.8 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                                    </a>
                                    <a href="https://twitter.com/oberoi_parteek" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: 'var(--text-heading-color)', opacity: 0.8 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                                    </a>
                                    <a href="https://www.linkedin.com/in/kumarparteek/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--text-heading-color)', opacity: 0.8 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                                    </a>
                                    <a href="mailto:oberoi.parteek@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" style={{ color: 'var(--color-marine)', opacity: 0.9 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
