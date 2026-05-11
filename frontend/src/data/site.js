// Central content source. To add a new article, just push into `articles`.
// Local images live in `frontend/src/assets/` and are imported here so webpack
// bundles them with content-hashed filenames (cache busting + missing-file checks).
// The favicon and og:image are referenced from public/index.html via %PUBLIC_URL%
// and therefore also live as copies under `frontend/public/assets/`.
import huvudlogo from "@/assets/huvudlogo.png";
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
import peace from "@/assets/peace.jpg";
import team1 from "@/assets/team1.jpg";
import audience2 from "@/assets/audience2.jpeg";
import panel2 from "@/assets/panel2.jpeg";
import stage2 from "@/assets/stage2.jpeg";
import team5 from "@/assets/team5.jpeg";
import team6 from "@/assets/team6.jpeg";

export const ASSETS = {
  logo: huvudlogo,
  heroBg: panel,
  /** Galdem A Talk samarbetslogga — filen finns kvar i assets men visas inte bland partners. */
  samarbeteLogoGaldemATalk: galdemSamarbete,
  partners: {
    stockholm: stockholm,
    folketsHusby: folketsHusby,
    collectiveImpactHusby: collectiveImpactHusby,
    spotify: spotify,
    vitaminWell: vitaminWell,
    puma: puma,
    headbrands: headbrands,
    adidas: adidas,
  },
  omOss: team3,
  pod: {
    audience: audience,
    stepRepeat: poddfest,
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
  {
    key: "puma",
    src: puma,
    label: "Puma",
    href: "https://www.puma.com/se/sv/",
  },
  {
    key: "headbrands",
    src: headbrands,
    label: "Headbrands",
    href: "https://www.headbrands.se/",
  },
  {
    key: "adidas",
    src: adidas,
    label: "Adidas",
    href: "https://www.adidas.se/",
  }
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

/**
 * Bilder till galleriet på startsidan — bara rutnät, ingen synlig text i UI.
 * `id` och `alt` är likadana (fil-/postnamn); `alt` används av skärmläsare.
 */
export const GALLERY = [
  { id: "audience", image: audience, alt: "audience" },
  { id: "audience2", image: audience2, alt: "audience2" },
  { id: "panel", image: panel, alt: "panel" },
  { id: "panel2", image: panel2, alt: "panel2" },
  { id: "peace", image: peace, alt: "peace" },
  { id: "picnic", image: picnic, alt: "picnic" },
  { id: "poddfest", image: poddfest, alt: "poddfest" },
  { id: "stage", image: stage, alt: "stage" },
  { id: "stage2", image: stage2, alt: "stage2" },
  { id: "team1", image: team1, alt: "team1" },
  { id: "team2", image: team2, alt: "team2" },
  { id: "team3", image: team3, alt: "team3" },
  { id: "team5", image: team5, alt: "team5" },
  { id: "team6", image: team6, alt: "team6" },
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
      "Galdem A Talk utsågs till Månadens förening i augusti 2023. Möt Galdem A Talk i ett samtal om varför föreningen startades och vad gemenskap och organisering betyder i praktiken.",
    image: team2,
    href: "https://ungmedia.se/manadens-forening-augusti-2023-galdem-a-talk/",
    year: "2023",
  },
  
];
