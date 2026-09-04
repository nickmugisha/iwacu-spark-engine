import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { HERO_IMAGE } from "@/lib/site-images";
import { COMPANY } from "./site-data";
import { Socials } from "./Socials";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden">
      {/* Background picture */}
      {HERO_IMAGE && (
        <img
          src={HERO_IMAGE}
          alt="Software engineers building applications late at night"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      )}
      {/* Colour wash + darkening */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,color-mix(in_oklab,var(--brand-teal)_78%,transparent),color-mix(in_oklab,var(--brand-green)_72%,transparent))] mix-blend-multiply" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/80 via-ink/40 to-ink" />

      <div className="mx-auto w-full max-w-6xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center"
        >
          <Socials />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 34, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "-0.02em" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-6xl font-extrabold uppercase leading-[0.9] text-white sm:text-8xl lg:text-[9rem]"
        >
          Iwacu Tech
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-6 max-w-xl text-xs font-medium uppercase tracking-[0.28em] text-white/85 sm:text-sm"
        >
          {COMPANY.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="brand-gradient-bg rounded-full px-8 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:brand-glow hover:-translate-y-1"
          >
            Start a Project
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-green hover:text-brand-green"
          >
            Our Services
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#stats"
        aria-label="Scroll down"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-brand-green"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
