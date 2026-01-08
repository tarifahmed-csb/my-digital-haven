import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, FileText } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image/Visual side */}
            <div
              className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
            >
              <div className="aspect-square rounded-3xl glass overflow-hidden relative group">
                <img
                  src="/profile.png"
                  alt="Tarif Ahmed"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent mix-blend-overlay" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 glass px-6 py-4 rounded-2xl">
                <p className="text-3xl font-display font-bold text-gradient">3+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>

            {/* Content side */}
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
            >
              <p className="text-primary text-sm uppercase tracking-widest mb-4">About Me</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Bridging Data Science{" "}
                <span className="text-gradient">Engineering & Strategy</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  <strong className="text-foreground block mb-2">Data Science & Strategic Lead</strong>
                  I am a Data Scientist and Engineer bridging the gap between technical architecture and business ROI. With an M.S. in Data Science and a background in CS and Business from Lehigh, I specialize in the full Digital Delivery lifecycle. From architecting high-performance database systems and leading end-to-end project management for global operations, I transform complex data into strategic roadmaps.
                </p>
                <p>
                  <strong className="text-foreground block mb-2">Optimization & Operational Impact</strong>
                  I drive efficiency through rigorous data optimization and stakeholder alignment. My track record includes reducing system latency by 40% at Merck and engineering capital-efficient logistics that slashed unit costs by 60%. By merging technical rigor with disciplined project scoping, I eliminate operational waste and deliver measurable excellence.
                </p>
              </div>

              {/* Stats */}
              {/* Stats replaced with Social Links */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center p-4 glass rounded-xl hover:bg-primary/5 transition-colors group cursor-pointer flex flex-col items-center justify-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      Resume
                    </p>
                    <p className="text-sm text-muted-foreground">View Full CV</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/tarifahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center p-4 glass rounded-xl hover:bg-primary/5 transition-colors group cursor-pointer flex flex-col items-center justify-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      LinkedIn
                    </p>
                    <p className="text-sm text-muted-foreground">Connect</p>
                  </div>
                </a>
                <a
                  href="https://github.com/tarifahmed-csb/tarifahmed-csb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center p-4 glass rounded-xl hover:bg-primary/5 transition-colors group cursor-pointer flex flex-col items-center justify-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      GitHub
                    </p>
                    <p className="text-sm text-muted-foreground">Codebase</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
