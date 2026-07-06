import { useState } from "react";
import { ExternalLink, Github, ImageOff } from "lucide-react";

export const Projects = () => {
  const [page, setPage] = useState(0);
  const [failedImages, setFailedImages] = useState({});

  const projects = [
    {
      title: "HaulTrack",
      category: "IoT & AI",
      description:
        "Real-time fleet tracking system with IoT devices and live monitoring dashboard.",
      link: "https://fleet-management-frontend-ebon.vercel.app",
      image: "/projects/haultrack.png",
    },
    {
      title: "AI Robot Monitoring",
      category: "AI & IoT",
      description:
        "Predictive maintenance system using anomaly detection on robot telemetry data.",
      link: "https://github.com/sirineelayeb/ai-robot-health-monitoring",
      image: "/projects/ai-robot-monitoring.png",
    },
    {
      title: "Process Management System",
      category: "IoT & Enterprise",
      description:
        "Smart industrial workflow system for machine monitoring and task automation.",
      link: "https://github.com/sirineelayeb/mes-plastic-bottle-process-management",
      image: "/projects/process-management.png",
    },
    {
      title: "E-Learning Platform",
      category: "Full Stack",
      description:
        "Educational platform with courses, dashboards, and secure backend architecture.",
      link: "https://github.com/sirineelayeb/E-Learning-Platform-Project",
      image: "/projects/e-learning.png",
    },
    {
      title: "IoT Vehicle Tracking",
      category: "IoT",
      description:
        "GPS-based real-time vehicle tracking system with live data synchronization.",
      link: "https://github.com/sirineelayeb/iot-delivery-tracking-system",
      image: "/projects/iot-vehicle-tracking.png",
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const visibleProjects = projects.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const getLinkMeta = (link) => {
    if (!link) return { label: "Coming soon", Icon: null, disabled: true };
    if (link.includes("github.com"))
      return { label: "View code", Icon: Github, disabled: false };
    return { label: "View project", Icon: ExternalLink, disabled: false };
  };

  const handleImageError = (title) => {
    setFailedImages((prev) => ({ ...prev, [title]: true }));
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center px-6 py-12"
    >
      {/* HEADER */}
      <div className="text-center max-w-2xl mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-3">
          Featured Projects
        </h2>
        <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
          A selection of real-world IoT, AI and full-stack systems I designed and developed.
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
        {visibleProjects.map((project, index) => {
          const { label, Icon, disabled } = getLinkMeta(project.link);
          const showFallback = !project.image || failedImages[project.title];

          return (
            <div key={index} className="flex flex-col group">
              {/* THUMBNAIL */}
              <div
                className="relative w-full aspect-video mb-3 overflow-hidden rounded-xl"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--muted, rgba(128,128,128,0.08))",
                }}
              >
                {showFallback ? (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-2"
                    style={{ color: "var(--foreground)", opacity: 0.35 }}
                  >
                    <ImageOff size={20} />
                    <span className="text-xs">Preview coming soon</span>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    onError={() => handleImageError(project.title)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              <span
                className="text-xs font-medium tracking-wide mb-1.5"
                style={{ color: "var(--primary)" }}
              >
                {project.category}
              </span>

              <h3 className="text-sm md:text-base font-semibold mb-1.5" style={{ color: "var(--foreground)" }}>
                {project.title}
              </h3>

              <p
                className="text-xs md:text-sm mb-3 flex-1"
                style={{ color: "var(--foreground)", opacity: 0.7 }}
              >
                {project.description}
              </p>

              {disabled ? (
                <span
                  className="inline-flex items-center gap-1.5 text-xs cursor-default"
                  style={{ color: "var(--foreground)", opacity: 0.4 }}
                >
                  {label}
                </span>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs w-fit transition-colors"
                  style={{ color: "var(--foreground)", opacity: 0.75 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                >
                  <Icon size={14} />
                  {label}
                </a>
              )}
            </div>
          );
        })}
      </div>

      {/* PAGINATION */}
      <div className="mt-8 flex items-center gap-2">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="px-3 py-1.5 rounded-lg text-xs transition disabled:opacity-30"
          style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className="w-7 h-7 rounded-lg text-xs transition"
            style={
              page === i
                ? { background: "var(--primary)", color: "white", border: "1px solid var(--primary)" }
                : { border: "1px solid var(--border)", color: "var(--foreground)", opacity: 0.6 }
            }
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
          className="px-3 py-1.5 rounded-lg text-xs transition disabled:opacity-30"
          style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
        >
          Next
        </button>
      </div>
    </section>
  );
};