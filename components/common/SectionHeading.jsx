import { motion, useReducedMotion } from "framer-motion";

export default function SectionHeading({ title, subtitle }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold font-display gradient-text inline-block mb-2">
        {title}
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        className="mx-auto h-0.5 w-16 origin-center bg-gradient-to-r from-accent-sky via-accent-blue to-accent-teal rounded-full mb-4"
      />
      {subtitle && (
        <p className="text-text-secondary max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
