import { cn } from '@/lib/utils'
import {
  animate,
  motion,
  MotionValue,
  useInView,
  useMotionValue,
  useTransform,
} from 'motion/react'
import { useEffect, useRef } from 'react'

export default function CharacterRevealHeader({
  paragraph,
  className,
}: {
  paragraph: string
  className?: string
}) {
  const paragraphElement = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(paragraphElement, {
    once: true,
    margin: '-10% 0px -10% 0px', // trigger the animation when 10% of the element is visible
  })

  const progress = useMotionValue(0) // start the animation from 0 to 1 when in view

  useEffect(() => {
    if (isInView) {
      animate(progress, 1, {
        duration: 2, // animation duration in seconds
        ease: 'easeOut',
      })
    }
  }, [isInView, progress])

  const words = paragraph.split(' ')

  return (
    <p
      ref={paragraphElement}
      className={cn(
        'flex max-w-7xl flex-wrap py-2 text-5xl leading-[1] font-medium tracking-tighter md:text-7xl',
        className
      )}
    >
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length

        return (
          <Word key={i} progress={progress} range={[start, end]} word={word} />
        )
      })}
    </p>
  )
}

interface WordProps {
  word: string
  progress: MotionValue<number>
  range: [number, number]
}

const Word = ({ word, progress, range }: WordProps) => {
  const characters = word.split('')
  const amount = range[1] - range[0]
  const step = amount / word.length

  return (
    <span className="relative mt-3 mr-3">
      {characters.map((character, i) => {
        const start = range[0] + step * i
        const stepPlusOne = step * (i + 1)
        const end = range[0] + stepPlusOne

        return (
          <Char
            key={`c_${i}`}
            progress={progress}
            range={[start, end]}
            character={character}
          />
        )
      })}
    </span>
  )
}

interface CharacterProps {
  character: string
  progress: MotionValue<number>
  range: [number, number]
}

const Char = ({ character, progress, range }: CharacterProps) => {
  const opacity = useTransform(progress, range, [0, 1])

  return (
    <span>
      <span className="absolute opacity-20">{character}</span>
      <motion.span style={{ opacity: opacity }}>{character}</motion.span>
    </span>
  )
}
