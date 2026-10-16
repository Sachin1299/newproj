# Component Reference

All reusable components live in `src/Components/`.

---

## TopNavbar
**File:** `TopNavbar.jsx` · **CSS:** `style/App.css`

A thin strip at the very top of every page displaying contact details.

| Detail | Value |
|--------|-------|
| Phone | +91 9589036973 |
| Email | support@bhagirathitsolutions.co.in |

No state, no props — purely presentational.

---

## CustomNavbar
**File:** `CustomNavbar.jsx` · **CSS:** `style/Custom.css`

The main sticky navigation bar.

**Features:**
- Scroll-aware: adds `.scrolled-navbar` class after scrolling 10px
- Mobile hamburger menu with click-outside-to-close logic
- Services hover-dropdown (13 service items in a CSS grid)
- `NavLink` from React Router for active-link highlighting

**State:**
| State | Type | Purpose |
|-------|------|---------|
| `scrolled` | boolean | Toggle shadow/bg on scroll |
| `hover` | boolean | Open services dropdown on hover |
| `navexpanded` | boolean | Mobile menu open/close |

**Nav links:** Home · About · Services (dropdown) · Enquiry · Careers

---

## HeroSection
**File:** `HeroSection.jsx` · **CSS:** `style/homepage1.css`

Full-width auto-playing carousel displayed at the top of the home page.

- 2 slides using background images (`bg1`, `bg2` CSS classes)
- Fade transition, 8-second interval, no controls/indicators
- Each slide has H1 + subtitle + two CTA buttons (→ About, → Services)

---

## FeaturesSection
**File:** `FeaturesSection.jsx` · **CSS:** `style/homepage1.css`

"Why Choose Us?" section with 3 feature cards in a Bootstrap row.

Cards (inline data array):
1. Innovative Technology
2. Agile & Adaptive
3. Customer Centric

---

## FeaturesHighlight
**File:** `FeaturesHighlight.jsx` · **CSS:** `style/homepage1.css`

Icon-based highlight strip ("Get Your Free Consulting").

4 icon items using `react-icons/fa`:
| Icon | Label |
|------|-------|
| `FaGlobe` | World Wide Customers |
| `FaHeadset` | 24/7 Support |
| `FaUsers` | Awesome Team |
| `FaShippingFast` | Deliveries & Collection |

---

## ServicesSection
**File:** `ServicesSection.jsx`

Preview of 4 services in Bootstrap Cards on the home page, linking to `/Services`.

Services shown: Concurrent Call Handling · Intercom & Call Transfer · Call Center Solutions · Voicemail & Call History

> ⚠️ All 4 cards use the same placeholder image (`wilhelm-gunkel-igyzxP_eiDI-unsplash.jpg`).

---

## TestimonialsSection
**File:** `TestimonialsSection.jsx`

Carousel of 3 hardcoded dummy testimonials (placeholder authors).

---

## Footer
**File:** `Footer.jsx` · **CSS:** `style/footer.css`

3-column dark-background footer:
1. Brand name + tagline
2. Quick links (Home, About, Services, Enquiry)
3. Address (currently placeholder: "123 Tech Valley Road, Bengaluru")

> ⚠️ Address and email in footer contain placeholder/dummy data.
