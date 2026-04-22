import { useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  Zap,
  Info,
  Globe,
  Database,
  Plug,
  Workflow,
  UserCheck,
  ShieldCheck,
  RefreshCcw,
  Gauge,
  BarChart3,
  ScrollText,
  History,
  Lock,
  FileCheck2,
  MessageSquareText,
  Sparkles,
  CalendarClock,
  Layers,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon?: LucideIcon;
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

export const featureIcons = {
  Briefcase,
  Zap,
  Info,
  Globe,
  Database,
  Plug,
  Workflow,
  UserCheck,
  ShieldCheck,
  RefreshCcw,
  Gauge,
  BarChart3,
  ScrollText,
  History,
  Lock,
  FileCheck2,
  MessageSquareText,
  Sparkles,
  CalendarClock,
  Layers,
} satisfies Record<string, ComponentType>;

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
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-foreground/[0.06] text-xs font-medium text-foreground/80 mb-6">
              {eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semibold tracking-[-0.02em] leading-[1.1] mb-5">
              {heading}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {subheading}
            </p>
          </motion.div>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="self-start inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-border/60 hover:bg-foreground/[0.03] transition-colors text-sm font-medium shrink-0"
          >
            <span>Explore</span>
            <span className="text-muted-foreground">›</span>
          </motion.a>
        </div>

        {/* Visual + accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Image panel */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${eyebrow}-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full aspect-square rounded-[28px] overflow-hidden bg-[#EFEDE6] flex items-center justify-center"
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
                    <div className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
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
          <ul className="order-1 lg:order-2 flex flex-col gap-1 self-center">
            {features.map((feature, index) => {
              const isActive = index === activeIndex;
              const Icon = feature.icon ?? Sparkles;
              return (
                <li key={feature.title}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left rounded-2xl transition-colors px-5 py-4 ${
                      isActive
                        ? "bg-foreground/[0.04]"
                        : "bg-transparent hover:bg-foreground/[0.025]"
                    }`}
                    aria-expanded={isActive}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`w-[18px] h-[18px] shrink-0 ${
                          isActive ? "text-foreground" : "text-foreground/60"
                        }`}
                        strokeWidth={1.75}
                      />
                      <span
                        className={`text-base md:text-[17px] font-medium ${
                          isActive ? "text-foreground" : "text-foreground/80"
                        }`}
                      >
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
                          <p className="text-muted-foreground leading-relaxed text-[15px] pt-2 pl-[30px] pr-2">
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
