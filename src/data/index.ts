import {
  BellDot,
  Bolt,
  CircleHelp,
  Database,
  LucideProps,
  MapPin,
  MessageCircle,
  PanelsTopLeft,
  PanelTop,
  Play,
  ShoppingBag,
  TriangleAlert,
} from 'lucide-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

export type MenuItem =
  | {
      name: string
      subMenu: {
        name: string
        desc: string
        icon: ForwardRefExoticComponent<
          Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
        >
      }[]
      gridCols: number
    }
  | {
      name: string
      subMenu?: undefined
      gridCols?: undefined
    }

export type Step = {
  id: string
  title: string
  description: string
  imageUrl: string
  href?: string
}

export const Menus: MenuItem[] = [
  {
    name: 'Home',
  },
  {
    name: 'Product',
    subMenu: [
      {
        name: 'Editor',
        desc: 'Effective Visual Builder',
        icon: PanelsTopLeft,
      },
      {
        name: 'Interaction & Animation',
        desc: 'Design Interactive websites',
        icon: Bolt,
      },
      {
        name: 'Grids & Layouts',
        desc: 'Structure more easily',
        icon: PanelTop,
      },
      {
        name: 'Media Manager',
        desc: 'Manage & edit site assets',
        icon: Database,
      },
      {
        name: 'Typography',
        desc: 'Customize your branding',
        icon: Database,
      },
      {
        name: 'SEO',
        desc: 'Optimize your SEO workflow',
        icon: Database,
      },
    ],
    gridCols: 2,
  },
  {
    name: 'Resources',
    subMenu: [
      {
        name: 'WordPress Themes',
        desc: 'Jumpstart with premium themes',
        icon: ShoppingBag,
      },
      {
        name: 'Droip Blogs',
        desc: 'Upcoming events',
        icon: MapPin,
      },
      {
        name: 'Documentation',
        desc: 'Learn from documentation',
        icon: BellDot,
      },
      {
        name: 'Release Notes',
        desc: "Check what's new",
        icon: Play,
      },
    ],
    gridCols: 3,
  },
  {
    name: 'Support',
    subMenu: [
      {
        name: 'Get Support',
        desc: 'Fix your issues with our experts',
        icon: CircleHelp,
      },
      {
        name: 'Feature Request',
        desc: "Let us know what's missing",
        icon: MessageCircle,
      },
      {
        name: 'Contact',
        desc: 'Contact for query',
        icon: TriangleAlert,
      },
    ],
    gridCols: 1,
  },
  {
    name: 'Pricing',
  },
]

export const firstSectionSteps: Step[] = [
  {
    id: 'typography',
    title: 'Advanced typography',
    description:
      'Take full control over your text with precision typography tools. Adjust fonts, spacing, and styles to add more character to your design.',
    imageUrl: '/images/first/advanced-typography.webp',
    href: '#',
  },
  {
    id: 'grids',
    title: 'CSS grids and layouts',
    description:
      'Build complex layouts with ease using CSS Grids. Create multi-directional structures, manage spacing, and achieve perfect alignment without limitations.',
    imageUrl: '/images/first/CSS-Grids-Layouts.webp',
    href: '#',
  },
  {
    id: 'adaptive',
    title: 'Adaptive design',
    description:
      'Ensure flawless responsiveness across all devices. Design with adaptive elements that adjust seamlessly to different screen sizes and resolutions.',
    imageUrl: '/images/first/auto-responsive-1.webp',
    href: '#',
  },
  {
    id: 'efficiency',
    title: 'Designed for efficiency',
    description:
      'Streamline your workflow with intuitive tools that simplify layout structuring. Save time while maintaining complete design accuracy and flexibility.',
    imageUrl: '/images/first/Designed-for-Efficiency.webp',
    href: '#',
  },
]

export const secondSectionSteps: Step[] = [
  {
    id: 'timeline',
    title: 'Advanced interaction timeline',
    description:
      'Design smooth, multi-step animations with a timeline-based editor for complete control.',
    imageUrl: '/images/second/Advanced-Interaction-timeline.webp',
  },
  {
    id: 'timing',
    title: 'Custom timing editor',
    description:
      'Fine-tune every interaction to deliver flawless performance by adjusting delays, durations, easing functions, and more.',
    imageUrl: '/images/second/Custom-Timing-Editor.webp',
  },
  {
    id: 'triggers',
    title: 'Advanced triggers',
    description:
      'Trigger animations based on scrolling, hovering, page load, and more for a dynamic experience.',
    imageUrl: '/images/second/Advanced-Triggers.webp',
  },
  {
    id: 'precision',
    title: 'Achieve limitless precision',
    description:
      'Create flawless, interactive designs visually with unmatched accuracy and finesse.',
    imageUrl: '/images/second/Achieve-Limitless-Precision.webp',
  },
]
