'use client'

import { fourthSectionImages } from '@/data'
import Lenis from 'lenis'
import { ChevronRight } from 'lucide-react'
import { useMotionValueEvent, useScroll } from 'motion/react'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import CharacterRevealHeader from './CharacterRevealHeader'
import { ScrollResizeAnimation } from './ScrollResizeAnimation'
import SpinningCircleIcon from './SpinningCircleIcon'

export const FourthSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerScrollValue, setContainerScrollValue] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const handleScrollChange = useCallback((latest: number) => {
    setContainerScrollValue(latest)

    const currentValues = fourthSectionImages.map(
      (_, i) => i * (1 / fourthSectionImages.length)
    )
    let closestIndex = 0
    let smallestDiff = Math.abs(currentValues[0] - latest)

    for (let i = 1; i < currentValues.length; i++) {
      const diff = Math.abs(currentValues[i] - latest)
      if (diff < smallestDiff) {
        smallestDiff = diff
        closestIndex = i
      }
    }

    setActiveIndex(closestIndex)
  }, [])

  useMotionValueEvent(scrollYProgress, 'change', handleScrollChange)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, // for slower smoother scrolling
      smoothWheel: true, // smooth scrolling for wheel events
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="mb-[100vh] bg-white py-15 lg:py-24">
      <div className="contain relative grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <CharacterRevealHeader
          paragraph="Create pixel-perfect accuracy in the atomic level"
          className="top-28 h-fit leading-[0.8] lg:sticky"
        />

        <div className="bottom-10 space-y-4 lg:sticky lg:self-end">
          <SpinningCircleIcon />

          <p className="text-lg">
            Create your website from the ground up with complete control over
            every element, down to the smallest detail.
          </p>

          <Link
            href="#"
            className="text-primary inline-flex items-center font-semibold lg:text-lg"
          >
            Get Started With Tutorials <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div
          ref={containerRef}
          className="sticky top-24 flex h-[130vh] items-center justify-center overflow-hidden lg:col-start-2 lg:row-start-1"
        >
          <div className="mx-auto flex max-w-[237px] flex-col items-center justify-center gap-4">
            {fourthSectionImages.map((image, i) => {
              const current = i * (1 / fourthSectionImages.length)

              return (
                <ScrollResizeAnimation
                  key={i}
                  image={image}
                  range={[0, current, 1]}
                  current={current}
                  containerScrollValue={containerScrollValue}
                  isActive={i === activeIndex}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
