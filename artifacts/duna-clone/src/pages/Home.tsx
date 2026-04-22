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
            eyebrow="Onboard"
            heading="Drive revenues with Duna Onboard"
            subheading="High-converting onboarding journeys, no code required."
            features={[
              { title: "20+ KYB modules", description: "Configure every data field to fit your enterprise needs – from ID&V to AML, KYC, and more." },
              { title: "Optimised for conversion", description: "Benefit from data pre-fills, dynamic user interfaces, smart reminders, and intelligent optimisations." },
              { title: "First-time-right data collection", description: "Adapt data collection in real-time based on risk scoring, compliance policies and business attributes." },
              { title: "Deep localization", description: "210+ local registries, 7+ languages, UBO registers, local VAT, and more – ready out of the box." }
            ]}
          />
          
          <ProductSection 
            eyebrow="Decide"
            heading="Save time with automated case management"
            subheading="Increase compliance quality and cut costs — by reducing manual work."
            features={[
              { title: "Automated tasks", description: "Translate compliance policies into distinct tasks, automate with AI technologies, and auto/approve cases." },
              { title: "Increased analyst efficiency", description: "Assign, escalate, and resolve cases – with built-in prioritization, collaboration, 4-eye reviews, and risk scoring." },
              { title: "In-platform messaging", description: "Stop email ping-pong with customers. Keep every interaction secure, centralized, and fully auditable." },
              { title: "Auditability", description: "Log every interaction, decision, and policy change as a traceable event – enabling comprehensive audit trails." }
            ]}
          />
          
          <ProductSection 
            eyebrow="Lifecycle"
            heading="Ensure compliance at every stage"
            subheading="Monitor customers throughout the lifecycle and avoid backlogs due to periodic reviews."
            features={[
              { title: "Daily monitoring", description: "Guarantee ongoing compliance with daily screening (PEP, sanctions, media) and discrepancy monitoring." },
              { title: "Periodic reviews", description: "Automate the full re-KYC lifecycle with Duna's integrated platform: from policy to data collection and review." },
              { title: "Policy management", description: "Roll out policy updates and collect only what's needed – across products, partners, and countries." },
              { title: "Legal agreements", description: "Manage contract and ToS acceptance in one flow – with legal representatives verified prior to signature." }
            ]}
          />
          
          <ProductSection 
            eyebrow="Data platform"
            heading="Unlock data orchestration with intelligence"
            subheading="Power compliance decisions, cut integration costs, and improve conversion."
            features={[
              { title: "Extensive partner network", description: "Leverage one integration to leading KYC technologies, and global and local data providers." },
              { title: "Smart routing", description: "Automatically route to the optimal data providers, based on performance, costs and coverage." },
              { title: "Low data quality resolved", description: "Bridge challenges with fragmented data. Prefill what's available, and automatically collect what's missing." },
              { title: "Built-in redundancy", description: "Avoid losing customers – with fallback procedures across multiple third-party integrations." }
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
