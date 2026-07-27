import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getCloudinaryImageUrl } from "@/lib/cloudinary";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.a
      href={`/services#${service.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative block aspect-4/5 overflow-hidden"
    >
      <img
        src={getCloudinaryImageUrl(service.imagePublicId)}
        alt={service.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl text-warmwhite">{service.title}</h3>
          <ArrowUpRight
            className="text-gold opacity-0 group-hover:opacity-100 transition-opacity"
            size={24}
          />
        </div>
        <p className="font-body text-sm text-stone mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {service.description}
        </p>
      </div>
    </motion.a>
  );
}