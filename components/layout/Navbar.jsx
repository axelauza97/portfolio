import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const entranceAnimation = prefersReducedMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: -100 }, animate: { opacity: 1, y: 0 } };

  return (
    <motion.nav
      initial={entranceAnimation.initial}
      animate={entranceAnimation.animate}
      transition={{ duration: 0.4, ease: "easeOut" }}
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold gradient-text">
            Axel Auza
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-secondary hover:text-white transition-colors duration-200 text-sm font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-purple group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <motion.div
              animate={mobileOpen ? "open" : "closed"}
              className="w-6 h-5 flex flex-col justify-between"
            >
              <motion.span
                variants={{
                  open: { rotate: 45, y: 10 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                className="block h-0.5 w-6 bg-white origin-center"
              />
              <motion.span
                variants={{
                  open: { opacity: 0, scaleX: 0 },
                  closed: { opacity: 1, scaleX: 1 },
                }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                className="block h-0.5 w-6 bg-white"
              />
              <motion.span
                variants={{
                  open: { rotate: -45, y: -10 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                className="block h-0.5 w-6 bg-white origin-center"
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={prefersReducedMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={prefersReducedMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-surface/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
          >
            <nav aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-6 py-3 text-text-secondary hover:text-white hover:bg-white/5 transition-colors duration-150 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
