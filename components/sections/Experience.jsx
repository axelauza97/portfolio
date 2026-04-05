import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/mocks/experience";
import SectionHeading from "@/components/common/SectionHeading";
import TechBadge from "@/components/common/TechBadge";

// Timeline accent colors — map career progression to design-token-aligned hex values
const levelAccentColor = {
  intern: "#38bdf8",           // sky-400
  junior: "#3b82f6",           // accent-blue
  "junior-to-mid": "#6366f1",  // indigo-500
  mid: "#0d9488",              // accent-teal
  senior: "#10b981",           // emerald — unchanged
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

      const container = containerRef.current;
      const cards = gsap.utils.toArray(".timeline-card", container);

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

      // Timeline line draw
      const line = container.querySelector(".timeline-line");
      if (line) {
        gsap.fromTo(
          line,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1,
            },
          }
        );
      }

      // Dot bloom animation
      const dots = container.querySelectorAll(".timeline-dot");
      dots.forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: dot,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      cleanup = () => {
        triggers.forEach((trigger) => trigger.kill());
        ScrollTrigger.getAll().forEach((st) => st.kill());
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

      {/* Career Progress Bar */}
      <div className="mb-12 max-w-2xl mx-auto">
        <div className="relative">
          {/* Background track */}
          <div className="absolute top-3 left-4 right-4 h-px bg-white/10" />
          {/* Progress fill */}
          <motion.div
            className="absolute top-3 left-4 h-px bg-gradient-to-r from-accent-sky via-accent-blue to-accent-teal"
            initial={{ width: 0 }}
            whileInView={{ width: "calc(100% - 2rem)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />
          {/* Level dots */}
          <div className="relative flex justify-between px-0">
            {[
              { label: "Intern", color: "#38bdf8" },
              { label: "Junior", color: "#3b82f6" },
              { label: "Mid", color: "#6366f1" },
              { label: "Senior", color: "#0d9488" },
              { label: "Now", color: "#10b981" },
            ].map((level, i, arr) => (
              <motion.div
                key={level.label}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              >
                <div
                  className="relative w-3 h-3 rounded-full border-2"
                  style={{
                    backgroundColor: level.color,
                    borderColor: level.color,
                    boxShadow: i === arr.length - 1 ? `0 0 12px ${level.color}` : "none",
                  }}
                >
                  {i === arr.length - 1 && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: level.color }}
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                </div>
                <span className="text-xs font-mono text-text-muted">{level.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div ref={containerRef} className="relative max-w-3xl mx-auto overflow-x-clip">
        {/* Vertical line */}
        <div className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

        {experiences.map((exp, i) => (
          <div
            key={`${exp.company}-${exp.role}`}
            className={`timeline-card relative flex items-start mb-8 md:mb-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div
              className="timeline-dot absolute left-3 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 border-2 border-background z-10 mt-5"
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
              <p className="text-accent-blue text-sm mb-3 break-words">
                {exp.company} · {exp.type}
              </p>
              <ul className="space-y-1 mb-4">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-text-secondary text-sm flex gap-2 break-words">
                    <span className="text-accent-teal mt-1" aria-hidden="true">
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
