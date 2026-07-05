# Nordvang VVS — Design Reference

## Brand

**Nordvang VVS** — VVS-installatør, Herning. Familiedrevet siden 1963.

Tone: solid, lokal, erfaren håndværker. Ikke corporate, ikke flashy.

---

## Color Tokens

| Token | Hex | Use |
|---|---|---|
| `--navy-900` | `#091a2c` | Darkest backgrounds (scroll-anim section) |
| `--navy-800` | `#0e2a47` | Primary navy, headings, nav |
| `--navy-700` | `#1a3a5c` | Hover states, gradients |
| `--navy-600` | `#2a4f73` | Secondary accents |
| `--navy-100` | `#dde4ec` | Light navy tint |
| `--navy-050` | `#eef2f6` | Subtle background wash |
| `--red` | `#d63426` | Primary CTA, accent highlights |
| `--red-700` | `#b22a1f` | Red hover |
| `--cream` | `#f3efe8` | Page background |
| `--cream-2` | `#ede7dc` | Slightly darker cream |
| `--paper` | `#fbfaf7` | Card/surface background |
| `--ink` | `#0a1626` | Body text |
| `--ink-2` | `#1d2a3a` | Secondary text |
| `--mute` | `#6d6759` | Muted/meta text |
| `--line` | `#d8d1c4` | Borders, dividers |

---

## Typography

| Role | Family | Weights |
|---|---|---|
| Display / headings | Bricolage Grotesque | 400 500 600 700 800 |
| Body / UI | Geist | 300 400 500 600 700 |
| Mono / labels | JetBrains Mono | 400 500 600 |

All loaded from Google Fonts with `display=swap`.

### Scale (key sizes)

- H1 hero: `clamp(56px, 7.5vw, 108px)`, weight 800, tracking `-0.045em`
- H2 sections: `clamp(32px, 3.4vw, 52px)`, weight 600, tracking `-0.035em`
- Body: `16px` / `line-height: 1.55`
- Kicker labels: `11–12px`, uppercase, `letter-spacing: 0.14em`, JetBrains Mono

---

## Layout

- **Max content width:** `--maxw: 1720px`
- **Horizontal padding:** `--pad: clamp(20px, 4.2vw, 96px)`
- **Section vertical spacing:** `--sec-y: clamp(72px, 10vw, 144px)`
- **Border radius:** `--radius: 6px`, `--radius-lg: 14px`

### Breakpoints

| px | What changes |
|---|---|
| `≤ 1100` | Hero photo shrinks to 34%, headline widens to 64% |
| `≤ 1024` | Hero goes full-width stacked; photo moves below text |
| `≤ 720` | Nav collapses to hamburger; hero padding reduces |
| `≤ 480` | Further mobile compression |

---

## Sections (page order)

1. **Nav** — sticky, blurs on scroll (`scrolled` class). Logo + links + phone + CTA. Mobile sheet overlay.
2. **Hero** — full-bleed cream section. Left: headline + sub + CTAs + stats row. Right: absolute-positioned photo with caption tag. Scroll cue at bottom.
3. **Scroll-locked animation** — `380vh` sticky section. Video plays via `play()`/`playbackRate` (never `currentTime` scrubbing). Callout fades in on `ended`. Dark navy background.
4. **Fagområder** — 2-column service card grid (6 cards), each with photo, number badge, title, blurb.
5. **Referencer** — filter tabs (Alle / Erhverv / Offentlig / Privat / Energi) + photo grid (7 tiles).
6. **Om os** — split layout: year tag + house photo left, story + timeline right.
7. **Trust strip** — 4-column value-proposition row.
8. **Vi støtter** — 4 support cards with heart icon.
9. **Kontakt** — contact info column + quote form with chip selectors.
10. **Footer** — 4-column links + bottom bar.

---

## Scroll Animation — Video Logic

**File:** `VIdeo/transitionvideo.mp4` (~8s, H.264)

The video plays via `play()`/`playbackRate` — never seeking during playback (avoids H.264 keyframe jank).

| Zone | Video progress | Playback rate |
|---|---|---|
| Start | 0–5% scroll progress | Paused (user sees frame 0) |
| Normal | 5% scroll → last 10% of video | 2.5× |
| End | Last 10% of video | 0.6× (after-state lingers) |

Safety net: if scroll progress ≥ 98% and video unfinished, seek to 92% and play at 0.6× — guarantees `ended` fires within ~0.5s. Scroll is locked for 700ms to ensure callout appears.

Callout (`#sa-callout`) fades in on `ended`: "Sådan ser det ud, når vi er færdige." + CTA.

**Decoder warm-up:** `play().then(() => pause())` called on `loadeddata` to pre-decode the first keyframe.

---

## Tweaks Panel

React 18 + Babel standalone (CDN). Floating panel for design iteration — not shown in production builds unless `tweaks-root` div is present.

| Tweak | CSS custom property | Default |
|---|---|---|
| Logo height | `--logo-h` | `70px` |
| Photo width | `--photo-w` | `40%` |
| Text shift left | `--hero-pad-l` | `160px` |
| Right padding | `--hero-pad-r` | `140px` |

Note: tweaks apply inline styles on `.hero-headline` / `.hero-bottom`. Mobile breakpoint (`≤ 1024px`) overrides these with `!important` to prevent layout breakage.

---

## Assets

| File | Use |
|---|---|
| `assets/logo.png` | Nav + footer wordmark |
| `images/` | 20+ project photos — see `images/INDEX.md` for full list |
| `VIdeo/transitionvideo.mp4` | Scroll-animation before/after transition video |
