import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
}

export interface ProductTab {
  id: string;
  eyebrow: string;
  heading: string;
  subheading: string;
  features: Feature[];
  image?: string;
  imageAlt?: string;
}

interface ProductTabsProps {
  tabs: ProductTab[];
}

export function ProductTabs({ tabs }: ProductTabsProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  if (!active) return null;

  return (
    <section className="px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap items-center gap-1 p-1.5 rounded-full bg-foreground/5 border border-border/40">
            {tabs.map((tab) => {
              const isActive = tab.id === active.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveId(tab.id)}
                  className={`relative px-5 md:px-6 py-2.5 text-sm font-medium rounded-full transition-colors ${
                    isActive ? "text-background" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="product-tab-pill"
                      className="absolute inset-0 bg-foreground rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{tab.eyebrow}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16 items-center min-h-[480px]">
          <div className="flex-1 max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${active.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
                  {active.eyebrow}
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] mb-6">
                  {active.heading}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  {active.subheading}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors text-sm font-medium"
                >
                  <span>Explore</span>
                  <span className="text-muted-foreground">›</span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${active.id}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex justify-center lg:justify-end"
              >
                {active.image ? (
                  <div
                    className="relative w-full max-w-[520px] aspect-square rounded-[32px] overflow-hidden shadow-xl border border-border/50 bg-[#EFEDE6] bg-no-repeat bg-center bg-contain"
                    style={{ backgroundImage: `url('${active.image}')` }}
                    role="img"
                    aria-label={active.imageAlt ?? active.heading}
                  />
                ) : (
                  <div className="relative w-full max-w-[520px] aspect-square rounded-[32px] overflow-hidden shadow-xl border border-border/50 bg-gradient-to-br from-[#FAF5F0] to-[#FCE8D5]/60 flex items-center justify-center">
                    <div className="text-center px-8">
                      <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                        {active.eyebrow}
                      </div>
                      <div className="text-2xl font-semibold text-foreground/80">
                        {active.heading}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`features-${active.id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {active.features.map((feature, index) => (
              <motion.div
                key={`${active.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
