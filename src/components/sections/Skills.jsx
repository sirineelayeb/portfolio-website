import React from 'react';

const skills = [
  { name: 'React.js & Next.js',             level: 92, icon: '⚛️' },
  { name: 'AI & Machine Learning',          level: 88, icon: '🧠' },
  { name: 'Python / TensorFlow',            level: 85, icon: '🐍' },
  { name: 'Node.js & Express',              level: 82, icon: '⚡' },
  { name: 'IoT (ESP32, MQTT, WebSocket)',   level: 87, icon: '📡' },
  { name: 'Docker & Cloud',                 level: 78, icon: '☁️' },
  { name: 'LLMs & RAG Systems',             level: 72, icon: '🤖' },
  { name: 'Databases (MySQL, MongoDB & PostgreSQL)', level: 80, icon: '🗄️' },
];



export const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 overflow-hidden relative">
      {/* Optional Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
       {/* Title */}
<div className="text-center mb-20 md:mb-24 lg:mb-32 xl:mb-40">
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
    <span className="text-gradient">Skills</span> & Expertise
  </h2>
<p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
  A comprehensive toolkit spanning AI development, IoT systems, and full-stack engineering.
</p>
</div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="card-glass p-6 lg:p-8 rounded-2xl border border-white/10 backdrop-blur-xl hover-lift transition-all duration-500">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl lg:text-3xl">{skill.icon}</div>
                    <h3 className="text-lg lg:text-xl font-semibold text-foreground">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-2xl font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="relative h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-2000 ease-out origin-left"
                    style={{
                      width: `${skill.level}%`,
                      transform: `scaleX(${skill.level / 100})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine"></div>
                </div>

                {/* Level Label (visible on hover or always on large screens) */}
                <div className="mt-2 text-right">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 opacity-0 lg:opacity-100 group-hover:opacity-100 transition-opacity">
                    {skill.level < 60 ? 'Learning' : skill.level < 80 ? 'Proficient' : 'Expert'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA at bottom */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400">
            Always learning new tools & frameworks
          </p>
        </div>
      </div>
    </section>
  );
};