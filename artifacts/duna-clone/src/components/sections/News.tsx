import { motion } from "framer-motion";

export function News() {
  const articles = [
    {
      title: "The Business Identity Network: CapitalG's thesis on Duna",
      category: "Media",
      time: "7 min read",
      image: "/images/news-1.png"
    },
    {
      title: "Building an Identity system of record in times of AI",
      category: "Product",
      time: "7 min read",
      image: "/images/news-2.png"
    },
    {
      title: "Duna Conversations with Stripe COO Claire Hughes Johnson",
      category: "Conversations",
      time: "19 min watch",
      image: "/images/news-3.png"
    }
  ];

  return (
    <section className="py-32 px-6 border-t border-border/50">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-between items-end mb-12">
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
              href="#"
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
                <h3 className="text-xl font-semibold leading-snug group-hover:text-muted-foreground transition-colors">
                  {article.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
