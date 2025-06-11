import { Hero } from '@/components/Hero'
import { FifthSection } from '@/components/sections/FifthSection'
import { FirstSection } from '@/components/sections/FirstSection'
import { FourthSection } from '@/components/sections/FourthSection'
import { SecondSection } from '@/components/sections/SecondSection'
import { SeventhSection } from '@/components/sections/SeventhSection'
import { SixthSection } from '@/components/sections/SixthSection'
import { ThirdSection } from '@/components/sections/ThirdSection'

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
    </main>
  )
}
