import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

interface ProductSectionProps {
  eyebrow: string;
  heading: string;
  subheading: string;
  features: Feature[];
  image?: string;
  imageAlt?: string;
}

export function ProductSection({
  eyebrow,
  heading,
  subheading,
  features,
  image,
  imageAlt,
}: ProductSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex] ?? features[0];
  const displayImage = activeFeature?.image ?? image;
  const displayAlt = activeFeature?.imageAlt ?? imageAlt ?? activeFeature?.title ?? heading;

  return (
    <section className="px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
              {eyebrow}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] mb-6">
              {heading}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{subheading}</p>
          </motion.div>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-border/50 hover:bg-foreground/5 transition-colors text-sm font-medium shadow-sm shrink-0"
          >
            <span>Explore</span>
            <span className="text-muted-foreground">›</span>
          </motion.a>
        </div>

        {/* Visual + accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          {/* Image panel */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${eyebrow}-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full aspect-square rounded-[28px] overflow-hidden border border-border/40 bg-[#EFEDE6] flex items-center justify-center"
              >
                {displayImage ? (
                  <div
                    className="w-full h-full bg-no-repeat bg-center bg-contain"
                    style={{ backgroundImage: `url('${displayImage}')` }}
                    role="img"
                    aria-label={displayAlt}
                  />
                ) : (
                  <div className="text-center px-8">
                    <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                      {eyebrow}
                    </div>
                    <div className="text-2xl font-semibold text-foreground/70">
                      {activeFeature?.title}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Feature accordion */}
          <ul className="order-1 lg:order-2 flex flex-col gap-2">
            {features.map((feature, index) => {
              const isActive = index === activeIndex;
              return (
                <li key={feature.title}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left rounded-[20px] border transition-colors px-6 py-5 ${
                      isActive
                        ? "bg-white border-border/60 shadow-sm"
                        : "bg-transparent border-transparent hover:bg-foreground/[0.03]"
                    }`}
                    aria-expanded={isActive}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                          isActive ? "bg-foreground/10" : "bg-foreground/5"
                        }`}
                      >
                        <span className="w-2.5 h-2.5 rounded-sm bg-foreground/40" />
                      </span>
                      <span className="text-base md:text-lg font-semibold text-foreground">
                        {feature.title}
                      </span>
                    </div>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="desc"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-muted-foreground leading-relaxed pt-3 pl-9 pr-2">
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
