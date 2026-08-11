export interface Testimonial {
  id: string;
  name: string;
  location: string;
  projectRef: string;
  rating: number;
  quote: string;
  photoPublicId: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "sophia-r",
    name: "Sophia R.",
    location: "Nairobi, Kenya",
    projectRef: "Modern Harmony",
    rating: 5,
    quote:
      "Interior transformed our home into a space that's both beautiful and functional. Their attention to detail is unmatched.",
    photoPublicId: "interior-studio/testimonials/client-1",
  },
  {
    id: "james-k",
    name: "James K.",
    location: "Mombasa, Kenya",
    projectRef: "Coastal Retreat",
    rating: 5,
    quote:
      "From the first consultation to the final reveal, the team understood exactly what we wanted, even when we struggled to explain it ourselves.",
    photoPublicId: "interior-studio/testimonials/client-2",
  },
  {
    id: "amara-o",
    name: "Amara O.",
    location: "Nairobi, Kenya",
    projectRef: "Urban Loft",
    rating: 5,
    quote:
      "Our office doesn't just look incredible, it actually feels like a better place to work. Worth every shilling.",
    photoPublicId: "interior-studio/testimonials/client-3",
  },
];