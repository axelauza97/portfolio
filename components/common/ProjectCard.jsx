import { forwardRef, useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import Image from "next/image";
import TechBadge from "./TechBadge";

const ProjectCard = forwardRef(function ProjectCard({ project, index }, ref) {
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 20 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e) => {
      if (prefersReducedMotion || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      rotateX.set(-dy * 6);
      rotateY.set(dx * 6);
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    },
    [prefersReducedMotion, rotateX, rotateY]
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  }, [rotateX, rotateY]);

  return (
    <motion.div
      ref={(node) => {
        cardRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.08 }}
      viewport={{ once: true, margin: "-40px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: prefersReducedMotion ? 0 : rotateX,
        rotateY: prefersReducedMotion ? 0 : rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="h-full"
    >
      {/* Card surface */}
      <div className="relative glass-card overflow-hidden group flex flex-col h-full border border-white/10 group-hover:border-accent-blue/30 transition-colors duration-300">
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

        {/* Perspective glow overlay */}
        {isHovered && !prefersReducedMotion && (
          <div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.08), transparent 60%)`,
            }}
          />
        )}
      </div>
    </motion.div>
  );
});

export default ProjectCard;
