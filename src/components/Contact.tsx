import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import { useState } from "react";

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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get In <span className="text-gold-gradient">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your next project or explore collaboration opportunities? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-shadow border-0 bg-card">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-2xl text-foreground">
                    <MessageSquare className="h-6 w-6 text-luxury-gold" />
                    Let's Start a Conversation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Whether you have a project in mind, need technical consultation, 
                    or just want to connect, I'm always open to discussing new opportunities 
                    and innovative solutions.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                      <Mail className="h-5 w-5 text-luxury-gold" />
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <p className="text-muted-foreground">moeed@example.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                      <User className="h-5 w-5 text-luxury-gold" />
                      <div>
                        <p className="font-semibold text-foreground">Professional Status</p>
                        <p className="text-muted-foreground">Available for new projects</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What I Can Help With */}
              <Card className="card-shadow border-0 bg-card">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-foreground">
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
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="card-shadow border-0 bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-muted-foreground/20 focus:border-luxury-gold focus:ring-luxury-gold"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-muted-foreground/20 focus:border-luxury-gold focus:ring-luxury-gold"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="border-muted-foreground/20 focus:border-luxury-gold focus:ring-luxury-gold"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="border-muted-foreground/20 focus:border-luxury-gold focus:ring-luxury-gold resize-none"
                      placeholder="Tell me about your project, requirements, or any questions you have..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-luxury-gold text-primary hover:bg-luxury-gold-dark transition-smooth py-3 text-lg font-semibold"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-20 text-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent mb-8"></div>
            <p className="text-muted-foreground">
              © 2024 Moeed ul Hassan. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;