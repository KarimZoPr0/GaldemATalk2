import { useEffect, useMemo, useRef, useState } from "react";
import { ARTICLES } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

const PAGE_SIZE = 3;
const MAX_PAGE_BUTTONS = 6;

const isYouTubeUrl = (url) => /youtu\.be|youtube\.com/i.test(url);

const primaryCtaLabel = (article) => {
  if (isYouTubeUrl(article.href)) return "Se på YouTube";
  return `Läs mer på ${article.outlet.split(" · ")[0].toLowerCase()}`;
};

export const Articles = () => {
  const sorted = useMemo(
    () =>
      [...ARTICLES].sort(
        (a, b) => parseInt(b.year, 10) - parseInt(a.year, 10)
      ),
    []
  );

  const pageCount = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const [page, setPage] = useState(0);
  const skipScrollRef = useRef(true);

  useEffect(() => {
    const maxIdx = Math.max(0, pageCount - 1);
    setPage((p) => Math.min(p, maxIdx));
  }, [pageCount]);

  const pageItems = useMemo(
    () => sorted.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE),
    [sorted, page]
  );

  const showingFrom = sorted.length === 0 ? 0 : page * PAGE_SIZE + 1;
  const showingTo = Math.min((page + 1) * PAGE_SIZE, sorted.length);

  useEffect(() => {
    if (skipScrollRef.current) {
      skipScrollRef.current = false;
      return;
    }
    document.getElementById("artiklar")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [page]);

  return (
    <section
      id="artiklar"
      data-testid="articles-section"
      className="relative bg-[#F4F3EF] text-[#0F0F0F] py-24 md:py-36 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-baseline gap-4 mb-8 md:mb-12 rule-black pt-6">
          <span className="font-sub uppercase tracking-[0.25em] text-[11px]">
            I pressen
          </span>
          <span className="flex-1 h-px bg-[#0F0F0F]/20" />
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-8 md:mb-12">
          <h2
            data-testid="articles-title"
            className="col-span-12 md:col-span-8 font-display uppercase leading-[0.86] text-[clamp(2.5rem,7vw,6rem)]"
          >
            Det skrivs
            <br />
            om oss.
          </h2>
          <p className="col-span-12 md:col-span-4 font-body text-[15px] md:text-[16px] text-[#4B5563] max-w-md">
            Ett urval av reportage, intervjuer och videor där föreningen och
            Poddfestivalen finns med. Länkarna öppnas i ny flik.
          </p>
        </div>

        <ul data-testid="articles-list" className="rule-black">
          {pageItems.map((a) => (
            <li
              key={a.id}
              data-testid={`article-card-${a.id}`}
              className="border-b-2 border-[#0F0F0F]"
            >
              <div className="hover:bg-[#EAE8E1]/70 transition-colors">
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block hover:bg-transparent ${a.video ? "pt-5 md:pt-7 pb-3 md:pb-4" : "py-5 md:py-7"}`}
                >
                  <div className="grid grid-cols-12 gap-3 md:gap-5 items-baseline">
                    <span className="col-span-3 md:col-span-2 font-display text-xl md:text-2xl text-[#5C6BC0] tracking-wide">
                      {a.year}
                    </span>
                    <span className="col-span-9 md:col-span-3 font-sub uppercase tracking-[0.18em] text-[11px] md:text-[12px] text-[#4B5563]">
                      {a.outlet}
                    </span>
                    <h3 className="col-span-12 md:col-span-6 font-sub font-bold text-[17px] md:text-[22px] leading-snug tracking-tight">
                      {a.title}
                    </h3>
                    <span className="col-span-12 md:col-span-1 md:text-right">
                      <ArrowUpRight
                        size={22}
                        strokeWidth={2}
                        className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </div>

                  <p className="font-body text-[14px] md:text-[15px] leading-relaxed text-[#4B5563] mt-3 md:mt-4 md:pl-[16.6%] max-w-3xl">
                    {a.excerpt}
                  </p>

                  <span className="font-sub uppercase tracking-[0.22em] text-[11px] mt-3 inline-block group-hover:text-[#5C6BC0] transition-colors md:ml-[16.6%]">
                    {primaryCtaLabel(a)} →
                  </span>
                </a>
                {a.video && (
                  <a
                    href={a.video.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`article-video-link-${a.id}`}
                    className="group block pb-5 md:pb-7 pt-0 md:pl-[16.6%] font-sub uppercase tracking-[0.22em] text-[11px] text-[#4B5563] hover:text-[#5C6BC0] transition-colors"
                  >
                    <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1">
                      {isYouTubeUrl(a.video.href) ? "Se videon" : "Se även"}
                      <span className="normal-case tracking-normal font-body font-bold text-[14px] md:text-[15px] text-[#0F0F0F] group-hover:text-[#5C6BC0]">
                        {a.video.label}
                      </span>
                      <ArrowUpRight
                        size={18}
                        strokeWidth={2}
                        className="inline-block shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>

        {pageCount > 1 && (
          <nav
            aria-label="Bläddra bland artiklar"
            data-testid="articles-pagination"
            className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-between gap-4 border-t-2 border-[#0F0F0F] pt-6 md:pt-8"
          >
            <p className="font-sub uppercase tracking-[0.18em] text-[11px] text-[#4B5563] order-2 sm:order-1">
              Visar {showingFrom}–{showingTo} av {sorted.length} totalt
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 order-1 sm:order-2">
              <button
                type="button"
                data-testid="articles-page-prev"
                disabled={page === 0}
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                className="font-sub uppercase tracking-[0.18em] text-[11px] px-3 py-2 border-2 border-[#0F0F0F] disabled:opacity-35 disabled:cursor-not-allowed hover:bg-[#0F0F0F] hover:text-[#F4F3EF] transition-colors"
              >
                Föregående
              </button>
              {pageCount <= MAX_PAGE_BUTTONS ? (
                <div className="flex flex-wrap items-center gap-1">
                  {Array.from({ length: pageCount }, (_, i) => (
                    <button
                      key={i}
                      type="button"
                      data-testid={`articles-page-${i + 1}`}
                      aria-current={page === i ? "page" : undefined}
                      onClick={() => setPage(i)}
                      className={`min-w-[2.25rem] font-sub uppercase tracking-[0.12em] text-[11px] px-2 py-2 border-2 transition-colors ${
                        page === i
                          ? "border-[#5C6BC0] bg-[#5C6BC0] text-[#F4F3EF]"
                          : "border-[#0F0F0F] hover:bg-[#0F0F0F] hover:text-[#F4F3EF]"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              ) : (
                <span className="font-sub uppercase tracking-[0.18em] text-[11px] px-2 py-2 text-[#4B5563]">
                  Sida {page + 1} / {pageCount}
                </span>
              )}
              <button
                type="button"
                data-testid="articles-page-next"
                disabled={page >= pageCount - 1}
                onClick={() =>
                  setPage((p) => Math.min(pageCount - 1, p + 1))
                }
                className="font-sub uppercase tracking-[0.18em] text-[11px] px-3 py-2 border-2 border-[#0F0F0F] disabled:opacity-35 disabled:cursor-not-allowed hover:bg-[#0F0F0F] hover:text-[#F4F3EF] transition-colors"
              >
                Nästa
              </button>
            </div>
          </nav>
        )}
      </div>
    </section>
  );
};
