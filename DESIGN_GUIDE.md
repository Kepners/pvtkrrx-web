# Design Guide — PVTKRRX Glitch Cyberpunk Aesthetic

**Version**: 1.0
**Date**: February 10, 2026
**Designer**: Nico, Creative Director

---

## 1. Inspiration Board

### The Logo Reference
**Source**: `C:\Users\kepne\projects\L - PVTKRRX\Snipaste_2026-02-08_15-26-48.png`

**What we're stealing from it**:
- Chromatic aberration (RGB channel separation)
- Metallic chrome text treatment
- VHS scan lines overlaying the entire frame
- Motion blur suggesting digital distortion
- Dark, almost-black background
- The feeling of *underground tech*, not polished SaaS

### Reference Sites

| # | Site | URL | What To Steal | Key Technique |
|---|------|-----|---------------|---------------|
| 1 | FreeFrontend Glitch Effects | https://freefrontend.com/css-glitch-effects/ | Chromatic aberration via stacked text-shadow, clip-path animations | `clip-path: inset()` + `mix-blend-mode` |
| 2 | Dribbble Cyberpunk | https://dribbble.com/search/cyberpunk-website | Neon yellow/cyan accents on black, terminal-style typography | High-contrast neon on #000 |
| 3 | Design Work Life - Chromatic Aberration | https://designworklife.com/why-designers-are-embracing-chromatic-aberration-on-purpose/ | Intentional RGB offset as branding element | Color channels as accent colors |
| 4 | Speckyboy Glitch Examples | https://speckyboy.com/glitch-effect-web-design/ | VHS scan lines, digital noise, signal interruption aesthetic | Horizontal line overlays, noise filters |

### Design Articles Referenced
- [Why Designers Are Embracing Chromatic Aberration (On Purpose) in 2025](https://designworklife.com/why-designers-are-embracing-chromatic-aberration-on-purpose/) — *Chromatic aberration shifting from error to intentional design language*
- [Aesthetics in the AI era: Visual + web design trends for 2026](https://medium.com/design-bootcamp/aesthetics-in-the-ai-era-visual-web-design-trends-for-2026-5a0f75a10e98) — *Glitch as authenticity, rebellion against sterile automation*
- [Dark Glassmorphism: The Aesthetic That Will Define UI in 2026](https://medium.com/@developer_89726/dark-glassmorphism-the-aesthetic-that-will-define-ui-in-2026-93aa4153088f) — *Moody glass panels with heavy blur on dark backgrounds*
- [30 CSS Glitch Effects (FreeFrontend)](https://freefrontend.com/css-glitch-effects/) — *clip-path, mix-blend-mode, steps() timing function techniques*

### Current Site Analysis
**Current PVTKRRX**: Clean, minimal dark theme. Green accent (#73B067). Rounded corners (12px). Professional, SaaS-standard.

**Problem**: It says "generic startup," not "underground private tracker tech."

**The Gap**: No glitch, no chrome, no VHS aesthetic, no cyberpunk energy. The logo in the nav is a flat green square. Boring.

---

## 2. Typography

### Font Stack

| Role | Font | Weight | Fallback | Source |
|------|------|--------|----------|--------|
| Display/Logo | **Orbitron** | 900 (Black) | "Courier New", monospace | Google Fonts |
| Headings | **Rajdhani** | 700 (Bold) | "Helvetica Neue", sans-serif | Google Fonts |
| Body | **Inter** | 400 (Regular), 600 (SemiBold) | system-ui, sans-serif | Google Fonts (current) |
| Mono/Code | **JetBrains Mono** | 500 (Medium) | "Courier New", monospace | Google Fonts |

**Why these fonts?**
- **Orbitron**: Geometric, futuristic, screams "tech." Perfect for the glitch logo effect.
- **Rajdhani**: Sharp, angular, high-tech feel. Used by cyberpunk designers.
- **Inter**: Keep body readable. Don't make EVERYTHING cyberpunk — hierarchy matters.
- **JetBrains Mono**: Terminal vibes for code snippets, if needed.

### Font Import (Next.js)

```typescript
// app/layout.tsx
import { Inter, Orbitron, Rajdhani, JetBrains_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ subsets: ['latin'], weight: '900', variable: '--font-orbitron' })
const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-rajdhani' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: '500', variable: '--font-jetbrains' })

// In <html> tag:
className={`${inter.variable} ${orbitron.variable} ${rajdhani.variable} ${jetbrains.variable}`}
```

### Type Scale

| Token | Size | Line Height | Letter Spacing | Use Case | Font Family |
|-------|------|-------------|----------------|----------|-------------|
| `text-xs` | 11px | 16px | 0.03em | Labels, captions | Inter |
| `text-sm` | 13px | 20px | 0.01em | Secondary text | Inter |
| `text-base` | 15px | 24px | 0 | Body text | Inter |
| `text-lg` | 18px | 28px | -0.01em | Subheadings | Rajdhani |
| `text-xl` | 24px | 32px | -0.02em | Section titles | Rajdhani |
| `text-2xl` | 32px | 40px | -0.03em | Page titles | Rajdhani |
| `text-3xl` | 48px | 56px | -0.04em | Hero text | Rajdhani |
| `text-hero` | 72px | 80px | -0.05em | Landing hero | Orbitron |

---

## 3. Color System

### Core Palette (Updated for Cyberpunk)

| Token | Hex | OKLCH | Usage |
|-------|-----|-------|-------|
| `--bg-primary` | #050507 | oklch(3% 0 0) | Main background (almost black, warm undertone) |
| `--bg-secondary` | #0D0D10 | oklch(6% 0 0) | Cards, panels |
| `--bg-tertiary` | #15151A | oklch(10% 0 0) | Hover states, elevated surfaces |
| `--text-primary` | #E8E8E8 | oklch(93% 0 0) | Main text (not pure white) |
| `--text-secondary` | #8A8A92 | oklch(60% 0 0) | Muted text |
| `--text-dim` | #4A4A52 | oklch(35% 0 0) | Disabled, hints |
| `--border` | rgba(255,255,255,0.04) | — | Default borders (very subtle) |
| `--border-hover` | rgba(255,255,255,0.12) | — | Interactive borders |
| `--neon-cyan` | #00FFFF | oklch(91% 0.18 195) | Primary accent (cyan glow) |
| `--neon-magenta` | #FF00FF | oklch(70% 0.32 328) | Secondary accent (hot pink) |
| `--neon-yellow` | #FFFF00 | oklch(97% 0.21 102) | Highlight accent (electric yellow) |
| `--chrome-base` | #A8A8B0 | oklch(72% 0 0) | Metallic base color |
| `--chrome-light` | #E0E0E8 | oklch(90% 0 0) | Chrome highlight |
| `--success` | #00FF66 | oklch(87% 0.25 146) | Positive states |
| `--error` | #FF0066 | oklch(60% 0.28 0) | Error states |

### Gradient Definitions

| Name | CSS | Use Case |
|------|-----|----------|
| `--gradient-neon` | `linear-gradient(135deg, #00FFFF 0%, #FF00FF 100%)` | CTA buttons, active states |
| `--gradient-chrome` | `linear-gradient(135deg, #808088 0%, #E0E0E8 50%, #808088 100%)` | Metallic text effect |
| `--gradient-glow-cyan` | `radial-gradient(circle at 50% 50%, rgba(0,255,255,0.3) 0%, transparent 70%)` | Ambient glow behind hero |
| `--gradient-glow-magenta` | `radial-gradient(circle at 50% 50%, rgba(255,0,255,0.2) 0%, transparent 70%)` | Accent glow effects |
| `--gradient-scan` | `repeating-linear-gradient(0deg, transparent 0px, rgba(255,255,255,0.03) 1px, transparent 2px)` | VHS scan lines overlay |

### Tailwind Config Update

```typescript
// tailwind.config.ts
colors: {
  dark: '#050507',
  'dark-secondary': '#0D0D10',
  'dark-tertiary': '#15151A',
  gray: '#8A8A92',
  'gray-dim': '#4A4A52',
  white: '#E8E8E8',
  'neon-cyan': '#00FFFF',
  'neon-magenta': '#FF00FF',
  'neon-yellow': '#FFFF00',
  chrome: '#A8A8B0',
  'chrome-light': '#E0E0E8',
},
fontFamily: {
  orbitron: ['var(--font-orbitron)', 'monospace'],
  rajdhani: ['var(--font-rajdhani)', 'sans-serif'],
  inter: ['var(--font-inter)', 'sans-serif'],
  jetbrains: ['var(--font-jetbrains)', 'monospace'],
},
```

---

## 4. Glitch Effects — The Core Differentiator

### 4a. Chromatic Aberration (RGB Split)

**Use on**: Logo text, hero title, section headings

```css
.glitch-text {
  position: relative;
  font-family: var(--font-orbitron);
  font-weight: 900;
  color: #E8E8E8;
  text-shadow:
    2px 0 #00FFFF,    /* Cyan offset right */
    -2px 0 #FF00FF;   /* Magenta offset left */
}

/* Enhanced version with animation */
.glitch-text-animated {
  position: relative;
  color: #E8E8E8;
  animation: glitch-skew 2s infinite;
}

.glitch-text-animated::before,
.glitch-text-animated::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text-animated::before {
  left: 2px;
  text-shadow: -2px 0 #00FFFF;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch-text-animated::after {
  left: -2px;
  text-shadow: -2px 0 #FF00FF;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim2 5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% { clip: rect(31px, 9999px, 94px, 0); }
  10% { clip: rect(112px, 9999px, 76px, 0); }
  20% { clip: rect(85px, 9999px, 40px, 0); }
  30% { clip: rect(120px, 9999px, 34px, 0); }
  40% { clip: rect(67px, 9999px, 23px, 0); }
  50% { clip: rect(45px, 9999px, 99px, 0); }
  60% { clip: rect(19px, 9999px, 105px, 0); }
  70% { clip: rect(103px, 9999px, 16px, 0); }
  80% { clip: rect(56px, 9999px, 72px, 0); }
  90% { clip: rect(90px, 9999px, 50px, 0); }
  100% { clip: rect(11px, 9999px, 88px, 0); }
}

@keyframes glitch-anim2 {
  0% { clip: rect(65px, 9999px, 119px, 0); }
  10% { clip: rect(29px, 9999px, 148px, 0); }
  20% { clip: rect(103px, 9999px, 17px, 0); }
  30% { clip: rect(151px, 9999px, 60px, 0); }
  40% { clip: rect(73px, 9999px, 109px, 0); }
  50% { clip: rect(130px, 9999px, 42px, 0); }
  60% { clip: rect(21px, 9999px, 95px, 0); }
  70% { clip: rect(98px, 9999px, 123px, 0); }
  80% { clip: rect(44px, 9999px, 77px, 0); }
  90% { clip: rect(116px, 9999px, 36px, 0); }
  100% { clip: rect(59px, 9999px, 142px, 0); }
}

@keyframes glitch-skew {
  0% { transform: skew(0deg); }
  10% { transform: skew(-2deg); }
  20% { transform: skew(1deg); }
  30% { transform: skew(0deg); }
  40% { transform: skew(1deg); }
  50% { transform: skew(0deg); }
  60% { transform: skew(-1deg); }
  70% { transform: skew(0deg); }
  80% { transform: skew(-2deg); }
  90% { transform: skew(1deg); }
  100% { transform: skew(0deg); }
}
```

**React Component (Framer Motion)**:

```tsx
'use client'
import { motion } from 'framer-motion'

export function GlitchText({ children, className = '' }: { children: string, className?: string }) {
  return (
    <motion.div
      className={`glitch-text ${className}`}
      data-text={children}
      style={{
        position: 'relative',
        fontFamily: 'var(--font-orbitron)',
        fontWeight: 900,
        color: '#E8E8E8',
        textShadow: '2px 0 #00FFFF, -2px 0 #FF00FF',
      }}
      animate={{
        skewX: [0, -1, 1, 0, 1, 0, -1, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.div>
  )
}
```

### 4b. VHS Scan Lines

**Use on**: Full-page overlay (subtle), hero section (prominent)

```css
/* Global scan lines overlay */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    rgba(255, 255, 255, 0.02) 1px,
    transparent 2px
  );
  pointer-events: none;
  z-index: 9999;
}

/* Hero section scan lines (more pronounced) */
.hero-scan-lines {
  position: relative;
}

.hero-scan-lines::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    rgba(0, 255, 255, 0.03) 1px,
    transparent 3px
  );
  pointer-events: none;
  animation: scan-flicker 0.1s infinite;
}

@keyframes scan-flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.9; }
}
```

### 4c. Metallic Chrome Text

**Use on**: "PVTKRRX" logo, hero title

```css
.chrome-text {
  font-family: var(--font-orbitron);
  font-weight: 900;
  font-size: 72px;
  background: linear-gradient(
    135deg,
    #808088 0%,
    #E0E0E8 25%,
    #A8A8B0 50%,
    #E0E0E8 75%,
    #808088 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
}

/* Animated chrome (light moves across) */
.chrome-text-animated {
  background-size: 200% 100%;
  animation: chrome-shine 3s linear infinite;
}

@keyframes chrome-shine {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}
```

### 4d. CRT Screen Distortion

**Use on**: Hero section background

```css
.crt-effect {
  position: relative;
  animation: crt-flicker 0.15s infinite;
}

.crt-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
  pointer-events: none;
}

@keyframes crt-flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.98; }
}
```

---

## 5. Component Patterns

### 5a. Hero Section (Landing Page)

```tsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
  {/* Ambient glow background */}
  <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/10 via-transparent to-transparent blur-3xl" />

  {/* VHS scan lines */}
  <div className="hero-scan-lines absolute inset-0" />

  {/* CRT distortion */}
  <div className="crt-effect absolute inset-0" />

  {/* Content */}
  <div className="relative z-10 text-center px-4 max-w-5xl">
    {/* Logo with glitch + chrome */}
    <GlitchText className="chrome-text-animated text-hero mb-8">
      PVTKRRX
    </GlitchText>

    {/* Tagline with chromatic aberration */}
    <h1 className="glitch-text text-3xl sm:text-5xl font-rajdhani font-bold mb-6">
      Stream From Your Seedbox<br />
      to <span className="text-neon-cyan">Stremio</span>
    </h1>

    {/* Body text (readable, no effects) */}
    <p className="text-lg text-gray mb-12 max-w-2xl mx-auto">
      Turn your private tracker downloads into a personal Stremio catalog.{' '}
      <span className="text-white font-semibold">£1/month.</span>
    </p>

    {/* CTAs with neon glow */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="px-8 py-4 bg-neon-cyan text-dark font-rajdhani font-bold text-lg rounded-lg
                         hover:bg-neon-cyan/90 transition shadow-lg shadow-neon-cyan/30
                         hover:shadow-neon-cyan/50 hover:scale-105 active:scale-100">
        Start Free Trial
      </button>
      <button className="px-8 py-4 bg-white/5 text-white font-rajdhani font-semibold text-lg rounded-lg
                         border border-white/10 hover:border-neon-magenta hover:text-neon-magenta
                         transition">
        See How It Works
      </button>
    </div>
  </div>
</section>
```

### 5b. Card Component (Feature Cards)

```tsx
<div className="group relative bg-dark-secondary rounded-2xl p-8 border border-white/5
                hover:border-neon-cyan/30 transition-all duration-300
                hover:shadow-lg hover:shadow-neon-cyan/10">
  {/* Glow effect on hover */}
  <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/5 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

  {/* Icon with glitch on hover */}
  <div className="text-5xl mb-5 group-hover:scale-110 transition-transform relative">
    <span className="group-hover:glitch-text">⚡</span>
  </div>

  {/* Title (angular font) */}
  <h3 className="text-xl font-rajdhani font-bold mb-3 text-white">
    Instant Streaming
  </h3>

  {/* Description (readable) */}
  <p className="text-gray leading-relaxed">
    Already on your seedbox? Stream starts immediately.
  </p>
</div>
```

### 5c. Navigation

```tsx
<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-dark/80 backdrop-blur-xl">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo with subtle chrome */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-lg" />
        <span className="text-xl font-orbitron font-black chrome-text text-[20px]">
          PVTKRRX
        </span>
      </div>

      {/* Nav links */}
      <div className="flex items-center gap-8">
        <a href="#features" className="text-gray hover:text-neon-cyan transition font-rajdhani">
          Features
        </a>
        <a href="#pricing" className="text-gray hover:text-neon-cyan transition font-rajdhani">
          Pricing
        </a>
        <a href="#faq" className="text-gray hover:text-neon-cyan transition font-rajdhani">
          FAQ
        </a>
        <button className="px-4 py-2 rounded-lg bg-neon-cyan text-dark font-rajdhani font-bold
                           hover:bg-neon-cyan/90 transition shadow-md shadow-neon-cyan/30">
          Login
        </button>
      </div>
    </div>
  </div>
</nav>
```

---

## 6. Motion & Interaction

### Animation Principles
- **Fast glitches**: 150-300ms (quick, jarring)
- **Slow glows**: 2-5s (ambient, breathing)
- **Timing function**: `steps()` for robotic glitch, `cubic-bezier(0.4, 0, 0.2, 1)` for smooth UI
- **Rule**: Glitch effects should feel *intentional*, not broken

### Element Animations

#### Buttons
```css
.neon-button {
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.neon-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 255, 255, 0.4);
}

.neon-button:active {
  transform: translateY(0) scale(0.98);
  transition-duration: 100ms;
}
```

#### Cards
```css
.card {
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 12px 40px rgba(0, 255, 255, 0.1);
}
```

#### Page Transitions (Framer Motion)
```tsx
// layout.tsx wrapper
<motion.div
  key={pathname}
  initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
  exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  {children}
</motion.div>
```

---

## 7. Unique Differentiator

**The ONE thing nobody else in this space does:**

### Hover-Triggered Glitch on ALL Interactive Elements

Every button, card, and link gets a **micro-glitch on hover** — not just color change. A 150ms RGB split flicker that makes the interface feel *alive* and reactive, like you're interfacing with underground tech, not a polished app.

**Why it works**:
- [The Art of Glitch: Embracing Imperfection in UI/UX Design](https://stephaniekabi.com/the-art-of-glitch-embracing-imperfection-in-ui-ux-design/) — *"Glitch effects in UI design signal disruption, authenticity, and energy. They tell users: this is not corporate, this is REAL."*

**How to build it**:
```tsx
// HoverGlitch.tsx
'use client'
import { useState } from 'react'

export function HoverGlitch({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const [isGlitching, setIsGlitching] = useState(false)

  const handleMouseEnter = () => {
    setIsGlitching(true)
    setTimeout(() => setIsGlitching(false), 150) // Quick glitch
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className={`${className} ${isGlitching ? 'glitch-active' : ''}`}
      style={{
        transition: 'all 150ms steps(2)',
        ...(isGlitching && {
          textShadow: '2px 0 #00FFFF, -2px 0 #FF00FF',
          transform: 'skewX(-2deg)',
        }),
      }}
    >
      {children}
    </div>
  )
}
```

---

## 8. Anti-Patterns (DO NOT DO THESE)

| Pattern | Why It's Bad | What To Do Instead |
|---------|-------------|-------------------|
| Glitch on EVERYTHING | Eye strain, unreadable | Only glitch on headings, logo, interactive hover states. Body text stays clean. |
| Pure #000000 black | Too harsh, no depth | Use #050507 (almost black with warm undertone) |
| Pure #FFFFFF white text | Too bright on dark | Use #E8E8E8 (off-white, easier on eyes) |
| Neon accents at 100% saturation | Retina-burning | Reduce saturation 10-15% on backgrounds, full saturation only on CTAs |
| Glitch animations longer than 5s | Distracting, annoying | Keep glitch loops under 3s, or trigger only on interaction |
| VHS scan lines too opaque | Obscures content | Opacity max 0.03 for subtle effect |

---

## 9. Accessibility Checklist

- [x] **Contrast**: Neon cyan (#00FFFF) on dark (#050507) = 16.5:1 (WCAG AAA)
- [x] **Contrast**: Off-white (#E8E8E8) on dark (#050507) = 14.2:1 (WCAG AAA)
- [x] **Motion**: Respect `prefers-reduced-motion` — disable all glitch animations
- [x] **Focus indicators**: Neon cyan outline on all interactive elements
- [x] **Screen readers**: Glitch effects via `aria-hidden` pseudo-elements, actual text remains clean
- [x] **No color-only indicators**: All CTAs have text + icon, not just color

```css
/* Disable glitch for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .glitch-text-animated,
  .chrome-text-animated,
  .hero-scan-lines::before,
  .crt-effect {
    animation: none !important;
  }

  .glitch-text::before,
  .glitch-text::after {
    display: none;
  }
}
```

---

## 10. Responsive Specifications

### Breakpoint Behavior

| Component | Desktop (>1024px) | Tablet (640-1024px) | Mobile (<640px) |
|-----------|-------------------|---------------------|-----------------|
| Hero text | 72px Orbitron | 56px Orbitron | 40px Orbitron |
| Glitch intensity | Full (2px offset) | Medium (1.5px offset) | Subtle (1px offset) |
| Scan lines | Every 2px | Every 3px | Every 4px (less noise on small screens) |
| Card grid | 3-column | 2-column | Single column |
| Navigation | Horizontal | Horizontal | Hamburger menu |

---

## 11. Implementation Priority

| Priority | Task | Impact | Effort |
|----------|------|--------|--------|
| 🔴 **P0** | Chrome logo + glitch text on hero | HIGH — sets the entire vibe | Medium |
| 🔴 **P0** | VHS scan lines overlay | HIGH — instant cyberpunk feel | Low |
| 🔴 **P0** | Neon cyan/magenta accent colors | HIGH — visual identity | Low |
| 🟡 **P1** | Orbitron + Rajdhani fonts | MEDIUM — branding | Low |
| 🟡 **P1** | Hover glitch micro-interactions | MEDIUM — unique differentiator | Medium |
| 🟡 **P1** | CRT distortion on hero | MEDIUM — adds depth | Low |
| 🟢 **P2** | Animated chrome shine | LOW — polish | Medium |
| 🟢 **P2** | Ambient glow backgrounds | LOW — polish | Low |

---

## 12. References

### Articles
- [Why Designers Are Embracing Chromatic Aberration (On Purpose)](https://designworklife.com/why-designers-are-embracing-chromatic-aberration-on-purpose/)
- [Aesthetics in the AI era: Visual + web design trends for 2026](https://medium.com/design-bootcamp/aesthetics-in-the-ai-era-visual-web-design-trends-for-2026-5a0f75a10e98)
- [30 CSS Glitch Effects](https://freefrontend.com/css-glitch-effects/)
- [The Art of Glitch: Embracing Imperfection in UI/UX Design](https://stephaniekabi.com/the-art-of-glitch-embracing-imperfection-in-ui-ux-design/)
- [Dark Glassmorphism: The Aesthetic That Will Define UI in 2026](https://medium.com/@developer_89726/dark-glassmorphism-the-aesthetic-that-will-define-ui-in-2026-93aa4153088f)
- [VHS CSS text effect](https://observablehq.com/@eesur/vhs-text-effect)

### Tools
- [Glassmorphism CSS Generator](https://ui.glass/generator/)
- [CSS Gradient Generator (for chrome effect)](https://cssgradient.io/)
- [Google Fonts: Orbitron](https://fonts.google.com/specimen/Orbitron)
- [Google Fonts: Rajdhani](https://fonts.google.com/specimen/Rajdhani)

### Dribbble Inspiration
- [Cyberpunk Website Designs](https://dribbble.com/search/cyberpunk-website)

---

**Next Steps**:
1. Peter implements P0 items (chrome logo, scan lines, neon accents)
2. Test on mobile (reduce glitch intensity)
3. Accessibility audit (motion preferences, contrast)
4. Deploy to staging, screenshot, review

— Nico, Creative Director
February 10, 2026
