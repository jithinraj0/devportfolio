# DESIGN.md — Neon Architect Portfolio

> **Source of truth**: Stitch project `17068085776246636296`, screen "Portfolio with Name Logo & WhatsApp Bot" (starred final)

---

## 1. Creative Philosophy

- **Theme**: "Neon Architect" — brutalist-meets-premium dark portfolio
- **Mood**: High-contrast, architectural, technical, bold
- **Feel**: A developer's workshop lit by neon green circuitry
- **Typography**: ALL CAPS, italic, tight tracking — Space Grotesk runs **everything**
- **Shape**: Sharp, squared corners (`0.25rem` / 4px) — no rounded pills

---

## 2. Color Token System

### Primary Palette (Neon Green)
```
--color-primary:              #39FF14   ← THE accent. Neon green. Everywhere.
--color-primary-container:    #005300
--color-on-primary:           #000000
--color-on-primary-container: #e0ffd9
--color-secondary:            #a7ff9d
--color-tertiary:             #8eff71   ← Logo text, nav active links
--color-tertiary-container:   #1e3b00
```

### Surfaces (Pure Black)
```
--color-background:                #000000   ← body background
--color-surface:                   #000000
--color-surface-dim:               #000000
--color-surface-bright:            #1a1a1a
--color-surface-container-lowest:  #000000
--color-surface-container-low:     #0a0a0a   ← about stats, education cards
--color-surface-container:         #0e0e0e   ← glass-card base
--color-surface-container-high:    #141414   ← hero badge, nav scroll
--color-surface-container-highest: #1c1c1c   ← project image bg, skill chips
--color-surface-variant:           #1c1c1c
```

### Text
```
--color-on-surface:         #ffffff   ← headings, main text
--color-on-surface-variant: #ababab   ← body text, descriptions
--color-on-background:      #ffffff
```

### Outlines
```
--color-outline:         #484848
--color-outline-variant:  #484848
```

### Inverse
```
--color-inverse-surface:    #ffffff
--color-inverse-on-surface: #000000
--color-inverse-primary:    #000000
```

---

## 3. Typography System

### Font Stack
- **ALL text**: `Space Grotesk` — headlines, body, labels, chips, nav, everything
- **No Inter** — single font family for cohesion

### Headline Treatment
- **h1/h2**: `uppercase italic`, `font-bold`, tight tracking (`tracking-tighter`)
- **h1 hero**: `text-6xl md:text-8xl`, `leading-[0.9]`
- **h2 section**: `text-5xl`, `uppercase italic`
- **h3 card**: `text-2xl md:text-3xl`, `uppercase`, some italic

### Body Text
- **Paragraphs**: `text-lg`, `text-on-surface-variant`, `leading-relaxed`, `font-light`
- **Labels/eyebrows**: `text-xs`, `font-bold`, `uppercase`, `tracking-[0.2em]` or `tracking-widest`
- **Chips**: `text-[11px]` or `text-xs`, `font-bold`, `uppercase`, `tracking-widest`

### Key Typography Rules
1. Almost ALL text is `uppercase`
2. Hero + section h2 are also `italic`
3. Headlines use `tracking-tighter`, labels use `tracking-widest`
4. No `font-weight: 400` body — everything is either `font-light`, `font-medium`, `font-bold`, or `font-black`

---

## 4. Shape & Radius

```
--radius-default: 0.25rem   ← "rounded-sm" everywhere
--radius-lg:      0.5rem    ← rare
--radius-full:    9999px    ← WhatsApp FAB only
```

**Critical rule**: The design is deliberately SHARP. No pill shapes for chips, no `rounded-lg` cards. Everything uses `rounded-sm` (4px) for an architectural brutalist feel. The only round element is the WhatsApp FAB and the floating code badge.

---

## 5. Glass Card System

The primary card treatment is **glassmorphism on pure black**:

```css
.glass-card {
  background: rgba(14, 14, 14, 0.7);    /* surface-container at ~70% */
  backdrop-filter: blur(12px);
  border: 1px solid rgba(72, 72, 72, 0.2);   /* outline-variant at 20% */
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
```

### Hover States
- Cards: `hover:border-primary/50` (green border appears on hover)
- Project cards: `translateY(-8px) scale(1.01)` + `box-shadow: 0 20px 40px -15px rgba(57, 255, 20, 0.2)`
- Contact cards: `-translate-y-2` + `box-shadow: 0 0 20px rgba(57, 255, 20, 0.15)`

---

## 6. Neon Glow Effects

### Text Glow
```css
.neon-text-glow {
  text-shadow: 0 0 15px rgba(57, 255, 20, 0.6);
}
```
Used on: Hero "Future" text, Contact "Connect" text

### Border Glow
```css
.neon-border-glow {
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.3);
}
```
Used on: Experience timeline dots, hero stat card, WhatsApp FAB

### Logo Glow
```css
.logo {
  color: #8eff71;
  filter: drop-shadow(0 0 8px rgba(142, 255, 113, 0.5));
}
```

### Nav Link Hover Glow
```css
.nav-link:hover {
  color: #8eff71;
  filter: drop-shadow(0 0 5px rgba(142, 255, 113, 0.8));
}
```

---

## 7. Section-by-Section Specification

### 7.1 Navigation
- **Position**: Fixed, full-width, z-50
- **Background**: `#000000` at 80% opacity + `backdrop-blur-xl`
- **Border**: bottom `1px solid rgba(72, 72, 72, 0.15)`
- **Logo**: "Jithin Raj" in `text-2xl font-bold`, color `#8eff71` with neon glow
- **Links**: `text-sm uppercase`, tracking-tight, `text-[#ababab]`
- **Active link**: `text-[#8eff71]` + `border-b-2 border-[#8eff71]` + bottom padding
- **CTA button**: `bg-[#39FF14] text-black`, `rounded-sm`, `font-bold`, `px-6 py-2.5`
- **Layout**: logo left, links center, CTA right

### 7.2 Hero Section
- **Layout**: `grid-cols-12` → left 7 cols text, right 5 cols image card
- **Background effects**: 
  - `mesh-bg` (radial gradients at corners with green at ~5% opacity)
  - Animated blurred green orbs (`blur-[120px]`, `blur-[150px]`)
  - Small pinging green dots scattered
- **Eyebrow badge**: "Available for Innovation" in `text-xs font-bold`, green text on `surface-container-high`, `border-primary/20`, uppercase, tracking-[0.2em]
- **Headline**: "Crafting the **Future** of Mobile" — `text-8xl uppercase italic`
  - "Future" has gradient text (`from-primary to-white`) + neon-text-glow
- **Bio**: "Hi, I'm **Jithin Raj**. I architect high-performance native..." — `text-xl font-light`
  - Name in `text-on-surface font-semibold`
- **CTAs**: 
  - Primary: `bg-primary text-black rounded-sm font-bold text-lg` + arrow icon + `hover:shadow-[0_0_30px_rgba(57,255,20,0.4)]`
  - Secondary: `glass-card text-on-surface rounded-sm font-bold text-lg`
- **Right side**: Image card (greyscale, brightens on hover) in glass-card frame
  - Floating stat badge: `5+` large green number + "Years Professional" label, with `border-l-4 border-primary` and neon-border-glow

### 7.3 About Section
- **Layout**: 2-col grid, left = portrait image, right = text
- **Portrait**: Full-height (`600px`), greyscale, hover to color, `rounded-sm`
  - Floating circular badge: green circle with code icon, rotates/floats
- **Heading**: "Passionate about **Technical Excellence.**" — h2 uppercase, "Technical Excellence." in `text-primary italic`
- **Body**: `text-lg text-on-surface-variant leading-relaxed`
- **Stats**: 2×1 grid, each stats card:
  - `bg-surface-container-low`, `border-l-2 border-primary`
  - Hover: `border-l-4` + `bg-surface-container`
  - Number: `text-5xl font-bold text-primary`
  - Label: `text-sm uppercase tracking-widest text-on-surface-variant`
  - Values: "15+ Projects Successfully Launched", "100% Client Satisfaction"

### 7.4 Core Competencies (Skills)
- **Heading**: Centered, `text-5xl uppercase italic` + green underline bar (`h-1 w-24 bg-primary`)
- **Layout**: Bento grid (`grid-cols-4` desktop):
  - Native Development: spans 2 cols
  - Cross-Platform, Architecture, Data & API: 1 col each
  - Professional Process: spans 2 cols
  - Languages: 1 col
- **Card style**: `glass-card rounded-sm`
  - Icon: Material Symbols, `text-4xl text-primary`, hover scales 110%
  - Title: `text-2xl font-bold uppercase`
  - Chips: `bg-primary/10 text-primary border border-primary/20`, `text-xs font-bold uppercase tracking-widest`
  - "Professional Process" chips use `bg-surface-container-highest text-on-surface border-outline-variant/30` (white/neutral instead of green)

### 7.5 Featured Work (Projects)
- **Header**: Title left + subtitle, thin horizontal line extending right (`h-[1px] bg-outline-variant/20`)
- **Layout**: `grid-cols-2`, `gap-10`
- **Card**: `glass-card p-4 rounded-sm project-card`
  - **Image**: `aspect-[16/10]`, `border border-outline-variant/10`
  - Images are `grayscale brightness-50` → hover: `grayscale-0 brightness-100` (1000ms transition)
  - Category badge: top-left overlay, `bg-primary text-black text-[10px] font-extrabold uppercase tracking-widest` (e.g. "Fintech", "Retail", "Analytics")
  - Exception: "Enterprise" badge uses `bg-white text-black`
  - **Title**: `text-3xl font-bold uppercase italic`, hover: `text-primary`
  - **Description**: `text-on-surface-variant`, `line-clamp-2`
  - **Chips**: `text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 uppercase tracking-tighter`
  - Exception: Lead Collection uses white chips (`text-white bg-white/10 border-white/20`)
- **Hover**: `translateY(-8px) scale(1.01)`, shadow: `0 20px 40px -15px rgba(57, 255, 20, 0.2)`, border turns `rgba(57, 255, 20, 0.5)`

### 7.6 Career Journey (Experience)
- **Heading**: Centered, `text-5xl uppercase italic`
- **Max-width**: `max-w-4xl` (narrower than other sections)
- **Timeline**: Vertical left-border, decreasing opacity:
  - Role 1: `border-l-2 border-primary/30`, dot `bg-primary` + neon glow
  - Role 2: `border-l-2 border-primary/20`, dot `bg-primary/60`
  - Role 3: `border-l-2 border-primary/10`, dot `bg-primary/40`
- **Dot**: Square `w-4 h-4`, positioned `-left-[9px]`, top-aligned
- **Content layout**: Title left, date right (`flex md:justify-between`)
  - Title: `text-2xl font-bold uppercase`
  - Date: `text-primary font-bold tracking-widest` (green, right-aligned)
  - Description: `text-on-surface-variant leading-relaxed`

### 7.7 Education
- **Header**: Green line + title inline (`flex items-center gap-4`)
  - Line: `h-[2px] w-12 bg-primary`
  - Title: `text-3xl font-bold uppercase` (smaller than other sections)
- **Layout**: `grid-cols-2`
- **Card**: `glass-card rounded-sm`, `border-t-2 border-primary` (top border)
  - Hover: `border-t-4` + green shadow
  - Eyebrow: `text-primary text-xs font-bold uppercase tracking-widest` ("Post Graduation", "Undergraduate")
  - Degree: `text-2xl font-bold uppercase`
  - Institution: `text-on-surface-variant font-medium`
  - Date: calendar icon + "Completed YYYY"

### 7.8 Contact ("Let's Connect")
- **Background**: mesh-bg overlay at 5% primary, 30% opacity
- **Heading**: "Let's **Connect**" — `text-8xl uppercase italic`
  - "Connect" has gradient text + neon-text-glow
- **Subtitle**: `text-xl text-on-surface-variant`, centered, `max-w-2xl`
- **Cards**: 3-column grid (not 4)
  - `glass-card rounded-sm p-10`
  - Icon: `text-5xl text-primary`, hover: scale + rotate
  - Title: `text-xl font-bold uppercase`
  - Value: `text-on-surface-variant font-medium`
- **CTA**: "Download Resume" button (large, `bg-primary text-black`, `font-black text-xl`, `shadow-2xl shadow-primary/20`, `uppercase tracking-widest`)

### 7.9 WhatsApp FAB
- **Position**: `fixed bottom-8 right-8 z-[100]`
- **Shape**: `w-16 h-16` circle, `bg-primary`, `rounded-full`
- **Glow**: `shadow-[0_0_20px_rgba(57,255,20,0.6)]`
- **Icon**: WhatsApp SVG, black fill
- **Tooltip**: "Chat with me" label appears on hover above the FAB

### 7.10 Footer
- **Background**: Pure black + thin top border (`border-t border-[#484848]/15`)
- **Layout**: 3-part flex row: (1) logo left, (2) copyright center, (3) links right
- **Logo**: "Jithin Raj" in `#8eff71`, `font-black`
- **Copyright**: "© 2024 NeonArchitect. Built with precision." in `text-[10px] uppercase tracking-widest`
- **Links**: "GitHub, LinkedIn, Polywork, Email" in `text-[10px] uppercase tracking-widest`, hover turns green

---

## 8. Animation System

### Easing
- **Default**: `cubic-bezier(0.16, 1, 0.3, 1)` — used for reveals and card hovers
- **Duration**: `0.4s` default, `0.8s` for reveal, `1s` for image greyscale

### Reveal Animation
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
Triggered by IntersectionObserver at `threshold: 0.15`

### Keyframe Animations
```
float:      6s ease-in-out infinite — translateY(0→-20px) rotate(-12deg→-8deg)
pulse-slow: 4s ease-in-out infinite — opacity(0.2→0.4) scale(1→1.05)
gradient-x: 15s ease infinite — background-position sweep
```

### Background Effects
- **Mesh gradient**: Dual radial green gradients at opposite corners
- **Blurred orbs**: 2 large circles with `blur-[120px]` and `blur-[150px]`
- **Pinging dots**: Small 1×1 circles with `animate-ping` at 3s/4s/5s durations

---

## 9. Responsive Behavior

- **Hero**: `grid-cols-1 → grid-cols-12` at `lg`
- **Skills**: `grid-cols-1 → grid-cols-3 → grid-cols-4` with spanning
- **Projects**: `grid-cols-1 → grid-cols-2` at `md`
- **Experience**: Single column always, title/date stack on mobile
- **Education**: `grid-cols-1 → grid-cols-2` at `md`
- **Contact**: `grid-cols-1 → grid-cols-3` at `md`
- **Nav**: Hamburger menu below `md`, links hidden
- **Hero headline**: `text-6xl → text-8xl` at `md`

---

## 10. Key Differences from Previous Build

> [!CAUTION]
> The following MUST change from the current implementation:

1. **Color**: Swap ALL blue/purple → neon green (#39FF14, #8eff71, #a7ff9d)
2. **Background**: `#091421` navy → `#000000` pure black
3. **Typography**: Mixed case → ALL CAPS ITALIC headlines, Space Grotesk everywhere
4. **Shape**: `rounded-md/lg` → `rounded-sm` (4px) everywhere
5. **Hero**: Text-only → 12-col grid with image card + stat badge
6. **Cards**: Solid surface → glassmorphism (`backdrop-filter: blur(12px)`)
7. **Chips**: Purple rounded pills → green bordered squared chips
8. **Skills**: Uniform 3-col → bento grid with varying spans
9. **Experience**: Bar timeline → left-border with square dots
10. **Contact**: 4-col + WhatsApp inline → 3-col + WhatsApp floating FAB
11. **Nav active**: Color change → underline + glow
12. **Add**: Neon glow effects throughout
13. **Add**: Greyscale images that colorize on hover
14. **Add**: Ambient animated background (orbs, pinging dots, mesh gradient)

---

*Last updated: April 14, 2026 — extracted directly from Stitch screen HTML source*
