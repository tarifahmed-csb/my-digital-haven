import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from "lucide-react";

const projects = [
  {
    title: "Managify - AI-Powered Job Application Tracker",
    description: "Full-stack job tracker with Chrome extension integrating 6+ job boards (LinkedIn, Indeed, Greenhouse), automating one-click extraction and reducing manual entry by 90%. Intelligent categorization using 17K+ keywords across 5 domains to filter 100+ irrelevant patterns. Gemini 2.0 Flash API generates ATS-optimized resumes, reducing customization from 30 minutes to 60 seconds. Scalable TypeScript backend with Prisma ORM deployed on Vercel with Google Cloud SQL.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Google Gemini AI", "Prisma", "Chrome Extension", "Vercel"],
    images: [
      "/logo/man1.png",
      "/logo/man2.png",
      "/logo/man3.png",
      "/logo/man4.png",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/tarifahmed-csb/Managify",
  },
  {
    title: "ANPR Security System",
    description: "Real-time parking enforcement system with YOLOv8 and EasyOCR achieving 92% plate recognition accuracy on 1,000+ images. Full-stack solution featuring Flask backend (10+ REST endpoints), PostgreSQL database, and responsive dashboard with automated vehicle detection and alerts.",
    tags: ["YOLOv8", "EasyOCR", "Flask", "PostgreSQL", "OpenCV", "React"],
    images: [
      "/logo/ANPR.png",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/tarifahmed-csb/GateGuard",
  },
  {
    title: "Obesity Trends Analysis: COVID-19 Impact Study",
    description: "Led 2-person research team analyzing 12+ years of CDC obesity data across 5 demographic tracks and 50+ US states. Coordinated 7-phase analytical pipeline with bootstrap validation and t-test significance testing (95% confidence intervals), uncovering 12.5% obesity acceleration post-pandemic.",
    tags: ["Python", "Pandas", "Statistical Analysis", "Data Visualization", "CDC Data"],
    images: [
      "/logo/Obesity1.png",
      "/logo/Obesity2.png",
      "/logo/Obesity 3.png",
      "/logo/obesity4.png",
    ],
    githubUrl: "https://github.com/tarifahmed-csb/Statistical-Analysis-and-Modeling---Obesity-Socioeconomic-Factor",
  },
  {
    title: "FDA Drug Safety Prediction Model",
    description: "Machine learning system processing 495,866 FDA adverse event records across 7 FAERS database tables (130MB). Trained 4 models achieving 77-83% accuracy and 0.80+ ROC AUC scores, with Random Forest classifier (100 estimators) uncovering demographic risk patterns including 7.7% gender disparity.",
    tags: ["Machine Learning", "Python", "Pandas", "Scikit-learn", "Random Forest", "Data Pipeline"],
    images: [
      "/logo/Drug1.png",
      "/logo/Drug2.png",
      "/logo/Drug3.png",
      "/logo/Drug4.png",
    ],
    githubUrl: "https://github.com/tarifahmed-csb/FDA-FAERS-Drug-Safety-Prediction-Model",
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isVisible: boolean;
  onImageClick: (images: string[], imageIndex: number, title: string) => void;
}

const ProjectCard = ({ project, index, isVisible, onImageClick }: ProjectCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleImageClick = () => {
    onImageClick(project.images, currentImage, project.title);
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
                className="w-full h-full object-cover flex-shrink-0 cursor-pointer"
                onClick={handleImageClick}
              />
            ))}
          </div>

          {/* Image navigation */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground z-10"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground z-10"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
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
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
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
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            <a
              href={project.githubUrl}
              className={`flex items-center justify-center gap-2 py-2.5 bg-secondary text-foreground rounded-xl text-sm font-medium transition-all duration-300 hover:bg-secondary/80 hover:-translate-y-0.5 ${project.liveUrl ? 'flex-1' : 'w-full'}`}
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

// Lightbox Modal Component
interface LightboxProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  title: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({ isOpen, images, currentIndex, title, onClose, onNext, onPrev }: LightboxProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-50"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Image container */}
      <div
        className="relative max-w-7xl max-h-[90vh] w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Project title */}
        <div className="text-center mb-4">
          <h3 className="font-display text-2xl font-semibold text-foreground">{title}</h3>
          {images.length > 1 && (
            <p className="text-muted-foreground text-sm mt-1">
              {currentIndex + 1} / {images.length}
            </p>
          )}
        </div>

        {/* Image */}
        <div className="relative flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl"
          />
        </div>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState("");

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

  const handleImageClick = (images: string[], imageIndex: number, title: string) => {
    setLightboxImages(images);
    setLightboxIndex(imageIndex);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  const handleLightboxNext = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const handleLightboxPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

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
                onImageClick={handleImageClick}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        title={lightboxTitle}
        onClose={() => setLightboxOpen(false)}
        onNext={handleLightboxNext}
        onPrev={handleLightboxPrev}
      />
    </section>
  );
};

export default Projects;
