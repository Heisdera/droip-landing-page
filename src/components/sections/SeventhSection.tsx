import { useRef } from 'react'
import { GlowingCursor } from '../cursor-glowing-effect/GlowingCursor'
import Image from 'next/image'

export const SeventhSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-black text-white"
    >
      <GlowingCursor containerRef={containerRef} />

      <div className="contain space-y-10 pt-16 pb-24 lg:space-y-24 xl:py-24">
        <h2 className="text-center text-5xl font-semibold">
          Performance that&nbsp;
          <br />
          sets you apart&nbsp;
        </h2>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-white/10">
            <div className="space-y-5 px-8 py-6 font-medium xl:px-12 xl:py-12">
              <h3 className="text-3xl">Clean code output</h3>

              <p className="text-zinc-300">
                Droip generates minimal, well-structured code that is free from
                unnecessary bloat ensuring efficiency.
              </p>
            </div>

            <div className="relative ml-auto min-h-[170px] w-[90%] sm:min-h-[280px] sm:w-full lg:min-h-[220px] xl:ml-2 xl:min-h-[290px]">
              <Image
                src="/images/seventh/clean-code.webp"
                className="object-cover"
                fill
                alt="Clean code output"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white/10">
            <div className="space-y-5 px-8 py-6 font-medium xl:px-12 xl:py-12">
              <h3 className="text-3xl">Keep website lightweight</h3>

              <p className="text-zinc-300">
                Optimized code means faster load times, improved performance,
                and a smoother user experience.
              </p>
            </div>

            <div className="relative ml-auto min-h-[170px] w-[90%] sm:min-h-[280px] sm:w-full lg:min-h-[220px] xl:min-h-[290px]">
              <Image
                src="/images/seventh/lightweight.webp"
                className="object-cover"
                fill
                alt="Clean code output"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
