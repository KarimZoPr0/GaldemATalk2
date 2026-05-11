# PRD — Galdem A Talk Förening Hemsida

## Problemformulering
Bygg en hemsida för Galdem A Talk Förening — en svensk kultur- och samhällsinriktad förening i Husby som grundat Sveriges första poddfestival (Poddfestivalen). Sajten ska INTE kännas som en företagshemsida och INTE kännas AI-genererad. Vibe: poddfestival, editorial zine, grassroots.

## Användarpersonas
- **Potentiell medlem (16+)** från förorter som vill engagera sig — primär konverteringsmål: fylla i Google Form för medlemskap.
- **Publik/intresserade** som vill veta vad föreningen gör och läsa press.
- **Journalister & samarbetspartners** som vill få kontakt (mail + socials).

## Kärnkrav (statiska)
- Svenska endast. Ingen databas / inget backend.
- Sektioner: Hero, Partner-marquee (oändlig höger-scroll), Om oss + styrelse (utan profilbilder), Poddfestivalen (story + bildcollage), Artiklar (extensible lista), Medlemskaps-CTA, Footer.
- Externa länkar: Google Form (medlemskap), Instagram, TikTok, YouTube, mailto, 3 artiklar (ungmedia.se, dopest.se, DN).
- Data-testid på alla interaktiva element. Responsiv 375 / 768 / 1440.

## Arkitektur
- Frontend: React (CRA/craco) + Tailwind + Cabinet Grotesk (Fontshare) + Bebas Neue + Chivo (Google Fonts). Lucide-react för ikoner.
- Custom CSS marquee (keyframes) — ingen extra dep.
- Innehåll centraliserat i `/app/frontend/src/data/site.js` så artiklar och styrelse lätt kan utökas.

## Vad har byggts (2025-12)
- ✅ Header med sticky scroll, mobile meny
- ✅ Hero (dark editorial, ticker, "Vi tar plats. Tillsammans.")
- ✅ Partner-marquee (Stockholms stad, Galdem A Talk, Folkets Husby — fasta slots, oändlig smooth loop höger)
- ✅ Om oss (manifesto + 4 värderingar + styrelsedirectory 5 personer, inga bilder)
- ✅ Poddfestivalen (story, meta-data, asymmetriskt bildcollage, citat)
- ✅ Artiklar (3 zine-kort, extensible via `ARTICLES` array)
- ✅ Medlemskap CTA (lila block → Google Form)
- ✅ Footer (mail, socials, stor wordmark, navigation)
- ✅ Grain-textur och editorial rules (anti-AI känsla)
- ✅ Fixad OmOss z-index bug och mobil overflow (iteration_2)

## Backlog / Framtida förbättringar
### P1
- Lägg till fler artiklar (bara push in i `ARTICLES` i `/app/frontend/src/data/site.js`)
- SEO: sitemap.xml, robots.txt, structured data (Organization)
- OG-bild optimerad för social delning

### P2
- "Kommande event"-sektion när nästa Poddfestival-datum bekräftas
- Bildgalleri från tidigare upplagor
- Nyhetsbrev-form (kräver backend / 3rd party som Resend eller Mailchimp)
- Språkväxlare (SV/EN)

### P3
- Admin-panel för artiklar (om backend läggs till)
- Medlemsportal (inloggning)

## Test Reports
- `/app/test_reports/iteration_1.json` — 85% (2 HIGH UI-buggar i OmOss)
- `/app/test_reports/iteration_2.json` — 100% (alla buggar fixade)
