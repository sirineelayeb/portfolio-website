import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Skills } from "../components/sections/Skills";
import { Projects } from "../components/sections/Projects";
import { Contact } from "../components/sections/Contact";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { StarBackground } from "../components/ui/StarBackground";
import { Certificates } from "../components/sections/Certificates";
// import { SmartScrollIndicator } from "../components/ui/ScrollIndicator";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden bg-black">

      {/* Background Effects */}
      <StarBackground />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* <SmartScrollIndicator /> */}
    </div>
  );
};