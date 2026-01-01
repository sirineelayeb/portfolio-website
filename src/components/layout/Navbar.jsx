import { useState, useEffect } from "react";
import { ThemeToggle } from "../ui/ThemeToggle";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let current = "home";
      sections.forEach((section) => {
        const offset = section.offsetTop - 150;
        if (window.scrollY >= offset) current = section.id;
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Certificates", id: "certificates" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6 max-w-7xl">
        <div className="flex items-center justify-between">

          {/* Logo with advanced effects */}
          <button
            onClick={() => scrollToSection("home")}
            className="group relative transition-all duration-500 hover:scale-105"
          >
            {/* Animated gradient background */}
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500 animate-gradient"></div>
            
            {/* Main logo container */}
            <div className="relative px-3 py-2 sm:px-6 sm:py-3 bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 group-hover:border-primary/50 transition-all duration-500">
              <span className="text-lg sm:text-2xl font-bold flex items-center gap-1 sm:gap-2">
                {/* Animated icon */}
                <span className="relative">
                  <span className="text-xl sm:text-3xl bg-gradient-to-br from-primary via-secondary to-primary bg-clip-text text-transparent group-hover:scale-110 inline-block transition-transform duration-500">
                    ✦
                  </span>
                  <span className="absolute inset-0 text-xl sm:text-3xl text-primary blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                    ✦
                  </span>
                </span>
                
                {/* Name with gradient */}
                <span className="relative">
                  <span className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-primary group-hover:to-white group-hover:bg-clip-text transition-all duration-500">
                    Sirine
                  </span>
                </span>
                
                {/* Separator */}
                <span className="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"></span>
                
                {/* Portfolio text */}
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient font-extrabold">
                  Portfolio
                </span>
              </span>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-xl group ${
                      activeSection === link.id
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {/* Active indicator */}
                    {activeSection === link.id && (
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl backdrop-blur-sm border border-primary/30"></span>
                    )}
                    
                    {/* Hover glow */}
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    
                    {/* Text */}
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Underline animation */}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                      activeSection === link.id ? "w-3/4" : "w-0 group-hover:w-1/2"
                    }`}></span>
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Theme Toggle with styling */}
            <div className="ml-2 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Toggle - Enhanced */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
              }`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu - Enhanced */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-4">
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li 
                  key={link.id}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`${isMobileMenuOpen ? "animate-fade-in-up" : ""}`}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`relative block w-full text-left px-5 py-3 rounded-xl transition-all duration-300 overflow-hidden group ${
                      activeSection === link.id
                        ? "text-white font-semibold"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {activeSection === link.id && (
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30"></span>
                    )}
                    <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative z-10">{link.name}</span>
                  </button>
                </li>
              ))}
              
              {/* Mobile Theme Toggle */}
              <li className="pt-4 px-2 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Theme</span>
                  <ThemeToggle />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out forwards;
        }
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </nav>
  );
};