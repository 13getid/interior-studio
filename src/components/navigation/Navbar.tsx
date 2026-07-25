import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">
        {/* Logo */}
        <a href="#" className="font-display text-2xl tracking-wide text-warmwhite">
          INTERIOR DESIGNS
        </a>

        {/* Center links - desktop only */}
        <ul className="hidden md:flex items-center gap-8 font-body text-sm uppercase tracking-wider text-warmwhite">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-gold transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle + CTA + mobile menu button */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="text-warmwhite hover:text-gold transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="#"
            className="hidden md:inline-block border border-warmwhite text-warmwhite text-sm uppercase tracking-wider px-5 py-2 hover:bg-warmwhite hover:text-charcoal transition-colors"
          >
            Book a Consultation
          </a>

          <button
            className="md:hidden text-warmwhite"
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