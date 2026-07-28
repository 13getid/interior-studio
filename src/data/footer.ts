import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { label: "TikTok", href: "https://tiktok.com", icon: FaTiktok },
];

export const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT_INFO = {
  phone: "+254 700 000 000",
  email: "hello@interiorstudio.com",
  address: "Nairobi, Kenya",
  officeHours: "Mon – Fri: 9:00 AM – 6:00 PM",
};