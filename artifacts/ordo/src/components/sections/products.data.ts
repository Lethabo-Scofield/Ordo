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
    heading: "Turn instructions into workflows",
    subheading:
      "Describe what you need in plain language. Ordo turns it into a structured, repeatable execution plan.",
    accent: "from-[#FFE4CC] via-[#FFD4B5] to-[#F8C19A]",
    image: "/images/product-interpret.png",
    imageAlt: "Ordo turning a request into structured workflow steps",
    features: [
      {
        icon: MessageSquareText,
        title: "Natural language input",
        description: "Describe a task in plain language. Ordo builds the plan.",
      },
      {
        icon: Sparkles,
        title: "Knows your business",
        description: "Learns your tools, data, and policies to read intent correctly.",
      },
      {
        icon: CalendarClock,
        title: "Any trigger",
        description: "Runs from prompts, schedules, webhooks, or events.",
      },
      {
        icon: Workflow,
        title: "Adaptive planning",
        description: "Plans adjust in real time as new data and conditions come in.",
      },
    ],
  },
  {
    id: "decide",
    eyebrow: "Decide",
    heading: "Automate the calls humans hate",
    subheading:
      "Cut out manual reviews, checks, and email back-and-forth. Ordo decides by your rules.",
    accent: "from-[#F5E6D3] via-[#EBD5BE] to-[#D9BE9E]",
    image: "/images/product-decide.png",
    imageAlt: "Stacked case review steps with automated decisions",
    features: [
      {
        icon: ListChecks,
        title: "Standardised tasks",
        description: "Turn policies into repeatable steps that run the same way every time.",
      },
      {
        icon: SlidersHorizontal,
        title: "Adapts per case",
        description: "Workflows shift based on risk, customer type, and your logic.",
      },
      {
        icon: ScanSearch,
        title: "Document analysis",
        description: "AI extracts and verifies documents automatically.",
      },
      {
        icon: CheckCircle2,
        title: "Instant approvals",
        description: "Auto-approve cases that meet your criteria. Escalate the rest.",
      },
    ],
  },
  {
    id: "execute",
    eyebrow: "Execute",
    heading: "Take action across your stack",
    subheading:
      "Connect Ordo to your APIs, databases, and tools. It does the real work, end to end.",
    accent: "from-[#E8DCC8] via-[#DBC9AE] to-[#C9B591]",
    image: "/images/product-execute.png",
    imageAlt: "Ordo connecting to SaaS apps, databases, and APIs",
    features: [
      {
        icon: Plug,
        title: "Universal connectors",
        description: "Out-of-the-box integrations for CRMs, SaaS, and internal tools.",
      },
      {
        icon: Zap,
        title: "API-native",
        description: "If it has an endpoint, Ordo can call it. Securely, on demand.",
      },
      {
        icon: Database,
        title: "Database operations",
        description: "Read, write, and reconcile data with type-safe results.",
      },
      {
        icon: UserCheck,
        title: "Human-in-the-loop",
        description: "Pause for approval and escalate edge cases when it matters.",
      },
    ],
  },
  {
    id: "verify",
    eyebrow: "Verify",
    heading: "Catch errors. Keep the receipts.",
    subheading:
      "A real-time quality gate plus a full audit trail. Ordo checks every output, and logs every run for replay and compliance.",
    accent: "from-[#F4DDD0] via-[#ECC9B5] to-[#DFB39A]",
    image: "/images/product-verify.png",
    imageAlt: "Ordo verifying outputs against rules with a full audit log",
    features: [
      {
        icon: ShieldCheck,
        title: "Output validation",
        description: "Check results against rules and source data before anything commits.",
      },
      {
        icon: RefreshCcw,
        title: "Self-correction",
        description: "Failed checks retry, reroute, or escalate without breaking the flow.",
      },
      {
        icon: Gauge,
        title: "Confidence scoring",
        description: "Every step ships a signal: when to step in, when to let it run.",
      },
      {
        icon: BarChart3,
        title: "Audit-ready logs",
        description: "Every input, decision, and output captured. Replayable and exportable.",
      },
    ],
  },
];
