import { ASSETS, PODDFESTIVALEN_URL } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export const Poddfestivalen = () => {
  return (
    <section
      id="poddfestivalen"
      data-testid="poddfest-section"
      className="relative bg-[#0F0F0F] text-[#F4F3EF] py-24 md:py-36 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 grain pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 z-10">
        {/* Section tag */}
        <div className="flex items-baseline gap-4 mb-10 md:mb-14 pt-6" style={{borderTop: "2px solid #F4F3EF"}}>
          <span className="font-sub uppercase tracking-[0.25em] text-[11px]">
            Poddfestivalen
          </span>
          <span className="flex-1 h-px bg-[#F4F3EF]/25" />
          <span className="font-sub uppercase tracking-[0.25em] text-[11px] opacity-60">
            Husby, Stockholm
          </span>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Title block */}
          <div className="col-span-12 md:col-span-8">
            <p className="font-sub uppercase tracking-[0.28em] text-[12px] text-[#A7B1E0] mb-6">
              Sveriges första poddfestival
            </p>
            <h2
              data-testid="poddfest-title"
              className="font-display uppercase leading-[0.84] text-[clamp(3rem,9vw,9rem)]"
            >
              En scen för
              <br />
              <span className="text-[#93C5FD]">röster</span> som
              <br />
              sällan hörs.
            </h2>
          </div>

          {/* Meta column */}
          <div className="col-span-12 md:col-span-4 md:pt-4">
            <dl className="grid grid-cols-2 md:grid-cols-1 gap-5 md:gap-4 font-sub">
              <Meta label="Grundad" value="2019" />
              <Meta label="Plats" value="Husby / Folkets Husby" />
              <Meta label="Upplagor" value="Pågående årlig festival" />
              <Meta label="Arrangörer" value="Galdem A Talk Förening" />
            </dl>
          </div>
        </div>

        {/* Intro copy */}
        <div className="mt-14 md:mt-20 grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-6 md:col-start-4 font-body text-[16px] md:text-[18px] leading-relaxed text-[#F4F3EF]/90">
            <p className="first-letter:font-display first-letter:text-6xl first-letter:leading-[0.8] first-letter:float-left first-letter:mr-3 first-letter:text-[#93C5FD]">
              Poddfestivalen är Sveriges första poddfestival — startad av
              Galdem A Talk Förening i Husby. En festival där podden blir
              scen, och scenen blir ett samtal. Under en dag samlas
              kreatörer, publik, paneler och nya röster för att prata om det
              som oftast tystas ned: förorten, systerskapet, kulturen och
              framtiden.
            </p>
            <p className="mt-5">
              Det började som en idé om att göra plats. Idag är det en årlig
              mötesplats där folk kommer långväga ifrån för att lyssna, ta
              plats och organisera sig.
            </p>
            <div className="mt-10">
              <a
                href={PODDFESTIVALEN_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="poddfest-site-link"
                className="btn-paper"
              >
                Till Poddfestivalen
                <ArrowUpRight size={18} strokeWidth={2.4} />
              </a>
            </div>
          </div>
        </div>

        {/* Image collage — asymmetric */}
        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-4 md:gap-6">
          <figure className="col-span-12 md:col-span-7 relative">
            <img
              src={ASSETS.pod.audience}
              alt="Publik på Poddfestivalen i Husby"
              className="w-full h-[320px] md:h-[460px] object-cover border-2 border-[#F4F3EF]"
              loading="lazy"
            />
          </figure>

          <figure className="col-span-12 md:col-span-5 relative md:mt-16">
            <img
              src={ASSETS.pod.stepRepeat}
              alt="Besökare på Poddfestivalen"
              className="w-full h-[280px] md:h-[360px] object-cover border-2 border-[#F4F3EF]"
              loading="lazy"
            />
          </figure>
        </div>

        {/* Quote block */}
        <blockquote className="mt-20 md:mt-28 max-w-4xl">
          <p className="font-display uppercase leading-[0.9] text-[clamp(2rem,5vw,4rem)] text-[#F4F3EF]">
            <span className="text-[#93C5FD]">“</span>
            Om ingen annan bygger scenen åt oss, så bygger vi den själva —
            och så fyller vi den.
            <span className="text-[#93C5FD]">”</span>
          </p>
          <footer className="mt-5 font-sub uppercase tracking-[0.22em] text-[11px] text-[#F4F3EF]/60">
            — Galdem A Talk
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

const Meta = ({ label, value }) => (
  <div className="border-t border-[#F4F3EF]/25 pt-2">
    <dt className="uppercase tracking-[0.18em] text-[10px] text-[#F4F3EF]/55">
      {label}
    </dt>
    <dd className="font-sub font-bold text-[15px] md:text-[16px] mt-1">
      {value}
    </dd>
  </div>
);
