import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full bg-background overflow-hidden">
      {/* Background image - kept at its natural aspect so the
          painted white at the bottom blends seamlessly with the
          white section that follows. */}
      <img
        src="/images/hero-new.png"
        alt="Sunrise mountain landscape"
        className="block w-full h-auto select-none pointer-events-none"
        draggable={false}
      />

      {/* Centered content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-[12%]">
        <div className="w-full max-w-[1000px] text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 md:mb-8"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/10 hover:bg-foreground/15 backdrop-blur-sm transition-colors border border-foreground/5 text-sm font-medium"
            >
              <span>Introducing Ordo - AI execution for business</span>
              <span className="text-muted-foreground ml-1">›</span>
            </a>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[1.05] tracking-[-0.02em] font-semibold text-foreground mb-5 md:mb-6"
          >
            Where AI actually<br />gets work done
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
          >
            Meet Ordo - the AI-powered execution system that interprets instructions, runs workflows across your tools, and verifies the results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button className="bg-foreground text-background px-8 py-4 rounded-full text-base font-medium hover:bg-foreground/90 transition-colors shadow-lg">
              Get started
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
