import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15, restDelta: 0.001 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15, restDelta: 0.001 });
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 28 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 28 });
  const isHoveredRef = useRef(false);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only activate on pointer:fine devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleEnter = () => {
      isHoveredRef.current = true;
      if (ringRef.current) {
        ringRef.current.style.width = "48px";
        ringRef.current.style.height = "48px";
        ringRef.current.style.opacity = "0.6";
      }
    };

    const handleLeave = () => {
      isHoveredRef.current = false;
      if (ringRef.current) {
        ringRef.current.style.width = "20px";
        ringRef.current.style.height = "20px";
        ringRef.current.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", handleMove);

    const addListeners = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });
    };

    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer ring — spring follower */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border border-accent-blue/40 pointer-events-none z-[9999] mix-blend-difference transition-[width,height,opacity] duration-200"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: "20px",
          height: "20px",
        }}
      />
      {/* Inner dot — instant follow */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-accent-blue pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
