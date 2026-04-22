import { motion } from "framer-motion";

export function Stats() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-6">
      <div className="max-w-[1280px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] mb-12 md:mb-20 text-center"
        >
          Designed to execute. Built to scale.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 lg:gap-12 mb-14 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-[20px] sm:rounded-[24px] border border-border/40 shadow-sm"
          >
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-3 sm:mb-4 text-foreground">10x</div>
            <div className="text-lg font-medium text-muted-foreground">Faster execution</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-[20px] sm:rounded-[24px] border border-border/40 shadow-sm"
          >
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-3 sm:mb-4 text-foreground">92%</div>
            <div className="text-lg font-medium text-muted-foreground">Tasks completed end-to-end</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-[20px] sm:rounded-[24px] border border-border/40 shadow-sm"
          >
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-3 sm:mb-4 text-foreground">5x</div>
            <div className="text-lg font-medium text-muted-foreground">Team productivity</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Run real work</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ordo doesn't just suggest - it executes. Connect your tools and let AI complete tasks across your stack, end-to-end.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Reliable by design</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every workflow is verified, logged, and auditable - built for environments where consistency and control matter.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4">Reduce manual work</h3>
            <p className="text-muted-foreground leading-relaxed">
              Eliminate repetitive operations, handoffs, and copy-paste between systems by letting Ordo orchestrate the work.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
