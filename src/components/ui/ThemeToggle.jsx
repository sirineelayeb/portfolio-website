import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

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
  aria-label="Toggle theme"
  className="
    p-3 rounded-full
    bg-gray-100 dark:bg-gray-800
    hover:bg-gray-200 dark:hover:bg-gray-700
    shadow-lg hover:shadow-2xl
    transition-all duration-300
    flex items-center justify-center
  "
>
  {isDarkMode ? <Sun className="h-6 w-6 text-yellow-400" /> : <Moon className="h-6 w-6 text-blue-600" />}
</button>

  );
};
