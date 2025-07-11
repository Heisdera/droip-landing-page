import { cn } from '@/lib/utils'
import React from 'react'

const SpinningCircleIcon = ({
  size = 48,
  className = '',
  animate = true,
  ...props
}) => {
  return (
    <svg
      className={cn(className, {
        'animate-spin': animate,
      })}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      style={{
        animationDuration: animate ? '12s' : undefined,
      }}
      {...props}
    >
      <path
        d="M62.4593 31.9955C62.4593 48.8184 48.8227 62.4559 32.0012 62.4559C15.1796 62.4559 1.54297 48.8184 1.54297 31.9955C1.54297 15.1727 15.1796 1.53516 32.0012 1.53516C48.8227 1.53516 62.4593 15.1727 62.4593 31.9955Z"
        stroke="#CCC6FB"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M40.6047 40.3519C45.0646 35.9248 45.0646 28.7471 40.6047 24.3199C36.1449 19.8928 28.914 19.8928 24.4542 24.3199C19.9943 28.7471 19.9943 35.9248 24.4542 40.3519C28.914 44.7791 36.1449 44.7791 40.6047 40.3519Z"
        fill="#BBB3FA"
      />
      <path
        d="M40.6076 40.3516C45.0674 35.9244 45.0674 28.7467 40.6076 24.3196C40.6076 24.3196 36.9923 27.9086 32.5324 32.3357C28.0726 36.7628 24.457 40.3516 24.457 40.3516C28.9169 44.7787 36.1477 44.7787 40.6076 40.3516Z"
        fill="#6754F4"
      />
      <ellipse
        cx="57.8728"
        cy="17.837"
        rx="4.87279"
        ry="4.83703"
        fill="#BBB3FA"
      />
    </svg>
  )
}

export default SpinningCircleIcon
