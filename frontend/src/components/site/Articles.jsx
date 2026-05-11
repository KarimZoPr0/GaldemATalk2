import { ARTICLES } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export const Articles = () => {
  // Senaste först — sortera automatiskt så framtida artiklar hamnar rätt
  const sorted = [...ARTICLES].sort(
    (a, b) => parseInt(b.year, 10) - parseInt(a.year, 10)
  );

  return (
    <section
      id="artiklar"
      data-testid="articles-section"
      className="relative bg-[#F4F3EF] text-[#0F0F0F] py-24 md:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-baseline gap-4 mb-10 md:mb-14 rule-black pt-6">
          <span className="font-sub uppercase tracking-[0.25em] text-[11px]">
            I pressen
          </span>
          <span className="flex-1 h-px bg-[#0F0F0F]/20" />
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
            Ett urval av reportage och intervjuer där föreningen och
            Poddfestivalen finns med. Klicka på en artikel för att läsa i
            originalpublikationen.
          </p>
        </div>

        <ul data-testid="articles-list" className="rule-black">
          {sorted.map((a) => (
            <li
              key={a.id}
              data-testid={`article-card-${a.id}`}
              className="border-b-2 border-[#0F0F0F]"
            >
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-7 md:py-9 hover:bg-[#EAE8E1]/70 transition-colors"
              >
                <div className="grid grid-cols-12 gap-4 md:gap-6 items-baseline">
                  <span className="col-span-3 md:col-span-2 font-display text-2xl md:text-3xl text-[#5C6BC0] tracking-wide">
                    {a.year}
                  </span>
                  <span className="col-span-9 md:col-span-3 font-sub uppercase tracking-[0.18em] text-[11px] md:text-[12px] text-[#4B5563]">
                    {a.outlet}
                  </span>
                  <h3 className="col-span-12 md:col-span-6 font-sub font-bold text-[20px] md:text-[26px] leading-tight tracking-tight">
                    {a.title}
                  </h3>
                  <span className="col-span-12 md:col-span-1 md:text-right">
                    <ArrowUpRight
                      size={26}
                      strokeWidth={2}
                      className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </div>

                <p className="font-body text-[14px] md:text-[15px] leading-relaxed text-[#4B5563] mt-4 md:mt-5 md:pl-[16.6%] max-w-3xl">
                  {a.excerpt}
                </p>

                <span className="font-sub uppercase tracking-[0.22em] text-[11px] mt-4 inline-block group-hover:text-[#5C6BC0] transition-colors md:ml-[16.6%]">
                  Läs mer på {a.outlet.split(" · ")[0].toLowerCase()} →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
