import { motion } from "framer-motion";

export function AISection() {
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-xl"
          >
            <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
              Artificial Intelligence
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] mb-8">
              AI built for compliance.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              Duna's AI agents multiply your output, not your headcount. Accelerate document verification, periodic reviews, automated acceptance, and more.
            </p>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors text-sm font-medium">
              <span>Discover Duna AI</span>
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
            <div className="relative w-full max-w-[400px] aspect-[9/16] rounded-[32px] overflow-hidden shadow-2xl border border-border/50">
              <img 
                src="/images/ai-mockup.png" 
                alt="Duna AI Interface" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
