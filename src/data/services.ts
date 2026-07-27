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