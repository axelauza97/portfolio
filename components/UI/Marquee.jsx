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
      className={`relative w-full max-w-full overflow-hidden [--duration:30s] ${className}`}
      style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
    >
      <div
        className={`flex w-max min-w-max gap-0 animate-[marquee_var(--duration)_linear_infinite] ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
      >
        {children}
      </div>
      <div
        className={`absolute left-full top-0 flex w-max min-w-max gap-0 animate-[marquee_var(--duration)_linear_infinite] ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
