import { Code2, Globe, Smartphone, Lightbulb, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    icon: Code2,
    title: "Custom Software",
    text: "Internal tools, management systems and automation built exactly around how your organisation works.",
  },
  {
    icon: Globe,
    title: "Web Development",
    text: "Fast, secure and beautiful websites and web platforms that work on any screen and any connection.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    text: "Android and cross-platform applications that put your service directly in your customers' hands.",
  },
  {
    icon: Lightbulb,
    title: "Consulting",
    text: "Guidance on digital strategy, architecture and the right technology choices before you invest.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-ink py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-green">
            What we do
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            Solutions for everyday problems
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-ink-soft p-7 transition-all duration-500 hover:-translate-y-2 hover:border-brand-green/40 hover:brand-glow">
                <div className="brand-gradient-bg absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                <span className="brand-gradient-bg grid h-12 w-12 place-items-center rounded-2xl text-ink transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <s.icon size={22} />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{s.text}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green"
                >
                  Learn more
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
