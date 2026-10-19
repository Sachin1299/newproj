# Deployment Guide

The website is deployed to **GitHub Pages** and served through the custom domain **bhagirathitsolutions.co.in**.

---

## How It Works

```
React Source Code (main branch)
        ↓
    npm run build        ← creates ./build/
        ↓
    npm run deploy       ← pushes ./build/ to gh-pages branch
        ↓
  GitHub Pages           ← serves from gh-pages branch
        ↓
  CNAME record           ← bhagirathitsolutions.co.in → GitHub Pages
```

---

## Deploy Steps

```bash
# 1. Make sure your changes are saved, then run:
npm run deploy

# This automatically runs:
#   npm run build      (react-scripts build)
#   gh-pages -d build  (pushes build/ to gh-pages branch)
```

> Allow 1–2 minutes for GitHub Pages to propagate the new build.

---

## Configuration Files

| File | Purpose |
|------|---------|
| `public/CNAME` | Contains `bhagirathitsolutions.co.in` — tells GitHub Pages the custom domain |
| `package.json` → `"homepage"` | Set to `https://bhagirathitsolutions.co.in` — required for asset paths |
| `src/App.js` | Uses `HashRouter` — required for GitHub Pages (no server-side routing) |

---

## Why HashRouter?

GitHub Pages is a static host with no server to redirect unknown paths to `index.html`.  
`HashRouter` puts routes in the URL hash (e.g. `https://bhagirathitsolutions.co.in/#/About`) so page refreshes always hit `index.html` correctly.

---

## Local Development

```bash
npm start         # starts dev server at http://localhost:3000
npm run build     # production build only (no deploy)
```

---

## DNS Setup (Reference)

In your domain registrar (e.g. GoDaddy / Namecheap):
- Add a **CNAME** record: `www` → `<github-username>.github.io`
- Add **A records** pointing to GitHub Pages IPs (185.199.108-111.153)

GitHub Pages custom domain is also configured in the repository **Settings → Pages → Custom Domain**.
