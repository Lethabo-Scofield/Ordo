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
        <Link href="/" className="flex items-center gap-2 group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground transition-transform group-hover:rotate-90 duration-500">
            <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="currentColor"/>
          </svg>
          <span className="font-bold text-xl tracking-tight">DUNA</span>
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
