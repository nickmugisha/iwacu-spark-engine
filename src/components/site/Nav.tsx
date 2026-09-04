import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { LOGO_IMAGE } from "@/lib/site-images";
import { COMPANY, NAV_LINKS } from "./site-data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl py-2"
          : "border-b border-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a href="#home" className="group flex items-center gap-3">
          {LOGO_IMAGE && (
            <img
              src={LOGO_IMAGE}
              alt="Iwacu Tech logo"
              className="h-11 w-11 rounded-xl object-cover ring-1 ring-white/15 transition-transform duration-500 group-hover:scale-110 group-hover:ring-brand-green/60"
            />
          )}
          <span className="font-display text-lg font-bold tracking-tight text-white">
            {COMPANY.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="group relative text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {l.label}
              <span className="brand-gradient-bg absolute -bottom-1.5 left-0 h-0.5 w-full origin-right scale-x-0 rounded-full transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="brand-gradient-bg hidden rounded-full px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:brand-glow hover:-translate-y-0.5 sm:inline-block"
          >
            Get a Quote
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl border border-white/15 p-2 text-white transition-colors hover:border-brand-green/60 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mx-5 mt-3 flex flex-col gap-1 rounded-2xl border border-white/10 bg-ink-soft/95 p-3 backdrop-blur-xl">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-brand-green"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="brand-gradient-bg mt-1 rounded-xl px-4 py-3 text-center text-sm font-semibold text-ink"
              >
                Get a Quote
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
