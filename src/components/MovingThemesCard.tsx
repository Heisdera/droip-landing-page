import Image from 'next/image'
import { Marquee } from './ui/marquee'

const firstRow = [
  '/images/fifth/Template-Thumbnail-1.webp',
  '/images/fifth/Template-Thumbnail-10.webp',
  '/images/fifth/Template-Thumbnail-3.webp',
  '/images/fifth/Template-Thumbnail-2.webp',
]

const secondRow = [
  '/images/fifth/Template-Thumbnail-8.webp',
  '/images/fifth/Template-Thumbnail-768x433.webp',
  '/images/fifth/Template-Thumbnail-4.webp',
  '/images/fifth/Template-Thumbnail-7.webp',
  '/images/fifth/Template1-1-300x169.webp',
]

const thirdRow = [
  '/images/fifth/Template-Thumbnail-9.webp',
  '/images/fifth/Template-Thumbnail-11.webp',
  '/images/fifth/Template-Thumbnail-6.webp',
  '/images/fifth/Template-Thumbnail-12.webp',
  '/images/fifth/Template-Thumbnail-12-1-768x433.webp',
  '/images/fifth/Template-Thumbnail-9.webp',
  '/images/fifth/Template8-300x169.webp',
]

export default function MovingThemesCard() {
  return (
    <div className="flex- relative flex w-full flex-col items-center justify-center gap-1 overflow-hidden">
      <Marquee className="[--duration:40s]">
        {firstRow.map((image, i) => (
          <div
            key={`${i + image}`}
            className="relative h-[236px] w-[420px] cursor-pointer overflow-hidden rounded-xl border border-gray-50/[.1] bg-gray-50/[.10] p-4 hover:bg-gray-50/[.15]"
          >
            <Image
              className="w-full cursor-default object-cover"
              fill
              alt=""
              src={image}
            />
          </div>
        ))}
      </Marquee>

      <Marquee reverse className="[--duration:40s]">
        {secondRow.map((image, i) => (
          <div
            key={`${i + image}`}
            className="relative h-[180px] w-[320px] cursor-pointer overflow-hidden rounded-xl border border-gray-50/[.1] bg-gray-50/[.10] p-4 hover:bg-gray-50/[.15]"
          >
            <Image
              className="w-full cursor-default object-cover"
              fill
              alt=""
              src={image}
            />
          </div>
        ))}
      </Marquee>

      <Marquee className="[--duration:40s]">
        {thirdRow.map((image, i) => (
          <div
            key={`${i + image}`}
            className="relative h-[135px] w-[240px] cursor-pointer overflow-hidden rounded-xl border border-gray-50/[.1] bg-gray-50/[.10] p-4 hover:bg-gray-50/[.15]"
          >
            <Image
              className="w-full cursor-default object-cover"
              fill
              alt=""
              src={image}
            />
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-black/95"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-black/95"></div>
    </div>
  )
}
