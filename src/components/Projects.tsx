import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield, Heart, Briefcase } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Mail Hawk",
      subtitle: "AI-Powered Email Firewall",
      description: "Designed an intelligent NLP-based email protection tool that classifies leads and filters scam/spam messages for professionals. Built with Flask, Gmail API, and OpenAI to provide enterprise-grade email security.",
      icon: <Shield className="h-8 w-8 text-luxury-gold" />,
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
      icon: <Heart className="h-8 w-8 text-luxury-gold" />,
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
      icon: <Briefcase className="h-8 w-8 text-luxury-gold" />,
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
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Featured <span className="text-gold-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Innovative solutions addressing real-world challenges through cutting-edge technology 
              and intelligent design.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`luxury-shadow border-0 bg-card hover-scale transition-smooth overflow-hidden ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } md:flex`}
              >
                <div className="md:w-2/3">
                  <CardHeader className="p-8 pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-luxury-gold/10 rounded-lg">
                        {project.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                          {project.title}
                        </CardTitle>
                        <p className="text-luxury-gold font-semibold text-lg">
                          {project.subtitle}
                        </p>
                      </div>
                      <Badge 
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className={`ml-auto ${
                          project.status === "Completed" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-luxury-gold/10 text-luxury-gold"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="px-8 pb-8">
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      {project.description}
                    </p>
                    
                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-muted-foreground">
                            <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline"
                            className="border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold hover:text-primary transition-smooth"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button 
                        variant="default"
                        className="bg-luxury-gold text-primary hover:bg-luxury-gold-dark transition-smooth"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button 
                        variant="outline"
                        className="border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold hover:text-primary transition-smooth"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </div>
                
                {/* Project Visual Placeholder */}
                <div className="md:w-1/3 bg-gradient-to-br from-luxury-gold/10 to-luxury-gold/5 flex items-center justify-center min-h-[300px] md:min-h-full">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">
                      {project.icon}
                    </div>
                    <p className="text-muted-foreground">
                      Project Preview
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="card-shadow border-0 bg-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Let's collaborate on your next project and create solutions that make a difference.
                </p>
                <Button 
                  size="lg"
                  className="bg-luxury-gold text-primary hover:bg-luxury-gold-dark transition-smooth px-8 py-3 text-lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start a Conversation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;