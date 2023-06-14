import './globals.css'
import { Open_Sans } from 'next/font/google'
import Header from '@/components/layout/Header'
import PageHead from '@/components/layout/PageHead'
import Footer from '@/components/layout/Footer'

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
        <PageHead />
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
