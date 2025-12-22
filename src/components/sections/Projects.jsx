import { 
  Bot, 
  Radio, 
  GraduationCap, 
  Globe, 
  Github, 
  ExternalLink 
} from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: 'AI-Based Robot Health Monitoring',
      category: 'IoT & AI',
      description:
        'Real-time robot health monitoring using IoT telemetry and AI-based anomaly detection. Dashboard visualizes battery, motor, CPU, and velocity data.',
      technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'MQTT', 'WebSocket', 'Random Forest', 'TailwindCSS'],
      github: 'https://github.com/sirineelayeb/ai-robot-health-monitoring.git',
      demo: null,
      icon: <Bot className="w-6 h-6" />,
      contributions: [
        'Developed backend to collect and process real-time robot telemetry.',
        'Implemented Random Forest AI model to detect anomalies.',
        'Built React dashboard to visualize robot health, warnings, and trends.',
        'Integrated MQTT and WebSocket for real-time communication.',
        'Created robot simulator for testing and AI validation.'
      ]
    },
    {
      title: 'Process Management System',
      category: 'Full-Stack Enterprise',
      description:
        'A comprehensive platform to manage manufacturing processes, operators, machines, and task execution with real-time monitoring and simulations.',
      technologies: ['React', 'Node.js', '.NET', 'MongoDB', 'MQTT', 'WebSocket', 'TailwindCSS'],
      github: 'https://github.com/sirineelayeb/mes-plastic-bottle-process-management.git',
      demo: null,
      icon: <Globe className="w-6 h-6" />,
      contributions: [
        'Developed Product Manager module to manage operators, machines, processes, and task workflows, including skill-based operator assignment.',
        'Built Operator module allowing operators to view their assigned tasks and update task status in real time.',
        'Integrated MQTT for real-time communication between machines and backend.',
        'Implemented simulation of machine operations using .NET for testing and validation of workflows.'
      ]
    },
    {
      title: 'AI Delivery Assistant',
      category: 'Artificial Intelligence',
      description:
        'Python AI assistant for delivery tracking with semantic search, embeddings, and natural-language queries using MongoDB and FAISS.',
      technologies: ['Python', 'MongoDB', 'FAISS', 'Sentence Transformers', 'RAG', 'FastAPI'],
      github: 'https://github.com/sirineelayeb/ai-delivery-assistant',
      demo: null,
      icon: <Bot className="w-6 h-6" />
    },
    {
      title: 'Real-Time IoT Vehicle Tracking',
      category: 'IoT & Embedded Systems',
      description:
        'Connected IoT platform for live vehicle tracking, delivery monitoring, and fleet analytics using ESP32 and MQTT.',
      technologies: ['ESP32', 'MQTT', 'WebSocket', 'React', 'Node.js', '.Net'],
      github: 'https://github.com/Azlouk-Ahmed/iot-delivery-tracking-system.git',
      demo: null,
      icon: <Radio className="w-6 h-6" />
    },
    {
      title: 'E-learning Platform',
      category: 'Web Development',
      description:
        'Full-featured education platform with courses, messaging, dashboards, and secure backend built with Spring Boot.',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Thymeleaf'],
      github: 'https://github.com/sirineelayeb/E-Learning-Platform-Project',
      demo: null,
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: 'Social Networking App',
      category: 'Full-Stack MERN',
      description:
        'Mini social network with posts, reactions, profiles, and REST API. Scalable MERN architecture.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: '#',
      demo: null,
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Featured</span> Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world solutions built with modern technologies and clean architecture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900/95 rounded-xl p-4 border border-gray-200 dark:border-gray-800 
                         shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6 text-primary opacity-90 group-hover:opacity-100 transition-opacity">
                {project.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>

              <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
                {project.category}
              </span>

              <p className="text-sm  dark:text-gray-300 mb-6 leading-snug">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium text-secondary bg-secondary/10 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 text-sm font-medium">
                {project.github && project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors group/link"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 translate-x-0 group-hover/link:translate-x-1 transition-all" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary font-semibold transition-colors group/link"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
