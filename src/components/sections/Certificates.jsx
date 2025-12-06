import { 
  Bot, 
  Lightbulb, 
  MessageSquare, 
  Globe, 
  Wrench, 
  ClipboardList,
  ExternalLink 
} from "lucide-react";

export const Certificates = () => {
  const certificates = [
    {
      title: 'Building RAG Agents with LLMs',
      issuer: 'NVIDIA',
      date: 'Nov 2024',
      description: 'Advanced certification in building Retrieval-Augmented Generation agents using LLMs and vector databases.',
      verifyUrl: 'https://learn.nvidia.com/certificates',
      icon: <Bot className="w-6 h-6" />

    },
    {
      title: 'Building LLM Applications With Prompt Engineering',
      issuer: 'NVIDIA',
      date: 'Nov 2024',
      description: 'Expertise in prompt engineering and building production-ready LLM applications.',
      verifyUrl: 'https://learn.nvidia.com/certificates',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: 'Building Conversational AI Applications',
      issuer: 'NVIDIA',
      date: 'Nov 2024',
      description: 'Designing intelligent conversational AI systems with natural language understanding.',
      verifyUrl: 'https://learn.nvidia.com/certificates',
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: 'EF SET English Certificate - C1 Advanced',
      issuer: 'EF Standard English Test',
      date: 'Nov 2023',
      description: 'C1 Advanced (C2 in Reading/Writing) — Fluent in professional & academic English.',
      verifyUrl: 'https://cert.efset.org/pxhLfc',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Spring Boot & Angular Development',
      issuer: 'PROTECH-IT',
      date: 'Aug 2023',
      description: 'Full-stack enterprise development with Spring Boot backend and Angular frontend.',
      verifyUrl: '#',
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: 'Scrum Fundamentals Certified',
      issuer: 'SCRUMstudy',
      date: 'Nov 2023',
      description: 'Certified in Scrum methodology, agile principles, and team collaboration.',
      verifyUrl: 'https://www.scrumstudy.com/certification/verify',
      icon: <ClipboardList className="w-6 h-6" />
    }
  ];

  return (
    <section id="certificates" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Keep your beautiful background glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Certificates</span> & Achievements
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Verified credentials from leading institutions in AI and software engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900/95 rounded-2xl p-7 border border-gray-200 dark:border-gray-800
                         shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Simple icon */}
              <div className="mb-5 text-primary">
                {cert.icon}
              </div>

              {/* Title */}
             <p className="text-sm leading-snug text-gray-900 dark:text-white mb-2">
                {cert.title}
              </p>

              {/* Issuer & Date */}
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <span className="font-medium text-secondary">{cert.issuer}</span>
                <span>•</span>
                <span>{cert.date}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6">
                {cert.description}
              </p>

              {/* Clean verify button */}
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary 
                           transition-colors duration-200 group"
              >
                Verify Certificate
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};