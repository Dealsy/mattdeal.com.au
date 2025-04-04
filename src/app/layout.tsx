import localFont from 'next/font/local'
import './globals.css'
import { Providers } from './providers'
import NavWrapper from '@/components/nav/nav-wrapper'
import { Footer } from '@/components/footer'
import { Cinzel } from 'next/font/google'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel',
})

export const metadata = {
  title: 'Mattdeal.com.au',
  description: 'Portfolio website',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} antialiased flex flex-col min-h-screen`}
      >
        <Providers>
          <div className="flex-1">
            <NavWrapper />
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
