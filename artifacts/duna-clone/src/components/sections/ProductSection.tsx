import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MessageSquareText,
  Sparkles,
  Workflow,
  Zap,
  Plug,
  Database,
  UserCheck,
  ShieldCheck,
  RefreshCcw,
  Gauge,
  BarChart3,
  ScrollText,
  History,
  Lock,
  FileCheck2,
  CalendarClock,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Product {
  id: string;
  eyebrow: string;
  heading: string;
  subheading: string;
  accent: string;
  image?: string;
  imageAlt?: string;
  features: Feature[];
}

const products: Product[] = [
  {
    id: "interpret",
    eyebrow: "Interpret",
    heading: "Turn instructions into structured workflows",
    subheading: "Ordo understands your business processes and translates plain-language intent into reliable execution plans.",
    accent: "from-[#FFE4CC] via-[#FFD4B5] to-[#F8C19A]",
    image: "/images/product-interpret.png",
    imageAlt: "Ordo interpreting a business search into autofilled workflow steps",
    features: [
      { icon: MessageSquareText, title: "Natural language input", description: "Describe a task or workflow in plain language. Ordo turns it into a structured, repeatable execution plan." },
      { icon: Sparkles, title: "Process understanding", description: "Ordo learns your business context — tools, data, terminology, and policies — so it interprets intent correctly the first time." },
      { icon: CalendarClock, title: "Trigger-based workflows", description: "Run workflows from prompts, schedules, webhooks, or events across the systems your team already uses." },
      { icon: Workflow, title: "Adaptive planning", description: "Plans adjust in real time based on incoming data, conditions, and intermediate outcomes — without breaking the flow." },
    ],
  },
  {
    id: "execute",
    eyebrow: "Execute",
    heading: "Take action across your stack",
    subheading: "Connect Ordo to your APIs, databases, and tools — and let it complete real work end-to-end.",
    accent: "from-[#E8DCC8] via-[#DBC9AE] to-[#C9B591]",
    features: [
      { icon: Plug, title: "Universal connectors", description: "Out-of-the-box integrations with the tools your team already uses — CRMs, databases, SaaS apps, and internal services." },
      { icon: Zap, title: "API-native", description: "Call any API or internal service. If it has an endpoint, Ordo can run it — securely and on demand." },
      { icon: Database, title: "Database operations", description: "Read, write, and reconcile data across systems with structured, type-safe operations and predictable results." },
      { icon: UserCheck, title: "Human-in-the-loop", description: "Pause for approval, escalate edge cases, and keep humans in control where it matters most." },
    ],
  },
  {
    id: "verify",
    eyebrow: "Verify",
    heading: "Outputs you can actually trust",
    subheading: "Every action Ordo takes is checked against expected outcomes — not just generated and shipped.",
    accent: "from-[#F4DDD0] via-[#ECC9B5] to-[#DFB39A]",
    image: "/images/product-verify.png",
    imageAlt: "Ordo settings being verified against required information with checkmarks",
    features: [
      { icon: ShieldCheck, title: "Output validation", description: "Verify results against schemas, business rules, and source-of-truth data before they're committed downstream." },
      { icon: RefreshCcw, title: "Self-correction", description: "Detect failures and retry, reroute, or escalate — without breaking the workflow or losing context." },
      { icon: Gauge, title: "Confidence scoring", description: "Every step ships with a confidence signal so teams know exactly when to step in and when to let it run." },
      { icon: BarChart3, title: "Quality benchmarks", description: "Track accuracy, completeness, and reliability over time — per workflow, per task, per agent." },
    ],
  },
  {
    id: "audit",
    eyebrow: "Audit",
    heading: "Full traceability for every run",
    subheading: "Logs, lineage, and accountability for every action Ordo takes — built for regulated environments.",
    accent: "from-[#E5D8C5] via-[#D4C2A8] to-[#B8A285]",
    features: [
      { icon: ScrollText, title: "Detailed run logs", description: "Capture inputs, decisions, tool calls, and outputs as a structured event timeline you can search and replay." },
      { icon: History, title: "Replayable workflows", description: "Re-run any execution from any point — with the same inputs, conditions, and surrounding context." },
      { icon: Lock, title: "Permissions & controls", description: "Scope what each agent can read, write, or execute — by tool, dataset, or environment." },
      { icon: FileCheck2, title: "Compliance-ready", description: "Built-in audit trails, retention controls, and exports designed for security and compliance reviews." },
    ],
  },
];

const ROTATE_MS = 7000;

export function ProductSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % products.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [isPaused, activeIndex]);

  const product = products[activeIndex];

  return (
    <section className="relative px-6">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-radial from-[#FCE8D5]/40 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/[0.05] border border-border/40 text-xs font-medium text-foreground/70 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
            Product
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-[-0.025em] leading-[1.05] mb-5">
            One platform.
            <br />
            <span className="text-foreground/50">End-to-end execution.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            From the moment intent enters Ordo to the audit log it leaves behind — every step is designed to make AI dependable at work.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex justify-center mb-12">
          <div
            className="inline-flex flex-wrap items-center gap-1 p-1.5 rounded-full bg-white/70 backdrop-blur border border-border/50 shadow-sm"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {products.map((p, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative px-5 md:px-6 py-2.5 text-sm font-medium rounded-full transition-colors ${
                    isActive ? "text-background" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="product-active-pill"
                      className="absolute inset-0 bg-foreground rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
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

        {/* Card */}
        <div
          className="relative rounded-[36px] border border-border/40 bg-white/60 backdrop-blur-sm shadow-[0_30px_80px_-30px_rgba(0,0,0,0.15)] overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card accent gradient */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`accent-${product.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className={`pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-gradient-to-br ${product.accent} blur-3xl`}
            />
          </AnimatePresence>

          <div className="relative p-8 md:p-12 lg:p-16">
            {/* Header row inside card */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12 min-h-[160px]">
              <div className="flex-1 max-w-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`header-${product.id}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-foreground/[0.06] text-xs font-medium text-foreground/80 mb-5">
                      {product.eyebrow}
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-[-0.02em] leading-[1.1] mb-4">
                      {product.heading}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
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
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 items-start">
              {/* Image panel */}
              <div className="order-2 lg:order-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`img-${product.id}`}
                    initial={{ opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -8 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full aspect-square rounded-[24px] overflow-hidden bg-[#EFEDE6] flex items-center justify-center shadow-inner"
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

              {/* Feature list */}
              <div className="order-1 lg:order-2 self-center">
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={`features-${product.id}`}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-2"
                  >
                    {product.features.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <motion.li
                          key={feature.title}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: idx * 0.06 }}
                          className="group rounded-2xl px-5 py-4 hover:bg-foreground/[0.03] transition-colors"
                        >
                          <div className="flex items-start gap-4">
                            <span className="mt-0.5 w-9 h-9 rounded-xl bg-foreground/[0.06] flex items-center justify-center shrink-0 group-hover:bg-foreground/10 transition-colors">
                              <Icon className="w-[18px] h-[18px] text-foreground/80" strokeWidth={1.75} />
                            </span>
                            <div className="flex-1 pt-1">
                              <div className="text-base md:text-[17px] font-medium text-foreground mb-1.5">
                                {feature.title}
                              </div>
                              <p className="text-muted-foreground leading-relaxed text-[14.5px]">
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
