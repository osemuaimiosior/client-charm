import { motion } from "framer-motion";
import { Users, ArrowRight, Tractor, Store, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import farmImage from "@/assets/farm.jpg";

const partners = [
  {
    icon: Tractor,
    title: "Farmers",
    description: "Join our network of trusted paddy rice suppliers and get fair prices for your harvest.",
  },
  {
    icon: Store,
    title: "Distributors",
    description: "Partner with us to bring premium rice ingredients to new markets across Africa.",
  },
  {
    icon: Building,
    title: "Brands",
    description: "Let us help you create clean-label products with our high-quality ingredients.",
  },
];

const PartnerCTA = () => {
  return (
    <section id="partner" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={farmImage}
          alt="Rice paddy field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/70" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Grow With Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Building Nigeria's{" "}
              <span className="text-gradient-gold">Agricultural Future</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              We're always looking to expand our network of partners who share 
              our commitment to quality and sustainability. Whether you're a 
              farmer, distributor, or brand, we'd love to hear from you.
            </p>
            <Button variant="hero" size="lg" className="group">
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Partner Types */}
          <div className="space-y-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/30 transition-colors">
                    <partner.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary-foreground mb-2">
                      {partner.title}
                    </h3>
                    <p className="text-primary-foreground/70">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
