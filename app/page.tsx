import Link from 'next/link'
import { GlitchText } from '@/components/GlitchText'

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Ambient glow background */}
        <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/20 via-neon-magenta/5 to-transparent blur-3xl" />

        {/* VHS scan lines */}
        <div className="hero-scan-lines absolute inset-0" />

        {/* CRT distortion */}
        <div className="crt-effect absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl">
          {/* Logo with glitch + chrome */}
          <GlitchText className="chrome-text-animated text-7xl sm:text-8xl mb-8">
            PVTKRRX
          </GlitchText>

          {/* Tagline */}
          <h1 className="text-3xl sm:text-5xl font-rajdhani font-bold mb-6 leading-tight">
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
            <Link
              href="/signup"
              className="px-8 py-4 bg-neon-cyan text-dark font-rajdhani font-bold text-lg rounded-lg
                         hover:bg-neon-cyan/90 transition shadow-lg shadow-neon-cyan/30
                         hover:shadow-neon-cyan/50 hover:scale-105 active:scale-100"
            >
              Start Free Trial
            </Link>
            <a
              href="#features"
              className="px-8 py-4 bg-white/5 text-white font-rajdhani font-semibold text-lg rounded-lg
                         border border-white/10 hover:border-neon-magenta hover:text-neon-magenta
                         transition"
            >
              See How It Works
            </a>
          </div>

          <p className="mt-8 text-sm text-gray">
            No credit card required • 7-day free trial • Cancel anytime
          </p>
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
      <section id="features" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-rajdhani font-bold text-center mb-20 text-white">
            Everything You Need
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon="⚡" title="Instant Streaming" description="Already on your seedbox? Stream starts immediately. Not downloaded yet? We trigger the download and poll until ready." />
            <FeatureCard icon="🏆" title="Private Tracker Quality" description="4K BluRay remuxes, Dolby Atmos, HDR10+. Your private tracker content, your Stremio library." />
            <FeatureCard icon="🔒" title="Your Infrastructure" description="You provide your own seedbox. We just connect it to Stremio. Zero storage costs for us, full control for you." />
            <FeatureCard icon="🎬" title="Sports, Movies, TV" description="4 catalogs: Sports (with genre filters), Movies, TV Shows, and your Library of completed downloads." />
            <FeatureCard icon="📱" title="Works Everywhere" description="Stremio on desktop, mobile, TV, web. PVTKRRX works on all platforms with zero config changes." />
            <FeatureCard icon="🚀" title="60-Second Setup" description="Enter your Jackett + qBittorrent credentials, test connection, install in Stremio. Done." />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 bg-dark-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-rajdhani font-bold mb-6 text-white">Simple Pricing</h2>
          <p className="text-xl text-gray mb-16">One plan. No hidden fees. Cancel anytime.</p>

          <div className="bg-dark-secondary rounded-3xl p-12 border border-neon-cyan/30 shadow-2xl shadow-neon-cyan/5 max-w-md mx-auto">
            <div className="mb-8">
              <p className="text-gray text-sm uppercase tracking-wide font-rajdhani font-semibold mb-3">Monthly</p>
              <p className="text-7xl font-rajdhani font-bold text-neon-cyan mb-2">£1</p>
              <p className="text-gray">per month</p>
            </div>
            <ul className="text-left space-y-4 mb-10">
              <PricingFeature text="Unlimited streams" />
              <PricingFeature text="All 4 catalogs (Sports, Movies, TV, Library)" />
              <PricingFeature text="Genre filtering for sports" />
              <PricingFeature text="Instant playback from seedbox" />
              <PricingFeature text="Comet download triggering" />
              <PricingFeature text="Cancel anytime, no questions" />
            </ul>
            <Link href="/signup" className="block w-full px-8 py-4 bg-neon-cyan text-dark font-rajdhani font-bold text-lg rounded-xl
                                           hover:bg-neon-cyan/90 transition shadow-lg shadow-neon-cyan/30">
              Start 7-Day Free Trial
            </Link>
            <p className="mt-4 text-sm text-gray">No credit card required for trial</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-rajdhani font-bold text-center mb-16 text-white">FAQ</h2>
          <div className="space-y-4">
            <FAQItem question="Do I need my own seedbox?" answer="Yes. PVTKRRX is a bridge between your existing seedbox (with Jackett + qBittorrent) and Stremio. You provide the infrastructure, we provide the addon. This keeps our costs near zero and gives you full control." />
            <FAQItem question="What if I don't have a seedbox yet?" answer="You'll need one to use PVTKRRX. We recommend Ultra.cc, Feral Hosting, or Whatbox. Most plans start around $5-10/month and include Jackett + qBittorrent pre-installed." />
            <FAQItem question="How does the 7-day free trial work?" answer="Sign up, configure your seedbox, and use PVTKRRX completely free for 7 days. No credit card required. After 7 days, you'll be asked to subscribe at £1/month to continue." />
            <FAQItem question="Can I cancel anytime?" answer="Absolutely. Cancel from your account dashboard with one click. No questions asked, no fees. Your access continues until the end of your billing period." />
            <FAQItem question="What private trackers does this work with?" answer="Any tracker supported by Jackett or Prowlarr. This includes all major private trackers for movies, TV, and sports. Your Jackett setup determines what content you can access." />
            <FAQItem question="Is my seedbox username/password safe?" answer="Yes. Your credentials are encrypted with AES-256-GCM and stored only in your browser's config token. We never store your seedbox credentials on our servers. Every request decrypts your config on-demand." />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 border border-neon-cyan/30 rounded-3xl p-16">
          <h2 className="text-5xl font-rajdhani font-bold mb-6 text-white">Ready to Stream?</h2>
          <p className="text-xl mb-10 text-gray">Start your 7-day free trial. No credit card required.</p>
          <Link href="/signup" className="inline-block px-10 py-5 bg-neon-cyan text-dark font-rajdhani font-bold text-lg rounded-xl
                                         hover:bg-neon-cyan/90 transition shadow-lg shadow-neon-cyan/30">
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16 px-4 bg-dark-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-lg" />
                <span className="text-lg font-orbitron font-black chrome-text">PVTKRRX</span>
              </div>
              <p className="text-sm text-gray">Stream from your seedbox to Stremio.</p>
            </div>
            <div>
              <h4 className="font-rajdhani font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="text-gray hover:text-neon-cyan transition">Features</a></li>
                <li><a href="#pricing" className="text-gray hover:text-neon-cyan transition">Pricing</a></li>
                <li><Link href="/signup" className="text-gray hover:text-neon-cyan transition">Sign Up</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-rajdhani font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#faq" className="text-gray hover:text-neon-cyan transition">FAQ</a></li>
                <li><Link href="/docs" className="text-gray hover:text-neon-cyan transition">Documentation</Link></li>
                <li><a href="mailto:support@pvtkrrx.com" className="text-gray hover:text-neon-cyan transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-rajdhani font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="text-gray hover:text-neon-cyan transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray hover:text-neon-cyan transition">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-sm text-gray">
            © 2026 PVTKRRX. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="group relative bg-dark-secondary rounded-2xl p-8 border border-white/5
                    hover:border-neon-cyan/30 transition-all duration-300
                    hover:shadow-lg hover:shadow-neon-cyan/10">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/5 via-transparent to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

      {/* Icon */}
      <div className="text-5xl mb-5 group-hover:scale-110 transition-transform relative z-10">
        {icon}
      </div>

      {/* Title (angular font) */}
      <h3 className="text-xl font-rajdhani font-bold mb-3 text-white relative z-10">
        {title}
      </h3>

      {/* Description (readable) */}
      <p className="text-gray leading-relaxed relative z-10">
        {description}
      </p>
    </div>
  )
}

function PricingFeature({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <svg className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      <span className="text-white">{text}</span>
    </li>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-dark-secondary rounded-2xl p-6 border border-white/5 hover:border-white/10 transition">
      <h3 className="text-lg font-rajdhani font-semibold mb-3 text-white">{question}</h3>
      <p className="text-gray leading-relaxed">{answer}</p>
    </div>
  )
}
