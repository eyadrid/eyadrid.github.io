import { GraduationCap, Calendar, MapPin, Award, Medal } from "lucide-react";

const educationData = [
  {
    institution: "Higher School of Communications of Tunis (SUP’COM)",
    degree: "Engineering Degree in ICT",
    specialization: "Specializing in Smart Image Applications (SIA)",
    period: "09/2022 – 10/2025",
    location: "Ariana, Tunisia",
    achievements: ["Obtained with honors"],
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    institution: "Preparatory Institute for Engineering Studies of Bizerte (IPEIB)",
    degree: "Preparatory Degree in Physics and Chemistry",
    period: "09/2020 – 06/2022",
    location: "Bizerte, Tunisia",
    achievements: [
      "Ranked 72nd out of 1,480 candidates in the National Entrance Examination for Engineering Schools",
    ],
    icon: <Award className="w-6 h-6" />,
  },
  {
    institution: "El Canal High School",
    degree: "Baccalaureate in Mathematics",
    period: "09/2016 – 06/2020",
    location: "Bizerte, Tunisia",
    achievements: ["Baccalaureate with honors"],
    icon: <Medal className="w-6 h-6" />,
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <div className="h-1.5 w-20 bg-primary/20 mx-auto rounded-full relative">
            <div className="absolute inset-0 bg-primary w-1/2 rounded-full" />
          </div>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Dot on the timeline */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {edu.icon}
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-md transition-all group-hover:border-primary/30">
                <div className="flex flex-col gap-1 mb-3">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-primary">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {edu.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mt-1">{edu.institution}</h3>
                  <p className="text-muted-foreground font-medium">
                    {edu.degree}
                  </p>
                  {edu.specialization && (
                    <p className="text-sm italic text-muted-foreground/80">
                      {edu.specialization}
                    </p>
                  )}
                </div>

                <ul className="mt-4 space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-foreground/90 font-medium">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};