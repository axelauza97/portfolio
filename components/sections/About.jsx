import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import TechBadge from "@/components/common/TechBadge";
import Marquee from "@/components/UI/Marquee";

const techStack = [
  "React", "Next.js", "Python", "Django",
  "Docker", "Kubernetes", "GCP", "Node.js",
  "Java", "Tailwind", "PostgreSQL", "Git",
];

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="section-container">
      <SectionHeading title="About Me" subtitle="Who I am and what I do" />

      {/* Bio */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center mb-12"
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

      {/* Tech Stack Marquee */}
      <div className="mb-12 overflow-x-hidden">
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

      {/* Education Card */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto mb-8"
      >
        <div className="glass-card p-6 border border-accent-blue/20">
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
              <a
                href="https://www.youtube.com/watch?v=P-S0G-PbAjQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch thesis demo on YouTube (opens in new tab)"
                className="text-accent-blue text-sm font-mono hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-1 focus-visible:ring-offset-background rounded"
              >
                Watch Thesis Demo →
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Profile CTA */}
      <div className="text-center">
        <a
          href="https://www.linkedin.com/in/axelauza/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Connect on LinkedIn →
        </a>
      </div>
    </section>
  );
}
