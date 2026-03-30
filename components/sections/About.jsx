import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import TechBadge from "@/components/common/TechBadge";
import Marquee from "@/components/ui/Marquee";

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
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center mb-12"
      >
        <p className="text-text-secondary text-lg leading-relaxed">
          Full Stack Developer based in Guayaquil, Ecuador. I build scalable
          web applications and cloud infrastructure — from pixel-perfect React
          UIs to Kubernetes pipelines. I enjoy pushing code that makes a real
          difference.
        </p>
      </motion.div>

      {/* Tech Stack Marquee */}
      <div className="mb-12">
        <p className="text-center text-text-muted text-sm font-mono mb-4">
          Technologies I work with
        </p>
        <Marquee pauseOnHover>
          {techStack.map((name) => (
            <div key={name} className="mx-2">
              <TechBadge name={name} />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Education Card */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-8"
      >
        <div className="glass-card p-6 border border-accent-cyan/20">
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-lg bg-accent-cyan/10 flex items-center justify-center flex-shrink-0 text-2xl"
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
                className="text-accent-cyan text-sm font-mono hover:underline"
              >
                Watch Demo →
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CV Download */}
      <div className="text-center">
        <a
          href="/Axel_Auza_CV.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white transition-all"
        >
          Download CV ↓
        </a>
      </div>
    </section>
  );
}
