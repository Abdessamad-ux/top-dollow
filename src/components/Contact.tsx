import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Send, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Questions? We're here to help 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-8 space-y-4 text-center transition-smooth hover:shadow-primary hover:-translate-y-2 animate-fade-in">
            <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold">WhatsApp</h3>
            <p className="text-sm text-muted-foreground">
              Chat with us instantly for quick support
            </p>
            <Button variant="gradient" className="w-full" asChild>
              <a href="https://wa.me/31637630250" target="_blank" rel="noopener noreferrer">
                Chat with us
              </a>
            </Button>
          </Card>

          <Card className="p-8 space-y-4 text-center transition-smooth hover:shadow-primary hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-2xl flex items-center justify-center">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold">Instagram</h3>
            <p className="text-sm text-muted-foreground">
              Join our Instagram Account for updates
            </p>
            <Button variant="gradient" className="w-full" asChild>
              <a href="https://www.instagram.com/digitaldropship.1/" target="_blank" rel="noopener noreferrer">
                Open Instagram
              </a>
            </Button>
          </Card>

          <Card className="p-8 space-y-4 text-center transition-smooth hover:shadow-primary hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 mx-auto bg-gradient-secondary rounded-2xl flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold">Email</h3>
            <p className="text-sm text-muted-foreground">
              Send us an email anytime and our support will responde
            </p>
            <Button variant="gradient" className="w-full" asChild>
              <a href="mailto:support@career-maestros.com">
                Contact Us
              </a>
            </Button>
          </Card>
        </div>

        <div className="mt-16 text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-muted-foreground">
            Average response time: <span className="font-bold text-foreground">Under 10 minutes</span>
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-primary-glow rounded-full animate-glow" />
            <span className="text-sm font-medium">24/7 Support Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
