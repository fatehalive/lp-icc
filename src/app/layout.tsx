import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/navbar/Navbar'
import Main from '@/components/main/Main'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Indonesia Comic Con - Pop Culture Event',
  description: 'A Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Main>
          {children}
        </Main>
        <Footer />
      </body>
    </html>
  )
}
