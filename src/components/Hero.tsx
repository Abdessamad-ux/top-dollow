import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, CreditCard, BadgeCheck } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background pt-20">
      {/* Animated gradient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-2 shadow-primary">
            <Star className="w-4 h-4 fill-secondary text-secondary" />
            <span className="text-sm font-medium">Trusted by 50,000+ creators</span>
            <Star className="w-4 h-4 fill-secondary text-secondary" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Grow Your Social Media{" "}
            <span className="gradient-text">Fast</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            High Quality Followers, Likes, Views and more Instant Results. Boost your Instagram, TikTok, YouTube, Twitter, LinkedIn & Telegram instantly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToServices}
              className="group"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Pricing
            </Button>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">10M+</div>
              <div className="text-sm text-muted-foreground">Followers Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-muted-foreground">Fast Delivery</div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 bg-card/50 rounded-lg border border-border/50">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">SSL Protection</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-card/50 rounded-lg border border-border/50">
              <CreditCard className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Payment Secured</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-card/50 rounded-lg border border-border/50">
              <BadgeCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
