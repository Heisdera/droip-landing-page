import { secondSectionSteps } from '@/data'
import CharacterRevealHeader from '../CharacterRevealHeader'
import { StepperImageRevealAccordion } from '../StepperImageRevealAccordion'

export function SecondSection() {
  return (
    <div className="contain space-y-20 py-15 lg:py-24">
      <CharacterRevealHeader paragraph="Craft engaging and immersive interactions" />

      <StepperImageRevealAccordion
        steps={secondSectionSteps}
        desktopImagePosition="left"
      />
    </div>
  )
}
