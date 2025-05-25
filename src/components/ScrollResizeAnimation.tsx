'use client'

import type { ImageCard } from '@/data'
import { cn } from '@/lib/utils'
import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { memo, useRef } from 'react'

type CardProps = {
  image: ImageCard
  range: number[]
  current: number
  containerScrollValue: number
  isActive: boolean
}

export const ScrollResizeAnimation = memo(
  ({ image, range, current, containerScrollValue, isActive }: CardProps) => {
    const cardContainer = useRef(null)

    const { scrollYProgress } = useScroll({
      target: cardContainer,
      offset: ['start end', 'end start'],
    })

    const scale = useTransform(scrollYProgress, range, [0.65, 1, 0.65])

    // Check if current value matches container scroll value (with small tolerance for floating point precision)
    const shouldShowOverlay =
      Math.abs(current - containerScrollValue) < 0.05 || isActive

    return (
      <div ref={cardContainer} className="w-full">
        <motion.div
          style={{
            scale,
          }}
          className={cn('relative mx-auto', image.className)}
        >
          <Image
            src={`/images/fourth/${image.src}`}
            alt={image.name}
            fill
            className="object-cover"
            priority={isActive}
          />

          {shouldShowOverlay && (
            <motion.div className="pointer-events-none absolute inset-0 z-30 flex h-auto w-full flex-col items-center justify-center opacity-100">
              <div className="relative h-full w-full rounded-lg border-2 border-dashed border-cyan-300">
                <div className="absolute -top-1 -left-1 flex size-2 items-center justify-center rounded-full border-2 border-dashed border-cyan-300 bg-white"></div>
                <div className="absolute -top-1 -right-1 flex size-2 items-center justify-center rounded-full border-2 border-dashed border-cyan-300 bg-white"></div>
                <div className="absolute -bottom-1 -left-1 flex size-2 items-center justify-center rounded-full border-2 border-dashed border-cyan-300 bg-white"></div>
                <div className="absolute -right-1 -bottom-1 flex size-2 items-center justify-center rounded-full border-2 border-dashed border-cyan-300 bg-white"></div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    )
  }
)

ScrollResizeAnimation.displayName = 'ScrollResizeAnimation'
