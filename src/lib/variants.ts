export const sidebarVariant = {
  open: {
    rotateX: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 20,
    },
    display: 'block',
  },
  closed: {
    rotateX: -90,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
    display: 'none',
  },
}
