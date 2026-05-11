import { ASSETS, SOCIALS, MEMBERSHIP_URL } from "@/data/site";
import { Instagram, Youtube, Mail, ArrowUpRight } from "lucide-react";

// TikTok has no lucide icon — render as text mark
const TikTokMark = () => (
  <span className="font-sub font-bold text-[13px] tracking-[0.08em]">TikTok</span>
);

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      id="kontakt"
      data-testid="site-footer"
      className="relative bg-[#0F0F0F] text-[#F4F3EF] pt-20 md:pt-28 pb-10 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 grain pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 z-10">
        <div className="flex items-baseline gap-4 mb-10 pt-6" style={{borderTop: "2px solid #F4F3EF"}}>
          <span className="font-sub uppercase tracking-[0.25em] text-[11px]">
            Kontakt & socials
          </span>
          <span className="flex-1 h-px bg-[#F4F3EF]/25" />
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Brand mark */}
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={ASSETS.logo}
                alt="Galdem A Talk Förening"
                className="h-16 md:h-20 w-auto"
              />
              <span className="font-sub uppercase tracking-[0.18em] text-[12px] opacity-70">
                Galdem A Talk
                <br />
                Förening
              </span>
            </div>

            <p className="font-body text-[14px] leading-relaxed text-[#F4F3EF]/70 max-w-sm">
              Husby · Stockholm. En förening som står för representation,
              inkludering, gemenskap och solidaritet.
            </p>
          </div>

          {/* Navigate */}
          <div className="col-span-6 md:col-span-3">
            <span className="font-sub uppercase tracking-[0.2em] text-[11px] opacity-60 block mb-5">
              Navigera
            </span>
            <ul className="space-y-3 font-sub">
              {[
                ["Om oss", "#om-oss"],
                ["Poddfestivalen", "#poddfestivalen"],
                ["Artiklar", "#artiklar"],
                ["Medlemskap", "#medlemskap"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[16px] hover:text-[#A7B1E0] transition-colors"
                    data-testid={`footer-nav-${href.replace("#", "")}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-6 md:col-span-4">
            <span className="font-sub uppercase tracking-[0.2em] text-[11px] opacity-60 block mb-5">
              Kontakt
            </span>
            <ul className="space-y-5">
              {SOCIALS.emails.map((row) => (
                <li key={row.address}>
                  <a
                    href={`mailto:${row.address}`}
                    data-testid={`footer-mail-${row.address.replace("@", "-at-").replace(/\./g, "-")}`}
                    className="group block hover:text-[#A7B1E0] transition-colors"
                  >
                    <span className="font-sub uppercase tracking-[0.18em] text-[11px] opacity-60 block mb-1.5">
                      {row.label}
                    </span>
                    <span className="inline-flex items-start gap-2 font-sub text-[16px] md:text-[18px] font-bold break-all">
                      <Mail
                        size={18}
                        strokeWidth={2.2}
                        className="shrink-0 mt-0.5"
                      />
                      {row.address}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <SocialLink
                href={SOCIALS.instagram}
                label="Instagram"
                testId="social-instagram"
                icon={<Instagram size={18} strokeWidth={2.2} />}
              />
              <SocialLink
                href={SOCIALS.tiktok}
                label="TikTok"
                testId="social-tiktok"
                icon={<TikTokMark />}
              />
              <SocialLink
                href={SOCIALS.youtube}
                label="YouTube"
                testId="social-youtube"
                icon={<Youtube size={18} strokeWidth={2.2} />}
              />
            </div>

            <a
              href={MEMBERSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-become-member-btn"
              className="btn-paper mt-8"
            >
              Bli medlem
              <ArrowUpRight size={18} strokeWidth={2.4} />
            </a>
          </div>
        </div>

        {/* Huge wordmark */}
        <div className="mt-20 md:mt-28 overflow-hidden">
          <h2
            aria-hidden="true"
            className="font-display uppercase leading-[0.82] text-[#F4F3EF] whitespace-nowrap text-[clamp(4rem,17vw,20rem)] tracking-tight"
          >
            Galdem A Talk
          </h2>
        </div>

        <div className="mt-10 pt-6 border-t border-[#F4F3EF]/20 flex flex-col md:flex-row justify-between gap-3 font-sub uppercase tracking-[0.18em] text-[11px] text-[#F4F3EF]/60">
          <span>© {year} Galdem A Talk Förening. All rights reserved.</span>
          <span>Husby — Stockholm</span>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, label, icon, testId }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    data-testid={testId}
    className="inline-flex items-center gap-2 border-2 border-[#F4F3EF]/40 hover:border-[#F4F3EF] px-4 py-2 font-sub uppercase tracking-[0.14em] text-[12px] hover:text-[#A7B1E0] transition-colors"
  >
    {icon}
    <span>{label}</span>
  </a>
);
