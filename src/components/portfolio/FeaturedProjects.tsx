import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-warmwhite dark:bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body uppercase tracking-[0.3em] text-gold text-sm mb-4">
            Our Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal dark:text-warmwhite">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {featured.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="inline-block bg-charcoal dark:bg-warmwhite text-warmwhite dark:text-charcoal font-body text-sm uppercase tracking-wider px-8 py-4 hover:bg-gold dark:hover:bg-gold hover:text-charcoal transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}