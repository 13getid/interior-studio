import { motion } from "framer-motion";
import { DESIGN_PROCESS } from "@/data/process";
import ProcessStepItem from "./ProcessStepItem";

export default function DesignProcess() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-beige dark:bg-charcoal">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body uppercase tracking-[0.3em] text-gold text-sm mb-4">
            How We Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal dark:text-warmwhite">
            Our Design Process
          </h2>
        </motion.div>

        <div>
          {DESIGN_PROCESS.map((step, index) => (
            <ProcessStepItem
              key={step.number}
              step={step}
              index={index}
              isLast={index === DESIGN_PROCESS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}