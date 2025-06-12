'use client'

import { ninthSectionContents } from '@/data'
import { cn } from '@/lib/utils'
import { motion, useInView } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'

export const NinthSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3, // Trigger the animation when 30% of the element is in view
  })

  const horizontalLineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 2,
        ease: 'easeOut',
      },
    },
  }

  const verticalLineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 2,
      },
    },
  }

  const dotVariants = {
    hidden: {
      scale: 0.4,
      top: '27px',
      opacity: 0,
    },
    visible: {
      scale: 1,
      top: 'calc(100% - 7px)',
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 2.5,
      },
    },
  }

  return (
    <div className="bg-[#ebe8ff4f]">
      <div className="contain space-y-10 pt-16 pb-16 lg:space-y-24 xl:py-24">
        <div className="space-y-5">
          <h2 className="text-[44px] leading-[1] font-semibold lg:text-6xl">
            Design and&nbsp;
            <br />
            build everything&nbsp;
          </h2>

          <div ref={ref} className="flex items-start gap-6">
            <div className="relative h-[70px] flex-1">
              {/* Horizontal Line */}
              <motion.div
                className="to-primary h-0.5 w-full origin-left bg-gradient-to-r from-transparent"
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={horizontalLineVariants}
              />

              {/* Vertical Line */}
              <motion.div
                className="bg-primary absolute top-0 right-0 h-full w-0.5 origin-top"
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={verticalLineVariants}
              />

              {/* Dot */}
              <motion.div
                className="absolute right-[-7px] h-4 w-4 rounded-full bg-indigo-500"
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={dotVariants}
              />
            </div>

            <p className="flex-[0.8] text-lg leading-[1.3] tracking-normal">
              more efficiently with the most advanced granular controls
            </p>
          </div>
        </div>

        <div className="grid gap-px md:grid-cols-2 lg:grid-cols-4">
          {ninthSectionContents.map((content, i) => (
            <div
              key={content.title}
              className={cn(
                'flex flex-col-reverse gap-3 rounded-[18px] bg-white p-8 first-of-type:flex-col md:first-of-type:col-span-2 md:first-of-type:flex-row md:last-of-type:col-span-2 lg:gap-5 lg:first-of-type:col-span-4 lg:nth-[2]:col-span-2 lg:nth-[3]:col-span-2'
              )}
            >
              <div className="space-y-6 md:in-first-of-type:mt-auto">
                <div
                  className={cn(
                    'w-[70%] text-2xl font-semibold tracking-tight md:w-full xl:w-[70%]',
                    i === 0 || i === 1 || (i === 2 && 'lg:text-3xl')
                  )}
                >
                  {i === 0 ? (
                    <h3>
                      Seamless <br /> migration
                    </h3>
                  ) : (
                    <h3>{content.title}</h3>
                  )}
                </div>
                <p className="w-[90%] text-sm text-gray-600 md:w-full md:text-base xl:w-[70%] xl:text-lg">
                  {content.description}
                </p>
              </div>

              <div
                className={cn(
                  'relative',
                  i === 0
                    ? 'min-h-[225px] md:min-h-[170px] md:w-full lg:min-h-[240px]'
                    : 'min-h-48 md:min-h-[98px] lg:min-h-32'
                )}
              >
                <Image
                  src={content.imageSrc}
                  className={cn(
                    'object-contain object-bottom',
                    i === 0 && 'mt-8 md:mt-6'
                  )}
                  fill
                  alt={content.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
