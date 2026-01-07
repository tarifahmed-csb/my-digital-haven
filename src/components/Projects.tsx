import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with real-time inventory, payments, and admin dashboard.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Content Studio",
    description: "Creative tool leveraging AI to generate and edit marketing content at scale.",
    tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1675557009875-436f7a6dbf27?w=800&h=500&fit=crop",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Health & Fitness App",
    description: "Cross-platform mobile app for workout tracking, nutrition, and wellness coaching.",
    tags: ["React Native", "Firebase", "GraphQL"],
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=500&fit=crop",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing marketplace with virtual tours, messaging, and smart search.",
    tags: ["Vue.js", "Python", "AWS", "Mapbox"],
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectCard = ({ project, index, isVisible }: { project: typeof projects[0]; index: number; isVisible: boolean }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect on hover */}
      <div 
        className={`absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-xl transition-opacity duration-500 ${
          isHovered ? "opacity-60" : "opacity-0"
        }`}
      />
      
      <div className="relative glass border border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/50">
        {/* Image carousel */}
        <div className="relative h-52 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {project.images.map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image}
                alt={`${project.title} screenshot ${imgIndex + 1}`}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>
          
          {/* Image navigation */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              
              {/* Dots indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {project.images.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={(e) => { e.stopPropagation(); setCurrentImage(dotIndex); }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImage === dotIndex 
                        ? "bg-primary w-6" 
                        : "bg-foreground/40 hover:bg-foreground/60"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <a 
              href={project.liveUrl}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:-translate-y-0.5"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a 
              href={project.githubUrl}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-secondary text-foreground rounded-xl text-sm font-medium transition-all duration-300 hover:bg-secondary/80 hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4" />
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

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
      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-widest mb-4 font-medium">Portfolio</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A selection of my recent work. Each project represents unique challenges and creative solutions.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                index={index} 
                isVisible={isVisible} 
              />
            ))}
          </div>

          {/* View all button */}
          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-secondary text-foreground rounded-full font-medium transition-all duration-300 hover:bg-secondary/80 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] hover:-translate-y-1">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
