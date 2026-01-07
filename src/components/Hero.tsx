import { ArrowDown, Github, Linkedin, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effect */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 animate-pulse-glow pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />
      
      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
      <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow text */}
          <p className="text-primary text-sm md:text-base uppercase tracking-widest mb-6 opacity-0 animate-fade-up font-medium">
            Creative Developer & Designer
          </p>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 opacity-0 animate-fade-up stagger-1">
            Hello, I'm{" "}
            <span className="text-gradient">Alex</span>
            <br />
            <span className="text-foreground/70">I build digital</span>
            <br />
            experiences.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up stagger-2 leading-relaxed">
            A passionate developer crafting beautiful, interactive web experiences 
            with modern technologies and thoughtful design.
          </p>

          {/* Social Links - More visible */}
          <div className="flex items-center justify-center gap-4 mb-10 opacity-0 animate-fade-up stagger-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-3 bg-secondary/80 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full transition-all duration-300 hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)] hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium text-sm">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-3 bg-secondary/80 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full transition-all duration-300 hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)] hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium text-sm">LinkedIn</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-3 bg-secondary/80 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full transition-all duration-300 hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)] hover:-translate-y-1"
            >
              <FileText className="w-5 h-5" />
              <span className="font-medium text-sm">Resume</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up stagger-3">
            <a
              href="#projects"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass rounded-full font-medium text-foreground transition-all duration-300 hover:bg-secondary border border-border/50 hover:border-primary/50"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-5">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
