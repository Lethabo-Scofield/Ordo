import { motion } from "framer-motion";
import { Link } from "wouter";

export function Navbar() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-white/80 backdrop-blur-md border-b border-transparent hover:border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <img
            src="/images/logo.png"
            alt="Ordo"
            className="h-9 md:h-10 w-auto select-none"
            draggable={false}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">Product</a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">Customers</a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">Company</a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">Resources</a>
        </nav>

        <div className="flex items-center">
          <button className="bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors">
            Schedule a demo
          </button>
        </div>
      </div>
    </motion.header>
  );
}
