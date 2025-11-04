import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";
import testimonial4 from "@/assets/testimonial-4.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Greysi Padron",
      role: "Influencer",
      image: "👩‍🎨",
      rating: 5,
      text: "I gained 8K High Quality followers in just 48 hours! My content is reaching more people than ever.",
      beforeAfter: testimonial1
    },
    {
      name: "Grace Mercy Tembo",
      role: "Reviewer",
      image: "👩‍💼",
      rating: 5,
      text: "Best service I've used for growing my Audiance' social media. Fast delivery and excellent customer support.",
      beforeAfter: testimonial2
    },
    {
      name: "_305MJG",
      role: "User",
      image: "👨‍💼",
      rating: 4,
      text: "The quality of followers is incredible. Thx for the support team.",
      beforeAfter: testimonial3
    },
    {
      name: "Adleica",
      role: "Personal User",
      image: "👩‍🎨",
      rating: 5,
      text: "Skeptical at first, but the results speak for themselves. My Instagram grew from 1k to 4K followers in one day!",
      beforeAfter: testimonial4
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers growing their social media
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 space-y-4 transition-smooth hover:shadow-primary hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-sm leading-relaxed">{testimonial.text}</p>
              
              <img 
                src={testimonial.beforeAfter} 
                alt={`${testimonial.name} before and after results`}
                className="w-full h-auto rounded-lg my-4"
              />
              
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
