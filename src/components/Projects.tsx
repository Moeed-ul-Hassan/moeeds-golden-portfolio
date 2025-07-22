import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield, Heart, Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Mail Hawk",
      subtitle: "AI-Powered Email Firewall",
      description: "Designed an intelligent NLP-based email protection tool that classifies leads and filters scam/spam messages for professionals. Built with Flask, Gmail API, and OpenAI to provide enterprise-grade email security.",
      icon: <Shield className="h-10 w-10 text-luxury-gold" />,
      technologies: ["Python", "Flask", "OpenAI API", "Gmail API", "NLP", "AI/ML"],
      status: "Completed",
      features: [
        "Real-time email classification",
        "Advanced spam detection",
        "Lead qualification system",
        "Gmail integration"
      ]
    },
    {
      id: 2,
      title: "Food Rescue Network",
      subtitle: "Food Waste Reduction App",
      description: "Built a comprehensive platform connecting food vendors with NGOs for efficient food donations. Features real-time listing, intelligent scheduling, and multi-user dashboards to combat food waste.",
      icon: <Heart className="h-10 w-10 text-luxury-gold" />,
      technologies: ["Python", "Flask", "Firebase", "JavaScript", "Real-time DB"],
      status: "Completed",
      features: [
        "Real-time food listings",
        "Smart scheduling system",
        "Multi-user dashboards",
        "Donation tracking"
      ]
    },
    {
      id: 3,
      title: "Freelance Shield",
      subtitle: "AI Toolkit for Freelancers",
      description: "Developing a comprehensive platform to generate AI-based proposals, create scope agreements, provide scam protection, and secure deal locking with e-signatures for freelance professionals.",
      icon: <Briefcase className="h-10 w-10 text-luxury-gold" />,
      technologies: ["Python", "AI/ML", "OpenAI API", "E-signatures", "FastAPI"],
      status: "In Development",
      features: [
        "AI proposal generation",
        "Smart scope agreements",
        "Scam protection",
        "E-signature integration"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/10 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 gradient-text-animate rounded-full blur-3xl float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 gradient-text-animate rounded-full blur-3xl float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground text-luxury">
                Featured <span className="gradient-text-animate">Projects</span>
              </h2>
              <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8 pulse-glow"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Innovative solutions addressing real-world challenges through 
                <span className="gradient-text-animate font-semibold"> cutting-edge technology</span> and intelligent design.
              </p>
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} direction={index % 2 === 0 ? 'left' : 'right'}>
                <Card 
                  className={`glass-card luxury-card-hover border-luxury-gold/20 neon-border overflow-hidden ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } md:flex`}
                >
                  <div className="md:w-2/3 relative">
                    <CardHeader className="p-8 pb-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-4 bg-luxury-gold/10 rounded-xl pulse-glow float">
                          {project.icon}
                        </div>
                        <div>
                          <CardTitle className="text-2xl md:text-3xl font-bold text-foreground text-luxury">
                            <span className="gradient-text-animate">{project.title}</span>
                          </CardTitle>
                          <p className="text-luxury-gold font-semibold text-lg text-futuristic">
                            {project.subtitle}
                          </p>
                        </div>
                        <Badge 
                          variant={project.status === "Completed" ? "default" : "secondary"}
                          className={`ml-auto pulse-glow ${
                            project.status === "Completed" 
                              ? "bg-green-500/20 text-green-400 border-green-400/30" 
                              : "bg-luxury-gold/20 text-luxury-gold border-luxury-gold/30"
                          }`}
                        >
                          <span className="text-futuristic">{project.status}</span>
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="px-8 pb-8">
                      <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                        {project.description}
                      </p>
                      
                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3 text-luxury">Key Features:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-muted-foreground">
                              <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3 pulse-glow"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3 text-luxury">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <Badge 
                              key={idx} 
                              variant="outline"
                              className="glass-card border-luxury-gold/30 text-luxury-gold hover-lift hover:bg-luxury-gold hover:text-primary transition-all duration-300"
                            >
                              <span className="text-futuristic text-xs">{tech}</span>
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <Button 
                          variant="default"
                          className="neon-border bg-luxury-gold text-primary hover:shadow-[0_0_20px_hsl(43_89%_58%/0.5)] transition-all duration-300"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          <span className="text-futuristic">View Details</span>
                        </Button>
                        <Button 
                          variant="outline"
                          className="glass-card border-luxury-gold/30 text-luxury-gold hover-lift hover:bg-luxury-gold hover:text-primary transition-all duration-300"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          <span className="text-futuristic">Source Code</span>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                  
                  {/* Project Visual */}
                  <div className="md:w-1/3 bg-gradient-to-br from-luxury-gold/10 to-luxury-gold/5 flex items-center justify-center min-h-[300px] md:min-h-full relative overflow-hidden">
                    <div className="text-center p-8 relative z-10">
                      <div className="text-8xl mb-4 float pulse-glow">
                        {project.icon}
                      </div>
                      <p className="text-muted-foreground text-futuristic">
                        Project Preview
                      </p>
                    </div>
                    <div className="absolute inset-0 gradient-text-animate opacity-10"></div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Call to Action */}
          <ScrollReveal delay={3}>
            <div className="text-center mt-20">
              <Card className="glass-card luxury-card-hover border-luxury-gold/20 neon-border max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto pulse-glow float">
                      <Briefcase className="h-10 w-10 text-luxury-gold" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground text-luxury">
                    Ready to Build Something <span className="gradient-text-animate">Amazing</span>?
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Let's collaborate on your next project and create solutions that make a difference.
                  </p>
                  <Button 
                    size="lg"
                    className="neon-border bg-luxury-gold text-primary hover:shadow-[0_0_20px_hsl(43_89%_58%/0.5)] transition-all duration-300 px-8 py-3 text-lg"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="text-futuristic">Start a Conversation</span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
export default Projects;