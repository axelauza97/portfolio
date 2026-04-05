import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup, useReducedMotion } from "framer-motion";
import Image from "next/image";
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

  const featuredProject = filtered[0] ?? null;
  const remainingProjects = filtered.slice(1);

  return (
    <section id="projects" className="section-container scroll-mt-20">
      <SectionHeading
        title="Projects"
        subtitle="A selection of things I've built"
      />

      {/* Filter Tabs */}
      <LayoutGroup>
        <div
          className="flex flex-wrap justify-center gap-2 mb-12"
          role="group"
          aria-label="Filter projects by technology"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              aria-pressed={activeTag === tag}
              className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal ${
                activeTag === tag
                  ? "text-white"
                  : "text-text-secondary hover:text-text-primary border border-white/10 hover:border-white/20"
              }`}
            >
              {activeTag === tag && (
                <motion.div
                  layoutId="filter-pill"
                  className="absolute inset-0 bg-accent-blue rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tag}</span>
            </button>
          ))}
        </div>
      </LayoutGroup>

      {/* Featured Project */}
      <AnimatePresence mode="popLayout">
        {featuredProject && (
          <motion.div
            key={featuredProject.title}
            layout={!prefersReducedMotion}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mb-8 glass-card overflow-hidden group"
          >
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Image side */}
              {featuredProject.image && (
                <div className="lg:col-span-2 relative overflow-hidden aspect-video lg:aspect-auto min-h-[200px]">
                  <Image
                    src={featuredProject.image}
                    alt={`${featuredProject.title} screenshot`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              )}
              {/* Content side */}
              <div
                className={`p-6 flex flex-col justify-between ${
                  featuredProject.image ? "lg:col-span-3" : "lg:col-span-5"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono bg-accent-blue/10 text-accent-blue px-2 py-0.5 rounded-full border border-accent-blue/20">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-text-primary mb-2">
                    {featuredProject.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/5 text-text-muted border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo of ${featuredProject.title}`}
                      className="text-sm text-text-secondary hover:text-accent-teal transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal rounded"
                    >
                      Live Demo →
                    </a>
                  )}
                  {featuredProject.sourceUrl && (
                    <a
                      href={featuredProject.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Source code for ${featuredProject.title}`}
                      className="text-sm text-text-secondary hover:text-accent-blue transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Remaining Project Grid */}
      <motion.div
        layout={!prefersReducedMotion}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {remainingProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* GitHub Stats + link */}
      <div className="text-center mt-12 space-y-6">
        <a
          href="https://github.com/axelauza97"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Axel Auza GitHub profile and stats"
        >
          <Image
            src="https://github-readme-stats.vercel.app/api?username=axelauza97&show_icons=true&theme=transparent&hide_border=true&text_color=94a3b8&icon_color=06b6d4&title_color=8b5cf6"
            alt="Axel Auza GitHub stats — commits, PRs, and contribution activity"
            width={495}
            height={195}
            className="mx-auto max-w-full rounded-lg"
            unoptimized
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </a>
        <a
          href="https://github.com/axelauza97"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-accent-blue transition-colors font-mono text-sm inline-flex items-center gap-2 group"
        >
          Browse GitHub profile
          <span
            className="group-hover:translate-x-1 transition-transform duration-200"
            aria-hidden="true"
          >
            →
          </span>
        </a>
      </div>
    </section>
  );
}
