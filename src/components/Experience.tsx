import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "HPC Optimization Intern",
    company: "National Competence Centre for HPC, Montenegro",
    period: "Jun 2025 – Aug 2025",
    description: "Authored a 10-page board report recommending HPC adoption strategies to reduce processing times by 20-30%. Developed parallel processing scripts achieving 4x performance increase on multi-core testbeds.",
    technologies: ["C++", "HPC", "Parallel Computing", "Performance Benchmarking"],
  },
  {
    title: "Marketing Data Analyst",
    company: "Organic Growth Zone",
    period: "Jan 2025 – May 2025",
    description: "Analyzed 500k-row dataset to build an RFM segmentation model. Delivered strategy to cut costs by purging inactive customers and boost retention with targeted 'win-back' campaigns.",
    technologies: ["Python", "Pandas", "RFM Analysis", "Data Segmentation"],
  },
  {
    title: "Process Hierarchy Modeling Intern",
    company: "Merck",
    period: "Jan 2024 – Dec 2024",
    description: "Reduced data retrieval latency by 40% (250ms → 150ms) with a custom Java caching layer. Built a Spring Boot microservice integrating PostgreSQL, Neo4j, and MongoDB. Refactored legacy schemas to 3NF, eliminating 15GB of redundant data.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Neo4j", "MongoDB", "REST API"],
  },
  {
    title: "CEO & Founder",
    company: "WholeClothes, Lehigh University",
    period: "Jan 2022 – Jun 2023",
    description: "Founded an import/export venture achieving 60% lower cost-per-unit than domestic equivalents. Managed end-to-end international supply chain and B2B sales, delivering 95% on-time for all merchandise.",
    technologies: ["Supply Chain", "B2B Sales", "Negotiations", "Logistics", "Entrepreneurship"],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <p className="text-primary text-sm uppercase tracking-widest mb-4 font-medium">Career Journey</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Work <span className="text-gradient">Experience</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 transition-all duration-700 ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 md:-translate-x-1/2 mt-6 ring-4 ring-background shadow-[0_0_20px_hsl(var(--primary)/0.5)]" />

                {/* Content card */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16 md:ml-auto"
                    }`}
                >
                  <div className="group glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]">
                    {/* Company and period */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{exp.company}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
