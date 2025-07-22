import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Zap } from "lucide-react";

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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-gold-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate backend developer dedicated to creating intelligent, scalable solutions 
              that make a meaningful impact in the digital world.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <Card key={index} className="card-shadow border-0 bg-card hover-scale transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              Technical Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/20 hover:bg-luxury-gold hover:text-primary transition-smooth"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Personal Story */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="card-shadow border-0 bg-card">
              <CardContent className="p-8 md:p-12">
                <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center italic">
                  "Since beginning my journey in 2023, I've been driven by a simple belief: 
                  technology should solve real problems and create meaningful impact. Every line of code 
                  I write is a step toward building a better, more connected world."
                </blockquote>
                <div className="text-center mt-6">
                  <div className="w-16 h-0.5 bg-luxury-gold mx-auto"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;