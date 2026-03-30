import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import TechBadge from "./TechBadge";

export default function ProjectCard({ project, index }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden group flex flex-col"
    >
      {/* Image with hover zoom */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* CTA overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-accent-cyan text-background text-sm font-medium hover:bg-accent-cyan/80 transition-colors"
              >
                Live Demo
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-white/30 text-text-primary text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TechBadge key={tag} name={tag} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
