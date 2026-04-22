import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
}

interface ProductSectionProps {
  eyebrow: string;
  heading: string;
  subheading: string;
  features: Feature[];
}

export function ProductSection({ eyebrow, heading, subheading, features }: ProductSectionProps) {
  return (
    <section className="px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-xl"
          >
            <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
              {eyebrow}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] mb-6">
              {heading}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              {subheading}
            </p>
            <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors text-sm font-medium">
              <span>Explore</span>
              <span className="text-muted-foreground">›</span>
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[24px] border border-border/40 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <div className="w-4 h-4 rounded-sm bg-foreground/20" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
