'use client'

import Link from 'next/link'
import { footerSections, socialLinks } from '../../data'
import { CTAButton } from '../CTAButton'
import { DroipIcon, ThemeumLogo } from '../icons'
import { GlowingCursor } from '../cursor-glowing-effect/GlowingCursor'
import { useRef } from 'react'

export const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="bg-white py-16">
      <div className="contain space-y-20">
        <div
          ref={containerRef}
          className="relative flex flex-col gap-8 overflow-hidden rounded-2xl bg-black p-8 text-white md:flex-row md:justify-between lg:items-center lg:p-16"
        >
          <h2 className="text-3xl font-medium md:text-4xl lg:text-6xl">
            Get Started <br />
            For Free
          </h2>

          <div className="space-y-8 md:max-w-[340px] lg:max-w-[380px]">
            <p className="md:text-sm lg:text-base">
              Experience the power of Droip no-code website builder, risk free.
              Create stunning, responsive sites with pure creative freedom.
            </p>
            <CTAButton text="Try for Free" />
          </div>

          <GlowingCursor containerRef={containerRef} persistGlow={true} />
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-5">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 font-semibold text-gray-900">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[13px] text-gray-600 transition-colors hover:text-gray-900 sm:text-base"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* My Socials */}
          <div className="flex items-center gap-8 lg:row-start-1 lg:flex-col lg:items-start lg:gap-6">
            <h3 className="font-semibold text-gray-900 md:text-xl">Social</h3>

            <div className="flex gap-4 lg:flex-col">
              {socialLinks.map((social) => {
                const IconComponent = social.icon

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="bg-none text-gray-600 transition-colors hover:text-gray-900"
                    aria-label={social.label}
                  >
                    <IconComponent className="size-[18px] rounded-full" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <hr className="h-[3px] bg-gray-300" />

          <div className="grid justify-between gap-4 gap-y-6 sm:grid-cols-4 md:grid-cols-9 md:items-center">
            <div className="col-span-2 flex items-center gap-4 md:col-span-3 md:ml-auto lg:mx-auto">
              <span className="mt-1 text-gray-500">A product by</span>
              <ThemeumLogo className="h-7" />
            </div>

            <Link
              href="https://raphael-wisdom-portfolio.vercel.app"
              target="_blank"
              className="ml-auto flex w-fit items-center gap-1 rounded-md bg-[#9354ff] p-[2px] pl-2 sm:col-span-2 sm:ml-0 md:col-span-3 md:ml-auto"
            >
              <DroipIcon className="size-[22px]" />
              <div className="rounded bg-white px-2 py-[7px] text-sm tracking-normal text-[#501da9]">
                <p>Made by Raphael</p>
              </div>
            </Link>

            <div className="col-span-2 row-start-1 text-gray-400 md:col-span-3">
              &copy; {new Date().getFullYear()} Droip. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
