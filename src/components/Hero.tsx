import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Moeed ul Hassan
          </h1>
          <div className="text-xl md:text-2xl mb-8 text-white/90">
            <span className="text-gold-gradient font-semibold">
              Passionate Certified Python Backend Developer
            </span>
            <p className="mt-2 text-lg text-white/80">
              Since 2023 • Self Employed
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting intelligent backend solutions with AI-powered tools and modern Python frameworks. 
            Transforming ideas into scalable digital experiences.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-luxury-gold hover:bg-luxury-gold hover:text-primary">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-luxury-gold hover:bg-luxury-gold hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-luxury-gold hover:bg-luxury-gold hover:text-primary">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-luxury-gold text-primary hover:bg-luxury-gold-dark transition-smooth px-8 py-3 text-lg font-semibold"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary transition-smooth px-8 py-3 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-white/60 hover:text-luxury-gold transition-smooth"
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