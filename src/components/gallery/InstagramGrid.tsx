import { motion } from "framer-motion";
import { FaInstagram as Instagram } from "react-icons/fa";
import { INSTAGRAM_PHOTOS, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/data/instagram";
import { getCloudinaryImageUrl } from "@/lib/cloudinary";

export default function InstagramGrid() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-warmwhite dark:bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-body uppercase tracking-[0.3em] text-gold text-sm mb-4">
            Follow Along
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal dark:text-warmwhite mb-4">
            Studio Life
          </h2>
          
            <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-stone hover:text-gold transition-colors"
          >
            <Instagram size={18} />
            {INSTAGRAM_HANDLE}
          </a>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
          {INSTAGRAM_PHOTOS.map((photo, index) => (
            <motion.a
              key={photo.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden block"
            >
              <img
                src={getCloudinaryImageUrl(photo.imagePublicId)}
                alt="Interior design studio work"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors flex items-center justify-center">
                <Instagram
                  size={24}
                  className="text-warmwhite opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}