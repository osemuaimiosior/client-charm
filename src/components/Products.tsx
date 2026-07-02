import { motion } from "framer-motion";
import { Droplet, Leaf, FlaskConical, Package } from "lucide-react";
import processingImage from "@/assets/processing.jpg";
import proteinImage from "@/assets/protein-powder.jpg";

const products = [
  {
    icon: Droplet,
    title: "Rice Bran Oil",
    description:
      "A premium, heart-healthy oil extracted from rice bran. Rich in natural antioxidants and tocotrienols — ideal for cooking oils, functional foods, and cosmetic formulations.",
    image: processingImage,
    features: ["Heart-Healthy", "High Smoke Point", "Antioxidant-Rich"],
  },
  {
    icon: FlaskConical,
    title: "Gamma Oryzanol",
    description:
      "A powerful bioactive compound unique to rice bran, prized for its antioxidant, cholesterol-lowering, and skin-protective properties across pharma, nutraceuticals, and cosmetics.",
    image: proteinImage,
    features: ["98%+ Purity", "Pharma-Grade", "Bioactive"],
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
            Our Ingredients
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Bioactive Rice Ingredients{" "}
            <span className="text-gradient-gold">for Every Industry</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We specialize in the manufacture of rice bran oil and gamma oryzanol —
            two of nature's most versatile bioactives — refined to meet the highest
            global standards.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-background/90 text-xs font-medium text-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground">
                    {product.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
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
