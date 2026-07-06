import React from "react";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 3 },
      { name: "Angular", level: 2 },
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      { name: "Node.js & Express", level: 3 },
      { name: "Spring Boot", level: 2 },
      { name: "Databases (MongoDB, MySQL, PostgreSQL)", level: 3 },
    ],
  },
  {
    category: "IoT",
    skills: [{ name: "IoT (ESP32, MQTT, WebSocket)", level: 3 }],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "AI & Machine Learning", level: 2 },
      { name: "Python (Scikit-learn)", level: 2 },
      { name: "LLMs & RAG Systems", level: 2 },
    ],
  },
  {
    category: "DevOps",
    skills: [{ name: "Docker & CI/CD", level: 2 }],
  },
];

const levelLabels = { 1: "Beginner", 2: "Intermediate", 3: "Advanced" };

const ProficiencyDots = ({ level }) => (
  <div className="flex gap-1" aria-label={levelLabels[level]}>
    {[1, 2, 3].map((dot) => (
      <span
        key={dot}
        className="w-1.5 h-1.5 rounded-full"
        style={{
          backgroundColor: dot <= level ? "var(--primary)" : "var(--border)",
        }}
      />
    ))}
  </div>
);

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex items-center justify-center py-12"
    >
      <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center text-center">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-3">
          Skills & Expertise
        </h2>

        {/* Paragraph */}
        <p className="text-foreground/70 max-w-xl mb-8 text-sm md:text-base leading-relaxed text-center">
          I focus on software development, modern web applications, IoT systems,
          and AI technologies. My goal is to continuously learn and work with
          new technologies to build scalable, efficient, and real-world solutions.
        </p>

        {/* Skills by category */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 w-full text-left">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3
                className="text-xs font-semibold tracking-wider uppercase mb-2"
                style={{ color: "var(--primary)" }}
              >
                {group.category}
              </h3>

              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between gap-4 pb-2"
                    style={{ borderBottom: "1px solid var(--border)" }}
                  >
                    <span
                      className="text-xs md:text-sm"
                      style={{ color: "var(--foreground)" }}
                    >
                      {skill.name}
                    </span>
                    <ProficiencyDots level={skill.level} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};