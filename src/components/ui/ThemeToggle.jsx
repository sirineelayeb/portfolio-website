import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const getInitialTheme = () => {
  if (typeof window === "undefined") return false;

  const stored = localStorage.getItem("theme");
  if (stored) return stored === "dark";

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 rounded-md transition-colors duration-300"
      style={{
        backgroundColor: "var(--card-bg)",
        border: "1px solid var(--border)",
        color: "var(--foreground)",
      }}
    >
      <span
        key={isDarkMode ? "sun" : "moon"}
        className="block"
        style={{
          animation: "theme-icon-in 0.25s ease-out",
        }}
      >
        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
      </span>

      <style>{`
        @keyframes theme-icon-in {
          from {
            opacity: 0;
            transform: rotate(-90deg) scale(0.6);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }
      `}</style>
    </button>
  );
};