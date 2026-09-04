import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { SOCIALS } from "./site-data";

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.938l-4.83-6.31L5.7 22H2.44l8.02-9.166L1.5 2h7.11l4.366 5.77L18.244 2Zm-1.22 18h1.91L7.06 3.9H5.01l12.014 16.1Z" />
    </svg>
  );
}

const ICONS = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  mail: Mail,
  x: XIcon,
} as const;

export function Socials({ size = 16 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      {SOCIALS.map((s) => {
        const Icon = ICONS[s.icon];
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={s.label}
            className="group relative grid h-9 w-9 place-items-center rounded-full border border-white/25 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:text-ink"
          >
            <span className="brand-gradient-bg absolute inset-0 scale-0 rounded-full opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            <span className="relative">
              <Icon size={size} />
            </span>
          </a>
        );
      })}
    </div>
  );
}
