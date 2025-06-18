'use client'

import { menus } from '@/data'
import { sidebarVariant } from '@/lib/variants'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState, useRef } from 'react'
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
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.classList.remove('overflow-hidden')
      setOpenAccordion(null)
    } else {
      document.body.classList.add('overflow-hidden')
    }
  }, [isMenuOpen])

  // Focus trap effect
  useEffect(() => {
    if (!isMenuOpen) return

    const menuElement = menuRef.current
    if (!menuElement) return

    // Focus the first focusable element when menu opens
    const focusableElements = menuElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement

    // Focus first element when menu opens
    if (firstElement) {
      firstElement.focus()
    }

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        // Shift + Tab (going backwards)
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        // Tab (going forwards)
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        toggleMenu()
      }
    }

    document.addEventListener('keydown', handleTabKey)
    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('keydown', handleTabKey)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isMenuOpen, toggleMenu])

  const handleToggleMenu = () => {
    toggleMenu()
    if (isMenuOpen) {
      setOpenAccordion(null)
    }
  }

  return (
    <motion.div
      ref={menuRef}
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
                className="h-14 justify-start px-0 text-lg font-semibold text-gray-500 hover:bg-transparent hover:text-black"
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
