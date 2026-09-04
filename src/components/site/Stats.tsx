import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Reveal } from "./Reveal";

const STATS = [
  { value: 48, suffix: "+", label: "Projects Completed" },
  { value: 35, suffix: "+", label: "Satisfied Clients" },
  { value: 6, suffix: "", label: "Years Coding" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="brand-gradient-text font-display text-5xl font-extrabold sm:text-6xl">
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section id="stats" className="relative bg-ink py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.12} className="px-6 py-10 text-center">
              <Counter to={s.value} suffix={s.suffix} />
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.25em] text-white/55">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
