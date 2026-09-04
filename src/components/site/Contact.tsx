import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import { COMPANY } from "./site-data";
import { Reveal } from "./Reveal";
import { Socials } from "./Socials";

export function Contact() {
  const details = [
    { icon: Phone, label: "Phone", value: COMPANY.phones.join(" · ") },
    { icon: Mail, label: "Email", value: COMPANY.email },
    { icon: Clock, label: "Hours", value: COMPANY.hours },
    { icon: MapPin, label: "Location", value: COMPANY.location },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="brand-gradient-bg absolute inset-0 -z-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/75 to-ink" />

      <div className="mx-auto max-w-5xl px-5 text-center">
        <Reveal>
          <h2 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl">
            Ready to start?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/70">
            Tell us about the problem you want solved. We reply fast, any time of day.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank"
            rel="noreferrer noopener"
            className="brand-gradient-bg mt-10 inline-flex items-center gap-2.5 rounded-full px-9 py-4 text-sm font-bold text-ink transition-all duration-300 hover:brand-glow hover:-translate-y-1"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((d, i) => (
            <Reveal key={d.label} delay={0.15 + i * 0.08}>
              <div className="group h-full rounded-2xl border border-white/12 bg-ink/60 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-green/50">
                <d.icon
                  size={20}
                  className="mx-auto text-brand-green transition-transform duration-500 group-hover:scale-125"
                />
                <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-white/40">
                  {d.label}
                </p>
                <p className="mt-2 break-words text-sm font-medium text-white">{d.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14 flex justify-center">
            <Socials />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
