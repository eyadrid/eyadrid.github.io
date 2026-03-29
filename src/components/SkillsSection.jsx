import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Code2, 
  Database, 
  BrainCircuit, 
  Settings2, 
  Terminal, 
  Globe, 
  Atom, 
  Zap, 
  LineChart, 
  Box, 
  GitBranch,
  Cpu,
  Fingerprint,
  Sparkles,
  Bot
} from "lucide-react";

const skills = [
  // Programming languages, libraries, and frameworks languages, libraries, and frameworks
  { name: "Python", category: "Programming languages, libraries, and frameworks", icon: <Terminal className="w-5 h-5" /> },
  { name: "C++", category: "Programming languages, libraries, and frameworks", icon: <Code2 className="w-5 h-5" /> },
  { name: "JavaScript/TypeScript", category: "Programming languages, libraries, and frameworks", icon: <Globe className="w-5 h-5" /> },
  { name: "HTML / CSS", category: "Programming languages, libraries, and frameworks", icon: <Globe className="w-5 h-5" /> },
  { name: "ReactJs", category: "Programming languages, libraries, and frameworks", icon: <Atom className="w-5 h-5" /> },
  { name: "SQL", category: "Programming languages, libraries, and frameworks", icon: <Database className="w-5 h-5" /> },
  { name: "FastAPI", category: "Programming languages, libraries, and frameworks", icon: <Zap className="w-5 h-5" /> },
  { name: "Streamlit", category: "Programming languages, libraries, and frameworks", icon: <LineChart className="w-5 h-5" /> },
  { name: "Flask", category: "Programming languages, libraries, and frameworks", icon: <Zap className="w-5 h-5" /> },
  { name: "Langchain", category: "Programming languages, libraries, and frameworks", icon: <BrainCircuit className="w-5 h-5" /> },
  { name: "LangGraph", category: "Programming languages, libraries, and frameworks", icon: <BrainCircuit className="w-5 h-5" /> },

  // Database systems
  { name: "MySQL", category: "Database systems", icon: <Database className="w-5 h-5" /> },
  { name: "Firebase", category: "Database systems", icon: <Box className="w-5 h-5" /> },
  { name: "PostgreSQL", category: "Database systems", icon: <Database className="w-5 h-5" /> },
  { name: "Oracle Database", category: "Database systems", icon: <Database className="w-5 h-5" /> },

  // Data science and machine learning
  { name: "TensorFlow / Keras", category: "Data science and machine learning", icon: <Cpu className="w-5 h-5" /> },
  { name: "PyTorch", category: "Data science and machine learning", icon: <Fingerprint className="w-5 h-5" /> },
  { name: "Pandas / NumPy", category: "Data science and machine learning", icon: <LineChart className="w-5 h-5" /> },
  { name: "OpenCV", category: "Data science and machine learning", icon: <Settings2 className="w-5 h-5" /> },
  { name: "SciPy", category: "Data science and machine learning", icon: <BrainCircuit className="w-5 h-5" /> },
  { name: "Scikit-Learn", category: "Data science and machine learning", icon: <BrainCircuit className="w-5 h-5" /> },
  { name: "Hugging Face", category: "Data science and machine learning", icon: <Atom className="w-5 h-5" /> },
  { name: "Matplotlib", category: "Data science and machine learning", icon: <LineChart className="w-5 h-5" /> },
  { name: "Power BI", category: "Data science and machine learning", icon: <LineChart className="w-5 h-5" /> },
  { name: "MLflow", category: "Data science and machine learning", icon: <LineChart className="w-5 h-5" /> },
  { name: "OpenAI API", category: "Data science and machine learning", icon: <Bot className="w-5 h-5" /> },
  { name: "Google Gemini API", category: "Data science and machine learning", icon: <Sparkles className="w-5 h-5" /> },

  // DevOps and version control
  { name: "Git / GitHub", category: "devops", icon: <GitBranch className="w-5 h-5" /> },
  { name: "GitLab", category: "devops", icon: <GitBranch className="w-5 h-5" /> },
  { name: "Docker", category: "devops", icon: <Box className="w-5 h-5" /> },
  { name: "RabbitMQ", category: "devops", icon: <Settings2 className="w-5 h-5" /> },
];

const categories = ["Programming languages, libraries, and frameworks", "Database systems", "Data science and machine learning", "devops"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Programming languages, libraries, and frameworks");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="h-1.5 w-20 bg-primary/20 mx-auto rounded-full relative">
            <div className="absolute inset-0 bg-primary w-1/2 rounded-full" />
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize border",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary/40 text-muted-foreground border-transparent hover:border-primary/30"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-card hover:bg-secondary/20 rounded-xl border border-border/50 transition-colors group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary group-hover:bg-primary/10 text-primary transition-colors">
                {skill.icon}
              </div>
              <span className="font-medium text-foreground tracking-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};