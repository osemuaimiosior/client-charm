import { motion } from "framer-motion";
import { Factory, Play } from "lucide-react";

const stats = [
  { value: "6", label: "Bioactive Ingredients" },
  { value: "3", label: "Industries Served" },
  { value: "100%", label: "Rice-Derived" },
];

const FacilityVideo = () => {
  return (
    <section id="facility" className="py-20 lg:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Factory className="w-4 h-4" />
            Inside Our Facility
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            A Glimpse Inside Our{" "}
            <span className="text-gradient-gold">Facility</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Precision equipment engineered for purity, consistency, and scale —
            a section of the modern rice bran processing plant behind every
            ingredient we deliver.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-elevated border border-border/40 max-w-5xl mx-auto"
        >
          <video
            src="/facility.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover aspect-video"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          <div className="pointer-events-none absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
            <Play className="w-3 h-3 text-gold fill-gold" />
            Live from the plant
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-4 rounded-xl bg-gradient-cream border border-border/40"
            >
              <div className="text-2xl md:text-3xl font-serif font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilityVideo;
