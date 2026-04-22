import { motion } from "framer-motion";
import { openDemoDialog } from "@/components/ScheduleDemoDialog";

export function Hero() {
  return (
    <section className="relative w-full bg-background overflow-hidden">
      {/* MOBILE: image becomes a cover background of a tall section so
          content always fits comfortably. */}
      <div
        className="md:hidden relative w-full min-h-[100svh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-new.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-background" />
        <div className="relative flex flex-col items-center justify-end min-h-[100svh] px-5 pt-28 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-5"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-foreground/10 hover:bg-foreground/15 backdrop-blur-sm transition-colors border border-foreground/5 text-[13px] font-medium"
            >
              <span className="truncate max-w-[260px]">Introducing Ordo - AI execution for business</span>
              <span className="text-muted-foreground">›</span>
            </a>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[40px] xs:text-5xl leading-[1.05] tracking-[-0.02em] font-semibold text-foreground mb-5"
          >
            Where AI actually
            <br />
            gets work done
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base text-foreground/75 max-w-md mx-auto mb-8 leading-relaxed"
          >
            Meet Ordo - the AI-powered execution system that interprets instructions, executes workflows across your tools, verifies every output, and keeps a full audit trail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button
              onClick={openDemoDialog}
              className="bg-foreground text-background px-7 py-3.5 rounded-full text-base font-medium hover:bg-foreground/90 transition-colors shadow-lg"
            >
              Get started
            </button>
          </motion.div>
        </div>
      </div>

      {/* DESKTOP / TABLET: keep the natural-aspect painterly image so the
          painted white at the bottom blends seamlessly with the next section. */}
      <div className="hidden md:block relative">
        <img
          src="/images/hero-new.png"
          alt="Sunrise mountain landscape"
          className="block w-full h-auto select-none pointer-events-none"
          draggable={false}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-[12%]">
          <div className="w-full max-w-[1000px] text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
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
              className="text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[1.05] tracking-[-0.02em] font-semibold text-foreground mb-6"
            >
              Where AI actually<br />gets work done
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Meet Ordo - the AI-powered execution system that interprets instructions, executes workflows across your tools, verifies every output, and keeps a full audit trail.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button
                onClick={openDemoDialog}
                className="bg-foreground text-background px-8 py-4 rounded-full text-base font-medium hover:bg-foreground/90 transition-colors shadow-lg"
              >
                Get started
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
