import { type ReactNode } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background selection:bg-foreground selection:text-background">
      <Navbar />
      <main className="pt-32 sm:pt-40 pb-20 sm:pb-28 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <span>‹</span>
            <span>Back to home</span>
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.02em] leading-[1.05] mb-4">
            {title}
          </h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: {updated}</p>
          <article className="prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-[-0.01em] prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-p:text-foreground/80 prose-p:leading-relaxed prose-li:text-foreground/80 prose-a:text-foreground prose-a:underline-offset-4">
            {children}
          </article>
          <div className="mt-16 pt-8 border-t border-border/50 text-sm text-muted-foreground">
            Ordo is operated by <span className="font-medium text-foreground">Olyxee (Pty) Ltd</span>.
            For questions about this document, contact{" "}
            <a
              href="mailto:legal@ordo.com"
              className="font-medium text-foreground hover:text-foreground/70 transition-colors underline-offset-4 hover:underline"
            >
              legal@ordo.com
            </a>
            .
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
