# Nordvang VVS (demo) — Cloud & Deployment

> Brand er fiktionaliseret til "Nordvang VVS". Infrastruktur-navne nedenfor
> (GitHub-repo, Vercel-projekt, deployment-URL) er de faktiske, uændrede
> deployment-identifikatorer og må ikke omdøbes.

## Repositories

| Service | URL |
|---|---|
| GitHub | https://github.com/Buurski/ktvvs |
| Vercel project | https://vercel.com/buurskis-projects/ktvvs |
| Live URL | https://ktvvs.vercel.app |

---

## Stack

Plain static site — no build step, no framework, no `package.json`.

| File | Role |
|---|---|
| `index.html` | Single-page HTML |
| `styles.css` | All styles |
| `main.js` | All interactions (nav, scroll animation, form, menu) |
| `tweaks-panel.jsx` | Reusable React tweaks panel component |
| `tweaks-app.jsx` | Tweaks panel instance with Nordvang VVS controls |

React and Babel are loaded via CDN (unpkg) — no local build required.

---

## Vercel Configuration

Vercel auto-detected: no framework, output directory = `.` (root).

- **Build command:** none
- **Output directory:** `.`
- **Install command:** none
- **Region:** Washington D.C. (iad1)

Vercel project is linked to the GitHub repo. Every push to `main` triggers an automatic production deployment.

---

## Deploy Workflow

### Automatic (recommended)

```bash
git add .
git commit -m "your message"
git push
```

Vercel picks up the push and deploys to production within ~30 seconds.

### Manual via CLI

```bash
vercel deploy --prod
```

Requires Vercel CLI installed and authenticated. `.vercel/` directory in project root stores the project link.

---

## DNS / Domain

Currently served on `ktvvs.vercel.app` (Vercel default domain).

To add a custom domain (e.g. `nordvangvvs.dk (fiktivt)`):
1. Go to https://vercel.com/buurskis-projects/ktvvs/settings/domains
2. Add the domain
3. Point DNS: `A 76.76.21.21` (or CNAME `cname.vercel-dns.com` for subdomains)

---

## Environment

No environment variables required — fully static, no server-side logic, no API keys.

---

## File Size Notes

| Asset | Size |
|---|---|
| `VIdeo/transitionvideo.mp4` | ~11 MB |
| All images combined | ~30 MB |

Images and video are committed directly to git (no LFS). GitHub allows files up to 100 MB. If the video is re-encoded to a smaller size in the future, update it in `VIdeo/` and push.

---

## Git

- **Branch:** `main`
- **Remote:** `origin → https://github.com/Buurski/ktvvs.git`
- **Ignored:** `kt-vvs/`, `.playwright-mcp/`, `*.tar.gz`, `*.zip`, `images/*.mp4`, `.vercel`
