import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, User, Sparkles } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-text-animate rounded-full blur-3xl float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 gradient-text-animate rounded-full blur-3xl float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground text-luxury">
                Get In <span className="gradient-text-animate">Touch</span>
              </h2>
              <div className="w-32 h-1 bg-luxury-gold mx-auto mb-8 pulse-glow"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ready to discuss your next project or explore collaboration opportunities? 
                <span className="gradient-text-animate font-semibold"> I'd love to hear from you</span>.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <ScrollReveal direction="left">
                <Card className="glass-card luxury-card-hover border-luxury-gold/20 neon-border">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl text-foreground text-luxury">
                      <MessageSquare className="h-6 w-6 text-luxury-gold pulse-glow" />
                      Let's Start a Conversation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Whether you have a project in mind, need technical consultation, 
                      or just want to connect, I'm always open to discussing new opportunities 
                      and <span className="gradient-text-animate font-semibold">innovative solutions</span>.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 glass-card rounded-lg hover-lift">
                        <Mail className="h-5 w-5 text-luxury-gold pulse-glow" />
                        <div>
                          <p className="font-semibold text-foreground text-luxury">Email</p>
                          <p className="text-muted-foreground">moeed@example.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 glass-card rounded-lg hover-lift">
                        <User className="h-5 w-5 text-luxury-gold pulse-glow" />
                        <div>
                          <p className="font-semibold text-foreground text-luxury">Professional Status</p>
                          <p className="text-muted-foreground">
                            <span className="gradient-text-animate font-semibold">Available for new projects</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* What I Can Help With */}
              <ScrollReveal direction="left" delay={1}>
                <Card className="glass-card luxury-card-hover border-luxury-gold/20 neon-border">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-foreground text-luxury flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-luxury-gold pulse-glow" />
                      What I Can Help With
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Backend API development and optimization",
                        "AI/ML integration and implementation",
                        "Database design and management",
                        "System architecture consulting",
                        "Custom automation solutions",
                        "Third-party API integrations"
                      ].map((service, index) => (
                        <li key={index} className="flex items-center gap-3 text-muted-foreground hover-lift">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full pulse-glow"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <ScrollReveal direction="right">
              <Card className="glass-card luxury-card-hover border-luxury-gold/20 neon-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground text-luxury">
                    Send Me a <span className="gradient-text-animate">Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 text-luxury">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="glass-card border-luxury-gold/30 focus:border-luxury-gold focus:ring-luxury-gold hover-lift"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 text-luxury">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="glass-card border-luxury-gold/30 focus:border-luxury-gold focus:ring-luxury-gold hover-lift"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2 text-luxury">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="glass-card border-luxury-gold/30 focus:border-luxury-gold focus:ring-luxury-gold hover-lift"
                        placeholder="Project inquiry, collaboration, etc."
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 text-luxury">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="glass-card border-luxury-gold/30 focus:border-luxury-gold focus:ring-luxury-gold resize-none hover-lift"
                        placeholder="Tell me about your project, requirements, or any questions you have..."
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full neon-border bg-luxury-gold text-primary hover:shadow-[0_0_20px_hsl(43_89%_58%/0.5)] transition-all duration-300 py-3 text-lg font-semibold"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      <span className="text-futuristic">Send Message</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Footer */}
          <ScrollReveal delay={2}>
            <div className="mt-20 text-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent mb-8 pulse-glow"></div>
              <p className="text-muted-foreground text-luxury">
                © 2024 <span className="gradient-text-animate font-semibold">Moeed ul Hassan</span>. 
                Crafted with passion and precision.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
export default Contact;