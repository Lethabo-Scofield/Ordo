import { motion } from "framer-motion";

export function LogoStrip() {
  const logos = ["Linear", "Notion", "Slack", "Stripe", "HubSpot", "Salesforce", "Zendesk", "Asana"];
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-20 border-b border-border/50 bg-background overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-12">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted-foreground">
          Built for teams where execution matters
        </p>
      </div>

      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-16 md:gap-24 items-center px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {repeatedLogos.map((logo, i) => (
            <div key={i} className="text-2xl md:text-3xl font-bold text-muted-foreground/40 tracking-tight">
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
