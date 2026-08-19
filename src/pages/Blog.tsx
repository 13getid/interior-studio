import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/data/blog";
import BlogCard from "@/components/blog/BlogCard";

export default function Blog() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body uppercase tracking-[0.3em] text-gold text-sm mb-4">
            The Journal
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-charcoal dark:text-warmwhite">
            Insights &amp; Inspiration
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}