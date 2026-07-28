export interface Project {
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Hospitality";
  location: string;
  year: string;
  coverImagePublicId: string;
  shortDescription: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "modern-harmony",
    title: "Modern Harmony",
    category: "Residential",
    location: "Nairobi, Kenya",
    year: "2025",
    coverImagePublicId: "interior-studio/projects/modern-harmony/cover",
    shortDescription:
      "A warm, minimalist family home blending natural materials with clean, modern lines.",
  },
  {
    slug: "coastal-retreat",
    title: "Coastal Retreat",
    category: "Residential",
    location: "Mombasa, Kenya",
    year: "2024",
    coverImagePublicId: "interior-studio/projects/coastal-retreat/cover",
    shortDescription:
      "A breezy, light-filled beach house designed for relaxed coastal living.",
  },
  {
    slug: "urban-loft",
    title: "Urban Loft",
    category: "Commercial",
    location: "Nairobi, Kenya",
    year: "2025",
    coverImagePublicId: "interior-studio/projects/urban-loft/cover",
    shortDescription:
      "An industrial-chic office space designed to inspire creativity and collaboration.",
  },
];