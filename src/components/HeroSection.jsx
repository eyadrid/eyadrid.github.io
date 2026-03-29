import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Eya
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Dridi
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            ICT Engineer specialized in Artificial Intelligence, passionate about building intelligent systems that combine machine learning, deep learning, and modern software engineering. 
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="cosmic-button w-44 bg-secondary border-secondary hover:bg-secondary/80 text-center"
              style={{ backgroundColor: '#6365f1', borderColor: '#484ad4' }} 
            >
              Get In Touch
            </a>
            
            <a 
              href="#projects" 
              className="cosmic-button w-44 text-center"
            >
              View My Work
            </a>
          </div>

          {/* Social Links Section - Unified Colors */}
          <div className="pt-8 opacity-0 animate-fade-in-delay-4">
            <div className="flex space-x-8 justify-center items-center">
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/dridieya/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={28} />
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/eyadrid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
              >
                <Github size={28} />
              </a>

              {/* HackerRank */}
              <a 
                href="https://www.hackerrank.com/profile/eya_dridi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
              >
                <Code2 size={28} />
              </a>

              {/* Email */}
              <a 
                href="mailto:eya.dridi@supcom.tn" 
                className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={28} />
              </a>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};