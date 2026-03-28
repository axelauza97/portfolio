import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
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
