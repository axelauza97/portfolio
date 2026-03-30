import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

export function Spotlight({ className = "", fill = "cyan" }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const colorMap = {
    cyan: "rgba(6, 182, 212, 0.15)",
    purple: "rgba(139, 92, 246, 0.15)",
    pink: "rgba(236, 72, 153, 0.15)",
  };
  const color = colorMap[fill] || colorMap.cyan;

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="absolute rounded-full blur-3xl pointer-events-none"
        animate={
          prefersReducedMotion
            ? { x: "30%", y: "-20%", opacity: 0.4 }
            : { x: position.x - 300, y: position.y - 300, opacity: 0.5 }
        }
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        style={{
          width: 600,
          height: 600,
          background: color,
        }}
      />
    </div>
  );
}
