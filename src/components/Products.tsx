import { motion } from "framer-motion";
import { Droplets, Leaf, Beaker, Package } from "lucide-react";
import processingImage from "@/assets/processing.jpg";
import proteinImage from "@/assets/protein-powder.jpg";

const products = [
  {
    icon: Beaker,
    title: "Rice Protein",
    description: "High-quality, clean-label rice protein with 80%+ protein content. Perfect for plant-based nutrition and sports supplements.",
    image: proteinImage,
    features: ["80%+ Protein", "Allergen-Free", "Neutral Taste"],
  },
  {
    icon: Droplets,
    title: "Rice Starch",
    description: "Premium native and modified rice starches for food, pharmaceutical, and industrial applications.",
    image: processingImage,
    features: ["High Purity", "Clean Label", "Versatile"],
  },
];

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
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Premium Rice-Based{" "}
            <span className="text-gradient-gold">Ingredients</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From locally sourced Nigerian rice, we create world-class proteins and 
            starches that meet the highest international standards.
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
                  <div className="flex gap-2">
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

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Leaf className="w-4 h-4 text-primary" />
            All products are sustainably sourced and produced
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
