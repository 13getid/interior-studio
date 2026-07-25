import Navbar from "@/components/navigation/Navbar";
import HeroMedia from "@/components/hero/HeroMedia";
import HeroContent from "@/components/hero/HeroContent";

function App() {
  return (
    <div className="bg-warmwhite dark:bg-charcoal min-h-screen">
      <Navbar />
      <section className="relative h-[90vh]">
        <HeroMedia />
        <div className="absolute inset-0 bg-black/40" />
        <HeroContent />
      </section>
    </div>
  );
}

export default App;