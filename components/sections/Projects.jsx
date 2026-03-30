import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { featuredProjects, allTags } from "@/mocks/projects";
import SectionHeading from "@/components/common/SectionHeading";
import ProjectCard from "@/components/common/ProjectCard";

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");
  const prefersReducedMotion = useReducedMotion();

  const filtered =
    activeTag === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.tags.includes(activeTag));

  return (
    <section id="projects" className="section-container scroll-mt-20">
      <SectionHeading
        title="Projects"
        subtitle="A selection of things I've built"
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Filter projects by technology">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            aria-pressed={activeTag === tag}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple ${
              activeTag === tag
                ? "bg-accent-purple text-white"
                : "bg-white/5 text-text-secondary hover:bg-white/10 hover:text-text-primary"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div
        layout={!prefersReducedMotion}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* GitHub link */}
      <div className="text-center mt-12">
        <a
          href="https://github.com/axelauza97"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-accent-cyan transition-colors font-mono text-sm inline-flex items-center gap-2 group"
        >
          Browse GitHub profile
          <span className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
