import { motion, useReducedMotion } from "framer-motion";

export function TextGenerateEffect({ words, className = "" }) {
  const prefersReducedMotion = useReducedMotion();
  const wordList = words.split(" ");

  if (prefersReducedMotion) {
    return <p className={className}>{words}</p>;
  }

  return (
    <p className={className}>
      {wordList.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
