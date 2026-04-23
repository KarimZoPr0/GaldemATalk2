import { ASSETS } from "@/data/site";

const PARTNERS = [
  { key: "stockholm", src: ASSETS.partners.stockholm, label: "Stockholms stad" },
  { key: "galdem", src: ASSETS.partners.galdemSamarbete, label: "Galdem A Talk" },
  { key: "folkets-husby", src: ASSETS.partners.folketsHusby, label: "Folkets Husby" },
];

const Slot = ({ src, label }) => (
  <div
    className="flex items-center justify-center flex-none h-24 md:h-28"
    style={{ width: "clamp(180px, 22vw, 300px)" }}
    aria-label={label}
  >
    <img
      src={src}
      alt={label}
      className="max-h-full max-w-full object-contain opacity-90"
      loading="lazy"
      draggable={false}
    />
  </div>
);

export const PartnerMarquee = () => {
  // Repeat the list enough times to fill any viewport width.
  const loopOne = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];
  const loop = [...loopOne, ...loopOne]; // duplicate for seamless -50% translate

  return (
    <section
      data-testid="partner-marquee"
      aria-label="Våra samarbetspartners"
      className="relative bg-[#F4F3EF] text-[#0F0F0F] border-y-2 border-[#0F0F0F] overflow-hidden"
    >
      <div className="flex items-stretch">
        {/* Left label */}
        <div className="hidden md:flex items-center flex-none border-r-2 border-[#0F0F0F] px-6">
          <span className="font-sub uppercase tracking-[0.2em] text-[11px]">
            I samarbete med
          </span>
        </div>

        {/* Track */}
        <div className="flex-1 overflow-hidden">
          <div className="marquee-track py-4">
            {loop.map((p, i) => (
              <Slot key={`${p.key}-${i}`} src={p.src} label={p.label} />
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <div className="hidden md:flex items-center flex-none border-l-2 border-[#0F0F0F] px-6">
          <span className="font-display text-2xl">→</span>
        </div>
      </div>
    </section>
  );
};
