import { PlayCircle } from 'lucide-react'
import Image from 'next/image'
import { CTAButton } from './CTAButton'
import { Button } from './ui/button'

export const Hero = () => {
  return (
    <div className="contain space-y-15 pt-15 pb-15 lg:pb-24">
      <div className="flex flex-col items-start gap-6 pr-7 sm:max-w-[500px] md:max-w-full md:gap-10">
        <div className="rounded-3xl bg-[#ddd9fc] px-5 py-2">
          <p className="text-lg font-semibold tracking-tight">
            No-Code WordPress Site Builder
          </p>
        </div>

        <div className="flex flex-col gap-y-12 md:flex-row md:gap-x-10">
          <h1 className="flex-[1.3] text-[44px] leading-[1.1] font-semibold tracking-tighter lg:flex-[1.8] lg:text-[80px]">
            Break Limits. Build <span className="text-primary">Anything.</span>{' '}
            No Code Needed.
          </h1>

          <div className="flex-1 space-y-5 md:max-w-[316px] md:space-y-2 lg:my-auto">
            <div className="md:rounded-2xl md:bg-[#ebe8ff] md:p-6 lg:pb-14">
              <p className="text-lg text-gray-600">
                Droip is a no-code, drag-and-drop WordPress builder that
                simplifies website creation with powerful capabilities.
              </p>
            </div>

            <div className="space-y-2">
              <Button
                size="lg"
                className="text-primary h-11 w-full rounded-2xl bg-[#ebe8ff] text-base font-semibold hover:bg-[#ddd9fc]"
              >
                Watch Intro <PlayCircle className="size-5" />
              </Button>

              <CTAButton text="Get started with Droip" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-lg border-4 border-[#ddd9fc] md:border-8">
        <Image
          src={'/images/hero-home1.webp'}
          className="object-cover"
          fill
          alt="droip editor interface"
        />
      </div>
    </div>
  )
}
