import localFont from 'next/font/local'
import { Cinzel } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import NavWrapper from '@/components/nav/nav-wrapper'
import { Footer } from '@/components/footer'

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
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'Mattdeal.com.au',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} antialiased flex flex-col min-h-screen bg-background`}
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
