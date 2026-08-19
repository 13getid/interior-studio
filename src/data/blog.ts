export interface BlogPost {
  slug: string;
  title: string;
  category: "Interior Trends" | "Decor Tips" | "Lighting" | "Small Spaces";
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  coverImagePublicId: string;
  content: string[];
}
  export const BLOG_POSTS: BlogPost[] = [
{
  slug: "small-space-tips",
  title: "7 Tips for Designing Small Spaces That Feel Bigger",
  category: "Small Spaces",
  excerpt:
    "Smart layout choices and the right materials can make even the coziest room feel open and intentional.",
  author: "Interior Studio",
  date: "2026-06-12",
  readTime: "5 min read",
  coverImagePublicId: "interior-studio/blog/small-space-tips/cover",
  content: [
    "Designing a small space isn't about fitting less into it, it's about being deliberate with every decision. The right layout, scale, and material choices can make a compact room feel considered rather than cramped.",
    "Start with light. Mirrors, sheer window treatments, and light-toned walls all help a small room feel more open by bouncing natural light around instead of absorbing it.",
    "Multi-functional furniture is your best friend. A storage ottoman, a bed with built-in drawers, or a console that doubles as a desk all reduce the number of pieces a room needs without reducing what it can do.",
    "Finally, resist the urge to fill every wall. Negative space, even in a small room, gives the eye somewhere to rest, and that's often what separates a room that feels 'cozy' from one that just feels cluttered.",
  ],
},

];