import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Spotlight } from "@/components/UI/Spotlight";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/axelauza97",
    icon: FaGithub,
    external: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/axelauza",
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

  const fadeLeft = {
    initial: prefersReducedMotion ? false : { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  };

  const fadeScale = {
    initial: prefersReducedMotion ? false : { opacity: 0, scale: 0.85 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, delay: 0.3 },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Spotlight — tracks mouse via onMouseMove inside the component */}
      <Spotlight fill="cyan" className="absolute inset-0" />

      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, #334155 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="section-container relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div {...fadeLeft}>
            <p className="text-accent-cyan font-mono text-sm mb-3 tracking-wider">
              Hi, I&apos;m
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="gradient-text">Axel Auza</span>
            </h1>

            {/* Typewriter roles — static for reduced-motion users */}
            <div className="text-xl sm:text-2xl text-text-secondary font-medium mb-4 h-8">
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
                  }}
                />
              )}
            </div>

            <p className="text-text-secondary text-base mb-2 max-w-md">
              Crafting innovative web applications with React &amp; Django.
            </p>
            <p className="text-text-muted text-sm mb-8 font-mono">
              📍 Guayaquil, Ecuador
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-medium hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-white/20 text-text-primary font-medium hover:bg-white/5 hover:border-white/40 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3" role="list" aria-label="Social links">
              {socialLinks.map(({ name, href, icon: Icon, external }) => (
                <a
                  key={name}
                  href={href}
                  role="listitem"
                  aria-label={name}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Profile Image */}
          <motion.div
            {...fadeScale}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{
                  background:
                    "linear-gradient(to right, #06b6d4, #8b5cf6, #ec4899)",
                }}
                aria-hidden="true"
              />
              <Image
                src="/axel.avif"
                alt="Axel Auza — Full Stack Developer"
                fill
                className="object-cover rounded-full border-2 border-white/10 relative z-10"
                priority
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
