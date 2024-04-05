import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import Providers from './Providers'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: {
    template: '%s - Cleaning Website Templates',
    default: 'Cleaning Website Templates - A perfect solution for your cleaning business',
  },
  description:
    'Cleaning Website Templates is a perfect solution for your cleaning business. It is a modern, clean, and professional website template that is designed to showcase your cleaning services.',
  openGraph: {
    title: 'Cleaning Website Templates - A perfect solution for your cleaning business',
    description:
      'Cleaning Website Templates is a perfect solution for your cleaning business. It is a modern, clean, and professional website template that is designed to showcase your cleaning services.',
    images: [
      {
        url: 'https://www.cleaningwebsitetemplates.com/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Cleaning Website Templates - A perfect solution for your cleaning business',
      },
    ],
    siteName: 'Cleaning Website Templates',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleaning Website Templates - A perfect solution for your cleaning business',
    description:
      'Cleaning Website Templates is a perfect solution for your cleaning business. It is a modern, clean, and professional website template that is designed to showcase your cleaning services.',
    images: ['https://www.cleaningwebsitetemplates.com/twitter-card.png'],
    creator: '@coderreco'
  }
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
      <GoogleTagManager gtmId='GTM-M5FFMNVZ' />
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
