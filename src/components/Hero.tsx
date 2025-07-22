import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden gradient-animate">
      <ParticleBackground />
      
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-zoom">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 text-white text-luxury animate-slide-up">
            <span className="gradient-text-animate">Moeed ul Hassan</span>
          </h1>
          <div className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-up stagger-2">
            <span className="text-futuristic text-glow pulse-glow">
              Passionate Certified Python Backend Developer
            </span>
            <p className="mt-2 text-lg text-white/80 font-light">
              Since 2023 • Self Employed
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up stagger-3">
            Crafting intelligent backend solutions with AI-powered tools and modern Python frameworks. 
            Transforming ideas into <span className="gradient-text-animate font-semibold">scalable digital experiences</span>.
          </p>
          
          {/* Floating Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-slide-up stagger-4">
            <Button variant="outline" size="icon" className="glass-card hover-lift pulse-glow">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="glass-card hover-lift pulse-glow float">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="glass-card hover-lift pulse-glow float-delayed">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          
          {/* CTA Buttons with Neon Effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up stagger-5">
            <Button 
              size="lg" 
              className="neon-border luxury-card-hover text-lg font-semibold px-8 py-4 bg-luxury-gold text-primary hover:shadow-[0_0_20px_hsl(43_89%_58%/0.5)] transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="text-futuristic">View My Work</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card hover-lift text-white hover:text-luxury-gold transition-all duration-300 px-8 py-4 text-lg border-luxury-gold/30"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* Animated Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="text-white/60 hover:text-luxury-gold transition-all duration-300 pulse-glow animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;