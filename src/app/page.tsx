import { FirstSection } from '@/components/FirstSection'
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
    </main>
  )
}
