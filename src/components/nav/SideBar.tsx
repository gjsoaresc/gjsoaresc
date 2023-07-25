'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/about', label: 'about' },
  // { href: '/projects', label: 'Projects' },
  // { href: '/articles', label: 'Articles' },
  { href: '/contact', label: 'contact' },
]

export const SideBar = () => {
  const pathname = usePathname()
  const t = useTranslations(SideBar.name)

  const path = pathname.split('/').pop()
  const isActive = (href: string) => href.split('/').pop() === path

  if (pathname === '/' || pathname === '/pt-BR') return null

  return (
    <nav className="w-[220px] max-h-screen min-h-screen sticky top-0">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-between p-8 box-border h-full bg-black"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-black"
        >
          <Link href="/">
            Guilherme <br /> Jacob
          </Link>
        </motion.div>

        <ul className="mb-8">
          {links.map(({ href, label }, index) => (
            <motion.li
              key={`${href}${label}`}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-8"
            >
              <Link
                href={href}
                className={`relative mb-8 transition-all w-min-content
              after:w-0 after:h-1 after:absolute after:-bottom-2 after:right-0 after:bg-white after:transition-all after:duration-500
              hover:after:w-full hover:after:left-0 hover:after:bg-brand ${
                isActive(href) ? 'after:w-full after:left-0' : ''
              }`}
              >
                <div className="z-10">{t(label)}</div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  )
}
