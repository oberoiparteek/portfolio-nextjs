"use client";
import React from "react";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";
import SettingsDropdown from "./SettingsDropdown";

export default function HorizontalNav({ position }: { position: "top" | "bottom" }) {
    const activeSection = useActiveSection();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header 
            className="horizontal-header"
            style={{ 
                position: 'sticky', 
                top: position === 'top' ? '1.5em' : 'auto', 
                bottom: position === 'bottom' ? '1.5em' : 'auto',
                zIndex: 50,
                width: 'fit-content',
                maxWidth: '92vw',
                margin: position === 'top' ? '0 auto 2.5rem auto' : '2.5rem auto 0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.25rem',
                background: 'var(--glass-nav-bg, rgba(255, 255, 255, 0.22))',
                backdropFilter: 'blur(24px) saturate(150%)',
                WebkitBackdropFilter: 'blur(24px) saturate(150%)',
                border: '1px solid var(--glass-border)',
                padding: '8px 18px',
                borderRadius: '9999px',
                boxShadow: 'var(--glass-nav-shadow, 0 10px 40px rgba(0,0,0,0.3))',
            }}
        >
            <ul className="nav" style={{ display: 'flex', flexDirection: 'row', gap: '1.25rem', margin: 0, padding: 0, alignItems: 'center' }}>
                {["about", "experience", "skills", "education", "projects", "publications", "volunteering", "beyond-code"].map((item) => (
                    <li key={item} style={{ listStyle: 'none', padding: 0 }}>
                        <a 
                            href={`#${item}`} 
                            onClick={(e) => handleNavClick(e, item)}
                            style={{ 
                                textDecoration: 'none',
                                fontWeight: activeSection === item ? 700 : 500,
                                opacity: activeSection === item ? 1 : 0.65,
                                fontSize: '0.8rem',
                                letterSpacing: '0.5px',
                                textTransform: 'uppercase',
                                color: activeSection === item ? 'var(--color-marine)' : 'var(--text-heading-color)',
                                borderBottom: activeSection === item ? '2px solid var(--color-marine)' : '2px solid transparent',
                                paddingBottom: '3px',
                                transition: 'all 0.2s ease',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {item.replace('-', ' ')}
                        </a>
                    </li>
                ))}
                <li style={{ listStyle: 'none', padding: 0 }}>
                    <Link
                        href="/studio"
                        className="studio-nav-btn"
                    >
                        <span className="studio-icon">🎨</span>
                        <span>STUDIO</span>
                        <span className="studio-badge">BFF</span>
                    </Link>
                </li>
                <li style={{ listStyle: 'none', padding: 0 }}>
                    <Link
                        href="/agent-studio"
                        className="studio-nav-btn agent-nav-btn"
                        style={{ borderColor: 'rgba(56, 189, 248, 0.4)' }}
                    >
                        <span className="studio-icon">⚡</span>
                        <span>AGENTS</span>
                        <span className="studio-badge" style={{ background: '#38BDF8', color: '#0F172A' }}>AI</span>
                    </Link>
                </li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', borderLeft: '1px solid var(--glass-border)', paddingLeft: '12px' }}>
                <SettingsDropdown />
            </div>
        </header>
    );
}
