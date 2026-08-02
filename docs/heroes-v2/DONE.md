# KT VVS, hero-varianter runde 2

Branch: `feat/heroes-v1-2026-08-02`. Intet merget til `main`. `index.html` er urørt.

## Hvad der ændrede sig fra runde 1

Runde 1 (A, B, C) blev vurderet som for mørk, for tekstlig og for tæt på den nuværende
forside. Runde 2 flytter tre ting:

1. **Lys grundflade i alle tre.** Ingen mørklagte fotos, ingen hvid tekst på sort. Hvor
   der er foto, ligger der en lys vask over, og typografien er næsten sort. Det er den
   omvendte af kategoriens standardgreb, og det er hele grunden til at den ikke ligner
   en almindelig håndværkerside.
2. **Færre ord.** Overskrift på fire til seks ord, én enkelt underlinje. Ingen af de tre
   heroer har mere end 30 ord over folden.
3. **Telefonen er ikke længere en rød knap.** Nummeret står som en dataværdi i stor,
   sort sats med en 2px linje under. Den røde flade var det element der trak siden mod
   det billige, og den er væk fra hero'en i alle tre.

Derudover ligger der nu to ekstra logofiler, `assets/kt-vvs-mark-mono.svg` (blæk) og
`assets/kt-vvs-mark-hvid.svg`. Hero D bruger blæk-udgaven, så logoets rød og blå bliver
sjælden i stedet for at være det første øjet rammer. D, E og F viser derfor tre
forskellige logo-behandlinger, og det er et selvstændigt valg Henrik kan tage stilling til.

## De tre varianter

### D, "Røret" (`hero-d.html`)
Fuldbredde-foto af trykluftføringen over en industritagflade, `images/web/g-trykluft2.jpg`.
Valgt fordi det er lyst, skarpt og det eneste motiv hvor den brandblå farve optræder som
et rigtigt rør i stedet for som grafik. Den lyse vask går fra 98 procent i venstre kant
til helt klar ved 74 procent, så teksten har kontrast og fotoet stadig står skarpt.
Subtil parallax, kun `transform`. Logo i blæk. Under hero'en en tynd stribe med bygherrer.

Overskrift: "Alt hvad der løber i et rør."

### E, "Mærkepladen" (`hero-e.html`)
Intet foto over folden. Hero'en er ét tal: 11.500 m³/h sat i 240px, med projektet under
og resten som en smal målerrække. Den tæller op én gang. Det er den variant der er
sværest at forveksle med nogen anden VVS-side, og den er samtidig den mest afdæmpede.
Videreudvikling af C fra runde 1, som var den du bedst kunne lide, men lysere og med ét
tal i stedet for fire lige store.

### F, "To flader" (`hero-f.html`)
Lyst split. Venstre er stålpapir med stor rolig sats, højre er ét stillestående billede i
fuld højde: `images/web/g-villatag.jpg`, nylagt tag med hvid skorsten, marker og
vindmøller. Intet slideshow. Ét godt billede slår fire middelmådige der skifter, og det
var netop rotationen plus det rodede kranfoto der gjorde B kedelig.

Overskrift: "Fra taget til teknikrummet."

## Billedvalg og fravalg

| Fil | Brugt | Hvorfor |
|---|---|---|
| `g-trykluft2.jpg` | Hero D | Lyst, skarpt, brandblåt rør diagonalt gennem billedet |
| `g-villatag.jpg` | Hero F | Blå himmel, glaseret tegl, hvid skorsten, midtjysk landskab |
| `om-skilt.jpg` | Fravalgt | Firmaets eget skilt og vogne, men for rodet: stillads, stiger, paller |
| `hero-ventilation.jpg` | Fravalgt | Kranløftet kanal med KT VVS-vogne. Stærk historie, men lavopløst og rodet |
| `hero-anlaeg-*.jpg` | Fravalgt | Mørkt teknikrum, det motiv den nuværende forside allerede bruger |

## Skal bekræftes af Henrik inden noget går live

- **Danish Crown** står i bygherre-stribe i D. Navnet findes ikke i referencelisten
  hentet fra ktvvs.dk. Det står i repoets eget oprindelige billedindeks, hvor syv fotos
  hed `danish-crown-*.jpg`. Det er sandsynligvis rigtigt, men det er ikke dokumenteret,
  og Henrik skal sige ja før det bliver stående.
- **"Ring til Henrik"** i hero D i stedet for "Ring til os". Varmt og lokalt over for
  private, men Henrik skal ville have sit navn på knappen.
- **Dilling** er ikke brugt nogen steder. Der er ingen dækning for navnet i repoet.
- **4.000 m²** i E og F er største VVS-entreprise fra referencelisten, Them Bolighus.
  Tallet er dokumenteret, projektnavnet er udeladt.

## Preview

Vercel-previewet på branchen har deployment protection slået til og svarer med en
Vercel-login-side for alle der ikke er logget ind på `buurskis-projects`. Linket kan
altså ikke sendes videre til Henrik som det står. Enten slås beskyttelsen fra i Vercel
for previews, eller også bruges screenshottene.

- Branch-preview: `https://ktvvs-git-feat-heroes-v1-2026-08-02-buurskis-projects.vercel.app/hero-d.html` (og `-e`, `-f`)
- Lokalt: `python -m http.server` i repoets rod, så `/hero-d.html`

Screenshottene her er taget fra præcis de filer der ligger i commit'en, 1440x900 og 375x812.

## Runde 1 ligger stadig på branchen

`hero-a.html`, `hero-b.html` og `hero-c.html` er ikke slettet, og screenshots ligger i
`docs/heroes-v1/`. C er værd at holde ved siden af E, fordi E er dens efterfølger.
