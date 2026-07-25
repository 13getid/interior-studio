import Navbar from "@/components/navigation/Navbar";

function App() {
  return (
    <div className="bg-warmwhite dark:bg-charcoal min-h-screen">
      <Navbar />
      <div className="h-[80vh] bg-stone flex items-center justify-center">
        <p className="text-white font-body">Hero image will go here</p>
      </div>
    </div>
  );
}

export default App;