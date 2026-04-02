import { useReducedMotion } from "framer-motion";

export default function Marquee({ children, pauseOnHover = false, className = "" }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-x-hidden [--duration:30s] ${className}`}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <div
        className={`flex w-max animate-[marquee_var(--duration)_linear_infinite] ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
