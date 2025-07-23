import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";
import ParticleBackground from "./ParticleBackground";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden gradient-animate">
      <ParticleBackground />
      
      {/* Enhanced Background with more sophisticated overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-morph"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-gold/10 via-transparent to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="glass-ultra p-12 rounded-3xl backdrop-blur-3xl border border-luxury-gold/10 magnetic-hover animate-card-float">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-white text-luxury animate-text-glow">
              Moeed ul <span className="gradient-text-animate">Hassan</span>
            </h1>
            <div className="text-2xl md:text-3xl mb-8 text-white/90">
              <span className="typewriter text-futuristic text-glow pulse-glow">
                THE LEGEND
              </span>
              <p className="mt-4 text-lg text-white/80 font-light">
                Certified Python Backend Developer • Since 2023 • Self Employed
              </p>
            </div>
            
            <p className="text-xl md:text-2xl text-white/85 mb-12 max-w-3xl mx-auto leading-relaxed">
              Crafting intelligent backend solutions with AI-powered tools and modern Python frameworks. 
              Transforming ideas into <span className="gradient-text-animate font-semibold animate-text-glow">scalable digital experiences</span>.
            </p>
            
            {/* Enhanced Floating Social Links */}
            <div className="flex justify-center gap-6 mb-12">
              <ScrollReveal delay={0.5}>
                <Button variant="outline" size="icon" className="glass-ultra hover-lift pulse-glow magnetic-hover">
                  <Github className="h-6 w-6 text-white" />
                </Button>
              </ScrollReveal>
              <ScrollReveal delay={0.7}>
                <Button variant="outline" size="icon" className="glass-ultra hover-lift pulse-glow float magnetic-hover">
                  <Linkedin className="h-6 w-6 text-white" />
                </Button>
              </ScrollReveal>
              <ScrollReveal delay={0.9}>
                <Button variant="outline" size="icon" className="glass-ultra hover-lift pulse-glow float-delayed magnetic-hover">
                  <Mail className="h-6 w-6 text-white" />
                </Button>
              </ScrollReveal>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <ScrollReveal delay={1}>
                <Button 
                  size="lg" 
                  className="liquid-button text-background font-bold px-10 py-5 text-xl group magnetic-hover"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="relative z-10 text-futuristic">VIEW MY WORK</span>
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1 relative z-10" />
                </Button>
              </ScrollReveal>
              
              <ScrollReveal delay={1.2}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="glass-ultra border-luxury-gold/30 text-white hover:bg-luxury-gold hover:text-background transition-all duration-500 px-10 py-5 text-xl magnetic-hover"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Download className="mr-3 h-6 w-6" />
                  <span className="text-futuristic">DOWNLOAD CV</span>
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
        
        {/* Enhanced Scroll indicator with more animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="text-white/60 hover:text-luxury-gold transition-all duration-300 pulse-glow animate-bounce magnetic-hover"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-8 w-8 animate-shimmer" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;