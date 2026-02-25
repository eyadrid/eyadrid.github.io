import { Cake, MapPin, GraduationCap, Mail } from "lucide-react";

export const AboutSection = () => {
  const personalInfo = [
    { icon: <Cake className="text-primary w-5 h-5" />, label: "Birthday", value: "November 1, 2001" },
    { icon: <MapPin className="text-primary w-5 h-5" />, label: "Location", value: "Tunisia" },
    { icon: <GraduationCap className="text-primary w-5 h-5" />, label: "Degree", value: "ICT Engineering" },
    { icon: <Mail className="text-primary w-5 h-5" />, label: "Email", value: "eya.dridi@email.com" },
  ];

  return (
    <section id="about" className="py-12 md:py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          About <span className="text-primary"> Me</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16 items-center">
          
          {/* LEFT SIDE - IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="relative group animate-float">
              <div className="absolute -bottom-3 -left-3 w-full h-full border-2 border-primary/30 rounded-2xl transition-all duration-500 group-hover:-bottom-1 group-hover:-left-1" />

              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/10 bg-card">
                <img
                  src="/profile.jpg"
                  alt="Eya Dridi"
                  className="w-60 h-72 md:w-72 md:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="flex flex-col space-y-5 text-center md:text-left">
            <div className="space-y-3">
                {/* TAILLE MODIFIÉE ICI : text-lg sur mobile, text-xl sur tablette, text-2xl sur desktop */}
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground tracking-tight whitespace-nowrap lg:whitespace-normal">
                    ICT Engineer Specialized in Artificial Intelligence
                </h2>
              
              <div className="space-y-3 text-muted-foreground leading-snug text-sm md:text-base max-w-2xl">
                <p>
                  I’m an ICT Engineer specialized in Artificial Intelligence with a strong focus on building scalable, production-ready intelligent systems. I’m passionate about transforming complex problems into practical AI-driven solutions.
                </p>
                <p>
                  My expertise spans generative AI, NLP, and deep learning, along with full-stack development. I approach every project with a balance of analytical rigor and engineering excellence to create robust, intelligent systems.
                </p>
              </div>
            </div>

            {/* INFO GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 py-2">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/10">
                    {info.icon}
                  </div>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="font-bold text-foreground text-[10px] uppercase tracking-wider">
                      {info.label}:
                    </span>
                    <span className="text-muted-foreground text-xs md:text-sm">
                      {info.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
                {/* Ajout du bouton manquant pour la cohérence */}
                <a
                    href="/cv.pdf"
                    className="w-44 h-11 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary/5 transition-all font-semibold"
                >
                    Download CV
                </a>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};