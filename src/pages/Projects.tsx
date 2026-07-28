import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/portfolio/ProjectCard";

const CATEGORIES = ["All", "Residential", "Commercial", "Hospitality"] as const;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body uppercase tracking-[0.3em] text-gold text-sm mb-4">
            Our Portfolio
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-charcoal dark:text-warmwhite">
            Projects
          </h1>
        </div>

        {/* Controls: search + category filter */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-16">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-body text-sm uppercase tracking-wider px-5 py-2 border transition-colors ${
                  activeCategory === category
                    ? "bg-charcoal text-warmwhite border-charcoal dark:bg-warmwhite dark:text-charcoal dark:border-warmwhite"
                    : "border-stone/40 text-stone hover:border-charcoal dark:hover:border-warmwhite"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-stone"
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search projects..."
              className="w-full bg-transparent border border-stone/40 pl-10 pr-4 py-3 text-sm font-body text-charcoal dark:text-warmwhite placeholder:text-stone focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        {/* Results */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center font-body text-stone py-24"
          >
            No projects match your search. Try a different filter or keyword.
          </motion.p>
        )}
      </div>
    </div>
  );
}