import {
  ActiveCampaignIcon,
  DollarBag,
  FacebookIcon,
  FacebookIconGray,
  FigmaIcon,
  GetResponseIcon,
  GoogleIcon,
  GridIcon,
  GuardIcon,
  HelpScoutIcon,
  IntercomIcon,
  KitIcon,
  LinkedInIcon,
  LinkIcon,
  LiveChatIcon,
  MailChimpIcon,
  MailerLiteIcon,
  MooSendIcon,
  OlarkIcon,
  PexelsIcon,
  PocketIcon,
  ReCaptchaIcon,
  SMTPIcon,
  TawkIcon,
  ThriveDeskIcon,
  TrelloIcon,
  TwitterIcon,
  UnSplashIcon,
  XIconGray,
  YoutubeIcon,
  ZenDeskIcon,
  ZohoIcon,
} from '@/components/icons'
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
import { ForwardRefExoticComponent, JSX, RefAttributes } from 'react'

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

export type Card = {
  title: string
  description: string
  imageUrl: string
  href: string
}

export type ImageCard = {
  name: string
  src: string
  className: string
}

export interface IconClassProps {
  className?: string
}

export type gridCard = {
  title?: string
  description?: string
  icon?: ({ className }: IconClassProps) => JSX.Element
  className?: string
  src?: string
}

export const menus: MenuItem[] = [
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
  },
  {
    id: 'efficiency',
    title: 'Designed for efficiency',
    description:
      'Streamline your workflow with intuitive tools that simplify layout structuring. Save time while maintaining complete design accuracy and flexibility.',
    imageUrl: '/images/first/Designed-for-Efficiency.webp',
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

export const thirdSectionContents: Card[] = [
  {
    title: 'Content Manager',
    description:
      'Handle dynamic data with the built-in content manager. Link data dynamically to any part of your website.',
    imageUrl: '/images/third/CMS1.webp',
    href: '#',
  },
  {
    title: 'Media Manager',
    description:
      'Organize and edit all media assets, including SVGs, Lottie, and icons, with the built-in image and shape editor.',
    imageUrl: '/images/third/Media-Manager.webp',
    href: '#',
  },
  {
    title: 'SEO',
    description:
      "Dynamically update SEO content across pages to optimize your website's search performance.",
    imageUrl: '/images/third/dymanic-seo2-1.webp',
    href: '#',
  },
]

export const fourthSectionImages: ImageCard[] = [
  {
    name: 'Creative Branding',
    src: 'vertical-slider2.webp',
    className: 'relative h-[101px] w-[93px] rounded-lg',
  },
  {
    name: 'Healthcare Solutions',
    src: 'vertical-slider4.webp',
    className: 'relative h-[143px] w-[176px] rounded-lg',
  },
  {
    name: 'Build Website From Scratch',
    src: 'vertical-slider3.webp',
    className: 'relative h-[259px] w-[235px] rounded-lg',
  },
  {
    name: 'Generate Site Button',
    src: 'vertical-slider1.webp',
    className: 'relative h-[58px] w-[227px] rounded-lg',
  },
  {
    name: 'User Login Form',
    src: 'vertical-slider5.webp',
    className: 'relative h-[188px] w-[180px] rounded-lg',
  },
  {
    name: 'Creative Branding',
    src: 'vertical-slider2.webp',
    className: 'relative h-[131px] w-[103px] rounded-lg',
  },
]

export const sixthSectionContents: gridCard[] = [
  {
    src: '/images/sixth/PanzerV3.mp4',
    className:
      'min-h-[200px] overflow-hidden rounded-3xl bg-white pl-10 md:col-span-2 md:row-start-2 md:pl-8 lg:row-start-1 lg:col-start-2 lg:pl-16',
  },
  {
    title: 'More control, less reliance',
    description:
      'Get complete control over your website’s performance and aesthetics without extra plugins.',
    className:
      'flex min-h-[200px] flex-col justify-between space-y-6 overflow-hidden rounded-3xl bg-white p-6 lg:p-8',
    icon: GridIcon,
  },
  {
    title: 'Cost-effective',
    description:
      'Reduce ongoing costs with built-in tools that let you scale seamlessly without extra expenses.',
    className:
      'flex min-h-[200px] flex-col justify-between space-y-6 overflow-hidden rounded-3xl bg-white p-6 lg:p-8',
    icon: DollarBag,
  },
  {
    title: 'Simplified workflow',
    description:
      'With everything built in, your design process is streamlined, efficient, and hassle-free.',
    className:
      'flex min-h-[200px] flex-col justify-between space-y-6 overflow-hidden rounded-3xl bg-white p-6 lg:p-8',
    icon: LinkIcon,
  },
  {
    title: 'Streamlined & secure',
    description:
      'Fewer external plugins mean fewer vulnerabilities, keeping your site secure and lightweight.',
    className:
      'flex min-h-[200px] flex-col justify-between space-y-6 overflow-hidden rounded-3xl bg-white p-6 lg:p-8',
    icon: GuardIcon,
  },
]

export const eighthSectionIcons = [
  IntercomIcon,
  HelpScoutIcon,
  OlarkIcon,
  MailChimpIcon,
  KitIcon,
  ActiveCampaignIcon,
  MooSendIcon,
  ZenDeskIcon,
  PocketIcon,
  TrelloIcon,
  MailerLiteIcon,
  GetResponseIcon,
  FigmaIcon,
  ThriveDeskIcon,
  GoogleIcon,
  PexelsIcon,
  SMTPIcon,
  UnSplashIcon,
  FacebookIcon,
  TwitterIcon,
  TawkIcon,
  ZohoIcon,
  LiveChatIcon,
  ReCaptchaIcon,
]

export const ninthSectionContents: {
  title: string
  description: string
  imageSrc: string
  className: string
}[] = [
  {
    title: 'Seamless migration',
    description:
      'Migrate your existing design seamlessly into Droip with just a click of a button!',
    imageSrc: '/images/ninth/design1.webp',
    className: '',
  },
  {
    title: 'Form builder',
    description:
      'Build forms for any purpose and effortlessly manage form data natively.',
    imageSrc: '/images/ninth/design-1.webp',
    className: '',
  },
  {
    title: 'CSS preview',
    description: 'See real-time CSS changes and fine-tune styles as you need.',
    imageSrc: '/images/ninth/design8.webp',
    className: '',
  },
  {
    title: 'Unlimited breakpoints',
    description:
      'Achieve pixel-perfect responsiveness across all devices with unlimited breakpoints.',
    imageSrc: '/images/ninth/design1-1.webp',
    className: '',
  },
  {
    title: 'Figma to droip',
    description:
      'Seamlessly import Figma designs into Droip and bring your vision to life in no time.',
    imageSrc: '/images/ninth/design2.webp',
    className: '',
  },
  {
    title: 'Code element',
    description:
      'Add custom HTML, CSS, and JavaScript to an element for extended functionality.',
    imageSrc: '/images/ninth/design4.webp',
    className: '',
  },
  {
    title: 'Pop-up builder',
    description:
      'Design engaging pop-ups that captivate visitors and boost conversions.',
    imageSrc: '/images/ninth/design5.webp',
    className: '',
  },
  {
    title: 'Autosave',
    description:
      'Never lose progress—your work is automatically saved as you build.',
    imageSrc: '/images/ninth/design7.webp',
    className: '',
  },
  {
    title: 'Global style manager',
    description:
      'Maintain consistent branding with centralized style controls.',
    imageSrc: '/images/ninth/design6.webp',
    className: '',
  },
  {
    title: 'Droip AI',
    description: 'Harness AI to accelerate your workflow and creative process.',
    imageSrc: '/images/ninth/create-with-ai.webp',
    className: '',
  },
]

export const footerSections = [
  {
    title: 'Product',
    links: [
      'Grid & Layouts',
      'Typography',
      'Media Manager',
      'Form Builder',
      'Pop-Up Builder',
      'Interaction & Animations',
      'Accessibility',
    ],
  },
  {
    title: 'Company',
    links: ['Affiliates', 'Terms & Privacy', 'Cookie'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Documentation', 'Release Notes'],
  },
  {
    title: 'Support',
    links: ['Pricing', 'Contact Us'],
  },
]

export const socialLinks = [
  { icon: FacebookIconGray, label: 'Facebook', href: '#' },
  { icon: XIconGray, label: 'Twitter', href: 'https://x.com/Heisdera_Tech' },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/raphael-wisdom-heisderatech',
  },
  { icon: YoutubeIcon, label: 'YouTube', href: '#' },
]
