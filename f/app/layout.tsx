import type { Metadata } from 'next'
import './globals.css'
import '@/components/GridScan.css'
import '@/components/CardNav.css'

export const metadata: Metadata = {
  title: 'Next.js App',
  description: 'Modern Next.js application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}

