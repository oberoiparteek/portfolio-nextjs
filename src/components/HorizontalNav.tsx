"use client";
import React from "react";
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
                background: 'rgba(255, 255, 255, 0.22)',
                backdropFilter: 'blur(24px) saturate(150%)',
                WebkitBackdropFilter: 'blur(24px) saturate(150%)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '16px 32px',
                borderRadius: '24px',
                boxShadow: position === 'top' ? '0 10px 40px rgba(0,0,0,0.4)' : '0 -10px 40px rgba(0,0,0,0.4)',
                marginBottom: position === 'top' ? '40px' : '0',
                marginTop: position === 'bottom' ? '40px' : '0',
            }}
        >
            <ul className="nav" style={{ display: 'flex', flexDirection: 'row', gap: '2.5rem', margin: 0, padding: 0 }}>
                {["about", "skills", "experience", "education", "projects", "publications", "volunteering"].map((item) => (
                    <li key={item} style={{ listStyle: 'none', padding: 0 }}>
                        <a 
                            href={`#${item}`} 
                            onClick={(e) => handleNavClick(e, item)}
                            style={{ 
                                textDecoration: 'none',
                                fontWeight: activeSection === item ? 'bold' : 'normal',
                                opacity: activeSection === item ? 1 : 0.7,
                                fontSize: '0.85rem',
                                textTransform: 'uppercase',
                                color: 'var(--text-heading-color)' // Inherit adaptively
                            }}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            <div style={{ position: 'absolute', right: '24px' }}>
                <SettingsDropdown />
            </div>
        </header>
    );
}
