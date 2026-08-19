import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getCloudinaryImageUrl } from "@/lib/cloudinary";
import type { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/blog/${post.slug}`} className="group block">
        <div className="relative aspect-3/2 overflow-hidden mb-5">
          <img
            src={getCloudinaryImageUrl(post.coverImagePublicId)}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <p className="font-body uppercase tracking-wider text-xs text-gold mb-3">
          {post.category} · {post.readTime}
        </p>
        <h3 className="font-display text-xl text-charcoal dark:text-warmwhite leading-snug group-hover:text-gold transition-colors">
          {post.title}
        </h3>
        <p className="font-body text-sm text-stone mt-3 leading-relaxed">
          {post.excerpt}
        </p>
        <p className="font-body text-xs text-stone mt-4">
          {formatDate(post.date)}
        </p>
      </Link>
    </motion.div>
  );
}