---
name: KT VVS
description: Anlægstavlen — et installationsfirmas hjemmeside sat som et teknisk anlægsskema
colors:
  varme: "#ef4035"
  varme-deep: "#c2291f"
  varme-deeper: "#9e2118"
  label: "#5b6773"
  vand: "#0079c2"
  vand-deep: "#005a8c"
  luft: "#00857e"
  luft-deep: "#00615c"
  gas: "#e39400"
  gas-deep: "#a66a00"
  metal: "#5c6670"
  metal-deep: "#3d454d"
  s950: "#0d1117"
  s900: "#161c24"
  s800: "#212a34"
  s600: "#47535f"
  s400: "#7e8b98"
  s200: "#c9d1d8"
  s100: "#dfe4e9"
  paper: "#eef1f4"
  surface: "#fbfcfd"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(34px, 5.6vw, 76px)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 100"
  data:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(30px, 4vw, 58px)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 118"
    fontFeature: "'tnum' 1"
  data-sm:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(30px, 3.1vw, 46px)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 118"
    fontFeature: "'tnum' 1"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(26px, 3.2vw, 46px)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  title-lg:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  body-sm:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
  caption:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
  band-name:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "clamp(19px, 1.5vw, 26px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.1em"
  karakter:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(40px, 4.4vw, 58px)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "0"
    fontVariation: "'wdth' 112"
  label:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.13em"
  label-sm:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.1em"
rounded:
  sharp: "0"
  chip: "2px"
spacing:
  section: "clamp(72px, 9vw, 132px)"
  pad: "clamp(18px, 4vw, 72px)"
components:
  button-primary:
    backgroundColor: "{colors.varme-deep}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sharp}"
    padding: "17px 30px"
    typography: "{typography.title}"
  button-primary-hover:
    backgroundColor: "{colors.varme-deeper}"
    textColor: "{colors.surface}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.s950}"
    rounded: "{rounded.sharp}"
    padding: "16px 29px"
  medium-band:
    backgroundColor: "{colors.s900}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sharp}"
    padding: "22px 28px"
  spec-row:
    backgroundColor: "transparent"
    textColor: "{colors.s950}"
    rounded: "{rounded.sharp}"
    padding: "14px 0"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.s950}"
    rounded: "{rounded.sharp}"
    padding: "14px 14px"
---

# Design System: KT VVS

## Overview

**Creative North Star: "Anlægstavlen"**

Et VVS-anlæg fortæller sin egen historie, hvis man kan læse det: hvad løber der i røret, hvilken vej løber det, hvor meget. Danske installatører aflæser den historie hver dag — i rørmærkning, i mærkepladen på et ventilationsaggregat, i tegningens signaturforklaring. Denne hjemmeside er sat i den notation. Ikke som pynt eller tema, men som organiseringsprincip: KT VVS' ni fagområder er ikke ni tilfældige ydelser, de er fem **medier** — vand, varme, luft, gas og metal. Hvert medium har sin farve, og den farve følger med gennem hele siden, fra oversigten til referencelisten til kontaktformularen.

Farven er ikke hentet fra et stemningsbræt. Den er hentet fra firmaets eget logo, som allerede *er* et flowdiagram: rød overhalvdel med pil op er frem og varme, blå underhalvdel med pil ned og bølge er retur og vand. KT VVS har kørt rundt med sit eget designsystem på siden af varevognen siden før internettet. Siden gør det bare synligt.

Grundfladen er kølig stål-hvid, aldrig creme. Tallene er store, sat med udvidet bredde og tabulære cifre som værdier på en mærkeplade. Hjørner er skarpe overalt — industriel skiltning har ikke afrundede hjørner, og logoets cirkel er systemets eneste kurve, hvilket er præcis det der gør den til et mærke. Bevidst fravalgt: den cremefarvede højkontrast-serif "håndværker-editorial" (den forrige demo var netop dét) og den blå/hvide skabelon-håndværkerside med ikon-kort. Det er kategoriens to forudsigelige udfald, og systemet her er defineret ved at være ingen af dem.

**Key Characteristics:**
- Fem medier, fem farver — farve bærer betydning, aldrig dekoration
- Store tabulære tal som primært visuelt materiale
- Skarpe hjørner overalt; logoets cirkel er systemets eneste kurve
- Kølig stål-palet — aldrig creme, aldrig varmt papir
- Mono-etiketter i versaler som mærkepladens felttekst
- Rigtige projektnavne og rigtige mængder frem for påstande

## Colors

En kølig stål-grundflade med fem mættede medie-farver, hvoraf de to vigtigste er taget direkte fra virksomhedens logo.

### Primary
- **Fremrød** (`#ef4035`): Logoets øverste halvdel — frem, varme. Bærer varme-mediet (jordvarme, varmepumper, solvarme, brændekedel, energioptimering) og er sidens primære handlingsfarve.
- **Returblå** (`#0079c2`): Logoets nederste halvdel — retur, vand. Bærer vand-mediet (VVS, badeværelser) og alle links. **Returdyb** (`#005a8c`) bruges når blå skal bære tekst under 19px; den lyse returblå har ikke kontrast nok dér.

### Secondary
- **Luftgrøn** (`#00857e`): Ventilation. Paletten eneste farve der ikke stammer fra logoet — valgt fordi den er læselig ved siden af både rød og blå uden at konkurrere, og fordi ventilation er forretningens tungeste ben og fortjener egen identitet.
- **Gasokker** (`#e39400`): Gas og oliekedel. Gul er gassens farve i enhver europæisk mærkningsnorm; okkeren er den mørkeste udgave der stadig læses som gul.

### Tertiary
- **Zinkgrå** (`#5c6670`): Blikkenslager. Hentet fra zinkens egen "anthra"-variant, som virksomheden selv beskriver på sin gamle side. Det eneste medie hvis farve er materialets faktiske farve.

### Neutral
- **Stålpapir** (`#eef1f4`): Sidens grundflade. Køligt, ikke varmt — den enkeltbeslutning der adskiller siden mest fra kategoriens standardudseende.
- **Plade** (`#fbfcfd`): Kort, felter og løftede flader. Bevidst ikke ren hvid; ren `#ffffff` læses som skærm, den forskudte værdi læses som materiale.
- **Maskinsort** (`#0d1117`) → **stål-900** (`#161c24`) → **stål-800** (`#212a34`): Mørke felter. Referencelisten og anlægsskemaet ligger her. Bevidst ikke ren sort, af samme grund.
- **Stål-600** (`#47535f`): Sekundær tekst.
- **Stål-400** (`#7e8b98`): Etiketter, meta, deaktiveret.
- **Stål-200** (`#c9d1d8`) / **stål-100** (`#dfe4e9`): Linjer og skillelinjer.

### Named Rules
**Medie-reglen.** En farve betyder ét medie og altid det samme medie. Rød er varme, blå er vand, grøn er luft, okker er gas, grå er metal. En farve må aldrig bruges dekorativt et sted hvor dens medie ikke er på tale. Test: peg på et vilkårligt farvet element og sig hvilket medie det tilhører. Kan du ikke det, er farven forkert.

**Den ene undtagelse**, og den er navngiven: varme-rød har også rollen som *handling og advarsel* — den primære knap, telefon-fladen og den ene advarsel i tilskudssektionen. Rødt betyder handling og fare i enhver dansk brugsflade, og at nægte det ville koste mere klarhed end reglen vinder. Ingen anden medie-farve har en tilsvarende undtagelse: karakterer, kvitteringer, navigationslinks og beløb er ikke medier og males derfor i stål.

**Flade-reglen.** Medie-farve optræder som flade — et bånd, et felt, en fyldt chip — aldrig som en 4px kant eller et lille badge på en ellers grå komponent. Signalfarve er flade, gråt er struktur. Bruges farven som accent, kollapser hele industri-logikken og siden læses som en generisk SaaS-side.

**Den store-røde-regel.** Logoets fremrød (`#ef4035`) må kun bære tekst der er stor: mindst 24px, eller 19px i vægt 700. Hvid på fremrød giver 3,85:1 og består derfor kun kravet for stor tekst. Flader der bærer små etiketter — knapper, telefon-pladen, mobilbjælken — bruger **frem-dyb** (`#c2291f`, 5,75:1) med **frem-dybere** (`#9e2118`) som hover. Konsekvensen er et gode: den rene logo-rød optræder kun i mærket og i varme-båndet, og bliver derved sjælden.

**Etiket-farve-reglen.** Mono-etiketter er små, og stål-400 (`#7e8b98`) giver kun 3,07:1 på stålpapir. På lys flade bruges derfor **etiket-blæk** (`#5b6773`, 5,09:1). Stål-400 er stadig korrekt til etiketter på mørk flade.

**Flow-reglen.** Rød peger op, blå peger ned. Enhver pil, retningsmarkør eller bevægelse i systemet respekterer logoets grammatik. En rød nedadgående pil er en fejl.

## Typography

**Display Font:** Archivo (variabel, bredde-akse 62–125)
**Body Font:** Archivo
**Label/Mono Font:** Azeret Mono

**Character:** Én industriel grotesk til alt, plus en teknisk mono til felt-etiketter. Archivos bredde-akse er hele pointen: brødtekst står i normal bredde, mens tal sættes udvidet (`wdth 118`) og får den stemplede, brede karakter fra en maskinmærkeplade uden at skifte skrift. Sammensætningen skal ligne et veludført teknisk dokument, ikke et bureaus hjemmeside.

### Trinstigen

Alle skriftstørrelser i systemet kommer fra denne stige. Der findes ingen mellemtrin:

`10 · 11 · 13 · 15 · 17 · 19 · 22 · 26 · 30 · 34 · 40 · 46 · 58 · 76` (px)

Flydende størrelser bruger kun trin fra stigen som endepunkter (`clamp(30px, 4vw, 58px)`).
Værdier som 15,5 · 14,5 · 13,5 · 20 · 23 · 31 er drift, ikke design.

### Hierarchy
- **Display** (800, `clamp(34px, 5.6vw, 76px)`, 0.94): Kun sidens åbningsudsagn.
- **Data** (700, `clamp(30px, 4vw, 58px)`, 0.9, `wdth 118`, `tnum`): Mængder og tal — m³/h, m², årstal, antal. Sidens vigtigste visuelle materiale.
- **Data-sm** (700, `clamp(30px, 3.1vw, 46px)`): Tal i tættere sammenhænge, fx medie-båndet.
- **Headline** (700, `clamp(26px, 3.2vw, 46px)`, 1.04): Sektionsoverskrifter.
- **Title-lg** (700, 26px, 1.2): Ordmærke og panel-overskrifter.
- **Title** (600, 19px, 1.25): Kortoverskrifter, medie-navne, knapper.
- **Body** (400, 17px, 1.6, maks 68ch): Brødtekst.
- **Body-sm** (400, 15px, 1.5): Tættere brødtekst i bånd, tabeller og kort.
- **Caption** (400, 13px, 1.5): Kildeangivelser, fodnoter, fejltekst.
- **Label** (Azeret Mono 500, 11px, `0.13em`, VERSALER): Felt-etiketter, medie-mærkning, meta. Mærkepladens sprog.
- **Label-sm** (Azeret Mono 500, 10px, `0.1em`, VERSALER): Billedtekster og tabel-enheder.

### Named Rules
**Mærkeplade-reglen.** Ethvert tal siden viser, sættes i Data-rollen med tabulære cifre og sin enhed som separat, mindre etiket — `11.500` stort, `m³/h` småt. Et tal sat som brødtekst er en spildt mulighed.

**Etiket-reglen.** Mono er en *rolle*, ikke en stemning: felt-etiketter, enheder, meta og tabel-enheder. Aldrig brødtekst, aldrig sektionsoverskrifter, aldrig en overskrift der bærer indhold. Mono som brødtekst gør siden til en terminal-parodi og dræber læsbarheden på mobil.

Én dokumenteret undtagelse fra 13px-loftet: **medie-navnet i farvefeltet** sættes i mono ved mindst 22px/700. Det er ikke en etiket der beskriver et felt — det *er* pladens stemplede tekst, og det er den ene mono-forekomst der skal kunne læses på afstand. Størrelsen er samtidig et tilgængelighedskrav, se Den store-røde-regel.

## Layout

Et 12-kolonners grid inden for `--maxw: 1600px` med `--pad: clamp(18px, 4vw, 72px)`. Sektionsrytmen er `clamp(72px, 9vw, 132px)` lodret, altid med mere luft over en overskrift end under.

Sidens tilbagevendende spatiale figur er **båndet**: en fuldbredde-vandret stribe der bærer ét medie eller én datarække. Bånd stables uden mellemrum, så de danner et skema frem for en liste af kort. Hvor kategorien ville sætte et kort-grid, sætter dette system stablede bånd.

Tætheden skifter bevidst: anlægsskemaet og referencelisten er tætte og datatunge; om-os og kontakt er åbne og rolige. Et tæt afsnit efterfølges af et roligt.

Brydepunkter:
- **1180px** — hero'ens billedspalte falder under teksten; medie-båndets fotokolonne falder bort.
- **960px** — navigationen kollapser til hamburger; om- og kontaktsektionerne bliver enkeltspaltede.
- **860px** — medie-båndet bliver til én kolonne med farvefeltet som header; referencetabellen bliver et to-kolonne-grid pr. række.
- **560px** — display-skala reduceres, sidepolstring til 18px, telefon-handlingen bliver en fast bjælke i bunden.

**Skjul-reglen.** Rækker og lister der kan filtreres, skal have en eksplicit `[hidden]{display:none}` i hvert brydepunkt hvor de får `display:grid` eller `display:flex`. En layout-display slår `[hidden]` fra UA-arket, og resultatet er et filter der ser ud til at virke og ikke gør noget.

## Elevation & Depth

Systemet er **fladt**. Ingen slagskygger, ingen glas, ingen glød. Dybde skabes udelukkende ved tonal lagdeling: stålpapir som grundflade, plade som løftet flade, maskinsort som nedsænket datafelt. En mørk sektion er "inde i maskinen"; en lys sektion er dokumentet der beskriver den.

Den eneste tilladte adskillelse er en 1px linje i stål-200. Rammer om billeder er 1px kant, ikke skygge.

### Named Rules
**Flad-reglen.** Ingen `box-shadow` med spredning. Overtræder et element den regel, mangler det i stedet et skift i baggrundstone.

## Shapes

Skarpe hjørner overalt (`0`). Chips og små mærker må have `2px` — svarende til en stanset kant, ikke en afrunding. Ingen cirkler ud over logoets eget mærke og de pile der er afledt af det.

Billeder beskæres i faste, rektangulære formater og har 1px kant i stål-200. Ingen afrundede billedhjørner, ingen masker, ingen figurbeskæringer.

Retningspile tegnes som trekanter afledt af logoets pileform: spids top, flad basis — aldrig en streg med pilehoved.

## Components

### Buttons
- **Shape:** Skarp (`0`), ingen radius.
- **Primary:** Fremrød flade, plade-hvid tekst, `17px 30px`, Title-rolle. Kun til den primære handling i en sektion.
- **Hover / Focus:** Baggrund til frem-dyb (`#c2291f`) på 120ms. Fokus giver 2px offset-outline i maskinsort — aldrig en glød.
- **Ghost:** Transparent med 1px stål-200 kant, maskinsort tekst. Hover fylder med stål-100.
- **Telefon-handlingen:** Behandles som en dataværdi, ikke en knap — mono-etiket `TELEFON` over nummeret sat i Data-rollen. Det er sidens vigtigste handling og må ikke se ud som en generisk CTA.

### Chips
To slags, og de må ikke forveksles.

- **Medie-chip** (i tabellen): fyldt med mediets farve, plade-hvid tekst, `2px` radius, Label-sm. Fyldt, ikke omridset — se Flade-reglen. Den mærker et medie.
- **Filter-chip** (over tabellen): 1px stål-200 kant og stål-600 tekst; valgt fylder med **maskinsort**, ikke med en medie-farve. Et filter er ikke et medie, og at farve det som ét ville bryde Medie-reglen.
- **Valg-chip** (i formularen): som filter-chippen, men her *er* valget et medie, så den valgte fylder med mediets farve. "Noget andet" fylder med maskinsort.

### Cards / Containers
- **Corner Style:** Skarp (`0`).
- **Background:** Plade på stålpapir, eller stål-800 på maskinsort.
- **Shadow Strategy:** Ingen — se Elevation.
- **Border:** 1px stål-200 på lys flade; 1px `rgba(255,255,255,.09)` på mørk.
- **Internal Padding:** `lg` (36px), reduceret til `md` (20px) under 860px.

### Inputs / Fields
- **Style:** Plade-flade, 1px stål-200 kant, skarpe hjørner, `14px` polstring. Etiketten står over feltet i Label-rollen.
- **Focus:** Kanten skifter til returblå og tykkelsen til 2px. Ingen glød, intet skift i baggrund.
- **Error:** Kant til fremrød, fejltekst under feltet i 13px.

### Navigation
- Fast topbjælke i maskinsort med logomærket til venstre og telefonnummeret som dataværdi til højre. Links i Label-rollen, versaler, mono.
- Aktiv/hover: 2px understregning i farven for det medie linket peger på — navigationen er selv farvekodet.
- Under 860px: mærke og telefon bliver stående, resten går i et fuldskærms-panel i maskinsort.

### Medie-båndet (signaturkomponent)
Systemets definerende komponent. En fuldbredde-række der repræsenterer ét medie, bygget som fire kolonner: **farvefelt · krop · tal · foto**.

1. **Farvefeltet** (`clamp(130px, 15vw, 225px)`) er en massiv flade i mediets farve. Det bløder ud i venstre skærmkant via negativ margen — et mærkningsbånd stopper ikke ved en margen. Bærer mediets symbol stort med navnet under, i mono-versaler, vægt 700.
2. **Kroppen** bærer de fagområder mediet dækker (Title) og en beskrivelse (Body-sm).
3. **Talkolonnen** bærer én rigtig mængde fra referencelisten i Data-sm med enheden som mono-etiket.
4. **Fotokolonnen** bærer ét ægte projektfoto. Falder bort under 1180px, hvor pladsen er vigtigere end billedet.

Bånd stables kant mod kant uden mellemrum, så de danner ét sammenhængende skema. Under 860px bliver rækken til én kolonne med farvefeltet som fuldbredde-header.

Farven er en flade der fylder et helt felt — aldrig en `border-left`-stribe på en ellers grå række. En farvet venstrekant over 1px er kategoriens standardgreb og gør mediet til dekoration i stedet for struktur.

### Signaturforklaringen (signaturkomponent)
Tegningens eget greb, og det der gør tesen synlig i stedet for påstået. En vandret liste med de ni fagområder, hvert med sit mediesymbol i mediets farve. Den står mellem sektionsoverskriften og medie-båndene, så læseren ser kortlægningen ni→fem, før hun møder de fem.

Hvert felt er en **knap**: tryk fører til mediets bånd og fremhæver det. Kortlægningen bliver dermed noget man kan bruge, ikke kun læse. Knappen bærer 1px kant i neutral tone og skifter til mediets farve ved hover og valg.

Uden den er overskriften "Ni fagområder. Fem medier." en påstand siden aldrig indfrier.

### Mediesymbolerne
Fem tegnede symboler, ét pr. medie: **dråbe · flamme · luftstrøm · gasflaske · tag med nedløb**. De er tegnet i huset, i logoets egen geometri, og bruges tre steder: signaturforklaringen, medie-båndets farvefelt og formularens valgfelter.

- Kun streg, aldrig fyld. Vægt 1,7 ved små størrelser, 1,35–1,5 ved store, så den optiske tyngde er ens.
- Symbolet arver altid sit medies farve — på farvefeltet er det hvidt, fordi feltet selv er farven.
- I farvefeltet står symbolet **over** navnet, ikke ved siden af, og fylder `clamp(46px, 4.6vw, 68px)`. Et lille ikon ved siden af en etiket er pynt; et stort symbol over navnet er skiltning.

Importér aldrig en ikonpakke (Phosphor, Lucide, Feather). Et genkendeligt pakkeikon gør siden til enhver anden håndværkerside, og det er præcis det udfald systemet er bygget for at undgå. Nye symboler tegnes efter de samme regler.

### Spec-rækken (signaturkomponent)
Referencelistens grundform: en vandret række med projektnavn til venstre, mediets chip i midten og mængden højrestillet i tabulære cifre. Rækker adskilles af 1px linjer, ikke af kort. Hele referencelisten er én sammenhængende tabel, ikke et galleri.

## Bevægelse

Fire bevægelser, ikke flere. Hver er bundet til scroll eller et klik, og ingen af dem er dekoration.

**Scroll-reglen.** Scrollet må aldrig kapres. Ingen wheel-hijacking, ingen tvungen sektionsvis navigation, ingen forsinket "smooth scroll"-emulering. `position: sticky` er tilladt, fordi den er systemets egen: brugeren kan altid fortsætte, afbryde og vende om, og den opfører sig rigtigt på berøring. Bevægelse er en **funktion af scroll-positionen**, aldrig noget der overtager den.

1. **Mærkets flugt.** Logoet står stort i hero'en og rejser op i navigationen mens man scroller, hvor det dokker og ordmærket toner ind ved siden af. Start- og slutposition læses af to rigtige pladsholdere i DOM'en, aldrig af hårdkodede tal — så rammer rejsen på alle bredder. Kun `transform` og `opacity`.
2. **Flowsporene.** Tynde spor i hero'ens højre side; rødt løber op, blåt løber ned. Logoets egen aflæsning gjort til bevægelse. Skjules under 700px, hvor de ville løbe hen over teksten.
3. **Arbejdssporet.** Sektionen "Udført arbejde" pinnes i én skærmhøjde mens billederne kører sideværts. Under 961px og ved reduceret bevægelse falder den tilbage til en almindelig vandret scroller med `scroll-snap` — den native løsning er bedre på berøring end en efterlignet.
4. **Indløb.** Medie-felterne løber ind fra venstre i flowets retning; afsnit toner ind med 16px. Begge har et sikkerhedsnet-timeout, fordi en IntersectionObserver springer elementer over ved hurtig scroll, og et farveløst felt er værre end en manglende animation.

**Aldrig animér fra usynlig tilstand uden garanti.** Er startpunktet `opacity: 0` eller `scaleX(0)`, må skjulningen først sættes af scriptet selv (`.js`-klassen), så indholdet står fremme uden JavaScript. Ellers forsvinder designet for dem der aldrig får scriptet.

**Dyre egenskaber animeres ikke.** `filter`, `box-shadow`, `width`, `top` og `background` hører ikke til i en animation. Kun `transform` og `opacity`.

`prefers-reduced-motion: reduce` slår mærkets flugt, flowsporene, det sticky arbejdsspor og alle indløb fra. Siden skal være fuldt brugbar uden en eneste bevægelse.

## Do's and Don'ts

### Do:
- **Do** brug farve til at betyde et medie og kun det. Fem farver, fem medier, ingen undtagelser.
- **Do** læg medie-farve som flade — bånd, felt, fyldt chip.
- **Do** sæt ethvert tal i Data-rollen med tabulære cifre og enheden som separat mono-etiket.
- **Do** brug rigtige projektnavne fra referencelisten frem for generiske formuleringer. "Herning Kommune, Ågården Vildbjerg — 11.500 m³/h" slår enhver påstand om kapacitet.
- **Do** hold hjørner skarpe. Logoets cirkel er systemets eneste kurve.
- **Do** stabl bånd kant mod kant hvor kategorien ville sætte et kort-grid.
- **Do** giv telefonnummeret dataværdi-behandling og hold det nåeligt fra enhver position på mobil.

### Don't:
- **Don't** brug creme, varmt papir eller beige. Grundfladen er kølig stål-hvid. Den forrige demo var creme; det er præcis den fejl dette system retter.
- **Don't** brug ren `#000` eller `#ffffff` som flade. De forskudte værdier læses som materiale; de rene læses som skærm.
- **Don't** brug en højkontrast-display-serif. Systemet har én grotesk og én mono.
- **Don't** sæt brødtekst i mono. Mono er et felt-navn, ikke en stemning.
- **Don't** opfind tekniske etiketter uden data bag — koordinatudlæsninger, sigtekors, tilfældige hex-strenge. En etiket skal indeksere noget rigtigt, ellers er den attrap og gennemskues.
- **Don't** tilføj `box-shadow` med spredning, glasflader eller gradienter. Dybde kommer fra tonal lagdeling.
- **Don't** tegn en rød nedadgående pil eller en blå opadgående. Flow-reglen er logoets egen grammatik.
- **Don't** brug generiske ikon-kort til fagområderne. Medie-båndet erstatter dem, og et ikon-grid er kategoriens standardudseende. Husets egne mediesymboler er ikke det samme som et importeret pakkeikon i et kort.
- **Don't** kapr scrollet. Sticky er tilladt, wheel-hijacking er ikke.
- **Don't** animér fra en tilstand hvor indholdet er usynligt, uden at scriptet kan garantere at sende det frem igen.
- **Don't** brug en farvet `border-left` over 1px på rækker, kort eller callouts. Mediet skal fylde et felt, ikke kante en grå boks.
- **Don't** sæt en mono-etiket over hver eneste sektion. Etiketten hører til i datakontekst — felter, mængder, medier — ikke som fast sektions-øjenbryn.
- **Don't** nummerér sektioner 01/02/03 medmindre rækkefølgen selv bærer information læseren skal bruge.
- **Don't** afrund billedhjørner eller læg billeder i masker.
- **Don't** opfind mængder, kundeudtalelser, priser eller svartider. Alt talmateriale skal kunne findes i PRODUCT.md's beviskapitel.
