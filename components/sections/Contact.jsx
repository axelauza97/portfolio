import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="section-container">
      <SectionHeading
        title="Get In Touch"
        subtitle="I'm currently open to new opportunities"
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
      </motion.div>
    </section>
  );
}
