import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ALL_SERVICES } from "@/data/services";
import ServiceListCard from "@/components/services/ServiceListCard";


export default function Services() {
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
            What We Offer
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-charcoal dark:text-warmwhite mb-6">
            Our Services
          </h1>
          <p className="font-body text-stone max-w-xl mx-auto">
            From a single room to a full renovation, we bring the same care
            and precision to every project we take on.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_SERVICES.map((service, index) => (
            <ServiceListCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/consultation"
            className="inline-block bg-gold text-charcoal font-body text-sm uppercase tracking-wider px-8 py-4 hover:bg-charcoal hover:text-warmwhite dark:hover:bg-warmwhite transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}