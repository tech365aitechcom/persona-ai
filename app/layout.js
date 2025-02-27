import { Geist, Geist_Mono, Asap, Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const asap = Asap({
  variable: '--font-asap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Persona AI',
  description:
    'AI Powered Qualitative Research | Simulated Behavioral Insights at Scale',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${asap.variable} ${inter.variable} font-inter antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
