'use client'

import Link from 'next/link'
import { GlitchText } from '@/components/GlitchText'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-dark/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with neon gradient */}
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
              <Link href="/login" className="px-4 py-2 rounded-lg bg-neon-cyan text-dark font-rajdhani font-bold
                                   hover:bg-neon-cyan/90 transition shadow-md shadow-neon-cyan/30">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16 scan-lines-heavy digital-noise">
        {/* Add radial distortion layer */}
        <div className="absolute inset-0 radial-distortion" />

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
              <div className="chromatic-aberration" data-text="PVTKRRX">
                <GlitchText className="chrome-text-animated text-7xl sm:text-8xl lg:text-9xl leading-none pixel-glitch">
                  PVTKRRX
                </GlitchText>
              </div>

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

      {/* Social Proof */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-secondary rounded-2xl p-8 text-center border border-white/5">
            <p className="text-gray mb-4 text-lg italic">
              "Finally, my 4K remuxes from private trackers work perfectly in Stremio. Worth every penny."
            </p>
            <p className="text-sm text-gray/70">— James M., Ultra.cc user</p>
          </div>
        </div>
      </section>

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
                <li><a href="#features" className="text-gray hover:text-neon-cyan transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray hover:text-neon-cyan transition-colors">Pricing</a></li>
                <li><Link href="/docs" className="text-gray hover:text-neon-cyan transition-colors">Documentation</Link></li>
                <li><a href="#faq" className="text-gray hover:text-neon-cyan transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-rajdhani font-semibold mb-3 text-white">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="text-gray hover:text-neon-cyan transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray hover:text-neon-cyan transition-colors">Terms of Service</Link></li>
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
    </main>
  )
}
