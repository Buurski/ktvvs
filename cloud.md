# KT VVS — Cloud & Deployment

Demo-forside for **KT VVS ApS**, Platanvej 15, 7400 Herning.
Bygget som demo til kundemøde med indehaver Henrik Korshøj.

> Denne side hed tidligere "Nordvang VVS" — et fiktionaliseret brand brugt som
> offentlig portfolio-demo. Den version er erstattet 2026-07-27 og findes i git
> under tagget `nordvang-demo-2026-07-27`.

## Repositories

| Service | URL |
|---|---|
| GitHub | https://github.com/Buurski/ktvvs |
| Vercel-projekt | https://vercel.com/buurskis-projects/ktvvs |
| Live | https://ktvvs.vercel.app |

Deployment-identifikatorerne (repo-navn, Vercel-projektnavn, `projectId`) må ikke omdøbes.

---

## Stack

Statisk site. Ingen build, intet framework, ingen `package.json`.

| Fil | Rolle |
|---|---|
| `index.html` | Hele forsiden. Retningskontrakten står som kommentar i toppen. |
| `styles.css` | Alle styles. Tokens i `:root`. |
| `main.js` | Mobilmenu, medie-animation, referencefilter, formularvalidering. |
| `PRODUCT.md` | Produktsandhed — hvem kunden er, hvad der er bevist, hvad der ikke må opfindes. |
| `DESIGN.md` | Designsystemet "Anlægstavlen". Læses af impeccable-skillen. |

Skrifter hentes fra Google Fonts (Archivo + Azeret Mono). Ingen andre eksterne afhængigheder.

---

## Billeder

| Sti | Rolle |
|---|---|
| `images/` | Originalarkiv fra kundens eget galleri. Bliver i git som kilde. |
| `images/web/` | Optimerede varianter der faktisk serveres (40–260 KB pr. styk). |
| `.scrape/` | Rå materiale hentet fra ktvvs.dk. Git-ignoreret. |

`.vercelignore` holder originalarkivet ude af upload, så en deploy ikke slæber ~55 MB med.
Tilføjes et nyt billede til siden, skal den optimerede udgave ligge i `images/web/`.

---

## Kontaktformularen

**Formularen sender ingenting.** Den validerer felterne og viser en kvittering, og det er alt.
Der er ingen backend, ingen API-nøgler og ingen mailudbyder i dette repo.

Skal den sende rigtigt, kræver det en serverless function på Vercel plus en Resend-nøgle
som env-var. Læg aldrig nøglen i repoet.

---

## Deploy

Vercel er koblet til GitHub. Push til `main` udløser en produktions-deploy på ~30 sekunder.

```bash
git add -A && git commit -m "besked" && git push
```

Manuelt via CLI:

```bash
vercel deploy --prod
```

---

## Domæne

Serveres på `ktvvs.vercel.app`. Kundens rigtige domæne `ktvvs.dk` peger stadig på deres
gamle WordPress-side hos Simply.com og må ikke røres uden Henriks accept.

Skal demoen på et domæne:
1. https://vercel.com/buurskis-projects/ktvvs/settings/domains
2. Tilføj domænet
3. DNS: `A 76.76.21.21`, eller CNAME `cname.vercel-dns.com` for subdomæner

---

## Miljøvariabler

Ingen. Siden er fuldt statisk.
