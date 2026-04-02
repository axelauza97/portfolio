import { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import TechBadge from "./TechBadge";

const ProjectCard = forwardRef(function ProjectCard({ project, index }, ref) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.08 }}
      viewport={{ once: true, margin: "-40px" }}
      className="glass-card overflow-hidden group flex flex-col"
    >
      {/* Image with hover zoom */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          width={576}
          height={450}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          {project.title}
        </h3>
        <p
          className="text-text-secondary text-sm mb-4 flex-1"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <TechBadge key={tag} name={tag} />
          ))}
        </div>
        {/* Always-visible links — accessible on touch and pointer devices alike */}
        {(project.liveUrl || project.sourceUrl) && (
          <div className="flex gap-2 pt-3 border-t border-white/10">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo of ${project.title}`}
                className="flex-1 text-center px-3 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-medium hover:bg-accent-blue/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              >
                Live Demo ↗
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Source code for ${project.title}`}
                className="flex-1 text-center px-3 py-1.5 rounded-full border border-white/20 text-text-secondary text-xs font-medium hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
              >
                Source ↗
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
});

export default ProjectCard;
