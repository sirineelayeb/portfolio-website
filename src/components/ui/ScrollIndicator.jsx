import { ArrowDown, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export const SmartScrollIndicator = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [showIndicator, setShowIndicator] = useState(true);

  const sections = ['home', 'about', 'skills', 'certificates', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find current section
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }

      // Hide indicator if at bottom of page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      setShowIndicator(!isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNextSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    return currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;
  };

  const scrollToNext = () => {
    const nextSection = getNextSection();
    if (nextSection) {
      document.getElementById(nextSection)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: "smooth" });
  };

  if (!showIndicator) return null;

  const nextSection = getNextSection();
  const isLastSection = !nextSection;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      {/* Scroll Down Arrow */}
      {!isLastSection && (
        <div
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={scrollToNext}
        >
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors duration-300 uppercase tracking-wider">
            {nextSection === 'about' && 'Scroll Down'}
            {nextSection === 'skills' && 'Skills'}
            {nextSection === 'certificates' && 'Certificates'}
            {nextSection === 'projects' && 'Projects'}
            {nextSection === 'contact' && 'Contact'}
          </span>
          <ArrowDown className="w-6 h-6 text-primary animate-bounce group-hover:translate-y-1 transition-transform" />
        </div>
      )}

      {/* Scroll to Top - Shows when not on home */}
      {currentSection !== 'home' && (
        <div
          className="mt-4 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={scrollToTop}
        >
          <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:-translate-y-1 transition-all" />
          <span className="text-xs font-medium text-gray-400 group-hover:text-primary transition-colors duration-300">
            Top
          </span>
        </div>
      )}
    </div>
  );
};