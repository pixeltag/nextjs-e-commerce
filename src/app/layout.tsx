import './globals.css'
import { Open_Sans } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { GlobalContextProvider } from '@/context/store'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Bloowatch',
  description: 'Bloowatch e-commerce store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
        <Footer />
      </body>
    </html>
  )
}
