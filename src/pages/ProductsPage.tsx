import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-gold text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6">
              Product <span className="text-gradient-gold">Overview</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
              Explore Dowie's complete portfolio of rice-derived bioactive
              ingredients — engineered for the world's leading food, cosmetic,
              and pharmaceutical formulations.
            </p>
          </motion.div>
        </div>
      </section>

      <Products />

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Need technical specs or a sample?
          </h2>
          <p className="text-muted-foreground mb-8">
            Our team will send you data sheets, certificates of analysis, and
            samples tailored to your application.
          </p>
          <Link to="/#contact">
            <Button variant="default" size="lg">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
