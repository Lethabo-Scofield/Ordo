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
          className="relative overflow-hidden rounded-[32px] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center border border-white/40 shadow-[0_30px_80px_-30px_rgba(220,90,120,0.35)]"
        >
          {/* Painterly background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/testimonial-bg.png')" }}
            aria-hidden
          />
          {/* Soft readability overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/25 to-transparent"
            aria-hidden
          />

          <div className="relative flex-1">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.3] tracking-tight mb-12 text-foreground drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
              "Ordo turned our backlog of manual operations into a system that runs itself. It's the first AI tool we've actually trusted to do the work - not just describe it."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/80 shadow-md">
                <img
                  src="/images/testimonial-portrait.png"
                  alt="Mira Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-lg text-foreground">Mira Chen</div>
                <div className="text-foreground/75">Head of Operations, Northwind</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
