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
        textShadow: '4px 0 #00FFFF, -4px 0 #FF00FF, 0 0 20px rgba(0, 255, 255, 0.5)',
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
