# Page Reference

All page components live in `src/Pages/`.

---

## HomePage (`/`)
**File:** `HomePage.jsx`

Composed entirely of reusable components — no local markup.

```
HomePage
  ├── HeroSection          (full-width fade carousel × 2 slides)
  ├── FeaturesSection      ("Why Choose Us?" × 3 feature cards)
  ├── FeaturesHighlight    (icon strip × 4 highlights)
  ├── ServicesSection      (service preview cards × 4)
  └── TestimonialsSection  (testimonial carousel × 3)
```

---

## About (`/About`)
**File:** `About.jsx` · **CSS:** `style/about.css`

Sections:
1. **Hero** — full-width image overlay, "Welcome to Suvian Tech LLP", "Learn More" button
2. **Who We Are** — left text + right image (`women-talking-over-phone.png`)
3. **Feature Cards** (5 cards) — Innovation, Agility, Customer-Centric, Productivity, Flexibility
4. **Call-to-Action** — "Ready to Revolutionize Communication?" + Contact Us button

> ⚠️ Hero says "Suvian Tech LLP" while the site is about "Bhagirath IT Solutions" — inconsistency.  
> ⚠️ "Contact Us" button has no `href` or route link.

---

## Services (`/Services`)
**File:** `Services.jsx` · **CSS:** `style/Services.css`

Sections:
1. **Hero** — split layout: text left, `service.png` right
2. **Services Grid** — all 13 services rendered from a JS array

Full service list:
- Concurrent Call Handling
- Lead Management
- Call Center Solutions
- Cloud Telephony & Virtual Numbers
- Dynamic Broadcasting
- Voicemail & Call History
- Analytics & Performance Reports
- Call Recording & Quality Control
- Intercom & Call Transfer
- Automatic Call Distribution
- CRM Integration
- IVR Customization
- Automatic Dialer

> ⚠️ All service descriptions are identical boilerplate text.

---

## Enquiry (`/Enquiry`)
**File:** `Enquiry.jsx` · **CSS:** `style/enquiry.css`

A contact / enquiry form page using `@formspree/react` for form submission.

> Details to be confirmed — file is 17 KB, suggesting a detailed form.

---

## Careers (`/Careers`)
**File:** `Careers.jsx` · **CSS:** `style/career.css`

A job listings / careers page.

> Details to be confirmed — file is 22 KB, suggesting multiple job postings or an application form.

---

## Home.jsx (Unused)
**File:** `Home.jsx`

An older version of the home page with static Bootstrap cards. **Not connected to any route.** Can be safely deleted or used as reference.
