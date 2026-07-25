import Navbar from "@/components/navigation/Navbar";
import HeroMedia from "@/components/hero/HeroMedia";
import HeroContent from "@/components/hero/HeroContent";
import HeroStats from "@/components/hero/HeroStats";

function App() {
  return (
    <div className="bg-warmwhite dark:bg-charcoal min-h-screen">
      <Navbar />
      <section className="relative h-[90vh] flex flex-col justify-between">
        <HeroMedia />
        <div className="absolute inset-0 bg-black/40" />
        <div className="flex-1 flex items-center justify-center">
          <HeroContent />
        </div>
        <HeroStats />
      </section>
    </div>
  );
}

export default App;