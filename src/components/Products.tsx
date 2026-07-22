import { motion } from "framer-motion";
import { Droplet, FlaskConical, Sparkles, Atom, Leaf, Package, Snowflake } from "lucide-react";

const products = [
  {
    icon: FlaskConical,
    title: "Gamma Oryzanol",
    description:
      "A powerful bioactive unique to rice bran — prized for antioxidant, cholesterol-lowering, and skin-protective properties across pharma, nutraceuticals, and cosmetics.",
    features: ["98%+ Purity", "Pharma-Grade", "Bioactive"],
  },
  {
    icon: Sparkles,
    title: "Tocopherols",
    description:
      "Natural vitamin E complex extracted from rice bran — a premium antioxidant used in functional foods, dietary supplements, and high-performance skincare.",
    features: ["Natural Vitamin E", "Antioxidant", "Food & Cosmetic"],
  },
  {
    icon: Atom,
    title: "Phytosterols",
    description:
      "Plant-derived sterols clinically proven to support healthy cholesterol levels — ideal for fortified foods, beverages, and cardiovascular nutraceuticals.",
    features: ["Cholesterol-Support", "Clinically Studied", "Fortification"],
  },
  {
    icon: Leaf,
    title: "Ferulic Acid",
    description:
      "A potent phenolic antioxidant renowned for photoprotection and anti-aging benefits — a hero active in cosmetic serums and functional food formulations.",
    features: ["Photoprotective", "Anti-Aging", "High-Purity"],
  },
  {
    icon: Snowflake,
    title: "Rice Bran Wax",
    description:
      "A natural, plant-based wax used as a vegan alternative to beeswax and carnauba — perfect for cosmetics, confectionery coatings, and pharmaceutical applications.",
    features: ["Vegan", "Multi-Use", "Food & Cosmetic"],
  },
  {
    icon: Droplet,
    title: "Refined Rice Bran Oil",
    description:
      "A premium heart-healthy oil rich in natural antioxidants and tocotrienols — ideal for cooking oils, functional foods, and cosmetic formulations.",
    features: ["Heart-Healthy", "High Smoke Point", "Antioxidant-Rich"],
  },
];

const industries = ["Food & Beverage", "Cosmetics & Personal Care", "Pharmaceuticals & Nutraceuticals"];

const Products = () => {
  return (
    <section id="products" className="py-20 lg:py-32 bg-gradient-cream">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Package className="w-4 h-4" />
            Our Ingredient Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Six Bioactive Ingredients{" "}
            <span className="text-gradient-gold">from a Single Grain</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From gamma oryzanol to refined rice bran oil, Dowie's expanded portfolio delivers
            the full spectrum of rice-derived bioactives — refined to meet the highest global
            food, cosmetic, and pharmaceutical standards.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-500 border border-border/40"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <product.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-bold text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm lg:text-base">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full bg-gold/10 text-xs font-medium text-primary"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries served */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Trusted across
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-foreground text-sm font-medium shadow-soft"
              >
                <Leaf className="w-4 h-4 text-primary" />
                {industry}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
