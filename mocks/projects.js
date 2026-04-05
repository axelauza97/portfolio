export const featuredProjects = [
  {
    title: "Uneatlantico",
    description: "Scientific dockerized repositories for universities with Kubernetes CI/CD pipelines and Vertex AI lead scoring.",
    image: "/uneatlanticoImage.avif",
    tags: ["Docker", "Kubernetes", "Python", "GCP", "Vertex AI"],
    liveUrl: "https://repositorio.uneatlantico.es/",
    sourceUrl: null,
  },
  {
    title: "Django Microservice",
    description: "React SPA with microservice Django backend for trip management, featuring separated auth and data services.",
    image: "/architectureImage.avif",
    tags: ["React", "Django", "Microservices", "Python"],
    liveUrl: null,
    sourceUrl: "https://github.com/axelauza97/marWebsite",
  },
  {
    title: "TransporterBackend",
    description: "Django backend with OAuth2 social authentication and Stripe-compatible credit card payments via Paymentez.",
    image: "/transporterImage.avif",
    tags: ["Django", "Python", "OAuth2"],
    liveUrl: null,
    sourceUrl: "https://github.com/axelauza97/TransporterBackend",
  },
  {
    title: "ECommerce",
    description: "Next.js SSR e-commerce app with skeleton loaders, cart management, and fully responsive design.",
    image: "/bazarImage.avif",
    tags: ["Next.js", "React", "SSR"],
    liveUrl: "https://bazar-store-axel.vercel.app/",
    sourceUrl: "https://github.com/axelauza97/react/tree/main/bazar",
  },
  {
    title: "Clarifion",
    description: "Pixel-perfect React frontend clone demonstrating responsive layouts and high-fidelity CSS implementation.",
    image: "/clarifonImage.avif",
    tags: ["React", "CSS"],
    liveUrl: "https://clarifion-axel-auza.netlify.app/",
    sourceUrl: "https://github.com/axelauza97/react/tree/main/clarifon-test",
  },
  {
    title: "Portfolio",
    description: "This portfolio — built with Next.js, Tailwind CSS, Framer Motion, and deployed on Vercel.",
    image: "/portfolioImage.avif",
    tags: ["Next.js", "React", "Tailwind"],
    liveUrl: "https://portfolio-axelauza97.vercel.app/",
    sourceUrl: "https://github.com/axelauza97/portfolio",
  },
];

// Derived from project data — all unique tags sorted alphabetically
const uniqueTags = [...new Set(featuredProjects.flatMap((p) => p.tags))].sort();
export const allTags = ["All", ...uniqueTags];
