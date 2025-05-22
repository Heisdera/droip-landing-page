'use client'

import { motion } from 'motion/react'

export const CTAButton = ({ text }: { text: string }) => {
  return (
    <motion.button
      className="bg-primary flex h-11 w-full items-center justify-center gap-3 overflow-hidden rounded-2xl px-4 font-semibold text-white"
      initial="initial"
      whileHover="hover"
      variants={{
        initial: { scaleY: 1, scaleX: 1 },
        hover: { scaleY: 1.12, scaleX: 0.98 },
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <motion.span
        variants={{
          initial: { scaleY: 1, scaleX: 1 },
          hover: { scaleY: 1 / 1.12, scaleX: 1 / 0.98 },
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        {text}
      </motion.span>

      <motion.div className="relative h-5 w-5">
        <motion.svg
          className="absolute inset-0 h-full w-full"
          viewBox="1 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M4 10 L12 10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            variants={{
              initial: { pathLength: 0, opacity: 0 },
              hover: { pathLength: 1, opacity: 1 },
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />

          <motion.path
            d="M14 5 L19 10 L14 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              initial: { x: -12 },
              hover: { x: -5 },
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </motion.svg>
      </motion.div>
    </motion.button>
  )
}
