import type { Card } from '@/data'
import { ChevronRight } from 'lucide-react'
import { MotionValue } from 'motion'
import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

type CardProps = {
  card: Card
  range: number[]
  targetScale: number
  progress: MotionValue<number>
}

export const ThirdSectionContentCard = ({
  card: { title, description, imageUrl, href },
  range,
  targetScale,
  progress,
}: CardProps) => {
  const cardContainer = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardContainer,
    offset: ['start end', 'start start'],
  }) // tracks the vertical scroll progress of the window intersected by whatever element u add to target

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]) // changes the value of the scrollYProgress from exactly 0 to 1 to start from 2 to 1
  const scale = useTransform(progress, range, [1.05, targetScale])

  // Background color transition from #ccc5fa to #ebe8ff when card is 50% into viewport
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['#ccc5fa', '#ebe8ff', '#ebe8ff']
  )

  return (
    <div
      ref={cardContainer}
      className="sticky top-28 flex items-center justify-center md:top-20"
    >
      <motion.div
        style={{
          backgroundColor,
          scale,
        }}
        className="relative -top-[25%] flex max-h-[740px] w-full flex-col gap-[20px] rounded-xl max-md:p-5 md:aspect-video md:h-[80vh] md:gap-[50px] md:rounded-[28px] md:py-12 md:pl-12"
      >
        <div className="grid h-full gap-10 max-md:grid-rows-[0.5fr_0.5fr_1fr] md:grid-cols-[0.5fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-y-10 md:-mb-20 md:justify-between">
            <h2 className="text-2xl font-semibold lg:text-4xl">{title}</h2>

            <div>
              <p className="text-sm text-gray-600 md:text-xl md:text-black lg:text-2xl">
                {description}
              </p>

              <div className="mt-4">
                <Link
                  href={href}
                  className="text-primary inline-flex items-center font-medium lg:text-lg"
                >
                  View Details <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative row-span-2 h-full overflow-hidden rounded-l-xl md:rounded-l-3xl">
            <motion.div className="size-full" style={{ scale: imageScale }}>
              <Image
                className="object-cover"
                fill
                src={imageUrl}
                alt="Photography project image"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
