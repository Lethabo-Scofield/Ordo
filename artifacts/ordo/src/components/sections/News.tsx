import { motion } from "framer-motion";

export function News() {
  const articles = [
    {
      title: "Agentic AI strategy: from pilots to production fabric",
      source: "Deloitte Insights",
      category: "Tech Trends 2026",
      time: "12 min read",
      image: "/images/news-1.png",
      href: "https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends/2026/agentic-ai-strategy.html",
    },
    {
      title: "Your AI agent needs an audit trail, not just a guardrail",
      source: "Ian Loe, Medium",
      category: "Governance",
      time: "9 min read",
      image: "/images/news-2.png",
      href: "https://medium.com/@ianloe/your-ai-agent-needs-an-audit-trail-not-just-a-guardrail-6a41de67ae75",
    },
    {
      title: "Enterprise agentic AI in 2026: trust, flexibility, and vendor lock-in",
      source: "Kai Waehner",
      category: "Industry",
      time: "15 min read",
      image: "/images/news-3.png",
      href: "https://www.kai-waehner.de/blog/2026/04/06/enterprise-agentic-ai-landscape-2026-trust-flexibility-and-vendor-lock-in/",
    },
  ];

  return (
    <section className="py-20 sm:py-24 md:py-32 px-5 sm:px-6 border-t border-border/50">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em]"
          >
            News
          </motion.h2>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
          >
            <span>See more</span>
            <span className="text-muted-foreground">›</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group flex flex-col gap-6"
            >
              <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden bg-foreground/5 border border-border/40">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                  <span>{article.category}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{article.time}</span>
                </div>
                <h3 className="text-xl font-semibold leading-snug group-hover:text-muted-foreground transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground">{article.source}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
