'use client'

import { menus } from '@/data'
import { sidebarVariant } from '@/lib/variants'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { MenuToggleButton } from './MenuToggleButton'
import { MobileMenuItem } from './MobileMenuItem'
import { Button } from './ui/button'
import { CTAButton } from './CTAButton'

interface MobileMenuProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export const MobileMenu = ({ isMenuOpen, toggleMenu }: MobileMenuProps) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.classList.remove('overflow-hidden')
      setOpenAccordion(null)
    } else {
      document.body.classList.add('overflow-hidden')
    }
  }, [isMenuOpen])

  const handleToggleMenu = () => {
    toggleMenu()
    if (isMenuOpen) {
      setOpenAccordion(null)
    }
  }

  return (
    <motion.div
      data-lenis-prevent
      initial={false}
      animate={isMenuOpen ? 'open' : 'closed'}
      className="w-full"
    >
      <MenuToggleButton toggle={handleToggleMenu} />

      <motion.div
        className={`absolute top-17 right-0 left-0 h-[calc(100vh-68px)] w-full origin-top bg-white drop-shadow-transparent ${
          isMenuOpen ? 'overflow-y-auto' : 'pointer-events-none'
        }`}
        variants={sidebarVariant}
      >
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.div
              key="mobile-menu-content"
              initial={{
                opacity: 0,
                y: -100,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  delay: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                y: -100,
                transition: {
                  type: 'spring',
                  stiffness: 400,
                  damping: 40,
                  duration: 0.2,
                },
              }}
              className="contain mx-auto flex min-h-full w-full flex-col gap-5 divide-y px-5 pt-3 pb-6"
            >
              {menus.map((menu) => (
                <MobileMenuItem
                  menu={menu}
                  key={menu.name}
                  openAccordion={openAccordion}
                  setOpenAccordion={setOpenAccordion}
                />
              ))}

              <Button
                variant="ghost"
                size="lg"
                className="h-14 justify-start rounded-none px-0 text-lg font-semibold text-gray-500 hover:bg-transparent hover:text-black"
              >
                Login
              </Button>

              <div className="mt-2 self-start rounded-xl">
                <CTAButton text="Get Started" showIcon={false} size="sm" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
