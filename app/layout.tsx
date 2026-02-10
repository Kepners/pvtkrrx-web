import type { Metadata } from 'next'
import { Inter, Orbitron, Rajdhani, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ subsets: ['latin'], weight: '900', variable: '--font-orbitron' })
const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-rajdhani' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: '500', variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: 'PVTKRRX — Stream From Your Seedbox to Stremio',
  description: 'Turn your private tracker downloads into a personal Stremio catalog. £1/month.',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${rajdhani.variable} ${jetbrains.variable}`}>
      <body className="bg-dark text-white font-inter">{children}</body>
    </html>
  )
}
