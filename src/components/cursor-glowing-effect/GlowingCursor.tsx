'use client'

import { motion } from 'motion/react'
import type React from 'react'
import { useEffect, useState } from 'react'

export const GlowingCursor = ({
  containerRef,
  persistGlow = false,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>
  persistGlow?: boolean
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(persistGlow)
  const size = 700

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
      setIsVisible(true)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      if (!persistGlow) {
        setIsVisible(false)
      }
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [containerRef, persistGlow])

  return (
    <motion.div
      className="pointer-events-none absolute z-10"
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
  )
}
