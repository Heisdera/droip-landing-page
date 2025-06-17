import { thirdSectionContents } from '@/data'
import { useScroll } from 'motion/react'
import { useRef } from 'react'
import { ThirdSectionContentCard } from '../ThirdSectionContentCard'

export const ThirdSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div className="bg-black py-15 lg:py-24">
      <div className="contain">
        <p className="text-[44px] leading-[1.1] font-medium tracking-tighter text-white lg:max-w-[40%] lg:text-7xl">
          Scale your business with
        </p>

        <div
          ref={containerRef}
          className="mt-16 mb-[10px] flex flex-col gap-20"
        >
          {thirdSectionContents.map((cardContent, i) => {
            const targetScale = 1 - (thirdSectionContents.length - i) * 0.02

            return (
              <ThirdSectionContentCard
                key={`p_${i}`}
                card={cardContent}
                targetScale={targetScale}
                range={[i * 0.25, 1]}
                progress={scrollYProgress}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
