import { motion } from "framer-motion";
import type { ServiceListing } from "@/data/services";

interface ServiceListCardProps {
  service: ServiceListing;
  index: number;
}

export default function ServiceListCard({ service, index }: ServiceListCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="p-8 border border-stone/20 hover:border-gold transition-colors"
    >
      <Icon className="text-gold mb-5" size={28} strokeWidth={1.5} />
      <h3 className="font-display text-xl text-charcoal dark:text-warmwhite mb-2">
        {service.title}
      </h3>
      <p className="font-body text-sm text-stone-dark dark:text-stone leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}