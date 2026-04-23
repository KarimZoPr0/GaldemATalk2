import { ARTICLES } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export const Articles = () => {
  return (
    <section
      id="artiklar"
      data-testid="articles-section"
      className="relative bg-[#F4F3EF] text-[#0F0F0F] py-24 md:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-baseline gap-4 mb-10 md:mb-14 rule-black pt-6">
          <span className="font-sub uppercase tracking-[0.25em] text-[11px]">
            № 03 — I pressen
          </span>
          <span className="flex-1 h-px bg-[#0F0F0F]/20" />
          <span className="font-sub uppercase tracking-[0.25em] text-[11px] opacity-60">
            {ARTICLES.length} artiklar · uppdateras
          </span>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-12 md:mb-16">
          <h2
            data-testid="articles-title"
            className="col-span-12 md:col-span-8 font-display uppercase leading-[0.86] text-[clamp(2.5rem,7vw,6rem)]"
          >
            Det skrivs
            <br />
            om oss.
          </h2>
          <p className="col-span-12 md:col-span-4 font-body text-[15px] md:text-[16px] text-[#4B5563] max-w-md">
            Ett urval av röster, reportage och intervjuer där föreningen och
            Poddfestivalen finns med. Klicka på en artikel för att läsa i
            originalpublikationen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ARTICLES.map((a) => (
            <a
              key={a.id}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`article-card-${a.id}`}
              className="zine-card group flex flex-col border-2 border-[#0F0F0F] bg-[#F4F3EF]"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-[#0F0F0F]">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute top-3 left-3 bg-[#0F0F0F] text-[#F4F3EF] px-2 py-1 font-display text-sm tracking-wider">
                  №{a.number}
                </div>
                <div className="absolute top-3 right-3 bg-[#5C6BC0] text-[#F4F3EF] px-2 py-1 font-sub uppercase text-[10px] tracking-[0.18em]">
                  {a.year}
                </div>
              </div>

              <div className="flex flex-col flex-1 p-5 md:p-6">
                <span className="font-sub uppercase tracking-[0.2em] text-[11px] text-[#5C6BC0] mb-3">
                  {a.outlet}
                </span>
                <h3 className="font-sub font-bold text-[22px] md:text-[24px] leading-tight tracking-tight mb-3">
                  {a.title}
                </h3>
                <p className="font-body text-[14px] leading-relaxed text-[#4B5563] mb-6">
                  {a.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#0F0F0F]/20">
                  <span className="font-sub uppercase tracking-[0.2em] text-[11px] group-hover:text-[#5C6BC0] transition-colors">
                    Läs mer
                  </span>
                  <ArrowUpRight
                    size={20}
                    strokeWidth={2.2}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
