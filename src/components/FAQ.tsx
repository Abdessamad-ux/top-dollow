import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Are the followers Bots?",
      answer: "No! All our followers, likes, and views come from High Quality Profiles, Including Pictures and posts. We never use bots profiles."
    },
    {
      question: "How long does delivery take?",
      answer: "Most orders start processing within minutes and complete within 5-10 Minutes. Larger orders may take up to 30 Minutes."
    },
    {
      question: "Is it safe for my account?",
      answer: "Absolutely! Our methods are 100% compliant with platform guidelines. We use gradual delivery to ensure your account stays safe."
    },
    {
      question: "What if I don't see results?",
      answer: "We stand behind our service with a satisfaction guarantee. If you don't see results within 48 hours, contact our support team for a full refund."
    },
    {
      question: "Can I split packages across multiple posts?",
      answer: "Yes! When placing your order, you can specify multiple posts or profiles to distribute the service across."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer refunds if the service is not delivered as promised. Contact support within 48 hours of purchase."
    },
    {
      question: "Will followers drop off over time?",
      answer: "Our followers are High Quality Profiles, so minimal drop-off (0-1%) is normal over time. We provide a 30-day retention guarantee."
    },
    {
      question: "How do I get started?",
      answer: "Simply choose your desired package, complete the checkout, and provide your profile link. That's it! We'll handle the rest."
    },
  ];

  return (
    <section id="faq" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 animate-slide-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
