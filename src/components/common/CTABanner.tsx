import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="relative py-24 md:py-32 px-6 text-center overflow-hidden bg-charcoal">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-2xl mx-auto"
      >
        <p className="font-body uppercase tracking-[0.3em] text-gold text-sm mb-4">
          Ready When You Are
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-warmwhite mb-8">
          Let's Design Your Next Space
        </h2>
        <p className="font-body text-stone text-lg mb-10">
          Book a complimentary consultation and let's talk about bringing your
          vision to life.
        </p>
        <Link
          to="/consultation"
          className="inline-block bg-gold text-charcoal font-body text-sm uppercase tracking-wider px-10 py-4 hover:bg-warmwhite transition-colors"
        >
          Book a Consultation
        </Link>
      </motion.div>
    </section>
  );
}