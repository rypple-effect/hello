import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Expertise", href: "#expertise" },
  { label: "Workflow", href: "#workflow" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "py-3 bg-background/70 backdrop-blur-md border-b border-border" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-display font-extrabold text-xl tracking-tight">
            Ryan Galaban<span className="text-primary">™</span>
          </span>
          <span className="hidden sm:inline-flex liquid-glass rounded-full px-3 py-1 text-xs text-primary">
            Data Analyst
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="liquid-glass rounded-full px-5 py-2 text-sm text-foreground border border-primary/30 animate-glow-pulse"
          >
            Let&rsquo;s Connect
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M2 6H20M2 11H20M2 16H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden container mt-4 flex flex-col gap-4 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="liquid-glass rounded-full px-5 py-2 text-sm text-center text-foreground border border-primary/30 w-fit"
          >
            Let&rsquo;s Connect
          </a>
        </nav>
      )}
    </header>
  );
}
