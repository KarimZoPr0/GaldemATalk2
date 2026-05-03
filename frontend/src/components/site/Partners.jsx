import { ASSETS } from "@/data/site";

const PARTNERS = [
  { key: "stockholm", src: ASSETS.partners.stockholm, label: "Stockholms stad" },
  { key: "galdem", src: ASSETS.partners.galdemSamarbete, label: "Galdem A Talk" },
  { key: "folkets-husby", src: ASSETS.partners.folketsHusby, label: "Folkets Husby" },
];

export const Partners = () => {
  return (
    <section
      id="samarbeten"
      data-testid="partners-section"
      aria-label="Våra samarbetspartners"
      className="relative bg-[#F4F3EF] text-[#0F0F0F] py-20 md:py-28 border-t-2 border-[#0F0F0F]"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-baseline gap-4 mb-10 md:mb-14">
          <span className="font-sub uppercase tracking-[0.25em] text-[11px]">
            I samarbete med
          </span>
          <span className="flex-1 h-px bg-[#0F0F0F]/20" />
          <span className="font-sub uppercase tracking-[0.25em] text-[11px] opacity-60">
            Tack till
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {PARTNERS.map((p) => (
            <div
              key={p.key}
              data-testid={`partner-${p.key}`}
              className="border-2 border-[#0F0F0F] bg-[#F4F3EF] flex flex-col"
            >
              <div className="flex-1 flex items-center justify-center px-6 md:px-8 py-8 md:py-10 min-h-[140px] md:min-h-[160px]">
                <img
                  src={p.src}
                  alt={p.label}
                  className="max-h-16 md:max-h-20 w-auto object-contain"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <div className="border-t-2 border-[#0F0F0F] px-5 py-3 flex items-center justify-between">
                <span className="font-sub font-bold uppercase tracking-[0.16em] text-[11px] md:text-[12px]">
                  {p.label}
                </span>
                <span className="font-display text-base text-[#5C6BC0]">★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
