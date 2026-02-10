# PVTKRRX Hero Redesign - Nico's Spec

**Current:** Generic centered text with subtle effects
**Target:** Asymmetric cyberpunk layout with animated mesh background

---

## 1. ANIMATED MESH BACKGROUND (Replace boring radial blur)

### globals.css - Add this BEFORE .chrome-text
```css
/* Animated mesh gradient background */
@keyframes mesh-drift-1 {
  0%, 100% {
    background-position: 0% 0%;
    opacity: 0.4;
  }
  50% {
    background-position: 100% 100%;
    opacity: 0.6;
  }
}

@keyframes mesh-drift-2 {
  0%, 100% {
    background-position: 100% 0%;
    opacity: 0.3;
  }
  50% {
    background-position: 0% 100%;
    opacity: 0.5;
  }
}

@keyframes mesh-drift-3 {
  0%, 100% {
    background-position: 50% 50%;
    opacity: 0.2;
  }
  50% {
    background-position: 0% 0%;
    opacity: 0.4;
  }
}

.mesh-bg-layer-1 {
  background: radial-gradient(
    ellipse 80% 50% at 50% 0%,
    rgba(0, 255, 255, 0.15),
    transparent
  );
  background-size: 200% 200%;
  animation: mesh-drift-1 20s ease-in-out infinite;
}

.mesh-bg-layer-2 {
  background: radial-gradient(
    ellipse 70% 60% at 0% 100%,
    rgba(255, 0, 255, 0.12),
    transparent
  );
  background-size: 200% 200%;
  animation: mesh-drift-2 25s ease-in-out infinite;
}

.mesh-bg-layer-3 {
  background: radial-gradient(
    ellipse 90% 70% at 100% 50%,
    rgba(0, 255, 255, 0.08),
    transparent
  );
  background-size: 200% 200%;
  animation: mesh-drift-3 30s ease-in-out infinite;
}

/* Grid overlay for cyberpunk depth */
.cyber-grid {
  background-image:
    linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
}
```

---

## 2. ASYMMETRIC HERO LAYOUT

### page.tsx - Replace entire Hero Section (lines 40-92)

```tsx
{/* Hero Section */}
<section className="relative min-h-screen flex items-center overflow-hidden pt-16">
  {/* Animated mesh background - 3 layers */}
  <div className="absolute inset-0 mesh-bg-layer-1" />
  <div className="absolute inset-0 mesh-bg-layer-2" />
  <div className="absolute inset-0 mesh-bg-layer-3" />
  <div className="absolute inset-0 cyber-grid" />

  {/* VHS scan lines */}
  <div className="hero-scan-lines absolute inset-0" />

  {/* CRT distortion */}
  <div className="crt-effect absolute inset-0" />

  {/* Asymmetric Grid Layout */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

      {/* LEFT: Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="space-y-8"
      >
        {/* Logo - BIG and BOLD */}
        <GlitchText className="chrome-text-animated text-7xl sm:text-8xl lg:text-9xl leading-none">
          PVTKRRX
        </GlitchText>

        {/* Tagline with stagger reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-3"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-rajdhani font-bold leading-tight">
            Stream From Your <span className="text-neon-cyan">Seedbox</span>
            <br />
            to <span className="text-neon-magenta">Stremio</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray max-w-lg">
            Turn your private tracker downloads into a personal catalog.{' '}
            <span className="text-white font-bold">£1/month.</span>
          </p>
        </motion.div>

        {/* CTAs with magnetic hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/signup"
            className="group relative px-8 py-4 bg-neon-cyan text-dark font-rajdhani font-bold text-lg rounded-lg
                       overflow-hidden transition-all duration-300
                       hover:scale-105 hover:shadow-2xl hover:shadow-neon-cyan/50"
          >
            <span className="relative z-10">Start Free Trial</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-magenta opacity-0
                           group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <a
            href="#features"
            className="px-8 py-4 bg-white/5 text-white font-rajdhani font-semibold text-lg rounded-lg
                       border border-white/10 hover:border-neon-cyan hover:bg-white/10
                       transition-all duration-300"
          >
            See How It Works
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-sm text-gray"
        >
          No credit card required • 7-day free trial • Cancel anytime
        </motion.p>
      </motion.div>

      {/* RIGHT: Glitch Monitor Visual */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative hidden lg:block"
      >
        {/* Glitch frame */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-neon-cyan/30
                       bg-gradient-to-br from-dark-secondary/50 to-transparent backdrop-blur-sm">

          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-magenta/10" />

          {/* Terminal lines */}
          <div className="relative p-8 font-jetbrains text-sm space-y-2">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <span className="text-neon-cyan">$</span>
              <span className="text-gray">jackett search "Formula 1"</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              className="text-neon-magenta pl-4"
            >
              → Found 47 results
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <span className="text-neon-cyan">$</span>
              <span className="text-gray">qbittorrent download</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.4 }}
              className="text-neon-magenta pl-4"
            >
              ✓ Added to queue
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <span className="text-neon-cyan">$</span>
              <span className="text-gray">stremio stream</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.4 }}
              className="text-neon-cyan pl-4 font-bold"
            >
              ▶ PLAYING NOW
            </motion.div>
          </div>

          {/* Glitch effect overlay */}
          <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-20">
            <div className="w-full h-full bg-gradient-to-r from-neon-cyan via-transparent to-neon-magenta animate-pulse" />
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neon-magenta/20 rounded-full blur-3xl animate-pulse"
             style={{ animationDelay: '1s' }} />
      </motion.div>
    </div>
  </div>
</section>
```

---

## 3. CHANGES SUMMARY

### What's NEW:
1. **Animated mesh background** - 3 layers moving at different speeds (not a static blur)
2. **Cyberpunk grid overlay** - Subtle depth
3. **Asymmetric layout** - Logo left, visual right (desktop only)
4. **Terminal visual** - Shows the actual workflow in a glitch frame
5. **Stagger animations** - Content reveals in sequence
6. **Magnetic CTA** - Gradient shift on hover
7. **Floating particles** - Depth and motion

### What's GONE:
- ❌ Boring centered layout
- ❌ Static radial blur background
- ❌ Generic "hero with text in middle"

### Files to modify:
1. `app/globals.css` - Add mesh + grid animations (BEFORE .chrome-text)
2. `app/page.tsx` - Replace hero section (lines 40-92)

---

## 4. DEPLOYMENT

**Peter**: Implement this EXACTLY. Don't dial anything down. This IS the vision.

**Timeline**: 45 minutes (complex layout + animations)

**Expected score**: 9/10 - truly distinctive cyberpunk layout

**Nico will review when deployed.**

---

*Nico - Creative Director - PVTKRRX Redesign - Feb 2026*
