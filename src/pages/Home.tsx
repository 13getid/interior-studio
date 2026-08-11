import HeroMedia from "@/components/hero/HeroMedia";
import HeroContent from "@/components/hero/HeroContent";
import HeroStats from "@/components/hero/HeroStats";
import ServicesPreview from "@/components/services/ServicesPreview";
import FeaturedProjects from "@/components/portfolio/FeaturedProjects";
import TestimonialsSlider from "@/components/testimonials/TestimonialsSlider";
import CTABanner from "@/components/common/CTABanner";

export default function Home() {
  return (
    <>
      <section className="relative h-[90vh] flex flex-col justify-between">
        <HeroMedia />
        <div className="absolute inset-0 bg-black/40" />
        <div className="flex-1 flex items-center justify-center">
          <HeroContent />
        </div>
        <HeroStats />
      </section>
      <ServicesPreview />
      <FeaturedProjects />
      <TestimonialsSlider />
      <CTABanner />
    </>
  );
}