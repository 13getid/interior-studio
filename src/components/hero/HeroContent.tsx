import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-body uppercase tracking-[0.3em] text-gold text-sm mb-6"
      >
        Premium Interior Design
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-display text-5xl md:text-7xl text-warmwhite leading-tight max-w-4xl"
      >
        Designing Spaces That Inspire Living
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-body text-stone md:text-lg mt-6 max-w-xl"
      >
        Luxury interiors crafted with creativity, precision, and timeless elegance.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 mt-10"
      >
        <a
          href="#projects"
          className="bg-gold text-charcoal font-body text-sm uppercase tracking-wider px-8 py-4 hover:bg-warmwhite transition-colors"
        >
          Explore Projects
        </a>
        
        <a
          href="#contact"
          className="border border-warmwhite text-warmwhite font-body text-sm uppercase tracking-wider px-8 py-4 hover:bg-warmwhite hover:text-charcoal transition-colors"
        >
          Book Consultation
        </a>
      </motion.div>
    </div>
  );
}