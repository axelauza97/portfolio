import { useCallback } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Spotlight } from "@/components/UI/Spotlight";
import MagneticButton from "@/components/UI/MagneticButton";

const Typewriter = dynamic(() => import("typewriter-effect"), {
  ssr: false,
  loading: () => <span>Full Stack Developer</span>,
});

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/axelauza97",
    icon: FaGithub,
    external: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/axelauza/",
    icon: FaLinkedin,
    external: true,
  },
  {
    name: "Email",
    href: "mailto:axelauza97@hotmail.com",
    icon: Mail,
    external: false,
  },
];

const roles = [
  "Full Stack Developer",
  "React Engineer",
  "Django Developer",
  "Cloud Architect",
];

// #6 Split-text name animation variants
const nameVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
};
const charVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// #24 Page load sequence variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);

  // #19 Dot grid parallax
  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, [0, 600], [0, -180]);

  const handleMouseMove = useCallback(
    (e) => {
      if (prefersReducedMotion) return;
      const rect = e.currentTarget.getBoundingClientRect();
      spotX.set(e.clientX - rect.left);
      spotY.set(e.clientY - rect.top);
    },
    [prefersReducedMotion, spotX, spotY]
  );

  return (
    <header
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight — driven by motion values; no React re-renders on mouse move */}
      <Spotlight fill="cyan" className="absolute inset-0" spotX={spotX} spotY={spotY} />

      {/* #9 Ambient gradient orbs */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: "rgba(59,130,246,0.07)",
              filter: "blur(100px)",
              top: "10%",
              left: "5%",
            }}
            animate={{ x: [0, 150, -100, 0], y: [0, -100, 80, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "rgba(13,148,136,0.05)",
              filter: "blur(100px)",
              top: "40%",
              right: "5%",
            }}
            animate={{ x: [0, -120, 100, 0], y: [0, 80, -60, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
          />
        </>
      )}

      {/* #19 Dot grid background with parallax */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none scale-110"
        aria-hidden="true"
        style={{
          y: gridY,
          backgroundImage:
            "radial-gradient(circle, var(--color-border, #1a2d4a) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Grain texture overlay for depth */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="section-container relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Profile Image — first on mobile (order-first), right column on desktop (md:order-last) */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex justify-center order-first md:order-last"
          >
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full blur-2xl md:blur-3xl opacity-30 bg-gradient-to-r from-accent-blue via-accent-teal to-accent-blue"
                aria-hidden="true"
              />
              <Image
                src="/axel.avif"
                alt="Axel Auza — Full Stack Developer"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-full border-2 border-white/10 relative z-10"
                priority
                sizes="(max-width: 640px) 144px, (max-width: 768px) 192px, (max-width: 1024px) 288px, 384px"
              />
            </div>
          </motion.div>

          {/* Text — centered on mobile, left-aligned on desktop */}
          {/* #24 Page load sequence: container with stagger */}
          <motion.div
            className="text-center md:text-left order-last md:order-first"
            variants={containerVariants}
            initial={prefersReducedMotion ? false : "hidden"}
            animate={prefersReducedMotion ? undefined : "visible"}
          >
            <motion.div variants={itemVariants}>
              <p className="text-accent-blue font-mono text-sm mb-3 tracking-wider">
                Hi, I&apos;m
              </p>
            </motion.div>

            {/* #6 Split-text "Axel Auza" reveal — has its own animation, not wrapped in itemVariants */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-4 leading-tight"
              style={{ perspective: "400px" }}
            >
              <motion.span
                className="gradient-text inline-block"
                variants={nameVariants}
                initial={prefersReducedMotion ? false : "hidden"}
                animate={prefersReducedMotion ? undefined : "visible"}
              >
                {"Axel Auza".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={charVariants}
                    style={{ display: "inline-block", transformOrigin: "bottom" }}
                    className={char === " " ? "w-3" : ""}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </h1>

            {/* Typewriter roles — static for reduced-motion users */}
            <motion.div variants={itemVariants}>
              <div className="text-xl sm:text-2xl text-text-secondary font-medium mb-4 min-h-[2rem]">
                {prefersReducedMotion ? (
                  <span>{roles[0]}</span>
                ) : (
                  <Typewriter
                    options={{
                      strings: roles,
                      autoStart: true,
                      loop: true,
                      delay: 60,
                      deleteSpeed: 40,
                      cursor: "|",
                      pauseFor: 1500,
                    }}
                  />
                )}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-text-secondary text-base mb-2 max-w-xl mx-auto md:mx-0">
                I design and ship production-ready interfaces, scalable Django
                backends, and cloud infrastructure for teams that need fast,
                reliable web products.
              </p>
              <p className="hidden md:block text-text-secondary text-base mb-2 max-w-xl">
                My recent work spans real estate platforms, university research
                tooling, and performance-focused frontend systems.
              </p>
              <p className="text-text-muted text-sm mb-8 font-mono">
                📍 Guayaquil, Ecuador
              </p>
            </motion.div>

            {/* #1 CTAs with MagneticButton */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                <MagneticButton
                  href="#projects"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-teal text-white font-medium hover:shadow-lg hover:shadow-accent-teal/25 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
                >
                  View Projects
                </MagneticButton>
                <MagneticButton
                  href="#contact"
                  className="px-6 py-3 rounded-full border border-white/20 text-text-primary font-medium hover:bg-white/5 hover:border-white/40 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
                >
                  Contact Me
                </MagneticButton>
              </div>
            </motion.div>

            {/* #5 Social Links with ripple */}
            <motion.div variants={itemVariants}>
              <div
                className="flex justify-center md:justify-start gap-3"
                role="list"
                aria-label="Social links"
              >
                {socialLinks.map(({ name, href, icon: Icon, external }) => (
                  <motion.a
                    key={name}
                    href={href}
                    role="listitem"
                    aria-label={name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="relative w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue overflow-hidden"
                  >
                    <motion.span
                      className="absolute inset-0 rounded-full bg-accent-blue/15"
                      initial={{ scale: 0, opacity: 0.5 }}
                      whileHover={{ scale: 2.5, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                    <Icon size={18} aria-hidden="true" className="relative z-10" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
