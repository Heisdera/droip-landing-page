'use client'

import { sixthSectionContents } from '@/data'

export const SixthSection = () => {
  return (
    <div className="overflow-hidden">
      <div className="contain space-y-14 pt-14 pb-24">
        <h2 className="text-5xl font-semibold">
          Low&nbsp;
          <br />
          third-party&nbsp;
          <br />
          dependencies
        </h2>

        <div className="relative grid gap-px md:grid-cols-2 lg:grid-cols-3">
          <div className="absolute top-[10%] -left-[150px] -z-10 size-[600px] rounded-full bg-[radial-gradient(circle,rgba(114,72,255,0.22)3%,rgba(98,42,209,0.22)10%,transparent_100%)] blur-[16px] md:top-[20%] md:left-[30%] md:size-[500px]" />

          {sixthSectionContents.map((content) => (
            <div
              key={content.title || content.src}
              className={content.className}
            >
              {content.src ? (
                <video autoPlay loop muted playsInline>
                  <source src="/images/sixth/PanzerV3.mp4" type="video/mp4" />
                </video>
              ) : (
                <>
                  {content.icon && <content.icon />}

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">{content.title}</h3>

                    <p className="text-sm text-neutral-600 first-letter:text-base">
                      Get complete control over your website&apos;s performance
                      and aesthetics without extra plugins.
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
