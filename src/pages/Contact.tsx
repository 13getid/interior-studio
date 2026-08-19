import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT_INFO } from "@/data/footer";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body uppercase tracking-[0.3em] text-gold text-sm mb-4">
            Get In Touch
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-charcoal dark:text-warmwhite">
            Contact Us
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: info + map */}
          <div>
            <ul className="space-y-6 mb-10">
              <li className="flex items-start gap-4">
                <Phone size={20} className="text-gold mt-1 shrink-0" />
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-stone-dark dark:text-stone mb-1">
                    Phone
                  </p>
                  <p className="font-display text-lg text-charcoal dark:text-warmwhite">{CONTACT_INFO.phone}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={20} className="text-gold mt-1 shrink-0" />
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-stone-dark dark:text-stone mb-1">
                    Email
                  </p>
                  <p className="font-display text-lg text-charcoal dark:text-warmwhite">{CONTACT_INFO.email}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-gold mt-1 shrink-0" />
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-stone-dark dark:text-stone mb-1">
                    Address
                  </p>
                  <p className="font-display text-lg text-charcoal dark:text-warmwhite">{CONTACT_INFO.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock size={20} className="text-gold mt-1 shrink-0" />
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-stone-dark dark:text-stone mb-1">
                    Office Hours
                  </p>
                  <p className="font-display text-lg text-charcoal dark:text-warmwhite">{CONTACT_INFO.officeHours}</p>
                </div>
              </li>
            </ul>

            <div className="aspect-4/3 bg-stone/10 border border-stone/20 flex items-center justify-center">
              <p className="font-body text-sm text-stone-dark dark:text-stone">Map coming soon</p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}