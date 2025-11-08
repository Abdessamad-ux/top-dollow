import ServiceCard from "./ServiceCard";
import { Instagram, Youtube, Linkedin, Send, Twitter, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import panelPreview from "@/assets/panel-preview.jpg";

const Services = () => {
  const instagramServices = [
    { title: "1K Instagram Followers", price: "5.99", description: "Boost your Instagram profile with high-quality followers", features: ["High Quality Followers", "Fast delivery", "24/7 support"], link: "https://www.paypal.com/ncp/payment/TMW2TJTEVVFWE" },
    { title: "5K Instagram Followers", price: "22.99", description: "5000 followers on Instagram", features: ["High Quality Followers", "Fast delivery", "24/7 support"], popular: true, link: "https://www.paypal.com/ncp/payment/5H72DVQXX2LJW" },
    { title: "3K Instagram Followers", price: "13.99", description: "3000 followers on Instagram", features: ["High Quality Followers", "Fast delivery", "24/7 support"], link: "https://www.paypal.com/ncp/payment/6FQ9H7PV68JZ2" },
    { title: "500 Instagram Followers", price: "3.99", description: "500 followers on Instagram", features: ["High Quality Followers", "Fast delivery", "24/7 support"], link: "https://www.paypal.com/ncp/payment/TXRVZJUSTWGQE" },
    { title: "50 Instagram Comments", price: "4.99", description: "50 Custom Comments on Instagram", features: ["Custom Comments", "Fast delivery", "24/7 support"], link: "https://www.paypal.com/ncp/payment/67CCM76PEVPLS" },
    { title: "1K Instagram Likes", price: "3.99", description: "Boost your posts with authentic likes", features: ["Instant start", "Real engagement"], link: "https://www.paypal.com/ncp/payment/ST43MTZ94UU5S" },
    { title: "1K Instagram Views", price: "3.99", description: "Increase your video visibility", features: ["Fast delivery", "Real views"], link: "https://www.paypal.com/ncp/payment/N3Z4HN7TWWXG6" },
    { title: "1K Instagram Shares", price: "3.99", description: "Increase your Reel reach with Shares", features: ["Fast delivery", "Real Shares"], link: "https://www.paypal.com/ncp/payment/C48DAJ2VAJ9BL" },
  ];

  const youtubeServices = [
    { title: "1K YouTube Likes", price: "5.99", description: "Boost your video engagement", features: ["Real likes", "Fast delivery"], link: "https://www.paypal.com/ncp/payment/MXFV52ZY8X482" },
    { title: "1K YouTube Views", price: "4.99", description: "Increase video visibility", features: ["Real views", "Fast delivery"], link: "https://www.paypal.com/ncp/payment/T2G3L8R8TUTRC" },
    { title: "1K YouTube Subscribers", price: "7.99", description: "Grow your channel audience", features: ["High Quality subscribers", "24/7 support"], link: "https://www.paypal.com/ncp/payment/49LNGQQHFYHV8" },
  ];

  const linkedinServices = [
    { title: "100 LinkedIn Followers", price: "5.99", description: "Build your professional network", features: ["High Quality Followers", "Fast delivery"], link: "https://www.paypal.com/ncp/payment/NJR4TAYWNVBSW" },
    { title: "100 LinkedIn Connections", price: "6.99", description: "Expand your network instantly", features: ["High Quality Connections", "Fast delivery"], link: "https://www.paypal.com/ncp/payment/T9WLZG62UDKLS" },
  ];

  const telegramServices = [
    { title: "1K Telegram Group Members", price: "7.99", description: "Grow your Telegram community", features: ["High Quality Members", "Fast delivery"], link: "https://www.paypal.com/ncp/payment/K45JBRFVD5K84" },
  ];

  const twitterServices = [
    { title: "1K Twitter/X Views", price: "3.99", description: "Increase tweet visibility", features: ["Real views", "Fast delivery"], link: "https://www.paypal.com/ncp/payment/4PXVLGHJUG3GC" },
    { title: "1K Twitter/X Likes", price: "3.99", description: "Boost tweet engagement", features: ["Real likes", "Fast delivery"], link: "https://www.paypal.com/ncp/payment/GR9S7PV7C9BJ4" },
    { title: "1K Twitter/X Followers", price: "5.99", description: "Grow your Twitter audience", features: ["High Quality Followers", "Fast delivery"], link: "https://www.paypal.com/ncp/payment/M4VVKLRWU2PNY" },
    { title: "5K Twitter/X Followers", price: "29.99", description: "5000 followers on Twitter/X", features: ["High Quality Followers", "Fast delivery"], link: "https://www.paypal.com/ncp/payment/M4VVKLRWU2PNY" },
  ];

  const tiktokServices = [
    { title: "1K TikTok Likes", price: "3.99", description: "Boost your video engagement", features: ["Real likes", "Fast delivery"], link: "https://www.paypal.com/ncp/payment/QBZ8ZJWG3CJBA" },
    { title: "1K TikTok Views", price: "3.99", description: "Increase video reach", features: ["Real views", "Fast delivery"], link: "https://www.paypal.com/ncp/payment/K39XDGZ8ZLLRY" },
    { title: "1K TikTok Followers", price: "5.99", description: "Grow your TikTok audience", features: ["High Quality Followers", "Fast delivery"], link: "https://www.paypal.com/ncp/payment/JWT8DKE9GT2DC" },
    { title: "3K TikTok Followers", price: "13.99", description: "3000 followers on TikTok", features: ["High Quality Followers", "Fast delivery"], popular: true, link: "https://www.paypal.com/ncp/payment/SCANFFA4V2APU" },
    { title: "1K TikTok Saves", price: "3.99", description: "Boost your video engagement", features: ["Real Saves", "Fast delivery"], link: "https://www.paypal.com/ncp/payment/MJUHYA23Z4Q9N" },
    { title: "1K TikTok Shares", price: "3.99", description: "Boost your video engagement", features: ["Real Shares", "Fast delivery"], link: "https://www.paypal.com/ncp/payment/ZRXZ5J5876PFU" },
    { title: "10K TikTok Followers", price: "44.99", description: "10000 followers on TikTok", features: ["High Quality Followers", "Fast delivery"], link: "https://www.paypal.com/ncp/payment/NZHPLKHERMNGJ" },
  ];

  const exclusiveOffers = [
    { 
      title: "Starter Combo", 
      price: "13.99", 
      description: "Perfect starter package for Instagram & TikTok", 
      features: ["1K Instagram Followers", "1K TikTok Followers", "500 Instagram Likes", "500 TikTok Likes", "500 Instagram Views", "500 TikTok Views"],
      popular: false,
      link: "https://www.paypal.com/ncp/payment/YYUSNQD93UJKS"
    },
    { 
      title: "Growth Combo", 
      price: "39.99", 
      description: "Accelerate your presence on both platforms", 
      features: ["3K Instagram Followers", "3K TikTok Followers", "1K Instagram Likes", "1K TikTok Likes", "1K Instagram Views", "1K TikTok Views"],
      popular: true,
      link: "https://www.paypal.com/ncp/payment/LW564BK5WX29U"
    },
    { 
      title: "Pro Combo", 
      price: "69.99", 
      description: "Professional growth package for serious creators", 
      features: ["5K Instagram Followers", "5K TikTok Followers", "3K Instagram Likes", "3K TikTok Likes", "3K Instagram Views", "3K TikTok Views"],
      link: "https://www.paypal.com/ncp/payment/MLL722NMA89C8"
    },
    { 
      title: "Elite Combo", 
      price: "119.99", 
      description: "Maximum impact across Instagram & TikTok", 
      features: ["10K Instagram Followers", "10K TikTok Followers", "5K Instagram Likes", "5K TikTok Likes", "5K Instagram Views", "5K TikTok Views"],
      link: "https://www.paypal.com/ncp/payment/5UQCXJMDRCXZC"
    },
  ];

  const platformSections = [
    { icon: Instagram, name: "Instagram", services: instagramServices, color: "from-secondary to-accent" },
    { icon: Music, name: "TikTok", services: tiktokServices, color: "from-primary to-primary-glow" },
    { icon: Youtube, name: "YouTube", services: youtubeServices, color: "from-destructive to-secondary" },
    { icon: Twitter, name: "Twitter / X", services: twitterServices, color: "from-primary to-accent" },
    { icon: Linkedin, name: "LinkedIn", services: linkedinServices, color: "from-primary to-primary-glow" },
    { icon: Send, name: "Telegram", services: telegramServices, color: "from-primary-glow to-accent" },
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/qPxIWko_s0k"
              title="Social Media Growth Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of social media growth services
          </p>
        </div>

        <div className="space-y-20">
          {platformSections.map((platform, platformIndex) => {
            const Icon = platform.icon;
            return (
              <div key={platformIndex} className="space-y-8 animate-fade-in" style={{ animationDelay: `${platformIndex * 0.1}s` }}>
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${platform.color}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">{platform.name}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {platform.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="animate-slide-in" style={{ animationDelay: `${(platformIndex * 0.1) + (serviceIndex * 0.05)}s` }}>
                      <ServiceCard {...service} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Exclusive Offers Section */}
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h3 className="text-4xl font-bold">
                <span className="gradient-text">Exclusive Combo Offers</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Save more with our special Instagram + TikTok bundle packages
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {exclusiveOffers.map((offer, index) => (
                <div key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <ServiceCard {...offer} />
                </div>
              ))}
            </div>
          </div>

          {/* Buy The Basic Panel Section */}
          <div className="space-y-8 animate-fade-in mt-20">
            <div className="text-center space-y-4">
              <h3 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">Buy The Basic Panel</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Get access to all these social media services at wholesale prices. Perfect for reselling to your clients or growing your own presence.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Card className="relative p-8 space-y-6 border-primary shadow-primary">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-secondary text-secondary-foreground text-xs font-bold px-4 py-1 rounded-full shadow-secondary">
                    BEST VALUE
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Complete Provider Access</h3>
                      <p className="text-sm text-muted-foreground">Full access to our wholesale Provider with tutorial & ebook included</p>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold gradient-text">$299</span>
                      <span className="text-muted-foreground">/lifetime</span>
                    </div>

                    <ul className="space-y-3">
                      {[
                        "All social media services at low prices",
                        "Buy for yourself or resell to clients",
                        "Complete tutorial & strategy ebook",
                        "Perfect for agencies and resellers",
                        "Lifetime access to the panel",
                        "24/7 support included"
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-5 h-5 text-primary-glow mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-3 pt-4">
                      <Button variant="gradient" className="w-full" asChild>
                        <a href="https://www.paypal.com/ncp/payment/TMHNXRUDDNQD4" target="_blank" rel="noopener noreferrer">
                          Buy Now
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full">
                        Stop wasting time — grab the bundle now!
                      </Button>
                    </div>
                  </div>

                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      src={panelPreview} 
                      alt="SMM Panel Preview" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
