import { Briefcase, Calendar, MapPin, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "EY Tunisia",
    role: "Artificial Intelligence Intern – Final Year Project",
    period: "02/2025 – 08/2025",
    location: "Tunis, Tunisia",
    description: [
      "Built an AI-powered pipeline to automate RFP evaluation and generate structured proposals using OpenAI LLMs.",
      "Developed advanced data ingestion workflows with OCR and multimodal LLMs for processing complex documents.", 
      "Implemented a RAG architecture with LangChain, backed by PostgreSQL and pgvector for semantic search.",
      "Integrated a user feedback loop for continuous improvement, and exposed the solution through a Flask REST API."
    ],
    tags: ["Python", "PostgreSQL", "Pgvector", "Flask", "RabbitMQ", "Docker", "OpenAI API", "Google Gemini API", "Pydantic", "Langchain", "OCR"]
  },
  {
    company: "EY Tunisia",
    role: "Artificial Intelligence Intern – Internal Project",
    period: "02/2025 – 07/2025",
    location: "Tunis, Tunisia",
    description: [
      "Developed an intelligent patient data deduplication system to enhance data quality and consistency across large-scale healthcare databases.",
      "Leveraged the dedupe library for accurate record linkage and built Flask-based interfaces to facilitate system interaction and results visualization, while contributing to testing, validation, and technical documentation."
    ],
    tags: ["Python", "Dedupe Library", "Flask", "Oracle DB"]
  },
  {
    company: "DATA-TRICKS",
    role: "Data Science Intern",
    period: "07/2024 – 08/2024",
    location: "Tunis, Tunisia",
    description: [
      "Built a generative AI chatbot using a RAG architecture with Google’s Gemini LLM to deliver accurate, context-aware customer support.",
      "Designed and deployed an end-to-end scalable system including web scraping, semantic search with FAISS, a FastAPI backend, an interactive Streamlit interface, and Docker-based containerization."
    ],
    tags: ["Python", "Streamlit", "FastAPI", "FAISS", "BeautifulSoup", "Google Gemini API", "Docker"]
  },
  {
    company: "Ruspina Bizerte",
    role: "Front-End Developer Intern",
    period: "07/2023 – 08/2023",
    location: "Bizerte, Tunisia",
    description: [
      "Designed and developed the user interface of an e-learning platform for the Ruspina Bizerte training center, using React.js.",
    ],
    tags: ["React.js", "React Router" ,"Ant Design"]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="h-1.5 w-20 bg-primary/20 mx-auto rounded-full relative">
            <div className="absolute inset-0 bg-primary w-1/2 rounded-full" />
          </div>
        </div>

        {/* Timeline Wrapper - LA LIGNE EST CORRIGÉE ICI */}
        <div className="relative space-y-12 before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 group">
              
              {/* INDICATEUR DE TIMELINE - CENTRÉ VERTICALEMENT ET SUR LA LIGNE */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 z-10">
                <Briefcase className="w-5 h-5" />
              </div>

              {/* Card Content */}
              <div className="bg-card p-6 md:p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all text-left">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-foreground flex items-center flex-wrap gap-2">
                      {exp.company}
                      {index === 0 && (
                        <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Latest
                        </span>
                      )}
                    </h3>
                    <p className="text-lg font-medium text-primary/90 mt-1 text-left">
                      {exp.role}
                    </p>
                  </div>

                  <div className="flex flex-col items-start md:items-end text-sm text-muted-foreground whitespace-nowrap">
                    <span className="flex items-center gap-2 font-medium">
                      <Calendar className="w-4 h-4" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 w-full">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-left">
                      <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span className="flex-1 text-left">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 justify-start">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary/50 text-secondary-foreground text-xs font-semibold border border-border/50 group-hover:border-primary/30 transition-colors"
                    >
                      {(tag.toLowerCase().includes('rag') || tag.toLowerCase().includes('llm')) && (
                        <Sparkles className="w-3 h-3 text-primary" />
                      )}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};