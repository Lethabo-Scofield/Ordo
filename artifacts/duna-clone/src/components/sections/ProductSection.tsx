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
  ListChecks,
  Users,
  MessagesSquare,
  ClipboardList,
  SlidersHorizontal,
  ScanSearch,
  CheckCircle2,
  Search,
  MailX,
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
      { icon: Sparkles, title: "Process understanding", description: "Ordo learns your business context - tools, data, terminology, and policies - so it interprets intent correctly the first time." },
      { icon: CalendarClock, title: "Trigger-based workflows", description: "Run workflows from prompts, schedules, webhooks, or events across the systems your team already uses." },
      { icon: Workflow, title: "Adaptive planning", description: "Plans adjust in real time based on incoming data, conditions, and intermediate outcomes - without breaking the flow." },
    ],
  },
  {
    id: "decide",
    eyebrow: "Decide",
    heading: "Save time with automated case management",
    subheading: "Reduce cost by cutting out lengthy reviews, manual checks, and endless e-mail back-and-forth.",
    accent: "from-[#F5E6D3] via-[#EBD5BE] to-[#D9BE9E]",
    image: "/images/product-decide.png",
    imageAlt: "Stacked case review steps: Geographic activity, Source of funds, Ownership structure",
    features: [
      { icon: ListChecks, title: "Standardised tasks", description: "Translate compliance policies into repeatable, structured tasks that run the same way every time." },
      { icon: SlidersHorizontal, title: "Optimised for every case", description: "Automatically adapt workflows based on risk signals, customer type, and your compliance logic." },
      { icon: ScanSearch, title: "AI document analysis", description: "Leverage leading AI and KYC technologies to verify and extract documents." },
      { icon: CheckCircle2, title: "Instant approvals", description: "Automatically approve cases that meet your pre-set compliance criteria." },
      { icon: Search, title: "AML investigations", description: "Fully automate hits on PEP, sanctions and adverse media, with outsourced OSINT investigations." },
      { icon: MailX, title: "No more tedious back-and-forth", description: "Centralise customer communication so every clarification, document, and decision lives in one place." },
    ],
  },
  {
    id: "execute",
    eyebrow: "Execute",
    heading: "Take action across your stack",
    subheading: "Connect Ordo to your APIs, databases, and tools - and let it complete real work end-to-end.",
    accent: "from-[#E8DCC8] via-[#DBC9AE] to-[#C9B591]",
    image: "/images/product-execute.png",
    imageAlt: "Diagram of Ordo's execution flow connecting your stack of SaaS apps, databases and APIs to actions across Salesforce, Slack, Google Sheets, Postgres, AWS, webhooks and any API",
    features: [
      { icon: Plug, title: "Universal connectors", description: "Out-of-the-box integrations with the tools your team already uses - CRMs, databases, SaaS apps, and internal services." },
      { icon: Zap, title: "API-native", description: "Call any API or internal service. If it has an endpoint, Ordo can run it - securely and on demand." },
      { icon: Database, title: "Database operations", description: "Read, write, and reconcile data across systems with structured, type-safe operations and predictable results." },
      { icon: UserCheck, title: "Human-in-the-loop", description: "Pause for approval, escalate edge cases, and keep humans in control where it matters most." },
    ],
  },
  {
    id: "verify",
    eyebrow: "Verify",
    heading: "Catch errors before they ship",
    subheading: "A real-time quality gate. Ordo checks every output against your rules and source data - and only commits results that pass.",
    accent: "from-[#F4DDD0] via-[#ECC9B5] to-[#DFB39A]",
    image: "/images/product-verify.png",
    imageAlt: "Ordo settings being verified against required information with checkmarks",
    features: [
      { icon: ShieldCheck, title: "Output validation", description: "Check results against schemas, business rules, and source-of-truth data the moment they're produced - before anything is committed." },
      { icon: RefreshCcw, title: "Self-correction", description: "When a check fails, Ordo retries, reroutes, or escalates automatically - without breaking the workflow or losing context." },
      { icon: Gauge, title: "Confidence scoring", description: "Every step ships with a confidence signal so teams know in the moment when to step in and when to let it run." },
      { icon: BarChart3, title: "Quality benchmarks", description: "Tune accuracy thresholds per workflow so only outputs that meet your bar move forward." },
    ],
  },
  {
    id: "audit",
    eyebrow: "Audit",
    heading: "Every run, on the record",
    subheading: "After the fact: a complete event timeline your security, ops, and compliance teams can search, replay, and export.",
    accent: "from-[#E5D8C5] via-[#D4C2A8] to-[#B8A285]",
    features: [
      { icon: ScrollText, title: "Searchable run history", description: "Every input, decision, tool call, and output is captured as a structured event you can filter, drill into, and share." },
      { icon: History, title: "Replay any execution", description: "Re-run any past workflow from any point - with the original inputs and context - to debug, demo, or prove what happened." },
      { icon: Lock, title: "Permissions & controls", description: "Govern what each agent can read, write, or execute - by tool, dataset, role, or environment." },
      { icon: FileCheck2, title: "Compliance exports", description: "Tamper-evident audit trails, retention policies, and one-click exports designed for SOC 2, ISO, and regulatory reviews." },
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
    <section className="relative px-4 sm:px-6">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-radial from-[#FCE8D5]/40 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/[0.05] border border-border/40 text-xs font-medium text-foreground/70 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
            Product
          </span>
          <h2 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-[-0.025em] leading-[1.05]">
            Execute business processes, end to end.
          </h2>
        </div>

        {/* Tab bar */}
        <div className="flex justify-center mb-10 md:mb-12 -mx-2 px-2">
          <div
            className="inline-flex flex-wrap justify-center items-center gap-1 p-1 sm:p-1.5 rounded-full bg-white/70 backdrop-blur border border-border/50 shadow-sm max-w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {products.map((p, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative px-3.5 sm:px-5 md:px-6 py-2 sm:py-2.5 text-[13px] sm:text-sm font-medium rounded-full transition-colors ${
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

          <div className="relative p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Header row inside card */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8 mb-10 md:mb-12 md:min-h-[160px]">
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
              {/* Image panel */}
              <div className="order-2 lg:order-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`img-${product.id}`}
                    initial={{ opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -8 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full aspect-[4/3] sm:aspect-square rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#EFEDE6] flex items-center justify-center shadow-inner"
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
                          className="group rounded-2xl px-3 sm:px-5 py-3 sm:py-4 hover:bg-foreground/[0.03] transition-colors"
                        >
                          <div className="flex items-start gap-3 sm:gap-4">
                            <span className="mt-0.5 w-9 h-9 rounded-xl bg-foreground/[0.06] flex items-center justify-center shrink-0 group-hover:bg-foreground/10 transition-colors">
                              <Icon className="w-[18px] h-[18px] text-foreground/80" strokeWidth={1.75} />
                            </span>
                            <div className="flex-1 pt-1 min-w-0">
                              <div className="text-[15px] sm:text-base md:text-[17px] font-medium text-foreground mb-1.5">
                                {feature.title}
                              </div>
                              <p className="text-muted-foreground leading-relaxed text-[14px] sm:text-[14.5px]">
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
