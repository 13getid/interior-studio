import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { getCloudinaryImageUrl } from "@/lib/cloudinary";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-wider text-stone hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Journal
        </Link>

        <p className="font-body uppercase tracking-wider text-xs text-gold mb-4">
          {post.category} · {post.readTime}
        </p>
        <h1 className="font-display text-3xl md:text-5xl text-charcoal dark:text-warmwhite mb-4">
          {post.title}
        </h1>
        <p className="font-body text-sm text-stone mb-10">
          By {post.author} · {formatDate(post.date)}
        </p>

        <div className="relative aspect-16/9 overflow-hidden mb-10">
          <img
            src={getCloudinaryImageUrl(post.coverImagePublicId)}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          {post.content.map((paragraph, index) => (
            <p
              key={index}
              className="font-body text-charcoal dark:text-warmwhite/90 text-lg leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}