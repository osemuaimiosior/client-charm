import { Leaf, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <span className="text-2xl font-serif font-bold text-primary-foreground">
                Dowie
              </span>
            </div>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Transforming Nigerian rice into world-class proteins and starches. 
              Clean-label ingredients that brands and consumers trust.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                >
                  <Icon className="w-5 h-5 text-primary-foreground/70 hover:text-gold" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Products", "About Us", "Our Process", "Sustainability"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {["Partner With Us", "Careers", "Contact", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Dowie. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Made with care in Nigeria 🇳🇬
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
