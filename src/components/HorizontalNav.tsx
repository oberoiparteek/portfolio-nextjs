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
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '4px 12px',
                            borderRadius: '9999px',
                            background: 'var(--color-bg-marine-light, rgba(92, 229, 212, 0.12))',
                            border: '1px solid rgba(92, 229, 212, 0.35)',
                            color: 'var(--color-marine, #5CE5D4)',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            letterSpacing: '0.5px',
                            whiteSpace: 'nowrap',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                        }}
                    >
                        <span>🎨 STUDIO</span>
                        <span style={{ fontSize: '0.62rem', background: 'var(--color-marine, #5CE5D4)', color: '#0F172A', padding: '1px 5px', borderRadius: '4px', fontWeight: 800 }}>BFF</span>
                    </Link>
                </li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', borderLeft: '1px solid var(--glass-border)', paddingLeft: '12px' }}>
                <SettingsDropdown />
            </div>
        </header>
    );
}
