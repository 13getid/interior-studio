export interface Service {
  id: string;
  title: string;
  description: string;
  imagePublicId: string;
}

export const FEATURED_SERVICES: Service[] = [
  {
    id: "residential-design",
    title: "Residential Design",
    description: "Timeless interiors tailored to how you actually live.",
    imagePublicId: "interior-studio/services/residential-design",
  },
  {
    id: "commercial-design",
    title: "Commercial Design",
    description: "Spaces that reflect your brand and work for your team.",
    imagePublicId: "interior-studio/services/commercial-design",
  },
  {
    id: "kitchen-design",
    title: "Kitchen Design",
    description: "The heart of the home, crafted with precision and warmth.",
    imagePublicId: "interior-studio/services/kitchen-design",
  },
  {
    id: "lighting-design",
    title: "Lighting Design",
    description: "Layered lighting that shapes mood and atmosphere.",
    imagePublicId: "interior-studio/services/lighting-design",
  },
  {
    id: "space-planning",
    title: "Space Planning",
    description: "Thoughtful layouts that make every square foot count.",
    imagePublicId: "interior-studio/services/space-planning",
  },
  {
    id: "renovation",
    title: "Renovation",
    description: "Full transformations, from concept to final styling.",
    imagePublicId: "interior-studio/services/renovation",
  },
];

import {
  Home as HomeIcon,
  Building2,
  ChefHat,
  Bed,
  Briefcase,
  UtensilsCrossed,
  Hotel,
  Sofa,
  Lightbulb,
  Hammer,
  Trees,
  Box,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";

export interface ServiceListing {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ALL_SERVICES: ServiceListing[] = [
  { id: "residential", title: "Residential Design", description: "Full-home interiors tailored to how you live.", icon: HomeIcon },
  { id: "commercial", title: "Commercial Design", description: "Spaces that reflect your brand and serve your team.", icon: Building2 },
  { id: "kitchen", title: "Kitchen Design", description: "Functional, beautiful kitchens built around your routine.", icon: ChefHat },
  { id: "bedroom", title: "Bedroom Design", description: "Calm, restorative spaces designed for real rest.", icon: Bed },
  { id: "office", title: "Office Design", description: "Workspaces that support focus and collaboration.", icon: Briefcase },
  { id: "restaurant", title: "Restaurant Design", description: "Dining spaces that shape the whole guest experience.", icon: UtensilsCrossed },
  { id: "hotels", title: "Hotels", description: "Hospitality interiors built for comfort at scale.", icon: Hotel },
  { id: "furniture", title: "Furniture Selection", description: "Curated pieces that fit your space and your life.", icon: Sofa },
  { id: "lighting", title: "Lighting Design", description: "Layered lighting that shapes mood and atmosphere.", icon: Lightbulb },
  { id: "renovation", title: "Renovation", description: "Full transformations, from concept to final styling.", icon: Hammer },
  { id: "landscape", title: "Landscape", description: "Outdoor spaces designed as an extension of the home.", icon: Trees },
  { id: "3d-visualization", title: "3D Visualization", description: "See your space in detail before a single item is ordered.", icon: Box },
  { id: "space-planning", title: "Space Planning", description: "Thoughtful layouts that make every square foot count.", icon: LayoutGrid },
];