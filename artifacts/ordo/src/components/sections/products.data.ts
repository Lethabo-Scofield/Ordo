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
  ListChecks,
  SlidersHorizontal,
  ScanSearch,
  CheckCircle2,
  Search,
  MailX,
  type LucideIcon,
} from "lucide-react";

export interface ProductFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Product {
  id: string;
  eyebrow: string;
  heading: string;
  subheading: string;
  accent: string;
  image?: string;
  imageAlt?: string;
  features: ProductFeature[];
}

export const products: Product[] = [
  {
    id: "interpret",
    eyebrow: "Interpret",
    heading: "Turn instructions into structured workflows",
    subheading:
      "Ordo understands your business processes and translates plain-language intent into reliable execution plans.",
    accent: "from-[#FFE4CC] via-[#FFD4B5] to-[#F8C19A]",
    image: "/images/product-interpret.png",
    imageAlt:
      "Ordo interpreting a business search into autofilled workflow steps",
    features: [
      {
        icon: MessageSquareText,
        title: "Natural language input",
        description:
          "Describe a task or workflow in plain language. Ordo turns it into a structured, repeatable execution plan.",
      },
      {
        icon: Sparkles,
        title: "Process understanding",
        description:
          "Ordo learns your business context - tools, data, terminology, and policies - so it interprets intent correctly the first time.",
      },
      {
        icon: CalendarClock,
        title: "Trigger-based workflows",
        description:
          "Run workflows from prompts, schedules, webhooks, or events across the systems your team already uses.",
      },
      {
        icon: Workflow,
        title: "Adaptive planning",
        description:
          "Plans adjust in real time based on incoming data, conditions, and intermediate outcomes - without breaking the flow.",
      },
    ],
  },
  {
    id: "decide",
    eyebrow: "Decide",
    heading: "Save time with automated case management",
    subheading:
      "Reduce cost by cutting out lengthy reviews, manual checks, and endless e-mail back-and-forth.",
    accent: "from-[#F5E6D3] via-[#EBD5BE] to-[#D9BE9E]",
    image: "/images/product-decide.png",
    imageAlt:
      "Stacked case review steps: Geographic activity, Source of funds, Ownership structure",
    features: [
      {
        icon: ListChecks,
        title: "Standardised tasks",
        description:
          "Translate compliance policies into repeatable, structured tasks that run the same way every time.",
      },
      {
        icon: SlidersHorizontal,
        title: "Optimised for every case",
        description:
          "Automatically adapt workflows based on risk signals, customer type, and your compliance logic.",
      },
      {
        icon: ScanSearch,
        title: "AI document analysis",
        description:
          "Leverage leading AI and KYC technologies to verify and extract documents.",
      },
      {
        icon: CheckCircle2,
        title: "Instant approvals",
        description:
          "Automatically approve cases that meet your pre-set compliance criteria.",
      },
      {
        icon: Search,
        title: "AML investigations",
        description:
          "Fully automate hits on PEP, sanctions and adverse media, with outsourced OSINT investigations.",
      },
      {
        icon: MailX,
        title: "No more tedious back-and-forth",
        description:
          "Centralise customer communication so every clarification, document, and decision lives in one place.",
      },
    ],
  },
  {
    id: "execute",
    eyebrow: "Execute",
    heading: "Take action across your stack",
    subheading:
      "Connect Ordo to your APIs, databases, and tools - and let it complete real work end-to-end.",
    accent: "from-[#E8DCC8] via-[#DBC9AE] to-[#C9B591]",
    image: "/images/product-execute.png",
    imageAlt:
      "Diagram of Ordo's execution flow connecting your stack of SaaS apps, databases and APIs to actions across Salesforce, Slack, Google Sheets, Postgres, AWS, webhooks and any API",
    features: [
      {
        icon: Plug,
        title: "Universal connectors",
        description:
          "Out-of-the-box integrations with the tools your team already uses - CRMs, databases, SaaS apps, and internal services.",
      },
      {
        icon: Zap,
        title: "API-native",
        description:
          "Call any API or internal service. If it has an endpoint, Ordo can run it - securely and on demand.",
      },
      {
        icon: Database,
        title: "Database operations",
        description:
          "Read, write, and reconcile data across systems with structured, type-safe operations and predictable results.",
      },
      {
        icon: UserCheck,
        title: "Human-in-the-loop",
        description:
          "Pause for approval, escalate edge cases, and keep humans in control where it matters most.",
      },
    ],
  },
  {
    id: "verify",
    eyebrow: "Verify",
    heading: "Catch errors before they ship",
    subheading:
      "A real-time quality gate. Ordo checks every output against your rules and source data - and only commits results that pass.",
    accent: "from-[#F4DDD0] via-[#ECC9B5] to-[#DFB39A]",
    image: "/images/product-verify.png",
    imageAlt:
      "Ordo settings being verified against required information with checkmarks",
    features: [
      {
        icon: ShieldCheck,
        title: "Output validation",
        description:
          "Check results against schemas, business rules, and source-of-truth data the moment they're produced - before anything is committed.",
      },
      {
        icon: RefreshCcw,
        title: "Self-correction",
        description:
          "When a check fails, Ordo retries, reroutes, or escalates automatically - without breaking the workflow or losing context.",
      },
      {
        icon: Gauge,
        title: "Confidence scoring",
        description:
          "Every step ships with a confidence signal so teams know in the moment when to step in and when to let it run.",
      },
      {
        icon: BarChart3,
        title: "Quality benchmarks",
        description:
          "Tune accuracy thresholds per workflow so only outputs that meet your bar move forward.",
      },
    ],
  },
  {
    id: "audit",
    eyebrow: "Audit",
    heading: "Every run, on the record",
    subheading:
      "After the fact: a complete event timeline your security, ops, and compliance teams can search, replay, and export.",
    accent: "from-[#E5D8C5] via-[#D4C2A8] to-[#B8A285]",
    features: [
      {
        icon: ScrollText,
        title: "Searchable run history",
        description:
          "Every input, decision, tool call, and output is captured as a structured event you can filter, drill into, and share.",
      },
      {
        icon: History,
        title: "Replay any execution",
        description:
          "Re-run any past workflow from any point - with the original inputs and context - to debug, demo, or prove what happened.",
      },
      {
        icon: Lock,
        title: "Permissions & controls",
        description:
          "Govern what each agent can read, write, or execute - by tool, dataset, role, or environment.",
      },
      {
        icon: FileCheck2,
        title: "Compliance exports",
        description:
          "Tamper-evident audit trails, retention policies, and one-click exports designed for SOC 2, ISO, and regulatory reviews.",
      },
    ],
  },
];
