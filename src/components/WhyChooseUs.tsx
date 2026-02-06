import { motion } from "framer-motion";
import { Check, Shield, Award, Truck, Handshake } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Every batch tested for purity, protein content, and safety. We meet international food safety standards.",
  },
  {
    icon: Award,
    title: "Clean Label",
    description: "No additives, no preservatives. Pure rice-derived ingredients your customers can trust.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description: "Direct relationships with 500+ farmers ensure consistent, year-round supply for your operations.",
  },
  {
    icon: Handshake,
    title: "Partnership First",
    description: "We work closely with brands to customize solutions that meet your specific formulation needs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-primary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
              <Check className="w-4 h-4" />
              Why Choose Dowie
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Built on Trust,{" "}
              <span className="text-gradient-gold">Driven by Quality</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              We bridge the gap between Nigeria's rich agricultural heritage and 
              the global demand for clean-label, plant-based ingredients. Our 
              vertically integrated model ensures quality from farm to factory.
            </p>

            <div className="space-y-4">
              {[
                "Traceable supply chain from farm to factory",
                "State-of-the-art processing facility",
                "Dedicated quality control at every stage",
                "Custom formulation support",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-primary-foreground/90">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-serif font-bold text-primary-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-primary-foreground/70">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
