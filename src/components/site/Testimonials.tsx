import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const QUOTES = [
  {
    text: "They understood our stock problem in one meeting and delivered a system our staff actually enjoy using.",
    name: "Aline N.",
    role: "Operations Manager, Retail Group",
  },
  {
    text: "Our app was live in six weeks and has not gone down once. Communication was clear the whole way.",
    name: "Jean-Claude M.",
    role: "Founder, Delivery Startup",
  },
  {
    text: "Practical advice, fair pricing and a team that keeps answering long after the invoice was paid.",
    name: "Sandrine K.",
    role: "Director, Local NGO",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-ink py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-green">
            Testimonials
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl">
            What our clients say
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.12}>
              <blockquote className="group relative h-full rounded-3xl border border-white/10 bg-ink-soft p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand-teal/40">
                <Quote
                  size={30}
                  className="text-brand-green/40 transition-colors duration-500 group-hover:text-brand-green"
                />
                <p className="mt-5 text-sm leading-relaxed text-white/75">"{q.text}"</p>
                <footer className="mt-7 border-t border-white/10 pt-5">
                  <p className="text-sm font-semibold text-white">{q.name}</p>
                  <p className="text-xs uppercase tracking-widest text-white/45">{q.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
