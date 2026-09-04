import { LOGO_IMAGE } from "@/lib/site-images";
import { COMPANY } from "./site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
        {LOGO_IMAGE && (
          <img
            src={LOGO_IMAGE}
            alt="Iwacu Tech logo"
            loading="lazy"
            className="h-10 w-10 rounded-xl object-cover ring-1 ring-white/15"
          />
        )}
        <p className="text-xs text-white/45">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
