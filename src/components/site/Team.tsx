import { TEAM_IMAGES } from "@/lib/site-images";
import { TEAM } from "./site-data";
import { Reveal } from "./Reveal";

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function Team() {
  return (
    <section id="team" className="relative bg-ink py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-green">
            Leadership
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl">
            The people behind Iwacu Tech
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {TEAM.map((m, i) => {
            const photo = TEAM_IMAGES[m.key];
            return (
              <Reveal key={m.key} delay={i * 0.1}>
                <figure className="group text-center">
                  <div className="relative mx-auto aspect-square w-full max-w-[190px] overflow-hidden rounded-3xl border border-white/10 bg-ink-soft transition-all duration-500 group-hover:-translate-y-2 group-hover:border-brand-green/50 group-hover:brand-glow">
                    {photo ? (
                      <img
                        src={photo}
                        alt={m.name}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-white/15">
                        <span className="brand-gradient-text font-display text-3xl font-bold">
                          {initials(m.name)}
                        </span>
                        <span className="px-3 text-[10px] uppercase tracking-widest text-white/40">
                          Photo coming soon
                        </span>
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <figcaption className="mt-5">
                    <p className="font-display text-base font-semibold text-white">{m.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-white/45">{m.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
