import { useState, useEffect } from "react";

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const NAV_HEIGHT = 80;

    const update = () => {
      // Near the bottom of the page → last section wins
      const nearBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80;
      if (nearBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      const scrollY = window.scrollY + NAV_HEIGHT + 10;

      // Walk sections in order; the last one whose top is at or above
      // the adjusted scroll position is the "current" section.
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    update(); // set correct state on mount
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [sectionIds.join(",")]);

  return activeSection;
}
