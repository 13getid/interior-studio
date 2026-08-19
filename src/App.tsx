import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/navigation/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import Footer from "@/components/footer/Footer";
import ProjectDetail from "@/pages/ProjectDetail";
import BlogDetail from "@/pages/BlogDetail";
import Consultation from "@/pages/Consultation";

function App() {
  return (
    <div className="bg-warmwhite dark:bg-charcoal min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/consultation" element={<Consultation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;