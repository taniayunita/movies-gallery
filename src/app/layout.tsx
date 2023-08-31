import { Navbar, Footer } from '@/components'

import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VIEMO | Watch movie best quality',
  description: 'Discover movie from all Country',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
