import { motion } from "framer-motion";

interface Logo {
  name: string;
  slug: string;
}

const logos: Logo[] = [
  { name: "Linear", slug: "linear" },
  { name: "Notion", slug: "notion" },
  { name: "Slack", slug: "slack" },
  { name: "Stripe", slug: "stripe" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Airtable", slug: "airtable" },
  { name: "Jira", slug: "jira" },
  { name: "Zendesk", slug: "zendesk" },
  { name: "Asana", slug: "asana" },
  { name: "Figma", slug: "figma" },
  { name: "GitHub", slug: "github" },
  { name: "Intercom", slug: "intercom" },
  { name: "Zapier", slug: "zapier" },
  { name: "Mailchimp", slug: "mailchimp" },
];

export function LogoStrip() {
  const repeated = [...logos, ...logos, ...logos];

  return (
    <section className="py-14 sm:py-16 md:py-20 border-b border-border/50 bg-background overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 mb-8 md:mb-12">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted-foreground">
          Built for teams where execution matters
        </p>
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex gap-10 sm:gap-16 md:gap-20 items-center px-6 sm:px-8 shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {repeated.map((logo, i) => (
              <div
                key={`${logo.slug}-${i}`}
                className="flex items-center gap-2 sm:gap-3 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
                title={logo.name}
              >
                <img
                  src={`https://cdn.simpleicons.org/${logo.slug}`}
                  alt={logo.name}
                  className="h-5 sm:h-6 md:h-7 w-auto select-none"
                  loading="lazy"
                  draggable={false}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <span className="text-base sm:text-xl md:text-2xl font-semibold text-foreground/80 tracking-tight">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
