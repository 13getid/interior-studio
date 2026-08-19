import { motion } from "framer-motion";
import type { ProcessStep } from "@/data/process";

interface ProcessStepItemProps {
  step: ProcessStep;
  index: number;
  isLast: boolean;
}

export default function ProcessStepItem({ step, index, isLast }: ProcessStepItemProps) {
  return (
    <div className="relative flex gap-6 md:gap-10">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full border border-gold flex items-center justify-center font-display text-lg text-gold"
        >
          {step.number}
        </motion.div>

        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ transformOrigin: "top" }}
            className="w-px flex-1 bg-stone/30 mt-2"
          />
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: index * 0.05 }}
        className="pb-16"
      >
        <h3 className="font-display text-2xl text-charcoal dark:text-warmwhite mb-2">
          {step.title}
        </h3>
        <p className="font-body text-stone-dark dark:text-stone leading-relaxed max-w-md">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}