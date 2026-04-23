import { useEffect, useState } from "react";
import { ASSETS, MEMBERSHIP_URL } from "@/data/site";

const navLinks = [
  { label: "Om oss", href: "#om-oss" },
  { label: "Poddfestivalen", href: "#poddfestivalen" },
  { label: "Artiklar", href: "#artiklar" },
  { label: "Kontakt", href: "#kontakt" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-[#0F0F0F]/92 backdrop-blur-md border-b border-[#F4F3EF]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="header-logo"
          className="flex items-center gap-3"
          aria-label="Galdem A Talk Förening — till startsidan"
        >
          <img
            src={ASSETS.logo}
            alt="Galdem A Talk Förening"
            className="h-10 md:h-12 w-auto"
          />
          <span className="hidden sm:block text-[#F4F3EF] font-sub font-bold uppercase tracking-[0.16em] text-[11px] leading-tight">
            Galdem A Talk
            <br />
            <span className="opacity-60 font-normal tracking-[0.24em]">Förening</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Huvudmeny">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.href.replace("#", "")}`}
              className="text-[#F4F3EF] font-sub text-[13px] uppercase tracking-[0.14em] hover:text-[#A7B1E0] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={MEMBERSHIP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-become-member-btn"
            className="btn-paper"
          >
            Bli medlem
          </a>
        </nav>

        <button
          type="button"
          aria-label="Öppna meny"
          aria-expanded={open}
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center gap-[5px] p-2"
        >
          <span className={`w-7 h-[2px] bg-[#F4F3EF] transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`w-7 h-[2px] bg-[#F4F3EF] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`w-7 h-[2px] bg-[#F4F3EF] transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div
          data-testid="mobile-menu-panel"
          className="md:hidden bg-[#0F0F0F] border-t border-[#F4F3EF]/10"
        >
          <div className="px-5 py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${l.href.replace("#", "")}`}
                className="text-[#F4F3EF] font-display text-3xl uppercase tracking-wide"
              >
                {l.label}
              </a>
            ))}
            <a
              href={MEMBERSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-become-member-btn"
              className="btn-paper mt-2 self-start"
            >
              Bli medlem
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
