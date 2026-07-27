import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useScrolled } from "@/hooks/useScrolled";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const isScrolled = useScrolled();

  const textColor = isScrolled
    ? "text-charcoal dark:text-warmwhite"
    : "text-warmwhite";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-warmwhite dark:bg-charcoal shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">
        <Link to="/" className={`font-display text-2xl tracking-wide ${textColor}`}>
          INTERIOR
        </Link>

        <ul className={`hidden md:flex items-center gap-8 font-body text-sm uppercase tracking-wider ${textColor}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link to={link.href} className="hover:text-gold transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className={`hover:text-gold transition-colors ${textColor}`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link
            to="/contact"
            className={`hidden md:inline-block border text-sm uppercase tracking-wider px-5 py-2 transition-colors ${
              isScrolled
                ? "border-charcoal dark:border-warmwhite text-charcoal dark:text-warmwhite hover:bg-charcoal hover:text-warmwhite dark:hover:bg-warmwhite dark:hover:text-charcoal"
                : "border-warmwhite text-warmwhite hover:bg-warmwhite hover:text-charcoal"
            }`}
          >
            Book a Consultation
          </Link>

          <button
            className={`md:hidden ${textColor}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}