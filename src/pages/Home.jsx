import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Skills } from "../components/sections/Skills";
import { Projects } from "../components/sections/Projects";
import { Contact } from "../components/sections/Contact";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
// import { StarBackground } from "../components/ui/StarBackground";
import { Background } from "/src/components/ui/Background.jsx";
import { Certificates } from "../components/sections/Certificates";
// import { SmartScrollIndicator } from "../components/ui/ScrollIndicator";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">

      {/* Background Effects */}
      <Background />            
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1">
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