"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-8 h-8" />;
    }

    return (
        <button
            aria-label="Toggle Dark Mode"
            type="button"
            style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', borderRadius: '9999px', transition: 'background-color 0.2s', color: 'var(--color-marine)', cursor: 'pointer', border: 'none', background: 'transparent'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-marine-light)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? (
                <Sun size={20} />
            ) : (
                <Moon size={20} />
            )}
        </button>
    );
}
