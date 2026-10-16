# BHAGIRATH IT SOLUTIONS — Website Architecture

> **Live site:** [bhagirathitsolutions.co.in](https://bhagirathitsolutions.co.in)  
> **Deployment:** GitHub Pages (`gh-pages` branch) routed through a custom domain via CNAME  
> **Framework:** React 19 (Create React App) · Bootstrap 5 · React-Bootstrap · Framer Motion · React Router v6  

---

## Project Structure

```
newproj/
├── public/
│   ├── index.html          # HTML shell
│   ├── CNAME               # bhagirathitsolutions.co.in (GitHub Pages domain)
│   ├── favicon.ico
│   └── manifest.json
│
├── src/
│   ├── App.js              # Root component — router + global layout
│   ├── index.js            # React DOM entry-point
│   │
│   ├── Pages/              # Route-level page components
│   │   ├── HomePage.jsx    # / (home)
│   │   ├── Home.jsx        # Legacy home (not routed)
│   │   ├── About.jsx       # /About
│   │   ├── Services.jsx    # /Services
│   │   ├── Enquiry.jsx     # /Enquiry
│   │   └── Careers.jsx     # /Careers
│   │
│   ├── Components/         # Reusable UI components
│   │   ├── TopNavbar.jsx
│   │   ├── CustomNavbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── FeaturesHighlight.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   └── Footer.jsx
│   │
│   ├── style/              # Per-component CSS files
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── Custom.css
│   │   ├── homepage1.css
│   │   ├── Services.css
│   │   ├── about.css
│   │   ├── career.css
│   │   ├── enquiry.css
│   │   └── footer.css
│   │
│   └── img/                # Static image assets (~20 MB total)
│
├── build/                  # Production build output (deployed to gh-pages)
├── package.json
└── package-lock.json
```

---

## Routing

`HashRouter` is used so GitHub Pages can serve all routes without server-side configuration.

| Path | Component |
|------|-----------|
| `/` | `HomePage` |
| `/About` | `About` |
| `/Services` | `Services` |
| `/Enquiry` | `Enquiry` |
| `/Careers` | `Careers` |

> **Note:** `Home.jsx` exists but is **not used** in routing — `HomePage.jsx` is the active home.

---

## Global Layout (`App.js`)

Every page is wrapped in this persistent shell:

```
HashRouter
  ├── TopNavbar        (thin top bar — phone + email)
  ├── CustomNavbar     (sticky main nav with scroll effect + services dropdown)
  ├── <Routes />       (page content swaps here)
  └── Footer
```

---

## Deployment Pipeline

```
npm run predeploy  →  npm run build  →  ./build/
npm run deploy     →  gh-pages -d build  →  GitHub Pages
                                            ↓
                               CNAME: bhagirathitsolutions.co.in
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for step-by-step instructions.

---

## Dependencies

| Package | Purpose |
|---------|---------|
| `react` / `react-dom` | Core UI framework |
| `react-router-dom` | Client-side routing (HashRouter) |
| `bootstrap` / `react-bootstrap` | Grid, Navbar, Cards, Carousel |
| `react-icons` | Icon library (FaGlobe, FaHeadset, etc.) |
| `framer-motion` | Animation library (available, minimal usage) |
| `@formspree/react` | Contact / enquiry form backend |
| `gh-pages` | GitHub Pages deployment helper |

---

_See also:_  
- [COMPONENTS.md](./COMPONENTS.md) — detailed component reference  
- [PAGES.md](./PAGES.md) — page-by-page content breakdown  
- [REDESIGN_PLAN.md](./REDESIGN_PLAN.md) — upcoming redesign notes  
