import { motion, useReducedMotion } from "framer-motion";

export default function SectionHeading({ title, subtitle }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
