"use client";

import { useEffect, useState } from "react";

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleObserve = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                } else {
                    // Only clear if the exiting section is the currently active one
                    setActiveSection((prev) => (prev === entry.target.id ? "" : prev));
                }
            });
        };

        const observer1 = new IntersectionObserver(handleObserve, { threshold: 0.4 });
        const observer2 = new IntersectionObserver(handleObserve, {
            rootMargin: "-300px",
        });

        const sections = document.querySelectorAll("section");

        sections.forEach((section) => {
            if (
                ["experience", "projects", "publications", "volunteering"].includes(
                    section.id
                )
            ) {
                observer2.observe(section);
            } else {
                observer1.observe(section);
            }
        });

        return () => {
            observer1.disconnect();
            observer2.disconnect();
        };
    }, []);

    return activeSection;
}
