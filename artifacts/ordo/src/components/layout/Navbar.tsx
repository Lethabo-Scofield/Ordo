import { motion } from "framer-motion";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { openDemoDialog } from "@/components/demo/ScheduleDemoDialog";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-border/50"
            : "bg-transparent border-b border-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center group shrink-0">
            <img
              src="/images/logo.png"
              alt="Ordo"
              className="h-8 sm:h-9 md:h-10 w-auto select-none"
              draggable={false}
            />
          </Link>

          <div className="flex items-center">
            <button
              onClick={openDemoDialog}
              aria-label="Schedule a demo"
              className="bg-foreground text-background px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-sm font-medium hover:bg-foreground/90 transition-colors inline-flex items-center gap-2 justify-center whitespace-nowrap"
            >
              <span className="sm:hidden">Book demo</span>
              <span className="hidden sm:inline">Schedule a demo</span>
            </button>
          </div>
        </div>
      </motion.header>
    </>
  );
}
