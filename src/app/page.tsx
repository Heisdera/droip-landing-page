'use client'

import { Hero } from '@/components/sections/Hero'
import { EighthSection } from '@/components/sections/EighthSection'
import { FifthSection } from '@/components/sections/FifthSection'
import { FirstSection } from '@/components/sections/FirstSection'
import { FourthSection } from '@/components/sections/FourthSection'
import { NinthSection } from '@/components/sections/NinthSection'
import { SecondSection } from '@/components/sections/SecondSection'
import { SeventhSection } from '@/components/sections/SeventhSection'
import { SixthSection } from '@/components/sections/SixthSection'
import { ThirdSection } from '@/components/sections/ThirdSection'
import { Footer } from '@/components/sections/Footer'
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      // Prevent Lenis from handling scroll events on elements with data-lenis-prevent attribute - this fixes the issue with mobileMenu not being scrollable
      prevent: (node) => node.hasAttribute('data-lenis-prevent'),
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
    <main>
      <Hero />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <NinthSection />
      <Footer />
    </main>
  )
}
