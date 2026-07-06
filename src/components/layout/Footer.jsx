import { Github, Linkedin, Instagram, MessageCircle, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="container mx-auto px-6 md:px-8 text-center">

        {/* Connect Message */}
        <p className="text-sm md:text-base text-foreground/70 mb-5">
          Feel free to{" "}
          <span className="font-semibold text-primary">connect</span> with me
        </p>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 mb-6">
          
          <a
            href="https://github.com/sirineelayeb"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
          </a>

          <a 
            href="https://www.linkedin.com/in/sirine-elayeb-455235243/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
          </a>

          <a
            href="https://www.instagram.com/syrine_ayb/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
          </a>

          <a
            href="https://wa.me/21650778952"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
          </a>
        </div>

        {/* Made with love + Copyright */}
        <div className="flex items-center justify-center gap-1.5 text-xs text-foreground/50">
          <span>© {currentYear}</span>
          <span>•</span>
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-red-500" fill="currentColor" />
          <span>by Sirine Elayeb</span>
        </div>

      </div>
    </footer>
  );
};