import { useRef, useState } from 'react'

export function useDirection(initialIndex = 0) {
  const [activeIndex, setActiveIndex] = useState(initialIndex)
  const [direction, setDirection] = useState(0)
  const prevIndex = useRef(initialIndex)

  const handleIndexChange = (newIndex: number) => {
    if (newIndex === activeIndex) return activeIndex

    setDirection(newIndex > activeIndex ? 1 : -1)
    prevIndex.current = activeIndex
    setActiveIndex(newIndex)
    return newIndex
  }

  return {
    activeIndex,
    direction,
    prevIndex: prevIndex.current,
    handleIndexChange,
  }
}
