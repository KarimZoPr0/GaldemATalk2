// Central content source. To add a new article, just push into `articles`.
// Local assets live in `frontend/public/assets/`. We prefix with PUBLIC_URL so
// the same paths work both in dev (PUBLIC_URL="") and in production builds
// hosted on a sub-path like gh-pages (PUBLIC_URL="/GaldemATalk2").
const PUBLIC_URL = process.env.PUBLIC_URL || "";
const asset = (p) => `${PUBLIC_URL}${p}`;

export const ASSETS = {
  logo: asset("/assets/huvudlogo.png"),
  heroBg: asset("/assets/team4.jpg"),
  partners: {
    stockholm: "https://customer-assets.emergentagent.com/job_7f7e729e-d443-4517-b018-1f5df145741b/artifacts/2x7a24t2_StockholmsStad_logotypeStandardA4_300ppi_svart.png",
    folketsHusby: "https://customer-assets.emergentagent.com/job_7f7e729e-d443-4517-b018-1f5df145741b/artifacts/mgffk323_folkets-husby-logo.png",
    galdemSamarbete: "https://customer-assets.emergentagent.com/job_7f7e729e-d443-4517-b018-1f5df145741b/artifacts/98v00qoh_galdem_a_talk_samarbete_logo.png",
  },
  omOss: asset("/assets/team3.jpg"),
  pod: {
    audience: asset("/assets/audience.jpg"),
    panel: asset("/assets/panel.jpg"),
    stepRepeat: asset("/assets/poddfest.jpg"),
    duo: asset("/assets/team2.jpg"),
  },
};

export const MEMBERSHIP_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeNGTDpg-E2bc30xOIKWLXdipMKRCiC14gw071wr9Cr7nCOrg/viewform";

export const SOCIALS = {
  instagram: "https://www.instagram.com/galdemforening",
  tiktok: "https://www.tiktok.com/@galdemforening",
  youtube: "https://youtube.com/@galdematalkforening",
  mail: "forening@galdematalk.com",
};

export const BOARD = [
  { role: "Ordförande", name: "Awo Nada Yussuf" },
  { role: "Viceordförande", name: "Helen Mehari-Tesfay" },
  { role: "Kassör", name: "Sara Mecconen" },
  { role: "Ledamot", name: "Siham Elmi" },
  { role: "Ledamot", name: "Hodman Liban" },
];

// Senaste först.
export const ARTICLES = [
  {
    id: "dn-folkets-husby",
    number: "03",
    outlet: "Dagens Nyheter · Kultur",
    title:
      "“För oss är det folk som dör – för Netflix är det stora pengar”",
    excerpt:
      "Galdem A Talk omnämns i DN:s kulturreportage om Folkets Husby och hur förorten själv skapar sina rum för samtal, kultur och motstånd.",
    image: asset("/assets/panel.jpg"),
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
    image: asset("/assets/audience.jpg"),
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
    image: asset("/assets/team2.jpg"),
    href: "https://ungmedia.se/manadens-forening-augusti-2023-galdem-a-talk/",
    year: "2023",
  },
];
