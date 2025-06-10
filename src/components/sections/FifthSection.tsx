'use client'

import Lenis from 'lenis'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { useEffect, useRef } from 'react'
import MovingThemesCard from '../MovingThemesCard'
import { GlowingCursor } from '../cursor-glowing-effect/GlowingCursor'

export const FifthSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.3', 'end end'],
  })

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, // for slower smoother scrolling
      smoothWheel: true, // smooth scrolling for wheel events
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  // animate the background color from white to black
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.25, 0.4],
    ['#ffffff', '#000000']
  )

  // animate the text color from black to white
  const textColor = useTransform(
    scrollYProgress,
    [0.25, 0.4],
    ['#000000', '#ffffff']
  )

  const bottomSectionOpacityRaw = useTransform(
    scrollYProgress,
    [0.4, 0.45],
    [0, 1]
  )

  const bottomSectionY = useTransform(scrollYProgress, [0.4, 0.45], [60, 0])

  const bottomSectionOpacity = useSpring(bottomSectionOpacityRaw, {
    stiffness: 200,
    damping: 30,
    mass: 1,
  })

  const paragraphY = useSpring(bottomSectionY, {
    stiffness: 200,
    damping: 30,
    mass: 1,
  })

  return (
    <motion.div
      ref={containerRef}
      style={{
        backgroundColor,
      }}
      className="relative py-0 pb-15 lg:pb-10"
    >
      <GlowingCursor containerRef={containerRef} />

      <div className="contain lg:space-y-14">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div></div>

          <div className="relative flex items-center justify-center lg:col-start-2 lg:row-start-1">
            <div className="flex w-full max-w-[235px] flex-col items-center justify-center gap-4">
              <div className="mb-40 h-[40vh] w-full sm:mb-44 md:mb-56 xl:mb-64">
                <motion.div
                  className="sticky top-[40vh] mx-auto w-fit text-[10rem] leading-[1] font-bold"
                  style={{ color: textColor }}
                >
                  <h3>Or</h3>
                </motion.div>
              </div>

              <motion.p
                className="absolute bottom-0 left-0 text-3xl font-bold max-md:w-full sm:text-4xl md:text-5xl lg:-right-56 lg:left-14 xl:-right-56 xl:left-24"
                style={{
                  color: textColor,
                  opacity: bottomSectionOpacity,
                  y: paragraphY,
                }}
              >
                Jumpstart your business with beautifully crafted themes and
                sections
              </motion.p>
            </div>
          </div>

          <div></div>
        </div>
      </div>

      {/* Slide up into view when the background color has completely animated to black */}
      <motion.div
        className="flex items-center justify-end space-y-4"
        style={{
          opacity: bottomSectionOpacity,
          y: paragraphY,
        }}
      >
        <div className="max-w-[4715px] px-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="65"
              viewBox="0 0 64 65"
              fill="none"
              className="mb-4"
            >
              <path
                d="M24.6523 23.2161C24.6523 16.6658 27.3268 10.1154 31.0998 5.53668C31.8998 4.5659 33.3569 4.5659 34.1569 5.53668C37.9299 10.1154 40.6044 16.6658 40.6044 23.2161V46.5689H32.6284H24.6523V23.2161Z"
                fill="#CCC6FB"
              />
              <path
                d="M40.606 46.5709V34.8945C48.6468 38.0697 48.5085 44.8635 47.9075 48.1425C47.7238 49.1444 46.6403 49.5897 45.7294 49.134L40.606 46.5709Z"
                fill="rgb(103, 84, 244)"
              />
              <path
                d="M24.7131 46.5709V34.8945C16.6722 38.0697 16.8106 44.8635 17.4116 48.1425C17.5952 49.1444 18.6788 49.5897 19.5897 49.134L24.7131 46.5709Z"
                fill="#6754F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.7837 49.418C27.4128 49.418 27.9228 49.928 27.9228 50.5571V55.6833C27.9228 56.3125 27.4128 56.8225 26.7837 56.8225C26.1545 56.8225 25.6445 56.3125 25.6445 55.6833V50.5571C25.6445 49.928 26.1545 49.418 26.7837 49.418ZM32.4795 49.418C33.1086 49.418 33.6186 49.928 33.6186 50.5571V59.6704C33.6186 60.2995 33.1086 60.8095 32.4795 60.8095C31.8503 60.8095 31.3403 60.2995 31.3403 59.6704V50.5571C31.3403 49.928 31.8503 49.418 32.4795 49.418ZM37.6057 49.418C38.2348 49.418 38.7448 49.928 38.7448 50.5571V55.6833C38.7448 56.3125 38.2348 56.8225 37.6057 56.8225C36.9765 56.8225 36.4665 56.3125 36.4665 55.6833V50.5571C36.4665 49.928 36.9765 49.418 37.6057 49.418Z"
                fill="rgb(120, 103, 245)"
              />
              <path
                d="M14.1392 22.668C14.7683 22.668 15.2783 23.178 15.2783 23.8071V31.3076C15.2783 31.9367 14.7683 32.4468 14.1392 32.4468C13.51 32.4468 13 31.9367 13 31.3076V23.8071C13 23.178 13.51 22.668 14.1392 22.668Z"
                fill="#CCC6FB"
              />
              <path
                d="M8.13916 38.8086C8.7683 38.8086 9.27831 39.3186 9.27831 39.9478V50.3086C9.27831 50.9377 8.7683 51.4478 8.13916 51.4478C7.51002 51.4478 7 50.9377 7 50.3086V39.9478C7 39.3186 7.51002 38.8086 8.13916 38.8086Z"
                fill="#CCC6FB"
              />
              <path
                d="M57.1392 26.668C57.7683 26.668 58.2783 27.178 58.2783 27.8071V35.3071C58.2783 35.9363 57.7683 36.4463 57.1392 36.4463C56.51 36.4463 56 35.9363 56 35.3071V27.8071C56 27.178 56.51 26.668 57.1392 26.668Z"
                fill="#CCC6FB"
              />
            </svg>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_2fr]">
            <motion.p
              style={{ color: textColor }}
              className="mt-3 w-[80%] text-xl font-medium md:text-2xl"
            >
              Launch with ease using stunning, ready-to-use themes & sections
              designed for every need.
            </motion.p>

            <MovingThemesCard />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
