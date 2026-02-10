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
