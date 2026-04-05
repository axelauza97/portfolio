import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import TechBadge from "@/components/common/TechBadge";
import Marquee from "@/components/UI/Marquee";

const techStack = [
  "React", "Next.js", "Python", "Django",
  "Docker", "Kubernetes", "GCP", "Node.js",
  "Java", "Tailwind", "PostgreSQL", "Git",
];

const stats = [
  { value: "4+", label: "Years coding" },
  { value: "10+", label: "Projects shipped" },
  { value: "5+", label: "Technologies" },
];

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="section-container">
      <SectionHeading title="About Me" subtitle="Who I am and what I do" />

      <div className="grid lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {/* Bio card — 2 cols */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 glass-card p-6"
        >
          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            Full Stack Developer based in Guayaquil, Ecuador. I build scalable
            web applications and cloud infrastructure — from pixel-perfect React
            UIs to Kubernetes pipelines. I enjoy pushing code that makes a real
            difference.
          </p>
          <p className="text-text-secondary text-base leading-relaxed">
            I specialize in React and Next.js on the frontend, Django and Python
            on the backend, and Docker and GCP for deployment. Whether it&apos;s
            a university research platform, a real estate app, or a microservice
            architecture, I focus on clean code, fast delivery, and long-term
            maintainability.
          </p>
        </motion.div>

        {/* Stats card — 1 col */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-6 flex flex-col justify-center gap-6"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-bold font-display gradient-text mb-1">
                {value}
              </div>
              <div className="text-sm text-text-muted font-mono">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tech Stack Marquee — full width */}
        <div className="lg:col-span-3 overflow-x-hidden">
          <p className="text-center text-text-muted text-sm font-mono mb-4">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:hidden">
            {techStack.map((name) => (
              <TechBadge key={name} name={name} />
            ))}
          </div>
          <div className="hidden md:block">
            <Marquee pauseOnHover>
              {techStack.map((name) => (
                <div key={name} className="mx-2">
                  <TechBadge name={name} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Education card — 2 cols */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 glass-card p-6 animate-[glow-pulse_4s_ease-in-out_infinite] border border-accent-blue/20"
        >
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0 text-2xl"
              aria-hidden="true"
            >
              🎓
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">
                B.S. Computer Science — ESPOL
              </h3>
              <p className="text-text-secondary text-sm mb-3">
                Thesis: Modified YOLOv4 to learn from the thermal channel for
                enhanced low-light object detection.
              </p>
              <video
                src="/yolo.mp4"
                controls
                preload="metadata"
                className="w-full rounded-lg mt-2 max-h-48"
              />
            </div>
          </div>
        </motion.div>

        {/* LinkedIn CTA card — 1 col */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-6 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-accent-blue/10 to-accent-teal/5"
        >
          <div className="text-center">
            <div className="text-lg font-bold font-display text-text-primary mb-2">
              Let&apos;s Connect
            </div>
            <div className="text-sm text-text-secondary">
              View my full profile
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/axelauza/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-accent-blue/20 border border-accent-blue/30 text-accent-blue text-sm font-medium hover:bg-accent-blue/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            LinkedIn →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
