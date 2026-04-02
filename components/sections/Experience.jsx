import { useEffect, useRef } from "react";
import { experiences } from "@/mocks/experience";
import SectionHeading from "@/components/common/SectionHeading";
import TechBadge from "@/components/common/TechBadge";

// Timeline accent colors — map career progression to design-token-aligned hex values
const levelAccentColor = {
  intern: "#06b6d4",      // accent-cyan
  junior: "#8b5cf6",      // accent-purple
  "junior-to-mid": "#ec4899", // accent-pink
  mid: "#f59e0b",         // amber — documented timeline-only color
  senior: "#10b981",      // emerald — documented timeline-only color
};

export default function Experience() {
  const containerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let cleanup = () => {};

    async function setupTimelineAnimation() {
      if (typeof window === "undefined" || !containerRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled || !containerRef.current) return;

      gsap.registerPlugin(ScrollTrigger);

      const cards = gsap.utils.toArray(".timeline-card", containerRef.current);

      // Set initial hidden state via GSAP (not static HTML) so cards stay
      // visible without JS and are only hidden once GSAP is ready
      gsap.set(cards, { opacity: 0, x: 0, y: 16 });

      const triggers = cards.map((card, index) =>
        ScrollTrigger.create({
          trigger: card,
          start: "top 82%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              card,
              {
                x: index % 2 === 0 ? -24 : 24,
                y: 16,
                opacity: 0,
              },
              {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                overwrite: "auto",
              }
            );
          },
        })
      );

      cleanup = () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    }

    setupTimelineAnimation();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <section id="experience" className="section-container overflow-x-clip">
      <SectionHeading title="Experience" subtitle="My professional journey" />

      <div ref={containerRef} className="relative max-w-3xl mx-auto overflow-x-clip">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

        {experiences.map((exp, i) => (
          <div
            key={`${exp.company}-${exp.role}`}
            className={`timeline-card relative flex items-start mb-8 md:mb-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div
              className="absolute left-3 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 border-2 border-background z-10 mt-5"
              style={{ backgroundColor: levelAccentColor[exp.level] }}
            />

            {/* Card */}
            <div
              className={`w-[calc(100%-1.75rem)] md:w-[45%] ml-7 md:ml-0 min-w-0 ${
                i % 2 === 0 ? "md:pr-12" : "md:pl-12"
              } glass-card p-4 md:p-6 border-l-4`}
              style={{ borderLeftColor: levelAccentColor[exp.level] }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-text-secondary">
                  {exp.period}
                </span>
                <span className="text-xs font-mono px-2 py-1 rounded-full bg-white/5 text-text-secondary">
                  {exp.duration}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1 break-words">
                {exp.role}
              </h3>
              <p className="text-accent-cyan text-sm mb-3 break-words">
                {exp.company} · {exp.type}
              </p>
              <ul className="space-y-1 mb-4">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-text-secondary text-sm flex gap-2 break-words">
                    <span className="text-accent-purple mt-1" aria-hidden="true">
                      ▸
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <TechBadge key={tag} name={tag} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
