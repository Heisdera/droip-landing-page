import type { MenuItem } from '@/data'
import { ChevronDown } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

export default function DesktopMenu({ menu }: { menu: MenuItem }) {
  const [isHover, setIsHover] = useState(false)

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: -15,
      transition: {
        duration: 0.3,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -30,
      transition: {
        duration: 0.2,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  }

  const hasSubMenu = menu?.subMenu

  return (
    <motion.li
      className="group/link"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      key={menu.name}
    >
      <span className="flex cursor-pointer items-end gap-1 px-2 py-1 text-sm font-medium">
        {menu.name}

        {hasSubMenu && (
          <ChevronDown className="mb-[1px] size-4 duration-300 group-hover/link:rotate-180" />
        )}
      </span>

      {hasSubMenu && (
        <motion.div
          className="absolute top-[3.2rem] -right-24 left-0 origin-top rounded-2xl bg-white p-5 backdrop-blur"
          initial="exit"
          animate={isHover ? 'enter' : 'exit'}
          variants={subMenuAnimate}
        >
          <div className="grid grid-cols-2 gap-x-9 gap-y-7">
            {menu.subMenu.map((submenu, i) => (
              <div className="relative cursor-pointer" key={i}>
                <div className="group/menubox flex gap-x-4 rounded-xl p-3 hover:bg-[#ddd9fc]">
                  {submenu.icon && <submenu.icon className="text-[#9354ff]" />}

                  <div>
                    <h6 className="font-semibold">{submenu.name}</h6>
                    <p className="text-foreground text-xs">{submenu.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  )
}
