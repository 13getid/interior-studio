export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const DESIGN_PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description: "We listen to your vision, needs, and how you actually live or work in the space.",
  },
  {
    number: "02",
    title: "Planning",
    description: "We define scope, budget, and timeline, setting clear expectations from day one.",
  },
  {
    number: "03",
    title: "Mood Boards",
    description: "Colors, textures, and references come together into a cohesive visual direction.",
  },
  {
    number: "04",
    title: "3D Design",
    description: "Your space comes to life in detailed 3D renders before a single item is ordered.",
  },
  {
    number: "05",
    title: "Material Selection",
    description: "We source finishes, furniture, and materials that balance beauty and durability.",
  },
  {
    number: "06",
    title: "Execution",
    description: "Our team manages installation and construction, keeping quality tight at every step.",
  },
  {
    number: "07",
    title: "Styling",
    description: "The final layer, art, textiles, and accessories that make a space feel complete.",
  },
  {
    number: "08",
    title: "Delivery",
    description: "We walk the finished space with you, ready for you to move in and enjoy.",
  },
];