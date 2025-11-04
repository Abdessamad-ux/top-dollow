import { Instagram, Youtube, Linkedin, Send, Twitter, Music } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Career-Maestros</h3>
            <p className="text-sm opacity-80">
              Grow your social media presence with High Quality followers, Instant results.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Instagram</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">TikTok</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">YouTube</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Twitter/X</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#faq" className="hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/digitaldropship.1/" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/digitaldropship.1/" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                <Music className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/digitaldropship.1/" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-sm opacity-80">
          <p>&copy; {currentYear} Career-Maestros. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
