import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScheduleDemoDialog } from "@/components/ScheduleDemoDialog";
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

        <div className="py-20 sm:py-24 md:py-32">
          <ProductSection />
        </div>

        <Security />
        <News />
      </main>
      <Footer />
      <ScheduleDemoDialog />
    </div>
  );
}
