import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

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

  // Close mobile menu on outside click or Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

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
      ref={menuRef}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-xl"
      style={{
        borderBottom: isScrolled ? "1px solid var(--border)" : "1px solid transparent",
        backgroundColor: isScrolled
          ? "color-mix(in srgb, var(--background) 80%, transparent)"
          : "transparent",
      }}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-3 max-w-7xl">
        <div className="flex items-center justify-between">

      {/* LOGO */}
      <div className="flex items-baseline gap-1">
        <span
          className="font-serif italic font-medium text-2xl tracking-tight text-gradient"
          style={{ letterSpacing: "-0.02em" }}
        >
          Syrine
        </span>
        <span
        className="font-sans font-light text-xs tracking-wide"
        style={{ color: "color-mix(in srgb, var(--primary) 100%, transparent)" }}
      >
        's Portfolio
      </span>
      </div>
          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`relative text-sm transition-colors duration-300
                      after:content-[''] after:absolute after:left-0 after:-bottom-1
                      after:h-[2px] after:bg-primary after:transition-all
                      ${
                        activeSection === link.id
                          ? "text-primary font-medium after:w-full"
                          : "after:w-0 hover:after:w-full"
                      }
                    `}
                    style={{
                      color:
                        activeSection === link.id
                          ? "var(--primary)"
                          : "var(--foreground)",
                      opacity: activeSection === link.id ? 1 : 0.7,
                    }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            <ThemeToggle />
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="md:hidden"
            style={{ color: "var(--foreground)" }}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden mt-3 flex flex-col gap-3 backdrop-blur-xl p-3 rounded-xl"
            style={{
              backgroundColor: "color-mix(in srgb, var(--background) 90%, transparent)",
              border: "1px solid var(--border)",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-sm transition-colors duration-300"
                style={{
                  color:
                    activeSection === link.id
                      ? "var(--primary)"
                      : "var(--foreground)",
                  opacity: activeSection === link.id ? 1 : 0.7,
                  fontWeight: activeSection === link.id ? 500 : 400,
                }}
              >
                {link.name}
              </button>
            ))}

            <div className="pt-2" style={{ borderTop: "1px solid var(--border)" }}>
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};