import { Check } from "lucide-react";
import { ABOUT_IMAGE_MAIN, ABOUT_IMAGE_SMALL } from "@/lib/site-images";
import { Reveal } from "./Reveal";

const POINTS = [
  "Transparency at every stage of the project",
  "Productivity gains you can measure",
  "Innovation grounded in local realities",
  "Support that continues after launch",
];

export function About() {
  return (
    <section id="about" className="relative bg-ink py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            {ABOUT_IMAGE_MAIN && (
              <img
                src={ABOUT_IMAGE_MAIN}
                alt="The Iwacu Tech team working together"
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-4/5 w-full rounded-3xl object-cover ring-1 ring-white/10"
              />
            )}
            {ABOUT_IMAGE_SMALL && (
              <img
                src={ABOUT_IMAGE_SMALL}
                alt="Building a mobile application"
                loading="lazy"
                width={1024}
                height={768}
                className="absolute -bottom-8 -right-4 hidden w-1/2 rounded-2xl object-cover shadow-2xl ring-4 ring-ink sm:block"
              />
            )}
            <div className="brand-gradient-bg absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-3xl opacity-40 blur-2xl" />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-green">About us</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            A Burundian tech company solving everyday problems
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/65">
            Iwacu Tech designs and builds apps, websites and digital systems for businesses,
            institutions and entrepreneurs. We start from the problem people actually face every
            day, then engineer the simplest technology that removes it — with transparency,
            productivity and innovation guiding the work.
          </p>
          <ul className="mt-8 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-white/80">
                <span className="brand-gradient-bg mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-ink">
                  <Check size={13} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
