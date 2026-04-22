import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { Stats } from "@/components/sections/Stats";
import { Testimonial } from "@/components/sections/Testimonial";
import { AISection } from "@/components/sections/AISection";
import { ProductSection } from "@/components/sections/ProductSection";
import { Security } from "@/components/sections/Security";
import { News } from "@/components/sections/News";
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
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-foreground selection:text-background">
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Stats />
        <Testimonial />
        <AISection />

        {/* Product Sections */}
        <div className="flex flex-col gap-32 py-32">
          <ProductSection
            eyebrow="Interpret"
            heading="Turn instructions into structured workflows"
            subheading="Ordo understands your business processes and translates plain-language intent into reliable execution plans."
            image="/images/product-interpret.png"
            imageAlt="Ordo interpreting a business search into autofilled workflow steps"
            features={[
              { icon: MessageSquareText, title: "Natural language input", description: "Describe a task or workflow in plain language. Ordo turns it into a structured, repeatable execution plan." },
              { icon: Sparkles, title: "Process understanding", description: "Ordo learns your business context — tools, data, terminology, and policies — so it interprets intent correctly the first time." },
              { icon: CalendarClock, title: "Trigger-based workflows", description: "Run workflows from prompts, schedules, webhooks, or events across the systems your team already uses." },
              { icon: Workflow, title: "Adaptive planning", description: "Plans adjust in real time based on incoming data, conditions, and intermediate outcomes — without breaking the flow." },
            ]}
          />

          <ProductSection
            eyebrow="Execute"
            heading="Take action across your stack"
            subheading="Connect Ordo to your APIs, databases, and tools — and let it complete real work end-to-end."
            features={[
              { icon: Plug, title: "Universal connectors", description: "Out-of-the-box integrations with the tools your team already uses — CRMs, databases, SaaS apps, and internal services." },
              { icon: Zap, title: "API-native", description: "Call any API or internal service. If it has an endpoint, Ordo can run it — securely and on demand." },
              { icon: Database, title: "Database operations", description: "Read, write, and reconcile data across systems with structured, type-safe operations and predictable results." },
              { icon: UserCheck, title: "Human-in-the-loop", description: "Pause for approval, escalate edge cases, and keep humans in control where it matters most." },
            ]}
          />

          <ProductSection
            eyebrow="Verify"
            heading="Outputs you can actually trust"
            subheading="Every action Ordo takes is checked against expected outcomes — not just generated and shipped."
            image="/images/product-verify.png"
            imageAlt="Ordo settings being verified against required information with checkmarks"
            features={[
              { icon: ShieldCheck, title: "Output validation", description: "Verify results against schemas, business rules, and source-of-truth data before they're committed downstream." },
              { icon: RefreshCcw, title: "Self-correction", description: "Detect failures and retry, reroute, or escalate — without breaking the workflow or losing context." },
              { icon: Gauge, title: "Confidence scoring", description: "Every step ships with a confidence signal so teams know exactly when to step in and when to let it run." },
              { icon: BarChart3, title: "Quality benchmarks", description: "Track accuracy, completeness, and reliability over time — per workflow, per task, per agent." },
            ]}
          />

          <ProductSection
            eyebrow="Audit"
            heading="Full traceability for every run"
            subheading="Logs, lineage, and accountability for every action Ordo takes — built for regulated environments."
            features={[
              { icon: ScrollText, title: "Detailed run logs", description: "Capture inputs, decisions, tool calls, and outputs as a structured event timeline you can search and replay." },
              { icon: History, title: "Replayable workflows", description: "Re-run any execution from any point — with the same inputs, conditions, and surrounding context." },
              { icon: Lock, title: "Permissions & controls", description: "Scope what each agent can read, write, or execute — by tool, dataset, or environment." },
              { icon: FileCheck2, title: "Compliance-ready", description: "Built-in audit trails, retention controls, and exports designed for security and compliance reviews." },
            ]}
          />
        </div>

        <Security />
        <News />
      </main>
      <Footer />
    </div>
  );
}
