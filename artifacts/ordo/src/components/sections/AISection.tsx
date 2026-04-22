import { motion } from "framer-motion";

export function AISection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-6 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-xl"
          >
            <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
              Execution Engine
            </div>
            <h2 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] mb-6 md:mb-8">
              AI built to do the work.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 md:mb-10">
              <span className="relative inline-block">
                <span className="relative z-10">Ordo's agents</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 14"
                  preserveAspectRatio="none"
                  className="absolute left-0 right-0 -bottom-2 w-full h-[10px] sm:h-[12px] pointer-events-none text-[#E76F2C]"
                >
                  <path
                    d="M3 8 C 40 2, 90 12, 130 6 S 200 4, 217 9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              go beyond reasoning. They take instructions, execute across your tools, verify the output, and keep a full audit trail of everything they touch.
            </p>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors text-sm font-medium">
              <span>Discover Ordo AI</span>
              <span className="text-muted-foreground">›</span>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full flex justify-center lg:justify-end"
          >
            <div
              className="relative w-full max-w-[480px] aspect-square rounded-[32px] overflow-hidden shadow-2xl border border-border/50 bg-[#EFEDE6] bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: "url('/images/ai-mockup.png')" }}
              role="img"
              aria-label="Ordo AI workflow interface"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
