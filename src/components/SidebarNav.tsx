"use client";
import React from "react";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";
import SettingsDropdown from "./SettingsDropdown";

export default function SidebarNav() {
    const activeSection = useActiveSection();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header style={{ width: '18%', position: 'sticky', top: '2em', height: 'fit-content' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '2rem' }}>
                <SettingsDropdown />
            </div>

            <ul className="nav" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {["about", "experience", "skills", "education", "projects", "publications", "volunteering", "beyond-code"].map((item) => (
                    <li key={item} className={activeSection === item ? "active" : ""} style={{ padding: 0 }}>
                        <a 
                            href={`#${item}`} 
                            onClick={(e) => handleNavClick(e, item)}
                            style={{ 
                                display: 'flex', alignItems: 'center',
                                textDecoration: 'none',
                                color: 'inherit',
                                opacity: activeSection === item ? 1 : 0.6,
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <span 
                                className="nav-indicator"
                                style={{
                                    display: 'inline-block',
                                    transition: 'all 0.15s cubic-bezier(.4, 0, .2, 1)',
                                    backgroundColor: activeSection === item ? 'var(--text-heading-color)' : 'rgb(var(--text-s-color))',
                                    width: activeSection === item ? '3rem' : '2rem',
                                    height: '1px',
                                    marginRight: '1rem',
                                    opacity: activeSection === item ? 1 : 0.6
                                }}
                            />
                            <small style={{ fontSize: '0.8rem', fontWeight: activeSection === item ? 700 : 500, letterSpacing: '1px' }}>
                                {item.replace('-', ' ').toUpperCase()}
                            </small>
                        </a>
                    </li>
                ))}
                <li style={{ padding: '0.75rem 0 0 0', marginTop: '0.25rem', listStyle: 'none' }}>
                    <Link
                        href="/studio"
                        className="studio-nav-btn"
                    >
                        <span className="studio-icon">🎨</span>
                        <span>CANVAS STUDIO</span>
                        <span className="studio-badge">BFF</span>
                    </Link>
                </li>
                <li style={{ padding: '0.4rem 0 0 0', listStyle: 'none' }}>
                    <Link
                        href="/agent-studio"
                        className="studio-nav-btn agent-nav-btn"
                        style={{ borderColor: 'rgba(56, 189, 248, 0.4)' }}
                    >
                        <span className="studio-icon">⚡</span>
                        <span>AGENT STUDIO</span>
                        <span className="studio-badge" style={{ background: '#38BDF8', color: '#0F172A' }}>AI</span>
                    </Link>
                </li>
            </ul>
        </header>
    );
}
