# PVTKRRX Full Site Redesign - Digital Corruption Aesthetic

**Reference**: Video + logo showing intense RGB chromatic aberration, scan lines, pixel corruption, radial distortion

**Target Score**: 9/10 — truly distinctive cyberpunk site that matches the logo's AGGRESSIVE glitch vibe

---

## 1. GLOBAL EFFECTS (Apply to ENTIRE Site)

### RGB Chromatic Aberration (THE SIGNATURE EFFECT)

```css
/* Add to globals.css AFTER existing animations */

/* Aggressive RGB split on hover/focus */
.chromatic-aberration {
  position: relative;
}

.chromatic-aberration::before,
.chromatic-aberration::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.chromatic-aberration::before {
  color: #00FFFF;
  transform: translateX(-3px);
  mix-blend-mode: screen;
}

.chromatic-aberration::after {
  color: #FF00FF;
  transform: translateX(3px);
  mix-blend-mode: screen;
}

.chromatic-aberration:hover::before,
.chromatic-aberration:hover::after {
  opacity: 0.7;
}

/* Pixelated/Datamosh effect */
@keyframes pixelate-glitch {
  0%, 100% {
    filter: none;
  }
  25% {
    filter: contrast(1.3) saturate(1.5);
  }
  50% {
    filter: contrast(1.1) saturate(1.8) hue-rotate(5deg);
  }
  75% {
    filter: contrast(1.4) saturate(1.3) hue-rotate(-5deg);
  }
}

.pixel-glitch {
  animation: pixelate-glitch 8s ease-in-out infinite;
}

/* Scan line overlay (MORE INTENSE) */
.scan-lines-heavy {
  position: relative;
  overflow: hidden;
}

.scan-lines-heavy::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 255, 255, 0.03) 0px,
    rgba(0, 255, 255, 0.03) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  z-index: 10;
  animation: scan-line-drift 8s linear infinite;
}

@keyframes scan-line-drift {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(4px);
  }
}

/* Digital noise texture */
@keyframes noise-anim {
  0%, 100% {
    background-position: 0 0;
  }
  10% {
    background-position: -5% -10%;
  }
  20% {
    background-position: -15% 5%;
  }
  30% {
    background-position: 7% -25%;
  }
  40% {
    background-position: 20% 25%;
  }
  50% {
    background-position: -25% 10%;
  }
  60% {
    background-position: 15% 5%;
  }
  70% {
    background-position: 0 15%;
  }
  80% {
    background-position: 25% 35%;
  }
  90% {
    background-position: -10% 10%;
  }
}

.digital-noise {
  position: relative;
}

.digital-noise::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
  background-size: 200px 200px;
  pointer-events: none;
  opacity: 0.15;
  animation: noise-anim 0.5s steps(10) infinite;
}

/* Radial distortion background */
.radial-distortion {
  background:
    radial-gradient(
      ellipse 150% 100% at 50% 50%,
      transparent 30%,
      rgba(0, 255, 255, 0.03) 50%,
      rgba(255, 0, 255, 0.03) 70%,
      transparent 100%
    );
}
```

---

## 2. HERO SECTION ENHANCEMENTS (Dial Up What We Built)

### Update existing hero in page.tsx

Add these classes to existing hero elements:

```tsx
{/* BEFORE: Clean hero section */}
<section className="relative min-h-screen flex items-center overflow-hidden pt-16">

{/* AFTER: Add digital corruption */}
<section className="relative min-h-screen flex items-center overflow-hidden pt-16 scan-lines-heavy digital-noise">

  {/* Add radial distortion layer */}
  <div className="absolute inset-0 radial-distortion" />

  {/* Existing mesh layers stay */}
  <div className="absolute inset-0 mesh-bg-layer-1" />
  <div className="absolute inset-0 mesh-bg-layer-2" />
  <div className="absolute inset-0 mesh-bg-layer-3" />
  <div className="absolute inset-0 cyber-grid" />

  {/* ... rest stays the same ... */}
```

Update the PVTKRRX title to have chromatic aberration:

```tsx
{/* BEFORE: */}
<GlitchText className="chrome-text-animated text-7xl sm:text-8xl lg:text-9xl leading-none">
  PVTKRRX
</GlitchText>

{/* AFTER: Add data attribute for chromatic effect */}
<div className="chromatic-aberration" data-text="PVTKRRX">
  <GlitchText className="chrome-text-animated text-7xl sm:text-8xl lg:text-9xl leading-none pixel-glitch">
    PVTKRRX
  </GlitchText>
</div>
```

---

## 3. FEATURES SECTION (NEW)

Replace the boring feature cards with **corrupted data panels**.

### page.tsx - Add after Hero section

```tsx
{/* Features Section */}
<section className="relative py-24 overflow-hidden scan-lines-heavy">
  {/* Background layers */}
  <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-secondary" />
  <div className="absolute inset-0 mesh-bg-layer-2 opacity-30" />
  <div className="absolute inset-0 digital-noise" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl sm:text-5xl font-rajdhani font-bold mb-4">
        <span className="chrome-text-animated pixel-glitch">YOUR SEEDBOX</span>
        <br />
        <span className="text-neon-cyan">DIRECT TO STREMIO</span>
      </h2>
      <p className="text-gray text-lg max-w-2xl mx-auto">
        No middleware. No transcoding. No bullshit. Just your qBittorrent + Jackett → Stremio.
      </p>
    </motion.div>

    {/* Feature grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          icon: '⚡',
          title: 'Direct Playback',
          desc: 'Stream files from your qBittorrent WebDAV. No proxy servers.',
          delay: 0
        },
        {
          icon: '🔒',
          title: 'Private Trackers',
          desc: 'Connect Jackett/Prowlarr indexers. Your credentials stay encrypted.',
          delay: 0.1
        },
        {
          icon: '🏃',
          title: 'Sports Priority',
          desc: 'First-class sports catalog. Live events, replays, highlights.',
          delay: 0.2
        },
        {
          icon: '💰',
          title: '£1/month',
          desc: 'Flat fee. No usage limits. No surprise charges.',
          delay: 0.3
        },
        {
          icon: '🌐',
          title: 'Your Infrastructure',
          desc: 'Works with ANY seedbox. Hetzner, Whatbox, your basement server.',
          delay: 0.4
        },
        {
          icon: '🔧',
          title: 'Zero Config',
          desc: 'Paste your URLs + credentials. Install addon. Done.',
          delay: 0.5
        },
      ].map((feature, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: feature.delay }}
          className="group relative"
        >
          {/* Glitch border */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-transparent to-neon-magenta/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Card */}
          <div className="relative bg-dark-secondary/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 h-full transition-all duration-300 group-hover:border-neon-cyan/30 group-hover:transform group-hover:translateY(-2px) scan-lines-heavy">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-rajdhani font-bold mb-2 text-white group-hover:text-neon-cyan transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-gray text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

---

## 4. PRICING SECTION (CORRUPTED TERMINAL STYLE)

### page.tsx - Add after Features

```tsx
{/* Pricing Section */}
<section className="relative py-24 overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 bg-dark" />
  <div className="absolute inset-0 mesh-bg-layer-1 opacity-20" />
  <div className="absolute inset-0 cyber-grid opacity-20" />
  <div className="absolute inset-0 digital-noise" />

  <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl sm:text-5xl font-rajdhani font-bold mb-4 chrome-text-animated pixel-glitch">
        PRICING
      </h2>
      <p className="text-gray">No tiers. No upsells. One price.</p>
    </motion.div>

    {/* Terminal-style pricing card */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative group"
    >
      {/* Outer glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

      {/* Card */}
      <div className="relative bg-dark-secondary/80 backdrop-blur-md border-2 border-neon-cyan/30 rounded-2xl p-8 scan-lines-heavy">
        {/* Terminal header */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-gray text-sm font-jetbrains">pricing.sh</span>
        </div>

        {/* Terminal content */}
        <div className="font-jetbrains text-sm space-y-3">
          <div className="flex items-start gap-2">
            <span className="text-neon-cyan">$</span>
            <span className="text-gray">cat pricing.txt</span>
          </div>

          <div className="pl-4 space-y-2">
            <div className="text-white">
              <span className="text-neon-magenta">PVTKRRX_SUBSCRIPTION</span>
              <span className="text-white">=</span>
              <span className="text-neon-cyan text-3xl font-bold">£1</span>
              <span className="text-gray">/month</span>
            </div>

            <div className="text-gray text-xs space-y-1">
              <div>→ Unlimited streams</div>
              <div>→ Unlimited catalogs</div>
              <div>→ All features included</div>
              <div>→ Sports priority catalog</div>
              <div>→ Cancel anytime (seriously)</div>
            </div>

            <div className="flex items-center gap-2 mt-6">
              <span className="text-neon-cyan">$</span>
              <span className="text-gray">stripe checkout --amount=100</span>
            </div>

            <div className="text-neon-magenta pl-4">
              ✓ Redirecting to payment...
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/signup"
          className="mt-8 block w-full text-center px-8 py-4 bg-neon-cyan text-dark font-rajdhani font-bold text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-cyan/50"
        >
          Start 7-Day Free Trial
        </Link>

        <p className="text-center text-gray text-xs mt-4">
          No credit card required • Cancel anytime • Seriously just £1/month
        </p>
      </div>
    </motion.div>
  </div>
</section>
```

---

## 5. FAQ SECTION (GLITCH ACCORDION)

### page.tsx - Add after Pricing

```tsx
{/* FAQ Section */}
<section className="relative py-24 overflow-hidden scan-lines-heavy">
  <div className="absolute inset-0 bg-gradient-to-b from-dark-secondary to-dark" />
  <div className="absolute inset-0 mesh-bg-layer-3 opacity-20" />
  <div className="absolute inset-0 digital-noise" />

  <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl sm:text-5xl font-rajdhani font-bold chrome-text-animated pixel-glitch">
        FAQ
      </h2>
    </motion.div>

    <div className="space-y-4">
      {[
        {
          q: 'Do you transcode my files?',
          a: 'No. We serve files DIRECTLY from your qBittorrent WebDAV. Stremio plays them as-is.'
        },
        {
          q: 'Where are my credentials stored?',
          a: 'AES-256-GCM encrypted in your addon config URL. We never see your plaintext passwords.'
        },
        {
          q: 'What seedboxes are supported?',
          a: 'ANY seedbox with qBittorrent WebUI. Hetzner, Whatbox, Seedhost, your basement — if it has qBit, it works.'
        },
        {
          q: 'Is this legal?',
          a: 'PVTKRRX is a bridge. What you stream depends on YOUR indexers and YOUR seedbox. We\'re just the pipe.'
        },
        {
          q: 'Can I use multiple Jackett/Prowlarr indexers?',
          a: 'Yes. Configure up to 5 indexers in your addon settings.'
        },
        {
          q: 'What about sports?',
          a: 'Sports catalog is #1 priority. Live events, replays, highlights — all searchable by date, league, team.'
        },
      ].map((faq, idx) => (
        <motion.details
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="group bg-dark-secondary/50 backdrop-blur-sm border border-white/5 rounded-lg overflow-hidden hover:border-neon-cyan/30 transition-colors duration-300"
        >
          <summary className="cursor-pointer px-6 py-4 font-rajdhani font-semibold text-lg flex items-center justify-between hover:text-neon-cyan transition-colors duration-300">
            <span>{faq.q}</span>
            <span className="text-neon-cyan group-open:rotate-180 transition-transform duration-300">▼</span>
          </summary>
          <div className="px-6 pb-4 text-gray text-sm leading-relaxed border-t border-white/5">
            {faq.a}
          </div>
        </motion.details>
      ))}
    </div>
  </div>
</section>
```

---

## 6. FINAL CTA (CORRUPTED BROADCAST)

### page.tsx - Add before Footer

```tsx
{/* Final CTA */}
<section className="relative py-32 overflow-hidden">
  <div className="absolute inset-0 bg-dark" />
  <div className="absolute inset-0 mesh-bg-layer-1" />
  <div className="absolute inset-0 mesh-bg-layer-2" />
  <div className="absolute inset-0 mesh-bg-layer-3" />
  <div className="absolute inset-0 cyber-grid" />
  <div className="absolute inset-0 radial-distortion" />
  <div className="absolute inset-0 digital-noise" />
  <div className="absolute inset-0 scan-lines-heavy" />

  <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="chromatic-aberration mb-8" data-text="READY?">
        <h2 className="chrome-text-animated text-6xl sm:text-7xl lg:text-8xl font-rajdhani font-black pixel-glitch">
          READY?
        </h2>
      </div>

      <p className="text-xl sm:text-2xl text-gray mb-12 max-w-2xl mx-auto">
        Your seedbox is waiting. Your private trackers are ready. Let's bridge the gap.
      </p>

      <Link
        href="/signup"
        className="inline-block px-12 py-5 bg-gradient-to-r from-neon-cyan to-neon-magenta text-dark font-rajdhani font-bold text-xl rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-neon-cyan/50"
      >
        Start Free Trial →
      </Link>

      <p className="mt-6 text-gray text-sm">
        7 days free • No credit card • £1/month after
      </p>
    </motion.div>
  </div>
</section>
```

---

## 7. FOOTER (MINIMAL TERMINAL)

### page.tsx - Replace existing footer

```tsx
{/* Footer */}
<footer className="relative border-t border-white/5 py-12 scan-lines-heavy">
  <div className="absolute inset-0 bg-dark-secondary" />
  <div className="absolute inset-0 digital-noise opacity-50" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Logo */}
      <div>
        <div className="chrome-text text-2xl font-rajdhani font-black mb-2">PVTKRRX</div>
        <p className="text-gray text-sm">Your seedbox → Stremio</p>
      </div>

      {/* Links */}
      <div>
        <h3 className="font-rajdhani font-semibold mb-3 text-white">Product</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="/features" className="text-gray hover:text-neon-cyan transition-colors">Features</a></li>
          <li><a href="/pricing" className="text-gray hover:text-neon-cyan transition-colors">Pricing</a></li>
          <li><a href="/docs" className="text-gray hover:text-neon-cyan transition-colors">Documentation</a></li>
          <li><a href="/faq" className="text-gray hover:text-neon-cyan transition-colors">FAQ</a></li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h3 className="font-rajdhani font-semibold mb-3 text-white">Legal</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="/privacy" className="text-gray hover:text-neon-cyan transition-colors">Privacy Policy</a></li>
          <li><a href="/terms" className="text-gray hover:text-neon-cyan transition-colors">Terms of Service</a></li>
          <li><a href="https://github.com/kepner/pvtkrrx" className="text-gray hover:text-neon-cyan transition-colors">Source Code</a></li>
        </ul>
      </div>
    </div>

    <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray text-xs">
      <p>© 2026 PVTKRRX. Source Available License.</p>
      <p className="mt-2 font-jetbrains">Built with stremio-addon-sdk • Hosted on Vercel</p>
    </div>
  </div>
</footer>
```

---

## 8. IMPLEMENTATION CHECKLIST

**Peter — do these in order:**

### Step 1: Update globals.css
- [ ] Add all new CSS animations from Section 1 (chromatic-aberration, pixel-glitch, scan-lines-heavy, digital-noise, radial-distortion)
- [ ] Place AFTER existing animations, BEFORE component styles

### Step 2: Update Hero (page.tsx lines 40-213)
- [ ] Add `scan-lines-heavy digital-noise` to section
- [ ] Add radial-distortion div layer
- [ ] Wrap PVTKRRX title in chromatic-aberration div with data-text attribute
- [ ] Add `pixel-glitch` class to GlitchText

### Step 3: Add Features Section
- [ ] Insert after Hero section (line 214)
- [ ] Copy exact code from Section 3
- [ ] Verify all 6 feature cards render with glitch borders

### Step 4: Add Pricing Section
- [ ] Insert after Features
- [ ] Copy terminal-style pricing card from Section 4
- [ ] Link CTA button to /signup

### Step 5: Add FAQ Section
- [ ] Insert after Pricing
- [ ] Copy glitch accordion from Section 5
- [ ] Verify all 6 FAQ items expand/collapse

### Step 6: Add Final CTA
- [ ] Insert before Footer
- [ ] Copy corrupted broadcast from Section 6
- [ ] Verify chromatic aberration on "READY?"

### Step 7: Replace Footer
- [ ] Replace existing footer with Section 7 code
- [ ] Update links to match actual routes
- [ ] Add GitHub repo link

### Step 8: Test & Deploy
- [ ] Run `npm run dev` — check all sections render
- [ ] Test mobile responsiveness (all sections stack cleanly)
- [ ] Test all hover effects (chromatic aberration, glitch borders, CTA scaling)
- [ ] Commit: `🎨 feat: Full site redesign with digital corruption aesthetic`
- [ ] Push to main → auto-deploy to Vercel

---

## 9. EXPECTED OUTCOME

**What the user will see:**
- **Hero**: Asymmetric layout with INTENSE RGB chromatic aberration on logo, scan lines, digital noise
- **Features**: 6 glitch-bordered cards with hover effects, scan line overlays
- **Pricing**: Terminal-style card with animated glow, corrupt broadcast aesthetic
- **FAQ**: Glitch accordion with smooth expand/collapse
- **CTA**: Massive "READY?" with chromatic aberration, exploding mesh backgrounds
- **Footer**: Minimal terminal style with subtle scan lines

**Score**: 9/10 — matches the video's digital corruption intensity, distinctly cyberpunk, unmistakably PVTKRRX

---

*Nico - Creative Director - PVTKRRX Full Site Redesign - Feb 2026*
*Reference: grok-video RGB chromatic aberration + logo digital noise*
