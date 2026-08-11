import AboutPreview from "@/components/common/AboutPreview";
import DesignProcess from "@/components/common/DesignProcess";
import InstagramGrid from "@/components/gallery/InstagramGrid";

export default function About() {
  return (
    <div className="pt-20">
      <AboutPreview />
      <DesignProcess />
      <InstagramGrid />
    </div>
  );
}