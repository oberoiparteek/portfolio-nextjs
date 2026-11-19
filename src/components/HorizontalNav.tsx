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
                top: position === 'top' ? '2em' : 'auto', 
                bottom: position === 'bottom' ? '2em' : 'auto',
                zIndex: 50,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--glass-nav-bg, rgba(255, 255, 255, 0.22))',
                backdropFilter: 'blur(24px) saturate(150%)',
                WebkitBackdropFilter: 'blur(24px) saturate(150%)',
                border: '1px solid var(--glass-border)',
                padding: '14px 28px',
                borderRadius: '9999px',
                boxShadow: 'var(--glass-nav-shadow, 0 10px 40px rgba(0,0,0,0.3))',
                marginBottom: position === 'top' ? '40px' : '0',
                marginTop: position === 'bottom' ? '40px' : '0',
            }}
        >
            <ul className="nav" style={{ display: 'flex', flexDirection: 'row', gap: '2rem', margin: 0, padding: 0, alignItems: 'center' }}>
                {["about", "experience", "skills", "education", "projects", "publications", "volunteering", "beyond-code"].map((item) => (
                    <li key={item} style={{ listStyle: 'none', padding: 0 }}>
                        <a 
                            href={`#${item}`} 
                            onClick={(e) => handleNavClick(e, item)}
                            style={{ 
                                textDecoration: 'none',
                                fontWeight: activeSection === item ? 700 : 500,
                                opacity: activeSection === item ? 1 : 0.65,
                                fontSize: '0.825rem',
                                letterSpacing: '0.5px',
                                textTransform: 'uppercase',
                                color: activeSection === item ? 'var(--color-marine)' : 'var(--text-heading-color)',
                                borderBottom: activeSection === item ? '2px solid var(--color-marine)' : '2px solid transparent',
                                paddingBottom: '4px',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {item.replace('-', ' ')}
                        </a>
                    </li>
                ))}
                <li style={{ listStyle: 'none', padding: 0 }}>
                    <Link
                        href="/studio"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '3px 10px',
                            borderRadius: '9999px',
                            background: 'var(--color-bg-marine-light)',
                            border: '1px solid rgba(92, 229, 212, 0.35)',
                            color: 'var(--color-marine)',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                        }}
                    >
                        <span>🎨 STUDIO</span>
                    </Link>
                </li>
            </ul>

            <div style={{ position: 'absolute', right: '24px' }}>
                <SettingsDropdown />
            </div>
        </header>
    );
}
