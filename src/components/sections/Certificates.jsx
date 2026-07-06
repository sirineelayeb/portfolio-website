import { ExternalLink } from "lucide-react";

export const Certificates = () => {
  const certificates = [
    {
      title: "Building Conversational AI Applications",
      issuer: "NVIDIA",
      date: "2025",
      link: "https://drive.google.com/file/d/1P52mQgR_RQi8orzSsmhJvinBju9v5bH7/view?usp=sharing",
    },
    {
      title: "Building LLM Applications with Prompt Engineering",
      issuer: "NVIDIA",
      date: "2025",
      link: "https://drive.google.com/file/d/1zmuhNHRhqrhsNVCR_95KUsYD4CMK8s5x/view?usp=sharing",
    },
    {
      title: "Building RAG Agents with LLMs",
      issuer: "NVIDIA",
      date: "2025",
      link: "https://drive.google.com/file/d/16lBMKK2eewIkOR2sw788EOg3mDxNnq5V/view?usp=sharing",
    },
    {
      title: "English Proficiency Certificate — B2",
      issuer: "EF SET",
      date: "2026",
      link: "https://drive.google.com/file/d/11pS2WElg6Y7MakBrnK46mmx3sopmR8dn/view?usp=sharing",
    },
    {
      title: "Full-Stack Development: Java, Spring Boot & Angular",
      issuer: "PROTECH-IT",
      date: "2023",
      link: "https://drive.google.com/file/d/11RRh0LiMSe44AYENF4cWq-a7rRdUTMVV/view?usp=sharing",
    },
  ];

  return (
    <section
      id="certificates"
      className="flex items-center justify-center px-6 py-12"
    >
      <div className="max-w-4xl w-full text-center">

        <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
          Certificates
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="p-4 rounded-xl border border-white/10 bg-white/5 dark:bg-white/5 text-left"
            >
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-1.5">
                {cert.title}
              </h3>

              <p className="text-sm text-foreground/60 mb-4">
                {cert.issuer} • {cert.date}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
              >
                View Certificate
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};