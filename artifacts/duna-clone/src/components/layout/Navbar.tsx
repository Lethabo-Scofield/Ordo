import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const MAILTO =
  "mailto:scofield@olyxee.com?subject=Schedule%20a%20demo%20with%20Ordo&body=Hi%20Ordo%20team%2C%0A%0AI%27d%20like%20to%20schedule%20a%20demo.%0A%0AName%3A%0ACompany%3A%0APreferred%20time%3A%0A%0AThanks!";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSchedule = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      window.location.href = MAILTO;
      setTimeout(() => setLoading(false), 800);
    }, 900);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-border/50"
            : "bg-transparent border-b border-transparent"
        }`}
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

          <div className="flex items-center">
            <button
              onClick={handleSchedule}
              disabled={loading}
              className="bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors disabled:opacity-90 inline-flex items-center gap-2 min-w-[160px] justify-center"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Opening</span>
                </>
              ) : (
                "Schedule a demo"
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen overlay loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-white/80 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-5">
              <motion.img
                src="/favicon.png"
                alt="Ordo"
                className="w-16 h-16 select-none"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                draggable={false}
              />
              <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Opening your email…</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
