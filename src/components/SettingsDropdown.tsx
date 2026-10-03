"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useSettings } from "@/providers/SettingsProvider";
import { useTheme } from "next-themes";
import { Settings, Sun, Moon, Box, Layers, AlignLeft, AlignRight, AlignVerticalSpaceAround, AlignVerticalJustifyCenter } from "lucide-react";

export default function SettingsDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const { enableTilt, setEnableTilt, layout, setLayout } = useSettings();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    if (!mounted) return <div className="w-8 h-8" />;

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', borderRadius: '9999px', transition: 'background-color 0.2s', color: 'var(--color-marine)', cursor: 'pointer', border: 'none', background: 'transparent'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-marine-light)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                aria-label="Visual Settings"
            >
                <Settings size={20} className="hover:rotate-90 transition-transform duration-300" />
            </button>

            {isOpen && mounted && createPortal(
                <div 
                    style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: '16px',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                    }}
                    onClick={() => setIsOpen(false)}
                >
                    <div 
                        style={{ 
                            position: 'relative', width: '100%', maxWidth: '384px',
                            padding: '32px', borderRadius: '16px',
                            background: 'var(--color-background)', 
                            border: '1px solid var(--glass-border)',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            transform: 'translateY(0)',
                            animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            style={{
                                position: 'absolute', top: '16px', right: '16px', 
                                background: 'transparent', border: 'none', 
                                color: 'var(--color-marine)', cursor: 'pointer',
                                fontSize: '1.2rem', padding: '8px'
                            }}
                            onClick={() => setIsOpen(false)}
                        >
                            ✕
                        </button>

                        <h2 className="text-xl font-bold mb-6 text-center" style={{ color: 'var(--text-heading-color)' }}>Visual Settings</h2>
                        
                        <div className="mb-6">
                            <label className="text-sm font-semibold mb-2 block opacity-70">Theme</label>
                            <div style={{ display: 'flex', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '4px', gap: '4px', border: '1px solid var(--glass-border)' }}>
                                <button onClick={() => setTheme('dark')} style={{ flex: 1, padding: '8px 0', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '0.875rem', cursor: 'pointer', transition: 'background-color 0.2s', border: 'none', background: theme === 'dark' ? 'var(--color-marine)' : 'transparent', color: theme === 'dark' ? 'var(--color-background)' : 'inherit', fontWeight: theme === 'dark' ? 'bold' : 'normal', boxShadow: theme === 'dark' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none' }}>
                                    <Moon size={16} /> Dark
                                </button>
                                <button onClick={() => setTheme('light')} style={{ flex: 1, padding: '8px 0', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '0.875rem', cursor: 'pointer', transition: 'background-color 0.2s', border: 'none', background: theme === 'light' ? 'var(--color-marine)' : 'transparent', color: theme === 'light' ? 'var(--color-background)' : 'inherit', fontWeight: theme === 'light' ? 'bold' : 'normal', boxShadow: theme === 'light' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none' }}>
                                    <Sun size={16} /> Light
                                </button>
                            </div>
                        </div>

                        <div className="mb-6 desktop-only-setting">
                            <label className="text-sm font-semibold mb-2 block opacity-70">Physics (Cards)</label>
                            <div style={{ display: 'flex', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '4px', gap: '4px', border: '1px solid var(--glass-border)' }}>
                                <button onClick={() => setEnableTilt(true)} style={{ flex: 1, padding: '8px 0', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '0.875rem', cursor: 'pointer', transition: 'background-color 0.2s', border: 'none', background: enableTilt ? 'var(--color-marine)' : 'transparent', color: enableTilt ? 'var(--color-background)' : 'inherit', fontWeight: enableTilt ? 'bold' : 'normal', boxShadow: enableTilt ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none' }}>
                                    <Box size={16} /> 3D Tilt
                                </button>
                                <button onClick={() => setEnableTilt(false)} style={{ flex: 1, padding: '8px 0', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '0.875rem', cursor: 'pointer', transition: 'background-color 0.2s', border: 'none', background: !enableTilt ? 'var(--color-marine)' : 'transparent', color: !enableTilt ? 'var(--color-background)' : 'inherit', fontWeight: !enableTilt ? 'bold' : 'normal', boxShadow: !enableTilt ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none' }}>
                                    <Layers size={16} /> Flat
                                </button>
                            </div>
                        </div>

                        <div className="desktop-only-setting">
                            <label className="text-sm font-semibold mb-2 block opacity-70">Navigation Layout</label>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '4px', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '4px', border: '1px solid var(--glass-border)' }}>
                                {(['left', 'right', 'top', 'bottom'] as const).map((l) => (
                                    <button 
                                        key={l}
                                        onClick={() => setLayout(l)} 
                                        style={{ padding: '8px 0', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '0.875rem', textTransform: 'capitalize', cursor: 'pointer', transition: 'background-color 0.2s', border: 'none', background: layout === l ? 'var(--color-marine)' : 'transparent', color: layout === l ? 'var(--color-background)' : 'inherit', fontWeight: layout === l ? 'bold' : 'normal', boxShadow: layout === l ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none' }}
                                    >
                                        {l === 'left' && <AlignLeft size={16} />}
                                        {l === 'right' && <AlignRight size={16} />}
                                        {l === 'top' && <AlignVerticalSpaceAround size={16} />}
                                        {l === 'bottom' && <AlignVerticalJustifyCenter size={16} />}
                                        {l}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
