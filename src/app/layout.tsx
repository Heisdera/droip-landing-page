import { Navbar } from '@/components/Navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'styles'

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Droip | No-Code website builder for WordPress',
  description: 'Recreated with love by Raphael Wisdom Chidera',
  icons: {
    icon: [
      {
        url: 'https://droip.com/wp-content/uploads/2025/02/droip-favicon-150x150.webp',
        sizes: '32x32',
      },
      {
        url: 'https://droip.com/wp-content/uploads/2025/02/droip-favicon-300x300.webp',
        sizes: '192x192',
      },
    ],
    apple:
      'https://droip.com/wp-content/uploads/2025/02/droip-favicon-300x300.webp',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interSans.className} bg-[#f5f5f7] tracking-tight antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
