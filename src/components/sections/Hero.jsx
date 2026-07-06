import { useState, useEffect } from "react";

const jobs = [
  "IoT Engineer",
  "AI & LLM Enthusiast",
  "Full Stack Developer",
  "IoT Developer"
];

export const Hero = () => {
  const [currentJob, setCurrentJob] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = jobs[currentJob];
    let timer;

    if (!isDeleting && displayedText.length < current.length) {
      timer = setTimeout(() => {
        setDisplayedText(current.slice(0, displayedText.length + 1));
      }, 80);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(current.slice(0, displayedText.length - 1));
      }, 50);
    } else if (!isDeleting && displayedText.length === current.length) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentJob((prev) => (prev + 1) % jobs.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentJob]);

  return (
    <section
      id="home"
      className="section-full relative flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content - Centered */}
      <div className="container mx-auto px-6 md:px-8 text-center relative">
        <div className="max-w-4xl mx-auto relative z-10">

          {/* Main Greeting */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block mb-1 text-xl md:text-2xl lg:text-3xl text-gray-400 font-light">
              Hey, I'm
            </span>
            <span className="block mb-1 text-gradient">
              Sirine
            </span>
            <span className="block text-3xl md:text-5xl lg:text-6xl bg-gradient-to-br from-gray-700 via-gray-400 to-gray-200 dark:from-purple-200 dark:via-blue-200 dark:to-indigo-300 bg-clip-text text-transparent">
              Elayeb
            </span>
          </h1>

          {/* Dynamic Job Title */}
          <div className="h-12 flex items-center justify-center mt-5">
            <p className="text-lg md:text-2xl font-light text-gray-700 dark:text-gray-300">
              <span className="text-primary font-medium tracking-wide">
                {displayedText}
                <span className="inline-block w-1 h-5 bg-primary ml-1 animate-pulse" />
              </span>
            </p>
          </div>

          {/* Description */}
          <p className="mt-5 max-w-2xl mx-auto text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-light">
            Building intelligent systems at the intersection of{" "}
            <span className="text-primary font-medium">AI</span>,{" "}
            <span className="text-primary font-medium">IoT</span>, and{" "}
            <span className="text-primary font-medium">modern software</span>.
            <br className="hidden md:block" />
            Turning ideas into scalable, real-world impact.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="btn btn-primary"
            >
              Explore My Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn btn-outline"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};