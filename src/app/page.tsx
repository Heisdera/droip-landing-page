import { FifthSection } from '@/components/FifthSection'
import { FirstSection } from '@/components/FirstSection'
import { FourthSection } from '@/components/FourthSection'
import { Hero } from '@/components/Hero'
import { SecondSection } from '@/components/SecondSection'
import { ThirdSection } from '@/components/ThirdSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </main>
  )
}
