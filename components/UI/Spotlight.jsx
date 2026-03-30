import { motion, useReducedMotion } from "framer-motion";

const colorMap = {
  cyan: "rgba(6, 182, 212, 0.15)",
  purple: "rgba(139, 92, 246, 0.15)",
  pink: "rgba(236, 72, 153, 0.15)",
};

export function Spotlight({ className = "", fill = "cyan", position = { x: 0, y: 0 } }) {
  const prefersReducedMotion = useReducedMotion();
  const color = colorMap[fill] || colorMap.cyan;

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="absolute hidden rounded-full blur-3xl pointer-events-none sm:block"
        animate={
          prefersReducedMotion
            ? { x: "30%", y: "-20%", opacity: 0.4 }
            : { x: position.x - 300, y: position.y - 300, opacity: 0.5 }
        }
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        style={{ width: 600, height: 600, background: color }}
      />
    </div>
  );
}
