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
