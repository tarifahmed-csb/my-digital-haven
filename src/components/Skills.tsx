import { useEffect, useRef, useState } from "react";
import { Code, Palette, Zap, Globe, Database, Smartphone } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, and modern CSS frameworks for pixel-perfect interfaces.",
    color: "from-primary to-orange-400",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL, and cloud infrastructure for scalable solutions.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, user research, and design systems that bridge beauty with functionality.",
    color: "from-pink-500 to-rose-400",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native and cross-platform solutions for iOS and Android experiences.",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization, Core Web Vitals, and lightning-fast load times that users love.",
    color: "from-yellow-500 to-amber-400",
  },
  {
    icon: Globe,
    title: "DevOps & Cloud",
    description: "AWS, Docker, CI/CD pipelines, and infrastructure that just works.",
    color: "from-violet-500 to-purple-400",
  },
];

const Skills = () => {
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
    <section id="skills" ref={sectionRef} className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-widest mb-4">What I Do</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className={`group glass p-8 rounded-2xl hover-lift cursor-default transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${skill.color}`}
                >
                  <skill.icon className="w-7 h-7 text-background" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
