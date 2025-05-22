'use client'

import { firstSectionSteps } from '@/data'
import CharacterRevealHeader from './CharacterRevealHeader'
import { StepperImageRevealAccordion } from './StepperImageRevealAccordion'

export function FirstSection() {
  return (
    <div className="contain space-y-20 py-15 lg:py-24">
      <CharacterRevealHeader paragraph="Design pixel-perfect sites beyond ordinary" />

      <StepperImageRevealAccordion
        steps={firstSectionSteps}
        desktopImagePosition="right"
      />
    </div>
  )
}
