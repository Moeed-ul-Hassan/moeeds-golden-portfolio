import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Briefcase, Brain, Crown, Code, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Journey = () => {
  const journeySteps = [
    {
      year: "2022",
      title: "The Spark",
      icon: <Sparkles className="h-6 w-6" />,
      description: "Discovered web development and started with HTML, CSS, and basic static websites. Spent late nights learning the core of the web — one line of code at a time.",
      color: "from-blue-400 to-purple-600",
      badge: "Beginning"
    },
    {
      year: "2023",
      title: "The Hustle",
      icon: <Briefcase className="h-6 w-6" />,
      description: "Started freelancing and founded my own agency. Took on WordPress, Shopify, and static website clients. Became known for honesty, commitment, and fast delivery.",
      color: "from-green-400 to-blue-500",
      badge: "Freelancing"
    },
    {
      year: "2024",
      title: "The Shift",
      icon: <Brain className="h-6 w-6" />,
      description: "Shifted to backend engineering. Learned Flask and FastAPI. Worked on AI integrations, automation tools, Gmail APIs, and RESTful services. No longer wanted to just build — wanted to create impact.",
      color: "from-orange-400 to-red-500",
      badge: "Backend Focus"
    },
    {
      year: "2025",
      title: "The Rise",
      icon: <Crown className="h-6 w-6" />,
      description: "Built Pulse Ai HMS (157,000+ LOC), a Hospital Management System with deep backend layers. Completed Inbox Shield, an AI-powered scam email detector. Currently building Mail Hawk – a smart inbox protection system.",
      color: "from-luxury-gold to-luxury-gold-light",
      badge: "The Legend"
    }
  ];

  return (
    <section id="journey" className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-luxury-gold to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-luxury-gold to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-luxury-gold rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-0.5 bg-luxury-gold mr-4 pulse-glow"></div>
                <Code className="h-8 w-8 text-luxury-gold float" />
                <div className="w-16 h-0.5 bg-luxury-gold ml-4 pulse-glow"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground text-luxury">
                The <span className="gradient-text-animate">Legend's</span> Journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From curious beginner to <span className="gradient-text-animate font-semibold">industry legend</span> — 
                a story of relentless growth, innovation, and impact.
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-luxury-gold via-luxury-gold to-transparent opacity-30"></div>
            
            {/* Timeline Glow Effect */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-luxury-gold via-luxury-gold to-transparent opacity-20 blur-sm"></div>

            <div className="space-y-16">
              {journeySteps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.3}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full max-w-lg ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <Card className="glass-card luxury-card-hover border-luxury-gold/20 neon-border group">
                        <CardContent className="p-8">
                          {/* Year Badge */}
                          <div className="flex items-center justify-between mb-6">
                            <Badge className={`px-4 py-2 font-bold text-sm bg-gradient-to-r ${step.color} text-white border-0 shadow-lg`}>
                              {step.year}
                            </Badge>
                            <Badge variant="outline" className="px-3 py-1 text-xs border-luxury-gold/30 text-luxury-gold">
                              {step.badge}
                            </Badge>
                          </div>

                          {/* Icon and Title */}
                          <div className="flex items-center mb-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color} mr-4 float group-hover:scale-110 transition-transform duration-300`}>
                              <div className="text-white">
                                {step.icon}
                              </div>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground text-luxury">
                              {step.title}
                            </h3>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>

                          {/* Decorative Line */}
                          <div className="mt-6 pt-4 border-t border-luxury-gold/20">
                            <div className="w-12 h-0.5 bg-luxury-gold pulse-glow"></div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center pulse-glow shadow-lg group-hover:scale-125 transition-transform duration-300">
                        <Zap className="h-4 w-4 text-background" />
                      </div>
                      {/* Outer Ring */}
                      <div className="absolute w-12 h-12 border-2 border-luxury-gold/30 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Timeline End */}
            <ScrollReveal delay={1.5}>
              <div className="flex justify-center mt-16">
                <div className="text-center">
                  <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow shadow-2xl">
                    <Crown className="h-8 w-8 text-background" />
                  </div>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    <span className="gradient-text-animate font-semibold">The journey continues...</span> <br />
                    Aiming for top backend engineering roles at global companies.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;