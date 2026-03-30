import { experiences } from "@/mocks/experience";
import SectionHeading from "@/components/common/SectionHeading";
import TechBadge from "@/components/common/TechBadge";

const levelColors = {
  intern: "border-emerald-500",
  junior: "border-blue-500",
  "junior-to-mid": "border-violet-500",
  mid: "border-amber-500",
  senior: "border-rose-500",
};

const levelDotColors = {
  intern: "bg-emerald-500",
  junior: "bg-blue-500",
  "junior-to-mid": "bg-violet-500",
  mid: "bg-amber-500",
  senior: "bg-rose-500",
};

export default function Experience() {
  return (
    <section id="experience" className="section-container overflow-x-clip">
      <SectionHeading title="Experience" subtitle="My professional journey" />

      <div className="relative max-w-3xl mx-auto overflow-x-clip">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`timeline-card relative flex items-start mb-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div
              className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full ${levelDotColors[exp.level]} -translate-x-1/2 border-4 border-background z-10`}
            />

            {/* Card */}
            <div
              className={`w-[calc(100%-2.5rem)] md:w-[45%] ml-10 md:ml-0 min-w-0 ${
                i % 2 === 0 ? "md:pr-12" : "md:pl-12"
              } glass-card p-6 border-l-4 ${levelColors[exp.level]}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-text-muted">
                  {exp.period}
                </span>
                <span className="text-xs font-mono px-2 py-1 rounded-full bg-white/5 text-text-muted">
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
