import { Header } from '@/components/nav/Header'
import { SideBar } from '@/components/nav/SideBar'
import { NextIntlClientProvider, useLocale } from 'next-intl'
import { Roboto } from 'next/font/google'
import { notFound } from 'next/navigation'
import '../globals.css'

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

// export function generateStaticParams() {
//   return [{ locale: 'en' }, { locale: 'pt-BR' }]
// }

export const metadata = {
  title: 'Jacob Costa | Software Engineer',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const locale = useLocale()

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound()
  }

  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main className="flex flex-row min-h-screen">
            <SideBar />
            <div className="relative flex flex-col w-full min-h-screen">
              <Header />
              <section className="relative w-full max-w-[1150px] m-auto p-36 overflow-hidden z-10">
                {children}
              </section>
            </div>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}