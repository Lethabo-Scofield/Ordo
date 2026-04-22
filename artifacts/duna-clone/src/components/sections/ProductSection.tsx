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
    features: [
      { icon: ScrollText, title: "Detailed run logs", description: "Capture inputs, decisions, tool calls, and outputs as a structured event timeline you can search and replay." },
      { icon: History, title: "Replayable workflows", description: "Re-run any execution from any point — with the same inputs, conditions, and surrounding context." },
      { icon: Lock, title: "Permissions & controls", description: "Scope what each agent can read, write, or execute — by tool, dataset, or environment." },
      { icon: FileCheck2, title: "Compliance-ready", description: "Built-in audit trails, retention controls, and exports designed for security and compliance reviews." },
    ],
  },
];

const ROTATE_MS = 6000;

export function ProductSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % products.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [isPaused]);

  const product = products[activeIndex];

  return (
    <section
      className="px-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14 min-h-[180px]">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`header-${product.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-foreground/[0.06] text-xs font-medium text-foreground/80 mb-6">
                  {product.eyebrow}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semibold tracking-[-0.02em] leading-[1.1] mb-5">
                  {product.heading}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {product.subheading}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <a
            href="#"
            className="self-start inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-border/60 hover:bg-foreground/[0.03] transition-colors text-sm font-medium shrink-0"
          >
            <span>Explore</span>
            <span className="text-muted-foreground">›</span>
          </a>
        </div>

        {/* Visual + feature list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Image panel */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${product.id}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full aspect-square rounded-[28px] overflow-hidden bg-[#EFEDE6] flex items-center justify-center"
              >
                {product.image ? (
                  <div
                    className="w-full h-full bg-no-repeat bg-center bg-contain"
                    style={{ backgroundImage: `url('${product.image}')` }}
                    role="img"
                    aria-label={product.imageAlt ?? product.heading}
                  />
                ) : (
                  <div className="text-center px-8">
                    <div className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
                      {product.eyebrow}
                    </div>
                    <div className="text-2xl font-semibold text-foreground/70">
                      {product.heading}
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
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-1"
              >
                {product.features.map((feature, idx) => {
                  const Icon = feature.icon;
                  const isActive = idx === 0;
                  return (
                    <li
                      key={feature.title}
                      className={`rounded-2xl px-5 py-4 ${
                        isActive ? "bg-foreground/[0.04]" : ""
                      }`}
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
                      {isActive && (
                        <p className="text-muted-foreground leading-relaxed text-[15px] pt-2 pl-[30px] pr-2">
                          {feature.description}
                        </p>
                      )}
                    </li>
                  );
                })}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mt-14">
          {products.map((p, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={p.id}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Show ${p.eyebrow}`}
                className="group relative h-1.5 rounded-full overflow-hidden bg-foreground/10 transition-all"
                style={{ width: isActive ? 48 : 24 }}
              >
                {isActive && !isPaused && (
                  <motion.span
                    key={`bar-${activeIndex}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
                    className="absolute inset-y-0 left-0 bg-foreground/70"
                  />
                )}
                {isActive && isPaused && (
                  <span className="absolute inset-0 bg-foreground/70" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
