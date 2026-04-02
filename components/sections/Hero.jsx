import { useCallback } from "react";
import { motion, useReducedMotion, useMotionValue } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Spotlight } from "@/components/UI/Spotlight";

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

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);

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

      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-border, #334155) 1px, transparent 1px)",
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
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -30 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-center md:text-left order-last md:order-first"
          >
            <p className="text-accent-blue font-mono text-sm mb-3 tracking-wider">
              Hi, I&apos;m
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-4 leading-tight">
              <span className="gradient-text">Axel Auza</span>
            </h1>

            {/* Typewriter roles — static for reduced-motion users */}
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

            {/* CTAs */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-teal text-white font-medium hover:shadow-lg hover:shadow-accent-teal/25 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-white/20 text-text-primary font-medium hover:bg-white/5 hover:border-white/40 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-3" role="list" aria-label="Social links">
              {socialLinks.map(({ name, href, icon: Icon, external }) => (
                <a
                  key={name}
                  href={href}
                  role="listitem"
                  aria-label={name}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
