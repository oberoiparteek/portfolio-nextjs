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
                <li style={{ padding: '0.75rem 0 0 0', marginTop: '0.25rem' }}>
                    <Link
                        href="/studio"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.45rem 0.85rem',
                            borderRadius: '9999px',
                            background: 'var(--color-bg-marine-light, rgba(92, 229, 212, 0.1))',
                            border: '1px solid rgba(92, 229, 212, 0.35)',
                            color: 'var(--color-marine, #5CE5D4)',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.5px',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap',
                            transition: 'all 0.2s ease',
                        }}
                    >
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', whiteSpace: 'nowrap' }}>
                            <span>🎨</span>
                            <span>CANVAS STUDIO</span>
                        </span>
                        <span style={{ 
                            fontSize: '0.62rem', 
                            background: 'var(--color-marine, #5CE5D4)', 
                            color: '#0F172A', 
                            padding: '1px 5px', 
                            borderRadius: '4px', 
                            fontWeight: 800,
                            lineHeight: 1.2
                        }}>
                            BFF
                        </span>
                    </Link>
                </li>
            </ul>
        </header>
    );
}
