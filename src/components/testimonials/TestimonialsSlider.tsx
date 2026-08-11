import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { getCloudinaryImageUrl } from "@/lib/cloudinary";
import StarRating from "./StarRating";

export default function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => setActiveIndex(index);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const testimonial = TESTIMONIALS[activeIndex];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-charcoal text-warmwhite">
      <div className="max-w-3xl mx-auto text-center">
        <Quote className="text-gold mx-auto mb-8" size={40} />

        <AnimatePresence mode="wait">
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-display text-2xl md:text-3xl leading-relaxed italic">
              "{testimonial.quote}"
            </p>

            <div className="flex flex-col items-center mt-10 gap-3">
              <img
                src={getCloudinaryImageUrl(testimonial.photoPublicId)}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <StarRating rating={testimonial.rating} />
              <p className="font-body text-warmwhite">{testimonial.name}</p>
              <p className="font-body text-sm text-stone">
                {testimonial.projectRef} · {testimonial.location}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="text-stone hover:text-gold transition-colors"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((t, index) => (
              <button
                key={t.id}
                onClick={() => goTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-gold" : "bg-stone/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            aria-label="Next testimonial"
            className="text-stone hover:text-gold transition-colors"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}