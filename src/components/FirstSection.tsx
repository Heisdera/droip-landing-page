'use client'

import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import { useDirection } from '@/hooks/use-direction'
import Image from 'next/image'
import Link from 'next/link'
import CharacterRevealHeader from './CharacterRevealHeader'
import { firstSectionSteps } from '@/data'

export function FirstSection() {
  const { activeIndex, direction, handleIndexChange } = useDirection(0)
  // console.log({ activeIndex, direction })

  return (
    <div className="contain space-y-20 py-15 lg:py-24">
      <CharacterRevealHeader paragraph="Design pixel-perfect sites beyond ordinary" />

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.5fr] xl:gap-20">
        {/* Left side - Accordion Stepper */}
        <div className="relative lg:w-[95%] xl:w-[75%]">
          <div className="absolute top-0 bottom-4 left-[21px] w-[2px] bg-gray-300" />

          <ul className="relative space-y-12">
            {firstSectionSteps.map((step, index) => (
              <li key={step.id} className="relative">
                <button
                  onClick={() => handleIndexChange(index)}
                  className={cn(
                    'focus-visible:ring-primary flex w-full cursor-pointer items-start gap-3 rounded-md text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                    activeIndex === index
                      ? 'opacity-100'
                      : 'opacity-90 hover:opacity-100'
                  )}
                  aria-expanded={activeIndex === index}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center rounded-full bg-[#f5f5f7] p-2">
                      <div
                        className={cn(
                          'flex h-7 w-7 items-center justify-center rounded-full',
                          activeIndex === index ? 'bg-[#ddd9fc]' : 'bg-gray-100'
                        )}
                      >
                        <div className="bg-primary h-2 w-2 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 pt-2 pb-4">
                    <h3
                      className={cn(
                        'mb-2 text-xl font-semibold',
                        activeIndex === index
                          ? 'text-2xl text-black'
                          : 'text-gray-500'
                      )}
                    >
                      {step.title}
                    </h3>

                    <AnimatePresence mode="wait">
                      {activeIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-600"
                        >
                          <p>{step.description}</p>

                          {step.href && (
                            <div className="mt-4">
                              <Link
                                href="#"
                                className="text-primary inline-flex items-center font-medium"
                              >
                                View Details{' '}
                                <ChevronRight className="ml-1 h-4 w-4" />
                              </Link>
                            </div>
                          )}

                          <div
                            className={cn(
                              'relative inset-0 mt-4 aspect-[15/10] overflow-hidden rounded-3xl lg:hidden'
                            )}
                          >
                            <Image
                              src={firstSectionSteps[activeIndex].imageUrl}
                              alt={firstSectionSteps[activeIndex].title}
                              className="object-cover"
                              fill
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side - Image with Mask Reveal Animation */}
        <div className="hidden size-full max-h-[538px] overflow-hidden rounded-3xl bg-white shadow-lg lg:block">
          <div className="relative size-full overflow-hidden">
            {/* Background images - stacked behind */}
            {firstSectionSteps.map((step, index) => (
              <div
                key={`bg-${step.id}`}
                className={cn(
                  'absolute inset-0 size-full transition-opacity duration-700',
                  index <= activeIndex ? 'opacity-100' : 'opacity-0'
                )}
              >
                <Image
                  src={step.imageUrl}
                  alt={step.title}
                  className="object-cover"
                  fill
                />
              </div>
            ))}

            {/* Animated mask reveal layer */}
            <AnimatePresence custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{
                  clipPath:
                    direction > 0
                      ? 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' // Start from right edge
                      : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', // Start from left edge
                }}
                animate={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // Reveal full image
                }}
                exit={{
                  clipPath:
                    direction > 0
                      ? 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' // Exit to left edge
                      : 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', // Exit to right edge
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="absolute inset-0 overflow-hidden"
              >
                <div
                  className={cn('relative inset-0 size-full overflow-hidden')}
                >
                  <Image
                    src={firstSectionSteps[activeIndex].imageUrl}
                    alt={firstSectionSteps[activeIndex].title}
                    className="object-cover"
                    fill
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
