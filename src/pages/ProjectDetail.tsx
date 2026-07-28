import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { getCloudinaryImageUrl } from "@/lib/cloudinary";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero image */}
      <div className="relative h-[70vh]">
        <img
          src={getCloudinaryImageUrl(project.coverImagePublicId)}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <Link
          to="/projects"
          className="absolute top-28 left-6 md:left-12 flex items-center gap-2 text-warmwhite font-body text-sm uppercase tracking-wider hover:text-gold transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <div className="absolute bottom-12 left-6 md:left-12">
          <span className="bg-gold text-charcoal font-body text-xs uppercase tracking-wider px-3 py-1">
            {project.category}
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-warmwhite mt-4">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto px-6 py-20"
      >
        <div className="grid sm:grid-cols-3 gap-8 mb-12 pb-12 border-b border-stone/20">
          <div>
            <p className="font-body uppercase tracking-wider text-xs text-gold mb-2">
              Location
            </p>
            <p className="font-display text-xl text-charcoal dark:text-warmwhite">
              {project.location}
            </p>
          </div>
          <div>
            <p className="font-body uppercase tracking-wider text-xs text-gold mb-2">
              Year
            </p>
            <p className="font-display text-xl text-charcoal dark:text-warmwhite">
              {project.year}
            </p>
          </div>
          <div>
            <p className="font-body uppercase tracking-wider text-xs text-gold mb-2">
              Category
            </p>
            <p className="font-display text-xl text-charcoal dark:text-warmwhite">
              {project.category}
            </p>
          </div>
        </div>

        <h2 className="font-display text-3xl text-charcoal dark:text-warmwhite mb-6">
          Project Overview
        </h2>
        <p className="font-body text-stone text-lg leading-relaxed">
          {project.shortDescription}
        </p>

        <div className="mt-16">
          <Link
            to="/contact"
            className="inline-block bg-gold text-charcoal font-body text-sm uppercase tracking-wider px-8 py-4 hover:bg-charcoal hover:text-warmwhite dark:hover:bg-warmwhite transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </motion.div>
    </div>
  );
}