import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
        green: '#73B067', // Keep for backwards compat
        mint: '#9CD0C8', // Keep for backwards compat
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'monospace'],
        rajdhani: ['var(--font-rajdhani)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        jetbrains: ['var(--font-jetbrains)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
