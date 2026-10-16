# Redesign Plan — Bhagirath IT Solutions

> **Goal:** Transform the current dummy/placeholder website into a proper, professional, and simple business website for **Bhagirath IT Solutions** — a communication technology company (telephony, call center, CRM solutions), backed by **Suvian Tech LLP**.

---

## Current Issues (Things to Fix)

### Content Problems
- [ ] **Brand inconsistency** — About page says "Suvian Tech LLP" but the brand is "Bhagirath IT Solutions"
- [ ] **Dummy testimonials** — Fake names (John Doe, Jane Smith) and placeholder quotes
- [ ] **Generic service descriptions** — All 13 service cards use identical boilerplate text
- [ ] **Identical card images** — All 4 service preview cards on the home page use the same photo
- [ ] **Broken CTA buttons** — "Contact Us" button on About page has no route/href
- [ ] **Unused `Home.jsx`** — Old page file not connected to any route (cleanup)

### Design Problems
- [ ] No consistent color palette / design system
- [ ] No logo or brand identity mark
- [ ] Multiple disconnected CSS files with overlapping styles
- [ ] Not clearly professional-looking for a B2B telecom/IT company

---

## Redesign Goals

### 1. Brand & Identity
- Define a clear color palette (primary, secondary, accent)
- Add a proper logo (text-based or icon)
- Consistent typography (Google Font like Inter or Poppins)

### 2. Pages to Redesign
| Page | Status |
|------|--------|
| **Home** | New hero, proper feature stats, real service previews |
| **About** | Fix brand name, add real company info, mission/vision |
| **Services** | Real descriptions per service, icons per card |
| **Enquiry** | Keep Formspree form, improve layout + UX |
| **Careers** | Review and simplify |

### 3. Global Components
| Component | Change |
|-----------|--------|
| `TopNavbar` | Keep (or merge into main nav) |
| `CustomNavbar` | Update active link style, logo placement |
| `Footer` | Add real address, social links, real email |
| `TestimonialsSection` | Replace with real quotes or remove temporarily |

### 4. Technical Clean-up
- Remove `Home.jsx` (unused)
- Consolidate CSS into a single `global.css` design system
- Replace placeholder images with relevant, licensed images

---

## Pages Scope (Simple & Professional)

Keep the site simple — **5 pages is the right scope**:
1. Home — Hero + Why Us + Services preview + CTA
2. About — Company story, parent company (Suvian Tech LLP), values
3. Services — All 13 services with real descriptions
4. Enquiry — Contact form
5. Careers — Job opportunities

---

## What NOT to Change
- Routing structure (HashRouter + 5 routes — works well for GitHub Pages)
- Deployment pipeline (`npm run deploy` → GitHub Pages)
- React + Bootstrap tech stack
- Formspree for the enquiry form

---

_This doc will be updated as the redesign progresses._
