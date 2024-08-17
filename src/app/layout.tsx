import '~/styles/globals.css'

import { fontSans } from '~/components/ui/fonts'
import { getSEOTags } from '~/lib/seo'
import { cn } from '~/lib/utils'
import AppProviders from '~/providers'
import { type Viewport } from 'next'
import config from '~/constant/config'

export const viewport: Viewport = {
  themeColor: config.theme,
  width: 'device-width',
  initialScale: 1,
}

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
