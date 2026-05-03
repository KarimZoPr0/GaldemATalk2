import { MEMBERSHIP_URL } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export const Membership = () => {
  return (
    <section
      id="medlemskap"
      data-testid="membership-section"
      className="relative bg-[#5C6BC0] text-[#0F0F0F] py-24 md:py-36 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 grain-light pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 z-10">
        <div className="flex items-baseline gap-4 mb-10 md:mb-14 pt-6" style={{borderTop: "2px solid #0F0F0F"}}>
          <span className="font-sub uppercase tracking-[0.25em] text-[11px]">
            Medlemskap
          </span>
          <span className="flex-1 h-px bg-[#0F0F0F]/30" />
          <span className="font-sub uppercase tracking-[0.25em] text-[11px]">
            Verksamhetsåret 25/26
          </span>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-8">
            <h2
              data-testid="membership-title"
              className="font-display uppercase leading-[0.84] text-[clamp(3rem,9vw,10rem)]"
            >
              Bli en av
              <br />
              oss.
            </h2>
            <p className="mt-8 font-body text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
              Som medlem är du med och formar verksamheten — på möten, i
              arbetsgrupper och i praktiken. Stödmedlemmar involveras när vi
              drar igång större evenemang och projekt. För att gå med delar
              du föreningens värdegrund: respekt, inkludering och en stark
              tro på alla individers rätt att höras.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a
                href={MEMBERSHIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="membership-cta-btn"
                className="btn-ink"
              >
                Ansök om medlemskap
                <ArrowUpRight size={18} strokeWidth={2.4} />
              </a>
              <span className="font-sub uppercase tracking-[0.18em] text-[11px] text-[#0F0F0F]/70">
                Google Forms · ansökan öppnas i ny flik
              </span>
            </div>
          </div>

          <aside className="col-span-12 md:col-span-4">
            <ul className="space-y-4">
              {[
                { t: "Påverka på riktigt", d: "Aktiva medlemmar driver utvecklingen framåt på föreningsmöten." },
                { t: "Systerskap i praktiken", d: "Nätverk, arbetsgrupper och plats att ta." },
                { t: "Från 16 år och uppåt", d: "Riktar sig särskilt till personer från förorter." },
              ].map((i, idx) => (
                <li
                  key={i.t}
                  className="border-2 border-[#0F0F0F] bg-[#A7B1E0] p-5"
                >
                  <span className="font-display text-2xl">{String(idx + 1).padStart(2, "0")}</span>
                  <h4 className="font-sub font-bold mt-1 text-[16px] uppercase tracking-wide">
                    {i.t}
                  </h4>
                  <p className="font-body text-[14px] mt-1 text-[#0F0F0F]/85">{i.d}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};
