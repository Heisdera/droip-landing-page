'use client'

import { eighthSectionIcons } from '@/data'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export const EighthSection = () => {
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
    <div className="contain space-y-10 pt-20 pb-16 lg:space-y-24 xl:py-24">
      <div className="space-y-5">
        <h2 className="text-[44px] leading-[1] font-semibold lg:text-6xl">
          App&nbsp;
          <br />
          integration&nbsp;
        </h2>

        <div ref={ref} className="flex items-start gap-6">
          <div className="relative h-[70px] flex-[0.8]">
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

          <p className="flex-1 text-lg leading-[1.3] tracking-normal">
            Connect your go-to apps effortlessly within the builder for a smooth
            and uninterrupted workflow.
          </p>
        </div>
      </div>

      <div className="group grid grid-cols-4 gap-px md:grid-cols-6">
        {eighthSectionIcons.map((Icon, index) => (
          <div
            key={index}
            className="group/icon flex h-20 items-center justify-center rounded-[18px] bg-[#ebe8ff] transition-all duration-[400ms] ease-in group-hover:blur-[4px] hover:bg-[#ccc5fa] hover:!blur-none sm:h-24 lg:h-28"
          >
            <Icon className="size-9 transition-all duration-[400ms] ease-in-out transform-3d group-hover/icon:scale-125 lg:size-12" />
          </div>
        ))}
      </div>
    </div>
  )
}
