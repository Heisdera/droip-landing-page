import { motion, Variants } from 'motion/react'

interface PathProps {
  d?: string
  variants?: Variants
  transition?: {
    duration: number
  }
}

const Path: React.FC<PathProps> = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="#5641F3"
    strokeLinecap="round"
    {...props}
  />
)

interface MenuToggleButtonProps {
  toggle: () => void
}

export const MenuToggleButton: React.FC<MenuToggleButtonProps> = ({
  toggle,
}) => (
  <button
    type="button"
    title="toggle menu"
    onClick={toggle}
    className="pointer-events-auto flex cursor-pointer rounded-md p-1"
    aria-label="Toggle menu"
  >
    <svg width="29" height="23" viewBox="0 -1 20 20">
      <Path
        variants={{
          closed: { d: 'M 20 2.5 L 0 2.5' },
          open: { d: 'M 17 16.5 L 2 2.5' },
        }}
      />
      <Path
        d="M 20 9.423 L 0 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 20 16.346 L 0 16.346' },
          open: { d: 'M 17 2.5 L 2 16.346' },
        }}
      />
    </svg>
  </button>
)
