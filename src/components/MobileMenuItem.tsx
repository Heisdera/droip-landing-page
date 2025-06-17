import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { MenuItem } from '@/data'
import { Dispatch, SetStateAction } from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

interface MobileMenuItemProps {
  menu: MenuItem
  openAccordion: string | null
  setOpenAccordion: Dispatch<SetStateAction<string | null>>
}

export const MobileMenuItem = ({
  menu,
  openAccordion,
  setOpenAccordion,
}: MobileMenuItemProps) => {
  const handleAccordionChange = (value: string) => {
    if (value === openAccordion) {
      setOpenAccordion(null)
    } else {
      setOpenAccordion(value)
    }
  }

  return (
    <div className="space-y-4">
      {menu.subMenu ? (
        <Accordion
          type="single"
          collapsible
          className="w-full"
          value={openAccordion === menu.name ? menu.name : ''}
        >
          <AccordionItem value={menu.name} className="py-2">
            <AccordionTrigger
              className="justify-normal py-[6px] text-lg leading-6 text-gray-500 hover:text-black hover:no-underline"
              onClick={() => handleAccordionChange(menu.name)}
            >
              {menu.name}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground py-2 pl-3">
              <div className="grid grid-cols-1 gap-4">
                {menu.subMenu.map((item) => (
                  <button
                    type="button"
                    title=""
                    key={item.name}
                    className="flex items-center gap-3 py-2"
                  >
                    <item.icon className="h-5 w-5 text-[#9354ff]" />
                    <div>
                      <div className="text-[15px] font-medium text-black">
                        {item.name}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <Button
          variant="ghost"
          size="lg"
          className={cn(
            'h-14 w-full justify-start px-0 text-lg font-semibold hover:bg-transparent hover:text-black',
            menu.name !== 'Home' && 'text-gray-500'
          )}
        >
          {menu.name}
        </Button>
      )}
    </div>
  )
}
