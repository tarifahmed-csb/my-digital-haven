import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with real-time inventory, payments, and admin dashboard.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    gradient: "from-primary/20 to-orange-500/20",
  },
  {
    title: "AI Content Studio",
    description: "Creative tool leveraging AI to generate and edit marketing content at scale.",
    tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Health & Fitness App",
    description: "Cross-platform mobile app for workout tracking, nutrition, and wellness coaching.",
    tags: ["React Native", "Firebase", "GraphQL"],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing marketplace with virtual tours, messaging, and smart search.",
    tags: ["Vue.js", "Python", "AWS", "Mapbox"],
    gradient: "from-violet-500/20 to-purple-500/20",
  },
];

const Projects = () => {
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
    <section id="projects" ref={sectionRef} className="py-32 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-widest mb-4">Portfolio</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative overflow-hidden rounded-3xl transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="glass relative p-8 h-full min-h-[300px] flex flex-col">
                  {/* Project image placeholder */}
                  <div className="h-40 rounded-xl bg-secondary/50 mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                      <div className="w-20 h-20 border-2 border-primary/50 rounded-xl rotate-12" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-4 h-4" />
                      Source
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 glass rounded-full font-medium text-foreground transition-all duration-300 hover:bg-secondary hover:glow">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
