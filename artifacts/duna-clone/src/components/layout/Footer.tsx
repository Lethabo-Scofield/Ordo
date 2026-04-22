import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="relative pt-32 pb-12 px-6 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/footer-bg.png')" }}
        aria-hidden="true"
      />
      {/* Soft overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/40 to-background/10" aria-hidden="true" />
      <div className="relative max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-24">
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
            <div className="mt-12 md:mt-0 text-sm text-muted-foreground">
              © 2026 Ordo
            </div>
          </div>
          
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-sm">Product</h4>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Interpret</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Execute</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Verify</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Audit</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-sm">Company</h4>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">News</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-sm">Resources</h4>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Trust</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Security</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Help Center</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-sm">Legal</h4>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookies</a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">
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
            <a href="mailto:hello@ordo.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">hello@ordo.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
