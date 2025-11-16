import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features?: string[];
  popular?: boolean;
  link?: string;
}

const ServiceCard = ({ title, price, description, features, popular, link }: ServiceCardProps) => {
  return (
    <Card className={`relative p-6 space-y-4 transition-smooth hover:shadow-primary hover:-translate-y-2 ${popular ? 'border-primary shadow-primary' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-secondary text-secondary-foreground text-xs font-bold px-4 py-1 rounded-full shadow-secondary">
            MOST POPULAR
          </span>
        </div>
      )}
      
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold gradient-text">${price}</span>
        <span className="text-muted-foreground">/package</span>
      </div>

      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-primary-glow mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <Button variant="gradient" className="w-full" asChild>
        <a href={link || "#"} target="_blank" rel="noopener noreferrer">
          Buy Now
        </a>
      </Button>
    </Card>
  );
};

export default ServiceCard;
