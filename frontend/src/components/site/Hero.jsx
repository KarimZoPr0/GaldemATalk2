import { ASSETS, MEMBERSHIP_URL } from "@/data/site";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full overflow-hidden grain bg-[#0F0F0F] text-[#F4F3EF]"
    >
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${ASSETS.heroBg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          filter: "grayscale(15%) contrast(1.05)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.35) 35%, rgba(15,15,15,0.85) 100%)",
        }}
      />

      {/* Top ticker */}
      <div className="relative z-10 border-b border-[#F4F3EF]/15 pt-20 md:pt-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-3 flex flex-wrap items-center gap-x-6 gap-y-2 font-sub text-[11px] uppercase tracking-[0.22em]">
          <span className="ticker-num text-[#A7B1E0]">Sedan 2023</span>
          <span className="opacity-60">/</span>
          <span>Husby — Stockholm</span>
          <span className="opacity-60">/</span>
          <span>Representation · Inkludering · Systerskap</span>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-24 md:pb-36">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-9">
            <p
              data-testid="hero-eyebrow"
              className="font-sub uppercase tracking-[0.26em] text-[12px] text-[#A7B1E0] mb-6"
            >
              Husby — Stockholm — sedan 2023
            </p>

            <h1
              data-testid="hero-title"
              className="font-display uppercase leading-[0.82] text-[clamp(3.5rem,12vw,12rem)] tracking-tight"
            >
              Galdem
              <br />
              <span className="inline-block relative">
                <span className="relative z-10">A Talk</span>
                <span
                  aria-hidden
                  className="absolute left-0 bottom-[0.12em] h-[0.18em] w-full bg-[#5C6BC0] z-0"
                />
              </span>
              <br />
              <span className="text-[#A7B1E0]">Förening.</span>
            </h1>
          </div>

          <div className="col-span-12 md:col-span-3 md:pt-8">
            <div className="border-l-2 border-[#F4F3EF]/30 pl-5 md:pl-6">
              <p className="font-body text-[15px] md:text-[16px] leading-relaxed text-[#F4F3EF]/85 max-w-sm">
                En kultur- och samhällsinriktad förening för systerskap,
                organisering och röster från förorten. Vi är grundarna av
                Sveriges <em className="text-[#A7B1E0] not-italic font-medium">första poddfestival</em>.
              </p>
            </div>
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-14 md:mt-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-wrap gap-4">
            <a
              href={MEMBERSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-become-member-btn"
              className="btn-paper"
            >
              Bli medlem
              <ArrowUpRight size={18} strokeWidth={2.4} />
            </a>
            <a
              href="#om-oss"
              data-testid="hero-scroll-about-btn"
              className="inline-flex items-center gap-2 px-6 py-4 border-2 border-[#F4F3EF]/60 text-[#F4F3EF] font-sub uppercase tracking-[0.12em] text-[13px] hover:bg-[#F4F3EF] hover:text-[#0F0F0F] transition-colors"
            >
              Läs om oss
              <ArrowDownRight size={18} strokeWidth={2.4} />
            </a>
          </div>

          <div className="flex items-end gap-6 md:gap-10">
            <Stat n="16+" label="Åldersgrupp" />
            <Stat n="01" label="Sveriges första poddfestival" />
          </div>
        </div>
      </div>

      {/* Edge caption */}
      <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right z-10">
        <span className="font-sub uppercase tracking-[0.3em] text-[10px] text-[#F4F3EF]/60">
          Scroll ↓ Poddfestival edition
        </span>
      </div>
    </section>
  );
};

const Stat = ({ n, label }) => (
  <div className="flex flex-col">
    <span className="font-display text-3xl md:text-5xl leading-none text-[#F4F3EF]">{n}</span>
    <span className="font-sub uppercase tracking-[0.18em] text-[10px] md:text-[11px] text-[#F4F3EF]/60 mt-2 max-w-[120px]">
      {label}
    </span>
  </div>
);
