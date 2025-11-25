import { Github, Linkedin, Instagram, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 md:px-8 text-center">

        {/* Connect Message */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          Feel free to{" "}
          <span className="font-semibold text-primary">connect</span> with me
        </p>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-10 mb-10">
          <a
            href="https://github.com/sirineelayeb"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="GitHub"
          >
            <Github className="w-7 h-7 text-gray-600 dark:text-gray-400 
                              group-hover:text-primary transition-all duration-300 
                              group-hover:scale-110" />
          </a>

          <a
            href="https://www.linkedin.com/in/sirine-elayeb-455235243/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-7 h-7 text-gray-600 dark:text-gray-400 
                                group-hover:text-primary transition-all duration-300 
                                group-hover:scale-110" />
          </a>

          <a
            href="https://www.instagram.com/syrine_ayb/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="Instagram"
          >
            <Instagram className="w-7 h-7 text-gray-600 dark:text-gray-400 
                                 group-hover:text-primary transition-all duration-300 
                                 group-hover:scale-110" />
          </a>
        </div>

        {/* Made with love + Copyright */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span>© {currentYear}</span>
          <span>•</span>
          <span>Crafted with</span>
          <Heart className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" />
          <span>by Sirine Elayeb</span>
        </div>

      </div>
    </footer>
  );
};