'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ButtonOutline } from '../button'
import { Socials } from './Socials'

const locales = ['en', 'pt-BR']

export const Header = () => {
  const { push } = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations('Header')

  const path = pathname.split('/').pop()
  const otherLocale = locales.find((l) => l !== locale)

  return (
    <header className="sticky top-0 flex flex-row w-full h-16 px-8 justify-between items-center bg-dark-fg backdrop-blur-md">
      <Socials />
      <div className="flex justify-between items-center gap-4">
        <Link
          href={path === locale ? `/${otherLocale}` : `/${otherLocale}/${path}`}
          className="font-medium uppercase"
        >
          {otherLocale}
        </Link>
        <ButtonOutline onClick={() => push('/resume')}>
          {t('resume')}
        </ButtonOutline>
      </div>
    </header>
  )
}
