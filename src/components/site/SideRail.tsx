import { useEffect, useState } from "react";
import { SECTIONS } from "./site-data";

export function SideRail() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0px -30% 0px" },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 md:flex"
    >
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-label={s.label}
            className="group flex items-center justify-end gap-3"
          >
            <span
              className={`whitespace-nowrap text-[11px] font-medium uppercase tracking-widest transition-all duration-300 ${
                isActive
                  ? "text-brand-green opacity-100"
                  : "translate-x-2 text-white/60 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`h-[2px] rounded-full transition-all duration-500 ${
                isActive
                  ? "brand-gradient-bg w-10 shadow-[0_0_14px_2px_color-mix(in_oklab,var(--brand-green)_60%,transparent)]"
                  : "w-4 bg-white/35 group-hover:w-7 group-hover:bg-brand-teal"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
