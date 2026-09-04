import { Rocket, ShieldCheck, Users, Settings2 } from "lucide-react";
import { Reveal } from "./Reveal";

const REASONS = [
  { icon: Rocket, title: "Fast Delivery", text: "Clear milestones and working software in weeks, not seasons." },
  { icon: ShieldCheck, title: "Secure Solutions", text: "Security and data protection built in from the first line of code." },
  { icon: Users, title: "Expert Team", text: "Engineers, designers and strategists working as one small, sharp team." },
  { icon: Settings2, title: "Tailored Approach", text: "No templates. Every solution is shaped around your real workflow." },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative isolate overflow-hidden py-28">
      {/* Smooth teal to green transition, fading into the page on both ends */}
      <div className="brand-gradient-bg absolute inset-0 -z-20 opacity-90" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/45 to-ink" />


      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-green">Why Iwacu Tech</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl">
            Built for people who need it to actually work
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.1}>
              <div className="group h-full rounded-3xl border border-white/15 bg-ink/70 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-brand-green/50 hover:bg-ink/85">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-brand-green/40 text-brand-green transition-all duration-500 group-hover:brand-gradient-bg group-hover:text-ink">
                  <r.icon size={22} />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-white">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
