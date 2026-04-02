/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "700px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        background: "#050d1f",     // Deep space navy
        surface: "#0a1628",        // Card layer
        border: "#1a2d4a",         // Navy border
        accent: {
          blue: "#3b82f6",         // Electric blue — primary
          teal: "#0d9488",         // Teal — secondary
          sky: "#60a5fa",          // Light blue — gradients/glow
        },
        text: {
          primary: "#f0f6ff",      // Cool white
          secondary: "#8eabc7",    // Blue-gray
          muted: "#4a6a8a",        // Dark blue-gray
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      spacing: {
        section: "6rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "gradient-x": "gradientX 3s ease infinite",
        marquee: "marquee var(--duration, 30s) linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
