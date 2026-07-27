import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SOCIAL_LINKS, QUICK_LINKS, CONTACT_INFO } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warmwhite pt-20 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand blurb */}
        <div>
          <h3 className="font-display text-2xl mb-4">INTERIOR</h3>
          <p className="font-body text-sm text-stone leading-relaxed">
            Designing spaces that inspire living. Luxury interiors crafted
            with creativity, precision, and timeless elegance.
          </p>
          <div className="flex gap-4 mt-6">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-stone hover:text-gold transition-colors"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-body uppercase tracking-wider text-sm text-gold mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="font-body text-sm text-stone hover:text-warmwhite transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-body uppercase tracking-wider text-sm text-gold mb-5">
            Contact
          </h4>
          <ul className="space-y-4 font-body text-sm text-stone">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={16} className="mt-0.5 shrink-0" />
              <span>{CONTACT_INFO.officeHours}</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-body uppercase tracking-wider text-sm text-gold mb-5">
            Newsletter
          </h4>
          <p className="font-body text-sm text-stone mb-4">
            Subscribe for design inspiration and studio updates.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="bg-transparent border border-stone/40 px-4 py-3 text-sm font-body text-warmwhite placeholder:text-stone focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-charcoal font-body text-sm uppercase tracking-wider px-4 py-3 hover:bg-warmwhite transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto border-t border-stone/20 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-stone">
          © {new Date().getFullYear()} Interior Studio. All rights reserved.
        </p>
        <p className="font-body text-xs text-stone">
          Designed with care.
        </p>
      </div>
    </footer>
  );
}