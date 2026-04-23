import { ASSETS, BOARD } from "@/data/site";

export const OmOss = () => {
  return (
    <section
      id="om-oss"
      data-testid="about-section"
      className="relative bg-[#F4F3EF] text-[#0F0F0F] py-24 md:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Section tag */}
        <div className="flex items-baseline gap-4 mb-10 md:mb-14 rule-black pt-6">
          <span className="font-sub uppercase tracking-[0.25em] text-[11px]">
            № 01 — Om oss
          </span>
          <span className="flex-1 h-px bg-[#0F0F0F]/20" />
          <span className="font-sub uppercase tracking-[0.25em] text-[11px] opacity-60">
            Föreningen
          </span>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Left: big header */}
          <div className="col-span-12 md:col-span-7">
            <h2
              data-testid="about-title"
              className="font-display uppercase leading-[0.86] text-[clamp(2.5rem,7vw,6rem)]"
            >
              En förening för
              <br />
              <span className="text-[#5C6BC0]">dem som tar plats</span>
              <br />
              — och dem som
              <br />
              aldrig har fått chansen.
            </h2>

            <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-10 font-body text-[15px] md:text-[16px] leading-relaxed">
              <p>
                <strong className="font-sub font-bold uppercase tracking-wide text-[12px] block mb-2 text-[#5C6BC0]">
                  Vad vi står för
                </strong>
                Galdem A Talk Förening är en kultur- och samhällsinriktad
                förening som står för representation, inkludering, gemenskap och
                systerskap. Vårt mål är att få personer som är 16 år och uppåt
                att ta plats och organisera sig — främst personer från
                förorter, som vi vill skapa nya möjligheter och erfarenheter
                för.
              </p>
              <p>
                <strong className="font-sub font-bold uppercase tracking-wide text-[12px] block mb-2 text-[#5C6BC0]">
                  Varför en förening
                </strong>
                Vi tror på vikten av att organisera sig tillsammans i en
                större grupp — och på att hitta gemenskapen inom det. Genom
                möten, arbetsgrupper och aktiviteter kan medlemmarna påverka
                vilka projekt och initiativ föreningen driver framåt.
              </p>
            </div>
          </div>

          {/* Right: editorial image */}
          <div className="col-span-12 md:col-span-5">
            <div className="relative ribbon-rotate">
              <div className="relative border-2 border-[#0F0F0F] bg-[#EAE8E1] p-2">
                <img
                  src={ASSETS.omOss}
                  alt="Systerskap — medlemmar kramas ute i naturen"
                  className="w-full h-[420px] md:h-[520px] object-cover"
                  loading="lazy"
                />
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-sub uppercase tracking-[0.18em] text-[10px]">
                    Fig. 01 — Systerskap i praktiken
                  </span>
                  <span className="font-display text-lg">★</span>
                </div>
              </div>
              <div
                aria-hidden
                className="absolute -z-0 inset-2 bg-[#5C6BC0]"
                style={{ transform: "translate(16px, 18px) rotate(1deg)" }}
              />
            </div>
          </div>
        </div>

        {/* Värderingar strip */}
        <div className="mt-20 md:mt-28 rule-black pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { n: "01", t: "Respekt", d: "Ärlighet och förståelse mellan medlemmar." },
              { n: "02", t: "Inkludering", d: "Alla ska känna sig delaktiga och uppskattade." },
              { n: "03", t: "Demokrati", d: "Medlemmarna driver utvecklingen framåt." },
              { n: "04", t: "Systerskap", d: "Gemenskap som faktiskt bär hela vägen." },
            ].map((v) => (
              <div key={v.n} className="flex flex-col">
                <span className="font-display text-4xl md:text-5xl text-[#5C6BC0]">{v.n}</span>
                <span className="font-sub font-bold uppercase tracking-[0.14em] text-[14px] mt-3">
                  {v.t}
                </span>
                <span className="font-body text-[14px] text-[#4B5563] mt-2">{v.d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Board directory */}
        <div id="styrelsen" className="mt-24 md:mt-32">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <h3
              data-testid="board-title"
              className="font-display uppercase leading-none text-[clamp(2.2rem,5vw,4rem)]"
            >
              Styrelsen — 25/26
            </h3>
            <span className="font-sub uppercase tracking-[0.22em] text-[11px] opacity-60">
              Verksamhetsåret 2025/2026
            </span>
          </div>

          <ol data-testid="board-list" className="rule-black">
            {BOARD.map((m, i) => (
              <li
                key={m.name}
                data-testid={`board-member-${i}`}
                className="grid grid-cols-12 items-center gap-4 py-5 md:py-6 border-b-2 border-[#0F0F0F] hover:bg-[#EAE8E1]/60 transition-colors"
              >
                <span className="col-span-2 md:col-span-1 font-display text-2xl md:text-3xl text-[#5C6BC0]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-10 md:col-span-7 font-sub font-bold text-[20px] md:text-[28px] tracking-tight">
                  {m.name}
                </span>
                <span className="col-span-12 md:col-span-4 font-sub uppercase tracking-[0.18em] text-[12px] md:text-right text-[#4B5563]">
                  {m.role}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
