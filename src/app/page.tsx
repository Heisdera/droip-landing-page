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

export default function Home() {
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
