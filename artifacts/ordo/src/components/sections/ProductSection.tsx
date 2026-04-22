import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { products } from "./products.data";

const ROTATE_MS = 5500;
const EASE = [0.16, 1, 0.3, 1] as const;

export function ProductSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % products.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [isPaused, activeIndex]);

  // Keep active tab in view on mobile by scrolling only the tab bar horizontally.
  // Using scrollIntoView would also scroll the page vertically on mobile, which
  // disrupts the user as the tabs auto-rotate.
  useEffect(() => {
    const el = tabRefs.current[activeIndex];
    if (!el) return;
    const scroller = el.closest<HTMLElement>("[data-tab-scroller]");
    if (!scroller) return;
    const target =
      el.offsetLeft - scroller.clientWidth / 2 + el.clientWidth / 2;
    scroller.scrollTo({ left: target, behavior: "smooth" });
  }, [activeIndex]);

  const product = products[activeIndex];

  return (
    <section className="relative px-4 sm:px-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-radial from-[#FCE8D5]/40 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-[1280px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/[0.05] border border-border/40 text-xs font-medium text-foreground/70 mb-5 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
            Product
          </span>
          <h2 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-[-0.025em] leading-[1.05]">
            From intent{" "}
            <span
              className="inline-block text-[#E76F2C] font-normal tracking-normal"
              style={{
                fontFamily: "'Caveat', cursive",
                transform: "rotate(-2deg)",
              }}
            >
              to outcome.
            </span>
          </h2>
        </div>

        {/* Tab bar - horizontal scroll on mobile, pill on desktop */}
        <div
          className="mb-8 md:mb-12 -mx-4 sm:mx-0 sm:flex sm:justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
        >
          <div data-tab-scroller className="overflow-x-auto scrollbar-none sm:overflow-visible">
            <div className="inline-flex items-center gap-1 p-1 sm:p-1.5 mx-4 sm:mx-0 rounded-full bg-white/70 backdrop-blur border border-border/50 shadow-sm whitespace-nowrap">
              {products.map((p, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={p.id}
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-[13px] sm:text-sm font-medium rounded-full transition-colors shrink-0 ${
                      isActive ? "text-background" : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="product-active-pill"
                        className="absolute inset-0 bg-foreground rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 36 }}
                      />
                    )}
                    {isActive && !isPaused && (
                      <motion.span
                        key={`prog-${activeIndex}`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
                        className="absolute bottom-0 left-0 h-[2px] bg-white/40 rounded-full"
                      />
                    )}
                    <span className="relative z-10">{p.eyebrow}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Card */}
        <div
          className="relative rounded-[24px] sm:rounded-[36px] border border-border/40 bg-white/60 backdrop-blur-sm shadow-[0_30px_80px_-30px_rgba(0,0,0,0.15)] overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="sync">
            <motion.div
              key={`accent-${product.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className={`pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-gradient-to-br ${product.accent} blur-3xl`}
            />
          </AnimatePresence>

          <div className="relative p-5 sm:p-8 md:p-12 lg:p-16">
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 md:gap-8 mb-8 md:mb-12 md:min-h-[140px]">
              <div className="flex-1 max-w-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`header-${product.id}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25, ease: EASE }}
                  >
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-foreground/[0.06] text-xs font-medium text-foreground/80 mb-4 sm:mb-5">
                      {product.eyebrow}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-[-0.02em] leading-[1.15] mb-3 md:mb-4">
                      {product.heading}
                    </h3>
                    <p className="text-[15px] sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                      {product.subheading}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <a
                href="#"
                className="group self-start inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm font-medium shrink-0"
              >
                <span>Explore</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Visual + features */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 sm:gap-8 lg:gap-14 items-start">
              <div className="order-2 lg:order-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`img-${product.id}`}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="relative w-full aspect-[4/3] sm:aspect-square rounded-[18px] sm:rounded-[24px] overflow-hidden bg-[#EFEDE6] flex items-center justify-center shadow-inner"
                  >
                    {product.image ? (
                      <div
                        className="w-full h-full bg-no-repeat bg-center bg-contain"
                        style={{ backgroundImage: `url('${product.image}')` }}
                        role="img"
                        aria-label={product.imageAlt ?? product.heading}
                      />
                    ) : (
                      <div
                        className={`w-full h-full bg-gradient-to-br ${product.accent} flex items-center justify-center`}
                      >
                        <div className="text-center px-8">
                          <div className="text-xs font-medium tracking-widest uppercase text-foreground/50 mb-3">
                            {product.eyebrow}
                          </div>
                          <div className="text-3xl font-semibold text-foreground/80 max-w-[280px]">
                            {product.heading}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="order-1 lg:order-2 self-center">
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={`features-${product.id}`}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -4 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="flex flex-col gap-1.5 sm:gap-2"
                  >
                    {product.features.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <motion.li
                          key={feature.title}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.22, delay: idx * 0.04, ease: EASE }}
                          className="group rounded-2xl px-2.5 sm:px-5 py-2.5 sm:py-4 hover:bg-foreground/[0.03] transition-colors"
                        >
                          <div className="flex items-start gap-3 sm:gap-4">
                            <span className="mt-0.5 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-foreground/[0.06] flex items-center justify-center shrink-0 group-hover:bg-foreground/10 transition-colors">
                              <Icon className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-foreground/80" strokeWidth={1.75} />
                            </span>
                            <div className="flex-1 pt-0.5 sm:pt-1 min-w-0">
                              <div className="text-[15px] sm:text-base md:text-[17px] font-medium text-foreground mb-1 sm:mb-1.5">
                                {feature.title}
                              </div>
                              <p className="text-muted-foreground leading-relaxed text-[13.5px] sm:text-[14.5px]">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
