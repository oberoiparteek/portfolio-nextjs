"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

type LayoutPos = 'left' | 'right' | 'top' | 'bottom';

type SettingsContextType = {
  enableTilt: boolean;
  setEnableTilt: (val: boolean) => void;
  layout: LayoutPos;
  setLayout: (val: LayoutPos) => void;
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [enableTilt, setEnableTilt] = useState(true);
  const [layout, setLayout] = useState<LayoutPos>('left');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTilt = localStorage.getItem("enableTilt");
    if (savedTilt !== null) setEnableTilt(JSON.parse(savedTilt));
    
    const savedLayout = localStorage.getItem("layoutPos") as LayoutPos;
    if (savedLayout) {
        setLayout(savedLayout);
        document.documentElement.setAttribute('data-layout', savedLayout);
    } else {
        document.documentElement.setAttribute('data-layout', 'left');
    }
  }, []);

  const handleSetTilt = (val: boolean) => {
    setEnableTilt(val);
    localStorage.setItem("enableTilt", JSON.stringify(val));
  };

  const handleSetLayout = (val: LayoutPos) => {
    setLayout(val);
    localStorage.setItem("layoutPos", val);
    document.documentElement.setAttribute('data-layout', val);
  };

  if (!mounted) return <SettingsContext.Provider value={{ enableTilt: true, setEnableTilt: () => {}, layout: 'left', setLayout: () => {} }}>{children}</SettingsContext.Provider>;

  return (
    <SettingsContext.Provider value={{ enableTilt, setEnableTilt: handleSetTilt, layout, setLayout: handleSetLayout }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) throw new Error("useSettings must be used within SettingsProvider");
  return context;
}
