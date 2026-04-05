import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="relative section-container">
      {/* Subtle gradient at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-accent-teal/[0.03] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <SectionHeading
          title="Let's Build Something"
          subtitle="Have a project in mind? I'd love to hear about it."
        />

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-lg text-center"
        >
          <p className="mb-8 text-text-secondary">
            Whether you have a question, a project idea, or just want to say hi,
            my inbox is always open.
          </p>
          <a
            href="mailto:axelauza97@hotmail.com"
            className="inline-block rounded-full bg-gradient-to-r from-accent-blue to-accent-teal px-8 py-4 text-lg font-medium text-white transition-all hover:shadow-lg hover:shadow-accent-teal/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Email Axel
          </a>

          {/* Social links row */}
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://github.com/axelauza97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors text-sm font-mono"
            >
              GitHub
            </a>
            <span className="text-text-muted/30" aria-hidden="true">·</span>
            <a
              href="https://www.linkedin.com/in/axelauza/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors text-sm font-mono"
            >
              LinkedIn
            </a>
            <span className="text-text-muted/30" aria-hidden="true">·</span>
            <a
              href="mailto:axelauza97@hotmail.com"
              className="text-text-muted hover:text-text-primary transition-colors text-sm font-mono"
            >
              Email
            </a>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-white/10 mx-auto mt-8 mb-6" aria-hidden="true" />

          {/* Footer attribution */}
          <p className="text-text-muted text-xs font-mono">
            Designed &amp; built by Axel Auza &middot; {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
