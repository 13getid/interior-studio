import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FEATURED_SERVICES } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-beige dark:bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body uppercase tracking-[0.3em] text-gold text-sm mb-4">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal dark:text-warmwhite">
            Our Services
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-block border border-charcoal dark:border-warmwhite text-charcoal dark:text-warmwhite font-body text-sm uppercase tracking-wider px-8 py-4 hover:bg-charcoal hover:text-warmwhite dark:hover:bg-warmwhite dark:hover:text-charcoal transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}