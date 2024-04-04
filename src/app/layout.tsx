import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import Providers from './Providers'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    template: '%s - Cleaning Website Templates',
    default: 'Cleaning Website Templates - A perfect solution for your cleaning business',
  },
  description:
    'Cleaning Website Templates is a perfect solution for your cleaning business. It is a modern, clean, and professional website template that is designed to showcase your cleaning services.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        <Providers>
          {children}
        </Providers>
        <Script src='https://www.googletagmanager.com/gtag/js?id=G-R482YCN0X9' />
        <Script id='gtag'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R482YCN0X9');
          `}
        </Script>
      </body>
    </html>
  )
}
