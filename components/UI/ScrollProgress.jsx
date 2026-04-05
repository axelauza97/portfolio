import { useSpring, useScroll, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 z-[60] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(to right, #60a5fa, #3b82f6, #0d9488)",
        boxShadow: "0 0 8px rgba(59,130,246,0.5)",
      }}
    />
  );
}
