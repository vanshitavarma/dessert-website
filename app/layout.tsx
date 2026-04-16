import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Velvet Crumbs – Patisserie Atelier | Luxury Handcrafted Desserts',
  description: 'Indulge in edible art. Velvet Crumbs creates handcrafted desserts designed to delight every sense. Experience luxury French patisserie at its finest.',
  keywords: ['patisserie', 'desserts', 'luxury bakery', 'French pastries', 'macarons', 'artisan cakes'],
  openGraph: {
    title: 'Velvet Crumbs – Patisserie Atelier',
    description: 'Handcrafted desserts designed to delight every sense',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#F5F0E8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} bg-background`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
