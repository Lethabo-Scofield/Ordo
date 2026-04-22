import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, ShieldCheck, Workflow } from "lucide-react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const stats: StatItem[] = [
  { value: 10, suffix: "x", label: "Faster execution", sublabel: "vs. manual workflows" },
  { value: 92, suffix: "%", label: "Tasks completed end-to-end", sublabel: "without human handoff" },
  { value: 5, suffix: "x", label: "Team productivity", sublabel: "across operations teams" },
];

const pillars = [
  {
    icon: Zap,
    title: "Run real work",
    description:
      "Ordo doesn't just suggest. It executes across your stack and finishes the job.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable by design",
    description:
      "Every output is verified, every step logged. Built for control, not chaos.",
  },
  {
    icon: Workflow,
    title: "Cut the busywork",
    description:
      "No more handoffs, copy-paste, or context switching. Ordo orchestrates it all.",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const startedAt = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/[0.05] border border-border/40 text-xs font-medium text-foreground/70 mb-5 sm:mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
            Why Ordo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[28px] sm:text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-[-0.025em] leading-[1.05]"
          >
            Designed to execute.
            <br className="hidden sm:block" /> Built to scale.
          </motion.h2>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-16 md:mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-[24px] border border-border/40 bg-white/80 backdrop-blur-sm p-7 sm:p-8 md:p-10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)] transition-shadow"
            >
              {/* subtle accent blob */}
              <div className="pointer-events-none absolute -top-20 -right-16 w-[260px] h-[260px] rounded-full bg-gradient-to-br from-[#FFE4CC]/60 via-[#F5D4B5]/30 to-transparent blur-3xl opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="text-[56px] sm:text-[64px] md:text-[80px] leading-none font-semibold tracking-[-0.04em] text-foreground mb-3 sm:mb-4">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[15px] sm:text-base font-medium text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="flex flex-col"
              >
                <span className="w-11 h-11 rounded-2xl bg-foreground/[0.06] flex items-center justify-center mb-5">
                  <Icon className="w-[20px] h-[20px] text-foreground/80" strokeWidth={1.75} />
                </span>
                <h3 className="text-xl md:text-[22px] font-semibold tracking-[-0.01em] mb-3">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
