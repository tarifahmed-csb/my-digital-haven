import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "ANPR Security System",
    date: "June 2024 – Aug 2024",
    description: "Real-time parking enforcement system with YOLOv8 and EasyOCR achieving 92% plate recognition accuracy on 1,000+ images. Full-stack solution featuring Flask backend (10+ REST endpoints), PostgreSQL database, and responsive dashboard with automated vehicle detection and alerts.",
    tags: ["YOLOv8", "EasyOCR", "Flask", "PostgreSQL", "OpenCV", "React"],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1585974738771-84483dd9f89f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=800&h=500&fit=crop",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Obesity Trends Analysis: COVID-19 Impact Study",
    date: "2011–2023",
    description: "Led 2-person research team analyzing 12+ years of CDC obesity data across 5 demographic tracks and 50+ US states. Coordinated 7-phase analytical pipeline with bootstrap validation and t-test significance testing (95% confidence intervals), uncovering 12.5% obesity acceleration post-pandemic.",
    tags: ["Python", "Pandas", "Statistical Analysis", "Data Visualization", "CDC Data"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "FDA Drug Safety Prediction Model",
    date: "Q2 2025",
    description: "Machine learning system processing 495,866 FDA adverse event records across 7 FAERS database tables (130MB). Trained 4 models achieving 77-83% accuracy and 0.80+ ROC AUC scores, with Random Forest classifier (100 estimators) uncovering demographic risk patterns including 7.7% gender disparity.",
    tags: ["Machine Learning", "Python", "Pandas", "Scikit-learn", "Random Forest", "Data Pipeline"],
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop",
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
      className={`group relative overflow-hidden rounded-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-xl transition-opacity duration-500 ${isHovered ? "opacity-60" : "opacity-0"
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
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImage === dotIndex
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
          {project.date && (
            <p className="text-primary text-xs font-medium uppercase tracking-wider mb-3">
              {project.date}
            </p>
          )}
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
              Projects and <span className="text-gradient">Research</span>
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


        </div>
      </div>
    </section>
  );
};

export default Projects;
