import { motion } from "framer-motion";

export function Security() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-6">
      <div className="max-w-[1280px] mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 bg-foreground/5 rounded-2xl flex items-center justify-center mb-8"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/60">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] mb-6"
        >
          Safe and secure
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
        >
          Your trust is our foundation. Ordo is designed with a deep commitment to data privacy, access control, and operational security. Visit our trust page and security center to learn more.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors text-sm font-medium">
            <span>Explore security center</span>
            <span className="text-muted-foreground">›</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
