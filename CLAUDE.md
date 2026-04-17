# CLAUDE.md — Jithin Raj Portfolio

> **This file is the law.** Every AI coding session and every human code review must start here.
> For all visual design decisions, the single source of truth is `DESIGN.md`.
> Content: Stitch design (primary) + real data from jithinraj.dev (supplements where Stitch has placeholders)

---

## 1. Project Identity

**What this is:** A single-page, dark-mode developer portfolio for **Jithin Raj**, an Android Software Developer based in Toronto, ON. The design system is called **"Neon Architect"** — brutalist, architectural, with neon green (#39FF14) accents on pure black, sharp-cornered glassmorphism, and uppercase italic headlines.

**Goal:** Replicate the final Stitch design (`Portfolio with Name Logo & WhatsApp Bot`, project `17068085776246636296`) as a production-quality, fully responsive website.

---

## 2. Tech Stack (Locked — Do Not Deviate)

| Layer | Decision | Rationale |
|-------|----------|-----------|
| **Structure** | Vanilla HTML5 | Static site, no framework overhead |
| **Styling** | Vanilla CSS + Custom Properties | Token-based design system, no utility frameworks |
| **Logic** | Vanilla JavaScript (ES6+) | No React, no jQuery, no build step |
| **Scroll animations** | IntersectionObserver (Vanilla JS) | Matches Stitch's reveal system exactly |
| **Hover / micro-interactions** | Vanilla CSS transitions | Zero JS cost |
| **Fonts** | Google Fonts CDN | Space Grotesk only |
| **Icons** | Material Symbols Outlined (CDN) | Matches Stitch design |
| **Deployment** | Vercel via GitHub | Root-relative paths, zero config |

### ❌ Banned Tools
- **No TailwindCSS** or any utility CSS framework
- **No React, Vue, Svelte, or any JS framework**
- **No jQuery**
- **No paid libraries**
- **No GSAP** — Stitch uses IntersectionObserver for scroll reveals
- **No inline styles** — ever
- **No `var` declarations** — `const` and `let` only

---

## 3. CDN Imports (Use Exactly These)

```html
<!-- In <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">
```

> **No GSAP CDN needed** — the Stitch design uses pure CSS transitions + IntersectionObserver.

---

## 4. Project File Structure

```
developer-portfolio/
├── DESIGN.md              ← Visual source of truth (read-only reference)
├── CLAUDE.md              ← This file — coding rails
├── index.html             ← Single-page entry point
│
├── css/
│   ├── tokens.css         ← ALL CSS custom properties (colors, fonts, spacing, z-index)
│   ├── base.css           ← CSS reset, box-sizing, typography base, scrollbar, global
│   ├── layout.css         ← Grid system, section wrappers, max-width containers
│   ├── components.css     ← Buttons, cards, chips, nav, inputs, stat blocks
│   ├── animations.css     ← CSS transitions, keyframes, reveal states, prefers-reduced-motion
│   ├── mobile.css         ← Mobile-specific overrides (loaded last)
│   └── sections/
│       ├── nav.css
│       ├── hero.css
│       ├── about.css
│       ├── skills.css
│       ├── projects.css
│       ├── experience.css
│       ├── education.css
│       ├── contact.css
│       └── footer.css
│
├── js/
│   ├── main.js            ← Entry point; inits all modules, page-load class
│   ├── cursor.js          ← Cursor flare (desktop only, feature-detected)
│   ├── nav.js             ← Scroll behavior, hamburger menu, scrollspy
│   └── reveal.js          ← IntersectionObserver scroll reveal
│
└── assets/
    ├── favicon.png               ← 512×512 Stitch JR logo (neon green)
    ├── favicon-32.png            ← 32×32
    ├── favicon-16.png            ← 16×16
    ├── apple-touch-icon.png      ← 180×180 iOS home screen
    └── images/
        ├── og-image.png          ← 1200×630 social share
        ├── hero-workspace.jpg    ← Hero right-side image (floating app screens)
        ├── about-portrait.jpg    ← About section portrait (greyscale → color hover)
        ├── project-ecredits.png  ← E-Credits app UI (greyscale → color hover)
        ├── project-shopkick.png  ← Shopkick app UI (greyscale → color hover)
        ├── project-pokertrax.png ← Poker Trax app UI (greyscale → color hover)
        └── project-leadcollect.png ← Lead Collection app UI (greyscale → color hover)
```

### File Loading Order in `index.html`

```html
<!-- CSS: tokens first, mobile last -->
<link rel="stylesheet" href="/css/tokens.css">
<link rel="stylesheet" href="/css/base.css">
<link rel="stylesheet" href="/css/layout.css">
<link rel="stylesheet" href="/css/components.css">
<link rel="stylesheet" href="/css/animations.css">
<link rel="stylesheet" href="/css/sections/nav.css">
<link rel="stylesheet" href="/css/sections/hero.css">
<link rel="stylesheet" href="/css/sections/about.css">
<link rel="stylesheet" href="/css/sections/skills.css">
<link rel="stylesheet" href="/css/sections/projects.css">
<link rel="stylesheet" href="/css/sections/experience.css">
<link rel="stylesheet" href="/css/sections/education.css">
<link rel="stylesheet" href="/css/sections/contact.css">
<link rel="stylesheet" href="/css/sections/footer.css">
<link rel="stylesheet" href="/css/mobile.css">  <!-- Always last -->

<!-- JS: app modules deferred -->
<script src="/js/cursor.js" defer></script>
<script src="/js/nav.js" defer></script>
<script src="/js/reveal.js" defer></script>
<script src="/js/main.js" defer></script>
```

---

## 5. Section Structure & IDs

These `id` attributes are **locked** — do not rename:

| Section | ID | Nav Link |
|---------|----|----------|
| Navigation | `#nav` | — |
| Hero | `#hero` | — |
| About | `#about` | — |
| Skills | `#skills` | "Skills" |
| Featured Work | `#projects` | "Projects" |
| Career Journey | `#experience` | "Experience" |
| Education | `#education` | "Education" |
| Contact | `#contact` | "Contact" |
| Footer | `#footer` | — |

> **Nav link order:** Logo | Projects | Skills | Experience | Education | Contact | [Get in Touch CTA → #contact]

---

## 6. Coding Standards

### HTML Rules
- **Semantic HTML5:** `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<header>`
- **Single `<h1>` per page** — hero headline only. Section titles = `<h2>`. Card/role titles = `<h3>`
- **Every `<section>` has `id`** matching the table above
- **JS hooks via `data-` attributes** — never classes or IDs
- **No inline styles** — JS-driven values go on CSS custom properties only
- **All interactive elements:** `aria-label` where text alone is ambiguous

### CSS Rules

1. **Always use tokens** — never hardcode hex. Wrong: `color: #39FF14`. Right: `color: var(--color-primary)`

2. **BEM naming:**
   ```css
   .section-hero {}               /* Block */
   .section-hero__headline {}     /* Element */
   .section-hero__headline--xl {} /* Modifier */
   .card-project__title {}
   ```

3. **Property order:**
   ```
   1. display / layout (flex, grid, gap)
   2. position (position, top, left, z-index)
   3. box model (width, max-width, padding, margin)
   4. typography (font-family, font-size, line-height, color)
   5. visual (background, border-radius, box-shadow)
   6. animation (transition, transform)
   ```

4. **Mobile-first breakpoints inside every ruleset:**
   ```css
   .projects__grid { grid-template-columns: 1fr; }               /* mobile base */
   @media (min-width: 768px)  { .projects__grid { grid-template-columns: 1fr 1fr; } }
   ```

5. **`clamp()` for ALL fluid typography**

### JavaScript Rules
- All init functions from `window.addEventListener('load', ...)`
- Feature-detect touch: `if (!('ontouchstart' in window)) { initCursorFlare(); }`
- Named functions only — no anonymous event callbacks
- `prefers-reduced-motion` check before all animations
- No inline event handlers in HTML

---

## 7. Design Enforcement Rules

| Rule | Implementation |
|------|----------------|
| ✅ Pure black bg | Background is `#000000` — use `var(--color-background)` |
| ✅ Neon green primary | `#39FF14` for accents, CTAs, chips, glow — `var(--color-primary)` |
| ✅ Sharp corners | `border-radius: 0.25rem` (4px) everywhere — no pills |
| ✅ Uppercase italic | ALL section headings are `uppercase italic font-bold` |
| ✅ Space Grotesk only | Single font family for everything — no Inter |
| ✅ Glassmorphism cards | `backdrop-filter: blur(12px)` + `rgba(14, 14, 14, 0.7)` |
| ✅ Neon glow effects | `text-shadow` and `box-shadow` with `rgba(57, 255, 20, *)` |
| ✅ Greyscale images | All images `grayscale brightness-50` → hover: full color |
| ✅ Green border hover | Cards get `border-color: rgba(57, 255, 20, 0.5)` on hover |
| ✅ Square timeline dots | `w-4 h-4` squares, not circles |
| ❌ No rounded pills | No `border-radius: 9999px` (except WhatsApp FAB) |
| ❌ No blue/purple | Zero blue tones. Green only. |
| ❌ No Inter font | Space Grotesk for all text — body AND headlines |
| ❌ No flat CTAs | Primary buttons: `bg-primary text-black`, green glow shadow |
| ❌ No dividers | Never `<hr>` — use spacing only |

---

## 8. Animation System

### Scroll Reveal (IntersectionObserver)
```css
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
```

```js
// reveal.js
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
```

### CSS Animations (Keyframes)
| Animation | Duration | Use |
|-----------|----------|-----|
| `float` | 6s ease-in-out infinite | About section code badge |
| `pulse-slow` | 4s ease-in-out infinite | Background blurred orbs |
| `gradient-x` | 15s ease infinite | Mesh-bg gradient position |
| `ping` | 3s–5s | Background particle dots |

### Hover Effects
| Element | Effect | Duration |
|---------|--------|----------|
| Project cards | `translateY(-8px) scale(1.01)` + green shadow | 0.4s |
| Contact cards | `translateY(-8px)` + green shadow | 0.4s |
| Nav links | Color green + drop-shadow glow | 0.2s |
| Buttons | `scale(1.05)` | 0.2s |
| Images | `grayscale-0 brightness-100` | 1s |
| Skill icons | `scale(1.1)` | 0.2s |

### Cursor Flare (Desktop Only)
Desktop-only — replaced by `mesh-bg` on touch devices.

---

## 9. Critical Technical Specs

### `<head>` Meta Tags
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="description" content="Jithin Raj — Mobile Application Developer crafting the future of mobile with Kotlin, Flutter, and modern architecture. 5+ years of professional experience.">
<meta property="og:title" content="Jithin Raj | Mobile Application Developer">
<meta property="og:description" content="I architect high-performance native and cross-platform mobile experiences.">
<meta property="og:image" content="/assets/images/og-image.png">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16.png">
<link rel="icon" type="image/png" href="/assets/favicon.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
<title>Jithin Raj | Mobile Application Developer</title>
```

### `tokens.css` — Key Tokens
```css
:root {
  /* Primary */
  --color-primary: #39FF14;
  --color-tertiary: #8eff71;
  --color-secondary: #a7ff9d;

  /* Surfaces */
  --color-background: #000000;
  --color-surface: #000000;
  --color-surface-container: #0e0e0e;
  --color-surface-container-low: #0a0a0a;
  --color-surface-container-high: #141414;
  --color-surface-container-highest: #1c1c1c;

  /* Text */
  --color-on-surface: #ffffff;
  --color-on-surface-variant: #ababab;

  /* Outlines */
  --color-outline: #484848;
  --color-outline-variant: #484848;

  /* Shape */
  --radius-sm: 0.25rem;  /* 4px — used almost everywhere */
  --radius-full: 9999px; /* WhatsApp FAB only */

  /* Nav */
  --nav-height: 72px;
  --nav-height-mobile: 64px;

  /* Z-index */
  --z-base: 0;
  --z-card: 10;
  --z-sticky: 100;
  --z-nav: 1000;
  --z-drawer: 1100;
  --z-overlay: 1200;
  --z-fab: 10000;

  /* Transitions */
  --ease-reveal: cubic-bezier(0.16, 1, 0.3, 1);
  --transition-fast: 200ms;
  --transition-default: 400ms;
  --transition-slow: 800ms;
}
```

---

## 10. Responsive Design System

### Strategy
- **Design reference:** Desktop-first (Stitch at 2560px canvas)
- **CSS approach:** Mobile-first — base styles = mobile, `min-width` overrides upward

### Breakpoints
```
480px  — large phones landscape
768px  — tablets portrait (md)
1024px — tablets landscape (lg)
1280px — desktop (xl, max-w-7xl = 1280px)
```

### Section Adaptations

| Section | Desktop | Mobile (< 768px) |
|---------|---------|-------------------|
| **Nav** | Horizontal links + CTA | Hamburger → drawer |
| **Hero** | 12-col: 7 text + 5 image | Single col, stacked |
| **Skills** | Bento grid (4 cols, spanning) | 1 column |
| **Projects** | 2×2 grid | 1-column list |
| **Experience** | Title + date side-by-side | Stacked |
| **Education** | 2 cards side-by-side | Stacked |
| **Contact** | 3-col cards | Stacked |
| **Footer** | 3-part row | Stacked |

### Touch Rules
- Min touch target: **44×44px** (WCAG 2.5.5)
- No hover-only states — every `:hover` needs an `:active` equivalent
- Input / textarea: **minimum 16px font-size** (prevents iOS auto-zoom)
- Remove iOS tap flash: `-webkit-tap-highlight-color: transparent`

---

## 11. Content Data Reference

> **Priority**: Use Stitch design copy as PRIMARY. Use real data from jithinraj.dev ONLY where Stitch has placeholder/generic values (contact info, real company names, real education institutions).

### Navigation
```
Nav order: Projects | Skills | Experience | Education | Contact
Logo: "Jithin Raj"  (Space Grotesk bold, color: #8eff71 with drop-shadow glow)
CTA:  "Get in Touch"  (bg-primary text-black, rounded-sm)
```

### Hero (`#hero`)
```
Eyebrow badge: "Available for Innovation"  (xs, uppercase, tracking-[0.2em], green text, dark bg with green border)

Headline:   "Crafting the FUTURE of Mobile"  (h1, text-8xl, uppercase italic)
            "Future" = gradient text (primary → white) + neon-text-glow

Bio:        "Hi, I'm Jithin Raj. I architect high-performance native and
            cross-platform mobile experiences that bridge the gap between
            complex logic and elegant design."  (text-xl, font-light)
            "Jithin Raj" = font-semibold, white

CTA 1:      "View Projects" → #projects  (bg-primary text-black, arrow_forward icon, green glow hover)
CTA 2:      "Experience" → #experience   (glass-card, text-on-surface)

Right side: Image card (greyscale → hover color) + floating stat badge:
            "5+" large green number + "Years Professional" label
```

### About (`#about`)
```
Layout: 2-col — LEFT portrait, RIGHT text

Portrait: Full-height (600px), greyscale (hover → color)
          Floating badge: Green circle with code icon, rotating float animation

Headline: "Passionate about TECHNICAL EXCELLENCE."  (h2, uppercase)
          "Technical Excellence." = text-primary italic

Body (FROM STITCH):
  "As a dedicated Mobile Application Developer, I specialize in building
   robust applications that scale. My journey has been defined by a commitment
   to clean code, user-centric design, and staying at the cutting edge of
   mobile technology. Whether it's Kotlin for native Android or Flutter for
   cross-platform versatility, I focus on delivering seamless performance."

Stats (2×1 grid):
  15+   → "Projects Successfully Launched"
  100%  → "Client Satisfaction"
```

### Skills (`#skills`)
```
Section title: "Core Competencies"  (centered, uppercase italic, green underline bar)

BENTO GRID LAYOUT (md:grid-cols-3 lg:grid-cols-4):
1. Native Development  [spans 2 cols]  → Kotlin, Java, Android SDK, Jetpack Compose
2. Cross-Platform      [1 col]         → Flutter, Dart
3. Architecture        [1 col]         → MVVM, Clean Arch
4. Data & API          [1 col]         → Retrofit, Room DB, Firebase
5. Professional Process [spans 2 cols]  → Git / CI/CD, Agile / Jira, Code Reviews, Unit Testing
   (uses NEUTRAL chip style: bg-surface-container-highest, text-on-surface)
6. Languages           [1 col]         → English (Professional), Malayalam (Native)

Chip style: bg-primary/10, text-primary, border border-primary/20, uppercase, tracking-widest
Icon: Material Symbols, text-4xl, text-primary
```

### Projects (`#projects`)
```
Header:    "Featured Work"  (uppercase italic)
Subheader: "Selected projects demonstrating my expertise in performance and design."
           + thin horizontal line extending right

Layout: 2×2 grid, each card = glass-card with image

1. E-Credits                                          [Badge: "Fintech" green]
   FROM STITCH: "A high-performance digital wallet and reward system built with
   native Kotlin. Focused on security and real-time transaction processing."
   Chips: Kotlin, Clean Architecture, Biometrics
   Image: Greyscale → color on hover

2. Shopkick                                           [Badge: "Retail" green]
   FROM STITCH: "Integration of shopping rewards and location-based triggers.
   Optimized for battery life and background location accuracy."
   Chips: Android SDK, Geo-fencing, REST APIs

3. Poker Trax                                         [Badge: "Analytics" green]
   FROM STITCH: "A comprehensive session tracking and analysis app for players.
   Heavy focus on custom data visualization and local database management."
   Chips: Flutter, SQLite, Charts.js

4. Lead Collection App                                [Badge: "Enterprise" WHITE]
   FROM STITCH: "Enterprise-grade offline-first lead capture tool for sales teams.
   Seamless synchronization with CRM systems upon connection."
   Chips: Java, Offline Sync, Enterprise APIs  (NEUTRAL chip style: white text/border)
```

### Experience (`#experience`)
```
Section title: "Career Journey"  (centered, uppercase italic)
Max-width: max-w-4xl (narrower than other sections)

Timeline: Left border, decreasing opacity. Square dots, not circles.

3 roles (FROM STITCH, supplemented with real data):

1. Android Application Developer            [Border: primary/30, Dot: primary + glow]
   E-credits | 2021 — Present
   FROM STITCH: "Leading the native Android development for a fintech ecosystem.
   Implementing complex security layers, biometric authentication, and optimizing
   app performance for low-end devices. Mentoring junior developers and managing
   deployment pipelines."

2. Mobile App Developer                      [Border: primary/20, Dot: primary/60]
   Shopkick, by Trax | 2019 — 2021
   (REAL company from old site: Shopkick, by Trax · Toronto, ON)
   FROM STITCH: "Collaborated with global teams to enhance the Shopkick rewards
   experience. Focused on improving geofencing accuracy and background
   synchronization logic using advanced Android SDK capabilities."

3. Junior Developer                          [Border: primary/10, Dot: primary/40]
   Enffle Technologies | 2018 — 2019
   (REAL company from old site: Enffle Technologies Pvt. Ltd.)
   FROM STITCH: "Started my professional career building foundational mobile
   features and utility applications. Gained deep expertise in Java and early
   Android development patterns."
```

### Education (`#education`)
```
Header: Green line + "Education" inline (flex items-center)

2-col grid:

1. Post Graduate Diploma in Mobile Applications     [border-t-2 primary]
   Georgian College, Barrie, Ontario   ← REAL (from old site)
   Completed 2018

2. Bachelor of Computer Applications (BCA)           [border-t-2 primary/50]
   Jai Bharath Arts and Science College, Ernakulam, India   ← REAL (from old site)
   Completed 2016
```

### Contact (`#contact`)
```
Headline: "Let's CONNECT"  (text-8xl, uppercase italic)
          "Connect" = gradient text (primary → white) + neon-text-glow

Intro:    "I'm always open to discussing new projects, creative ideas,
          or opportunities to be part of your visions."

3-column glass card grid:
- Email    (alternate_email): jithin6904@gmail.com     → mailto:jithin6904@gmail.com  ← REAL
- LinkedIn (link):            linkedin.com/in/jithinraj0 → https://linkedin.com/in/jithinraj0  ← REAL
- Phone    (call):            +1 (437) 989-2406        → tel:+14379892406  ← REAL

CTA Button: "Download Resume" (bg-primary text-black, font-black text-xl, uppercase tracking-widest)

WhatsApp FAB: Fixed bottom-right, green circle, w-16 h-16, WhatsApp SVG icon
              → https://wa.me/14379892406  ← REAL
              Tooltip: "Chat with me" on hover
```

### Footer (`#footer`)
```
3-part row:
LEFT:   "Jithin Raj" logo (text-lg, font-black, #8eff71)
CENTER: "© 2024 NeonArchitect. Built with precision." (text-[10px] uppercase tracking-widest)
        Use: <span id="copyright-year"></span> — filled by JS
RIGHT:  GitHub | LinkedIn | Polywork | Email (text-[10px] uppercase tracking-widest, hover green)

Social URLs (REAL):
- GitHub:   https://github.com/jithinraj0
- LinkedIn: https://linkedin.com/in/jithinraj0
- Email:    mailto:jithin6904@gmail.com
```

---

## 12. Review Checklist

### Visual Fidelity (Neon Architect Theme)
- [ ] Background is pure `#000000` black
- [ ] Primary accent is `#39FF14` neon green
- [ ] Logo text color is `#8eff71` with glow
- [ ] ALL headings are `uppercase italic`
- [ ] ALL text uses Space Grotesk (no Inter)
- [ ] Border radius is `0.25rem` / 4px everywhere
- [ ] Glass cards have `backdrop-filter: blur(12px)`
- [ ] Neon glow effects on key text and hover states
- [ ] Images start greyscale and colorize on hover
- [ ] Chips have green border + bg-primary/10 treatment
- [ ] Hero has 12-col grid with image on right
- [ ] Skills use bento grid with variable column spans
- [ ] Experience has square timeline dots with decreasing opacity
- [ ] Contact has 3-col cards (not 4)
- [ ] WhatsApp FAB is fixed bottom-right, green circle
- [ ] No blue or purple anywhere
- [ ] No rounded pills (except WhatsApp FAB)

### Typography
- [ ] Space Grotesk for ALL text (headlines + body)
- [ ] Hero headline uses `text-8xl uppercase italic`
- [ ] Section headings use `text-5xl uppercase italic`
- [ ] Body text is `text-on-surface-variant` (#ababab)
- [ ] Labels use `tracking-widest uppercase`
- [ ] Single `<h1>` on the page

### Interactions
- [ ] Reveal animation fires on scroll (IntersectionObserver)
- [ ] Project cards lift + green shadow on hover
- [ ] Images transition from greyscale to color (1s transition)
- [ ] Nav scrollspy highlights active link with green + underline
- [ ] Hamburger opens/closes drawer correctly
- [ ] WhatsApp FAB shows tooltip on hover

### Accessibility
- [ ] All images have `alt` attributes
- [ ] Focus states visible (keyboard nav works)
- [ ] WCAG AA contrast
- [ ] Hamburger has `aria-label`, `aria-expanded`, `aria-controls`
- [ ] `prefers-reduced-motion` disables animations

### Responsive / Mobile
- [ ] No horizontal scroll at 360px / 390px / 768px / 1280px
- [ ] Hamburger nav on mobile
- [ ] Touch targets ≥ 44×44px
- [ ] Project grid stacks to 1 column on mobile
- [ ] Skills bento grid stacks to 1 column on mobile
- [ ] Contact cards stack to 1 column on mobile

### Performance
- [ ] `<preconnect>` for Google Fonts
- [ ] Images have `loading="lazy"`
- [ ] No heavy JS libraries (no GSAP)
- [ ] Passive scroll listeners

### SEO & Meta
- [ ] `<title>`: "Jithin Raj | Mobile Application Developer"
- [ ] `<meta name="description">` present
- [ ] OG tags for social sharing
- [ ] `<meta name="color-scheme" content="dark">`
- [ ] Single `<h1>` on page

---

## 13. Deployment (Vercel via GitHub)

- **Paths:** Root-relative (`/css/tokens.css`) — Vercel serves from repo root
- **No build step** — Vercel auto-serves static files
- **`index.html` at root** — Vercel entry point
- **Workflow:** Push to GitHub → Import to Vercel → Done

---

*Last updated: April 14, 2026 — content sourced from Stitch project `17068085776246636296` (starred screen) + real data from jithinraj.dev*
