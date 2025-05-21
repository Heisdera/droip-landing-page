'use client'

import { Menus } from '@/data'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react'
import { useState } from 'react'
import DesktopMenu from './DesktopMenu'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { Button } from './ui/button'

export const Navbar = () => {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(true)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      const direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0) {
        setVisible(false)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.header
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="sticky inset-0 flex h-17 items-center justify-center bg-white"
      >
        <nav className="flex h-11 w-full max-w-[1360px] items-center justify-between px-5 sm:w-[90%] md:w-full">
          <div className="flex items-center gap-x-18">
            <Logo />

            <ul className="relative hidden items-center gap-x-5 lg:flex">
              {Menus.map((menu) => (
                <DesktopMenu menu={menu} key={menu.name} />
              ))}
            </ul>
          </div>

          <div className="hidden space-x-4 lg:block">
            <Button variant="ghost">Login</Button>
            <Button className="rounded-xl">Get Started</Button>
          </div>

          <div className="block lg:hidden">
            <MobileMenu />
          </div>
        </nav>
      </motion.header>
    </AnimatePresence>
  )
}
