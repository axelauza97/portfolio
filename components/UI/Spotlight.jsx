import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";

const colorMap = {
  cyan: "rgba(6, 182, 212, 0.15)",
  purple: "rgba(139, 92, 246, 0.15)",
  pink: "rgba(236, 72, 153, 0.15)",
};

// Accepts motion values (spotX, spotY) so spotlight moves without React re-renders
export function Spotlight({ className = "", fill = "cyan", spotX, spotY }) {
  const prefersReducedMotion = useReducedMotion();
  const color = colorMap[fill] || colorMap.cyan;

  const springX = useSpring(spotX ?? 0, { stiffness: 80, damping: 20 });
  const springY = useSpring(spotY ?? 0, { stiffness: 80, damping: 20 });
  const x = useTransform(springX, (v) => v - 300);
  const y = useTransform(springY, (v) => v - 300);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="absolute hidden rounded-full blur-3xl pointer-events-none sm:block"
        style={
          prefersReducedMotion
            ? { width: 600, height: 600, background: color, opacity: 0.4, left: "30%", top: "-20%" }
            : { x, y, width: 600, height: 600, background: color, opacity: 0.5 }
        }
      />
    </div>
  );
}
