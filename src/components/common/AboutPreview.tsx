import { motion } from "framer-motion";
import { getCloudinaryImageUrl } from "@/lib/cloudinary";

const IMAGE_PUBLIC_ID = "interior-studio/about/about-preview";

export default function AboutPreview() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-warmwhite dark:bg-charcoal">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body uppercase tracking-[0.3em] text-gold text-sm mb-4">
            About Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal dark:text-warmwhite leading-tight mb-6">
            Crafting Beautiful Interiors
          </h2>
          <p className="font-body text-stone text-base md:text-lg leading-relaxed">
            At Interior, we believe that every space has the potential to
            inspire. Our team of passionate designers works closely with you
            to transform your vision into reality, blending timeless elegance
            with thoughtful, livable design.
          </p>
         <a 
            href="#about"
            className="inline-block mt-8 border border-charcoal dark:border-warmwhite text-charcoal dark:text-warmwhite font-body text-sm uppercase tracking-wider px-8 py-4 hover:bg-charcoal hover:text-warmwhite dark:hover:bg-warmwhite dark:hover:text-charcoal transition-colors"
          >
            Discover Our Story
          </a>
        </motion.div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-4/5 overflow-hidden"
        >
          <img
            src={getCloudinaryImageUrl(IMAGE_PUBLIC_ID)}
            alt="Featured interior design project"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}