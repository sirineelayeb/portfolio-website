export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="text-center max-w-3xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-12 animate-fade-in">
          About Me
        </h2>

        {/* Intro Text */}
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
          I fell in love with programming and technology early on. My field of interest is 
          <span className="text-primary font-semibold"> IoT, AI, and software development</span>. 
          I enjoy learning new tools and technologies to create modern, scalable, and intelligent solutions.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
          My goal is to combine my knowledge in IoT, AI, and software engineering to build innovative systems that solve real-world problems and make a positive impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/english-cv.pdf"
            target="_blank"
            className="btn btn-primary"
          >
            Download CV
          </a>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn btn-outline"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};
