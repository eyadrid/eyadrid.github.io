import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Multi-Agent Dental System",
    description: "A conversational AI system for managing dental appointments, powered by LangGraph and llama-3.3-70b-versatile. This project demonstrates a multi-agent architecture where specialized agents work together to handle different appointment-related tasks through natural language interactions.",
    image: "https://www.bookingpressplugin.com/wp-content/uploads/2023/03/the-top-appointment-scheduling-software-features-for-dental-practices.webp",
    tags: ["Pyton", "LangGraph", "Llama 3.3", "FastAPI", "Streamlit"],
    github: "https://github.com/eyadrid/Dental-Appointment-System",
  },
  {
    id: 2,
    title: "AI News Aggregator",
    description: "An automated pipeline that scrapes AI content from YouTube and RSS feeds, summarizes it via LLMs, and delivers personalized daily digests through Gmail. It includes a curation agent that ranks articles based on user preferences.",
    image: "https://tse1.mm.bing.net/th/id/OIP.MOuAAMr0R4eoJheB6OQQwwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    tags: ["Python", "Groq LLM", "PostgreSQL", "GitHub Actions", "railway"],
    github: "https://github.com/eyadrid/ai-news-hub",
  },
  {
    id: 3,
    title: "Telco Churn Prediction",
    description: "Designed a churn prediction system using XGBoost to help identify customers likely to leave telecom services. Implemented MLflow tracking and deployed via FastAPI and Gradio, optimizing for high recall to maximize retention opportunities.",
    image: "https://tse4.mm.bing.net/th/id/OIP.ulTH7A7IkaodM07uXA4YLwHaF8?rs=1&pid=ImgDetMain&o=7&rm=3",
    tags: ["Python", "XGBoost", "MLflow", "FastAPI", "Gradio"],
    github: "https://github.com/eyadrid/Customer-Churn",
  },
  {
    id: 4,
    title: "EEG Emotion Recognition",
    description: "Deep learning system for human affective state recognition using the DEAP dataset. Focuses on frequency band extraction (Alpha/Beta/Gamma) and signal processing to classify emotions based on arousal and valence scores.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
    tags: ["Python", "Deep Learning", "Signal Processing", "DEAP Dataset"],
    github: "https://github.com/eyadrid/EEG-Signal-Processing-using-DEAP-Dataset",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-background dark:bg-[#030712] transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        {/* Header de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="h-1.5 w-20 bg-primary/20 mx-auto rounded-full relative">
            <div className="absolute inset-0 bg-primary w-1/2 rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
          </div>
        </div>

        {/* Grille des Projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Image du Projet */}
              <div className="relative h-64 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Contenu du Projet */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-8 leading-relaxed text-[15px]">
                  {project.description}
                </p>

                {/* Tags et Bouton poussés vers le bas */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-lg border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bouton Unique (Code) */}
                  <div className="pt-6 border-t border-border/30">
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};