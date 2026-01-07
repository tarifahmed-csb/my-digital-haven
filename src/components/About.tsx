import { useEffect, useRef, useState } from "react";

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
              className={`relative transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="aspect-square rounded-3xl glass overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/20 animate-pulse-glow" />
                </div>
                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-16 h-16 border border-primary/30 rounded-full" />
                <div className="absolute bottom-12 left-12 w-24 h-24 border border-primary/20 rounded-xl rotate-12" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 glass px-6 py-4 rounded-2xl">
                <p className="text-3xl font-display font-bold text-gradient">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>

            {/* Content side */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <p className="text-primary text-sm uppercase tracking-widest mb-4">About Me</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Passionate about creating{" "}
                <span className="text-gradient">impactful</span> digital solutions
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  I'm a full-stack developer with a keen eye for design and a love for 
                  creating seamless user experiences. My journey in tech started with 
                  curiosity and has evolved into a deep passion for building products 
                  that make a difference.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design trends, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                {[
                  { number: "50+", label: "Projects" },
                  { number: "30+", label: "Clients" },
                  { number: "99%", label: "Satisfaction" },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 glass rounded-xl">
                    <p className="text-2xl md:text-3xl font-display font-bold text-gradient">
                      {stat.number}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
