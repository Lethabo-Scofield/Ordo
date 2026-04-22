import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full h-[100svh] min-h-[700px] flex items-end pb-32 pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.png" 
          alt="Sunrise landscape" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <a href="#" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/10 hover:bg-foreground/15 backdrop-blur-sm transition-colors border border-foreground/5 text-sm font-medium">
            <span>Introducing Ordo — AI execution for business</span>
            <span className="text-muted-foreground ml-1">›</span>
          </a>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-[88px] leading-[1.05] tracking-[-0.02em] font-semibold text-foreground mb-6"
        >
          Where AI actually<br />gets work done
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Meet Ordo — the AI-powered execution system that interprets instructions, runs workflows across your tools, and verifies the results.
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
    </section>
  );
}
