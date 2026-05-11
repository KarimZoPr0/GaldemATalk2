# Galdem A Talk

Webbplats för **Galdem A Talk**, byggd med React ([Create React App](https://github.com/facebook/create-react-app)) och konfigurerad med [CRACO](https://craco.js.org/).

All kod för sajten finns i mappen **`frontend/`**. Det finns ingen separat backend i det här repot.

## Krav

- [Node.js](https://nodejs.org/) (LTS, t.ex. 20.x eller 22.x rekommenderas)
- `npm` eller [Yarn](https://classic.yarnpkg.com/) (projektet anger Yarn 1 i `package.json`)

## Köra lokalt

```bash
cd frontend
npm install
npm start
```

Öppna [http://localhost:3000](http://localhost:3000). Sidan uppdateras när du sparar filer.

Med Yarn:

```bash
cd frontend
yarn
yarn start
```

## Bygga för produktion

```bash
cd frontend
npm run build
```

Färdiga filer hamnar i `frontend/build/`.

## Deploy till GitHub Pages

Repot är inställt för publicering på GitHub Pages (`homepage` i `frontend/package.json`). Bygg först med rätt **basväg** så att länkar och routing fungerar under projektmappen:

Skapa eller uppdatera `frontend/.env.production`:

```bash
PUBLIC_URL=/GaldemATalk2
```

(Justera värdet om repot eller GitHub Pages-URL:n skiljer sig.)

Sedan:

```bash
cd frontend
npm run deploy
```

Det kör build och pushar till `gh-pages`-grenen via `gh-pages`-paketet.

## Tester

```bash
cd frontend
npm test
```

## Miljövariabler (`.env`)

Ingen `.env` behövs för normal lokal utveckling—allt innehåll som redigeras mest ligger under `frontend/src/` (t.ex. `frontend/src/data/site.js`).

Valfritt kan du lägga **`frontend/.env`** (filer som börjar med `.env` committas **inte**, se `.gitignore`):

| Variabel             | Beskrivning                                                                 |
|----------------------|------------------------------------------------------------------------------|
| `ENABLE_HEALTH_CHECK` | Sätt till `true` om du vill aktivera health-check-plugin lokalt (`craco.config.js`). |
| `PUBLIC_URL`         | Bas-URL för byggda statiska tillgångar; sätts automatiskt i många CI-miljöer. För GitHub Pages med undermapp: se ovan. |

## Projektöversikt

| Sökväg | Vad det är |
|--------|-------------|
| `frontend/src/App.js` | Router och startsida |
| `frontend/src/data/site.js` | Mycket av sajtens texter och data |
| `frontend/src/components/site/` | Sektionskomponenter (hero, footer, artiklar, m.m.) |
| `frontend/craco.config.js` | Webpack-/byggkonfiguration (bl.a. `@`-alias och valfritt health check) |

För CRA-relaterade detaljer (koddelning, felsökning av build osv.), se även [`frontend/README.md`](frontend/README.md).
