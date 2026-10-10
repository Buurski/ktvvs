# KT VVS ApS, Herning — kundeside (aktiv, betalende)
Statisk HTML: `index.html` + `styles.css` + `main.js` + `404.html`, ingen build/framework. Live https://ktvvs.vercel.app · GitHub `Buurski/ktvvs` · Vercel-projekt `ktvvs`. Kundens rigtige domæne `ktvvs.dk` (gammel WordPress hos Simply.com) må ikke røres uden Henriks accept.
Kunde: Henrik Korshøj (ejer, aut. VVS-installatør). Status `aktiv`; han er langsom til at svare. Status/log i kundenoten.
Hårde regler: `C:\Users\Buur\Documents\KnowledgeOS\context\hard-rules.md` (læs først). Router: `C:\Users\Buur\Documents\Websites\AGENTS.md`.

## Opgave | læs | læs IKKE
KB = `C:\Users\Buur\Documents\KnowledgeOS`. Gæt aldrig et faktum; står det ikke her eller i filen, skriv "ved ikke".

| Opgave | læs | læs IKKE |
|---|---|---|
| Tekst/indhold på siden | `index.html`, `PRODUCT.md` (hvad er bevist, hvad må ikke opfindes), `KB\wiki\kunder\ktvvs.md`, `KB\context\brand-og-tone.md` | `C:\Users\Buur\_Arkiv`, andre kunders sites, `.scrape\` |
| Design/CSS | `DESIGN.md` ("Anlægstavlen", kilde til tokens), `styles.css`, kommentaren øverst i `index.html` | nye farver/skrifter udenfor tokens; `kt-vvs\` (handoff-bundle, gitignoreret) |
| SEO | `index.html` (title, meta, schema), `KB\wiki\kunder\ktvvs.md`, `KB\wiki\proces\tilskud-og-fradrag-vvs-2026.md` (fradrag/tilskud) | generiske SEO-skabeloner uden at tjekke siden |
| Deploy | `C:\Users\Buur\Documents\Websites\AGENTS.md`, `KB\wiki\os\agents-detaljer.md` (afsnit "Deploy-disciplin") | `.vercel\` (projekt-id, rør ikke); afsnittet "Deploy" i `cloud.md` og `scripts\safe-push.sh` (se Regler) |
| Kinly-priser, startpris, tilbud | `KB\context\priser.md` (kanon; hjemmeside fra 3.997 kr) | gamle tilbud i wiki; Henriks aftale (5.000 kr + 250 kr/md) er individuel |
| Kundefakta, kontakt, status, log | `KB\wiki\kunder\ktvvs.md` | `C:\Users\Buur\Documents\Kunder\`, `.send_queue\` |
| Adresser (kunder, bl.a. Ikast Autoservice), tværgående fakta (Planuko-wordmark, HQ-gates, modelvalg) | `KB\context\fakta.md` | Lucas' privatadresse må aldrig stå nogen steder |
| Selskab, CVR, adresseregel | `KB\context\selskab.md` | |
| Mails/udgående tekst til kunden | `KB\context\brand-og-tone.md`, `KB\context\forbidden-phrases.md` | |
| Alle repos og sites | `C:\Users\Buur\Documents\REPOS.md`, `C:\Users\Buur\Documents\Websites\SITES.md` | |

## Kommandoer
Ingen `package.json`, ingen build, ingen `verify`-script på `main`.
- Dev: `python -m http.server 8080` i repo-roden → http://localhost:8080
- Deploy: kun Lucas merger til `main`. `vercel deploy --prod` kun efter Lucas' ja.
- Formular + `npm run verify` findes kun på grenen `opt/gn8-formular` i worktree `C:\Users\Buur\Documents\Workflows\optimering-2026-10\wt\gn8`. Arbejd på formularen der, ikke her.

## Arkitektur (kort)
- Tokens i `:root`: fem medie-farver `--vand`/`--varme`/`--luft`/`--gas`/`--metal` (+ `-deep`), stål `--s950`…`--s100`, `--paper`, `--surface`; Archivo + Azeret Mono (kun felt-etiket). Skarpe hjørner, logoets cirkel er eneste kurve. Afvig aldrig.
- Sektioner (id): `nav` → `hero` → `skema` → `ref` → `rating` → `arbejde` → `tilskud` → `om` → `stoetter` → `kontakt` → `fod`.
- `images/` = originalarkiv (i git, ikke uploadet via `.vercelignore`), `images/web/` = det der serveres: nye billeder skal optimeres dertil. `hero-a..i.html`/`heroer.html` = hero-varianter til Henrik, ikke produktion.
- Faldgruber (kundenoten): gammelt håndværkerfradrag (2016) er ophævet; billedtekster kun opgavetype, aldrig kundenavn; antal ansatte, åbningstider og døgnvagt er ukendt. Untracked: `scripts/trace-mark.py`.

## Regler
1. Aldrig `main` uden Lucas: ny gren + Vercel-preview, Lucas merger. Samler ændringer; maks 2-3 prod-deploys/dag; `[skip vercel]` ved docs. `cloud.md` ("push til main udløser prod", `git add -A`) og `scripts\safe-push.sh` (`git add -A` + push) er forældede: følg denne fil.
2. "Done" = live-check: åbn preview/prod og print HTTP-status eller screenshot; ikke kun "ser rigtigt ud i koden".
3. Udgående (mails, fakturaer, Messenger til Henrik) er KLADDER; Lucas sender selv. Intet sendes, ingen konti, køb eller DNS.
4. Dansk. Ingen AI-slop (ingen gradient-blobs, emoji-ikoner, fyldtekst). Opfind aldrig referencer eller tal; hold dig til `PRODUCT.md`.
5. Én kode-agent pr. worktree; commit med eksplicit `git add <sti>`, aldrig `git commit -a`; ingen stash/reset/clean.
