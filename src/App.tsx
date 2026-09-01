import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Toolkit from "./components/Toolkit";
import Workflow from "./components/Workflow";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ScanLine from "./components/ScanLine";

export default function App() {
  return (
    <div className="relative bg-background text-foreground font-body">
      <ScanLine />
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Toolkit />
        <Workflow />
        <Experience />
        <Projects />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
