'use client'

import { Header } from '@/components/nav/Header'
import { SideBar } from '@/components/nav/SideBar'
import { useLocale } from 'next-intl'
import { Roboto } from 'next/font/google'
import '../globals.css'

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  const locale = useLocale()

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <main className="flex flex-row min-h-screen">
          <SideBar />
          <div className="relative flex flex-col w-full min-h-screen">
            <Header />
            <section className="relative w-full max-w-[1150px] m-auto p-36 overflow-hidden z-10">
              {children}
            </section>
          </div>
        </main>
      </body>
    </html>
  )
}
