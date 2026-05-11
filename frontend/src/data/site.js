// Central content source. To add a new article, just push into `articles`.
// Local images live in `frontend/src/assets/` and are imported here so webpack
// bundles them with content-hashed filenames (cache busting + missing-file checks).
// The favicon and og:image are referenced from public/index.html via %PUBLIC_URL%
// and therefore also live as copies under `frontend/public/assets/`.
import huvudlogo from "@/assets/huvudlogo.png";
import team4 from "@/assets/team4.jpg";
import team3 from "@/assets/team3.jpg";
import team2 from "@/assets/team2.jpg";
import picnic from "@/assets/picnic.jpg";
import audience from "@/assets/audience.jpg";
import panel from "@/assets/panel.jpg";
import stage from "@/assets/stage.jpg";
import poddfest from "@/assets/poddfest.jpg";
import stockholm from "@/assets/samarbete/StockholmsStad_logo_svart.png";
import folketsHusby from "@/assets/samarbete/folkets-husby-logo.png";
import collectiveImpactHusby from "@/assets/samarbete/collective_impact_husby_logo.png";
import adidas from "@/assets/samarbete/addidas_logo.png";
import headbrands from "@/assets/samarbete/headbrands_logo.png";
import puma from "@/assets/samarbete/puma-logo.png";
import spotify from "@/assets/samarbete/spotify_logo.png";
import vitaminWell from "@/assets/samarbete/Vitamin_well_logo.png";
import galdemSamarbete from "@/assets/samarbete/galdem_a_talk_samarbete_logo.png";

export const ASSETS = {
  logo: huvudlogo,
  heroBg: panel,
  /** Galdem A Talk samarbetslogga — filen finns kvar i assets men visas inte bland partners. */
  samarbeteLogoGaldemATalk: galdemSamarbete,
  partners: {
    stockholm: stockholm,
    folketsHusby: folketsHusby,
    collectiveImpactHusby: collectiveImpactHusby,
    adidas: adidas,
    headbrands: headbrands,
    puma: puma,
    spotify: spotify,
    vitaminWell: vitaminWell,
  },
  omOss: team3,
  pod: {
    audience: audience,
    panel: panel,
    stepRepeat: poddfest,
    duo: team2,
  },
};

/** Ordning och länkar för partnerytor ( Partners, PartnerMarquee ). */
export const PARTNERS = [
  {
    key: "stockholm",
    src: stockholm,
    label: "Stockholms stad",
    href: "https://start.stockholm.se/",
  },
  {
    key: "folkets-husby",
    src: folketsHusby,
    label: "Folkets Husby",
    href: "https://folketshusby.se/",
  },
  {
    key: "collective-impact-husby",
    src: collectiveImpactHusby,
    label: "Collective Impact Husby",
    href: "https://impacthusby.se/",
  },
  {
    key: "adidas",
    src: adidas,
    label: "Adidas",
    href: "https://www.adidas.se/",
  },
  {
    key: "headbrands",
    src: headbrands,
    label: "Headbrands",
    href: "https://www.headbrands.se/",
  },
  {
    key: "puma",
    src: puma,
    label: "Puma",
    href: "https://www.puma.com/se/sv/",
  },
  {
    key: "spotify",
    src: spotify,
    label: "Spotify",
    href: "https://www.spotify.com/",
  },
  {
    key: "vitamin-well",
    src: vitaminWell,
    label: "Vitamin Well",
    href: "https://www.vitaminwell.com/",
  },
];

export const MEMBERSHIP_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeNGTDpg-E2bc30xOIKWLXdipMKRCiC14gw071wr9Cr7nCOrg/viewform";

export const PODDFESTIVALEN_URL = "https://www.poddfestivalen.com/";

export const SOCIALS = {
  instagram: "https://www.instagram.com/galdemforening",
  tiktok: "https://www.tiktok.com/@galdemforening",
  youtube: "https://youtube.com/@galdematalkforening",
  emails: [
    { label: "Galdem Förening", address: "forening@galdematalk.com" },
    { label: "Galdem A Talk Podd", address: "Galdematalk@gmail.com" },
  ],
};

export const BOARD = [
  { role: "Ordförande", name: "Awo Nada Yussuf" },
  { role: "Viceordförande", name: "Helen Mehari-Tesfay" },
  { role: "Kassör", name: "Sara Mecconen" },
  { role: "Ledamot", name: "Siham Elmi" },
  { role: "Ledamot", name: "Hodman Liban" },
];

/** Bilder till galleriet på startsidan — lägg till eller ändra här. */
export const GALLERY = [
  {
    id: "panel-scen",
    image: panel,
    alt: "Paneldiskussion med flera deltagare",
    caption: "Samtal och panel på scen.",
  },
  {
    id: "publik",
    image: audience,
    alt: "Publik i salongen",
    caption: "Publik vid livepodd och festival.",
  },
  {
    id: "scenljus",
    image: stage,
    alt: "Scen med strålkastare",
    caption: "Föreningens arrangemang på scen.",
  },
  {
    id: "picknick",
    image: picnic,
    alt: "Gemensam stunds vid picknick",
    caption: "Gemenskap och umgänge.",
  },
  {
    id: "poddfest",
    image: poddfest,
    alt: "Poddfestivalen",
    caption: "Poddfestivalen i Husby.",
  },
  {
    id: "team-moment",
    image: team2,
    alt: "Galdem A Talk-arrangörer",
    caption: "Bak kulisserna med teamet.",
  },
  {
    id: "husby",
    image: team3,
    alt: "Galdem i lokalsamhället",
    caption: "Galdem A Talk i Husby.",
  },
];

// Senaste först.
// Valfritt per post: video: { label: "Visningsnamn", href: "https://..." } (andra länk under samma kort).
export const ARTICLES = [
  {
    id: "micken-bite-vibe",
    number: "04",
    outlet: "YouTube · MICKEN",
    title: "MICKEN: Bite & Vibe",
    excerpt:
      "MICKEN presenterar poddarna som var med och livepoddade på Poddfestivalen med Folkets Husby — från Galdem förening och Galdem A Talk.",
    image: audience,
    href: "https://youtu.be/mYZoqquIsQI",
    year: "2026",
  },
  {
    id: "dn-folkets-husby",
    number: "03",
    outlet: "Dagens Nyheter · Kultur",
    title:
      "“För oss är det folk som dör – för Netflix är det stora pengar”",
    excerpt:
      "Galdem A Talk omnämns i DN:s kulturreportage om Folkets Husby och hur förorten själv skapar sina rum för samtal, kultur och motstånd.",
    image: panel,
    href: "https://www.dn.se/kultur/folkets-husby-for-oss-ar-det-folk-som-dor-for-netflix-ar-det-stora-pengar/",
    year: "2023",
  },
  {
    id: "dopest-poddfestival-2024",
    number: "02",
    outlet: "dopest.se",
    title: "Poddfestivalen 2024 — Husby, Stockholm",
    excerpt:
      "Poddfestivalen 2024 intar Husby. Galdem A Talk arrangerar sin tredje upplaga av festivalen med livepoddar, musik och fokus på representation i media.",
    image: audience,
    href: "https://dopest.se/poddfestival-2024-husby-stockholm/",
    year: "2024",
  },
  {
    id: "ungmedia-manadens-forening",
    number: "01",
    outlet: "Ung Media Sverige",
    title: "Månadens förening — augusti 2023",
    excerpt:
      "Galdem A Talk utsågs till Månadens förening i augusti 2023. Möt Galdem A Talk i ett samtal om varför föreningen startades och vad systerskap innebär på riktigt.",
    image: team2,
    href: "https://ungmedia.se/manadens-forening-augusti-2023-galdem-a-talk/",
    year: "2023",
  },
  
];
