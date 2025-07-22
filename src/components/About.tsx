import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const About = () => {
  const skills = [
    "Python", "Flask", "FastAPI", "Django",
    "AI/ML", "OpenAI API", "NLP", "Firebase",
    "JavaScript", "React", "PostgreSQL", "MongoDB",
    "Docker", "Git", "REST APIs", "Gmail API"
  ];

  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-luxury-gold" />,
      title: "Backend Mastery",
      description: "Expert in Python frameworks with extensive experience in Flask, Django, and FastAPI for building robust backend solutions."
    },
    {
      icon: <Brain className="h-8 w-8 text-luxury-gold" />,
      title: "AI Integration",
      description: "Specialized in integrating AI and ML solutions, particularly with OpenAI API and NLP technologies for intelligent applications."
    },
    {
      icon: <Zap className="h-8 w-8 text-luxury-gold" />,
      title: "Problem Solver",
      description: "Passionate about solving real-world problems through innovative technology, from email security to food waste reduction."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 gradient-text-animate rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 gradient-text-animate rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground text-luxury">
                About <span className="gradient-text-animate">Me</span>
              </h2>
              <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8 pulse-glow"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A passionate backend developer dedicated to creating intelligent, scalable solutions 
                that make a <span className="gradient-text-animate font-semibold">meaningful impact</span> in the digital world.
              </p>
            </div>
          </ScrollReveal>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <ScrollReveal key={index} delay={index + 1}>
                <Card className="glass-card luxury-card-hover border-luxury-gold/20 h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="mb-6 flex justify-center float">
                      <div className="p-4 bg-luxury-gold/10 rounded-xl pulse-glow">
                        {highlight.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground text-luxury">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Skills */}
          <ScrollReveal>
            <div className="text-center">
              <h3 className="text-3xl font-semibold mb-8 text-foreground text-luxury">
                Technical <span className="gradient-text-animate">Expertise</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className={`px-4 py-2 text-sm font-medium glass-card hover-lift border border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold hover:text-primary transition-all duration-300 stagger-${(index % 5) + 1}`}
                  >
                    <span className="text-futuristic">{skill}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Personal Story */}
          <ScrollReveal delay={2}>
            <div className="mt-16 max-w-4xl mx-auto">
              <Card className="glass-card luxury-card-hover border-luxury-gold/20 neon-border">
                <CardContent className="p-8 md:p-12 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto pulse-glow">
                      <Zap className="h-8 w-8 text-luxury-gold" />
                    </div>
                  </div>
                  <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed italic mb-6">
                    "Since beginning my journey in 2023, I've been driven by a simple belief: 
                    technology should solve real problems and create meaningful impact. Every line of code 
                    I write is a step toward building a <span className="gradient-text-animate font-semibold not-italic">better, more connected world</span>."
                  </blockquote>
                  <div className="text-center">
                    <div className="w-24 h-0.5 bg-luxury-gold mx-auto pulse-glow"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
export default About;