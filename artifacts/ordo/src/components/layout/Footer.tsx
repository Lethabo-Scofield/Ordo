import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="relative pt-20 sm:pt-24 md:pt-32 pb-10 md:pb-12 px-5 sm:px-6 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/footer-bg.png')" }}
        aria-hidden="true"
      />
      {/* Soft overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/40 to-background/10" aria-hidden="true" />
      <div className="relative max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-8 mb-16 md:mb-24">
          <div className="md:col-span-4 lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-6">
                <img
                  src="/images/logo.png"
                  alt="Ordo"
                  className="h-12 w-auto select-none"
                  draggable={false}
                />
              </div>
            </div>
            <div className="mt-12 md:mt-0 text-sm text-foreground">
              © 2026 Ordo. A product of{" "}
              <a
                href="https://olyxee.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-foreground/70 transition-colors underline-offset-4 hover:underline"
              >
                Olyxee (Pty) Ltd
              </a>
              .
            </div>
          </div>
          
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-sm">Product</h4>
              <a href="#" className="text-sm text-foreground hover:text-foreground/70 transition-colors">Interpret</a>
              <a href="#" className="text-sm text-foreground hover:text-foreground/70 transition-colors">Execute</a>
              <a href="#" className="text-sm text-foreground hover:text-foreground/70 transition-colors">Verify</a>
              <a href="#" className="text-sm text-foreground hover:text-foreground/70 transition-colors">Audit</a>
              <a href="#" className="text-sm text-foreground hover:text-foreground/70 transition-colors">AI</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-sm">Company</h4>
              <a href="#" className="text-sm text-foreground hover:text-foreground/70 transition-colors">About</a>
              <a href="#" className="text-sm text-foreground hover:text-foreground/70 transition-colors">Careers</a>
              <a href="#" className="text-sm text-foreground hover:text-foreground/70 transition-colors">News</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-sm">Resources</h4>
              <Link href="/trust" className="text-sm text-foreground hover:text-foreground/70 transition-colors">Trust</Link>
              <Link href="/security" className="text-sm text-foreground hover:text-foreground/70 transition-colors">Security</Link>
              <Link href="/documentation" className="text-sm text-foreground hover:text-foreground/70 transition-colors">Documentation</Link>
              <Link href="/help" className="text-sm text-foreground hover:text-foreground/70 transition-colors">Help Center</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-sm">Legal</h4>
              <Link href="/privacy" className="text-sm text-foreground hover:text-foreground/70 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-sm text-foreground hover:text-foreground/70 transition-colors">Terms</Link>
              <Link href="/cookies" className="text-sm text-foreground hover:text-foreground/70 transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <a href="#" className="text-foreground hover:text-foreground/70 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="text-foreground hover:text-foreground/70 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <span className="text-sm text-foreground">
              Developed by{" "}
              <a
                href="https://olyxee.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-foreground/70 transition-colors underline-offset-4 hover:underline"
              >
                Olyxee
              </a>
            </span>
            <a href="mailto:hello@ordo.com" className="text-sm text-foreground hover:text-foreground/70 transition-colors break-all">hello@ordo.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
