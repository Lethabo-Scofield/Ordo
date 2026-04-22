import { motion } from "framer-motion";

export function Testimonial() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[1280px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] mb-6">
            Trusted by operators
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Run your business operations like the world's best teams - without scaling headcount linearly with the work.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#FAF5F0] to-[#FCE8D5]/50 rounded-[32px] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center border border-[#F5EBE1]"
        >
          <div className="flex-1">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.3] tracking-tight mb-12 text-foreground/90">
              "Ordo turned our backlog of manual operations into a system that runs itself. It's the first AI tool we've actually trusted to do the work - not just describe it."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/50 shadow-sm">
                <img 
                  src="/images/testimonial-portrait.png" 
                  alt="Mira Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-lg text-foreground">Mira Chen</div>
                <div className="text-muted-foreground">Head of Operations, Northwind</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
