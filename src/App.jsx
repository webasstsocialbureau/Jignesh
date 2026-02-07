import React, { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import ExperienceDetail from "./components/ExperienceDetail";
import Expertise from "./components/Expertise";
import Awards from "./components/Awards";
import ValuesEducation from "./components/ValuesEducation";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-gold/30 selection:text-gold-light scroll-smooth overflow-x-hidden">
      <div className="grain-overlay"></div>
      <CustomCursor />
      <Hero />
      <About />
      <Expertise />
      <Timeline />
      <ExperienceDetail />
      <Awards />
      <ValuesEducation />
      <Footer />
    </main>
  );
}

export default App;
