'use client'

import type React from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

export const GlowingCursor = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const size = 700

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="pointer-events-none fixed z-10"
        animate={{
          x: mousePosition.x - size / 2,
          y: mousePosition.y - size / 2,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          x: {
            type: 'spring',
            damping: 30,
            stiffness: 200,
            mass: 0.8,
          },
          y: {
            type: 'spring',
            damping: 30,
            stiffness: 200,
            mass: 0.8,
          },
          opacity: {
            duration: 0.3,
            ease: 'easeOut',
          },
        }}
        style={{
          left: 0,
          top: 0,
          width: `${size}px`,
          height: `${size}px`,
          background:
            'radial-gradient(circle, rgba(78, 30, 240, 0.5) 15%, rgba(78, 10, 210, 0.5) 32%, transparent 73%)',
          borderRadius: '50%',
          filter: 'blur(8px)',
          mixBlendMode: 'screen',
        }}
      />

      <div className="relative z-20">{children}</div>
    </div>
  )
}
