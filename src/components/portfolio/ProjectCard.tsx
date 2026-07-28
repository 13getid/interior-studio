import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getCloudinaryImageUrl } from "@/lib/cloudinary";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      <Link to={`/projects/${project.slug}`} className="group block">
        <div className="relative aspect-4/3 overflow-hidden">
          <img
            src={getCloudinaryImageUrl(project.coverImagePublicId)}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute top-4 left-4 bg-warmwhite/90 text-charcoal font-body text-xs uppercase tracking-wider px-3 py-1">
            {project.category}
          </span>
        </div>

        <div className="pt-5 flex items-start justify-between">
          <div>
            <h3 className="font-display text-2xl text-charcoal dark:text-warmwhite">
              {project.title}
            </h3>
            <p className="font-body text-sm text-stone mt-1">
              {project.location} · {project.year}
            </p>
          </div>
          <ArrowRight
            className="text-gold shrink-0 mt-2 transition-transform group-hover:translate-x-1"
            size={20}
          />
        </div>
      </Link>
    </motion.div>
  );
}