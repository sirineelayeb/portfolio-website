export const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center py-12 px-6"
    >
      <div className="max-w-2xl mx-auto text-center space-y-6">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gradient animate-fade-in">
          About Me
        </h2>

        {/* Card */}
        <div className="card-glass rounded-2xl p-5 md:p-6 space-y-3 text-center">

          <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
            I am passionate about programming and technology, with a strong interest in{" "}
            <span className="text-primary font-semibold">software development</span>.
          </p>

          <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
            My main focus is building modern applications using{" "}
            <span className="text-primary font-semibold">new technologies</span>, especially in
            software development, IoT, and AI systems. I enjoy exploring tools that improve
            performance, scalability, and user experience.
          </p>

          <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
            My goal is to work in{" "}
            <span className="text-secondary font-semibold">software development</span>,
            contribute to real-world projects, learn continuously, and build innovative
            solutions using modern tech stacks.
          </p>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5 pt-4">

          <a
            href="/Syrine_Elayeb__Resume.pdf"
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