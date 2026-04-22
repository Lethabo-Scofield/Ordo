import { motion } from "framer-motion";

export function Stats() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[1280px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] mb-20 text-center"
        >
          Designed to convert. Built to scale.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center text-center p-8 bg-white rounded-[24px] border border-border/40 shadow-sm"
          >
            <div className="text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-foreground">10.6x</div>
            <div className="text-lg font-medium text-muted-foreground">Faster onboarding</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center p-8 bg-white rounded-[24px] border border-border/40 shadow-sm"
          >
            <div className="text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-foreground">37%</div>
            <div className="text-lg font-medium text-muted-foreground">Conversion increase</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center text-center p-8 bg-white rounded-[24px] border border-border/40 shadow-sm"
          >
            <div className="text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-foreground">4.8x</div>
            <div className="text-lg font-medium text-muted-foreground">Analyst efficiency</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Drive revenue</h3>
            <p className="text-muted-foreground leading-relaxed">
              Duna's platform is built to help enterprises grow. Optimised to eliminate friction and instantly deliver higher conversion.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Future-proof compliance</h3>
            <p className="text-muted-foreground leading-relaxed">
              A powerful policy engine translates KYC, KYB and AML into code - enabling the industry's most detailed audit trails.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4">Reduce costs</h3>
            <p className="text-muted-foreground leading-relaxed">
              Eliminate manual checks, endless emails and lengthy reviews - by automating manual work with compliant, auditable AI.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
