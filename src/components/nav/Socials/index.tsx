'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai'

const links = [
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/guilherme-jacob',
    icon: AiFillLinkedin,
  },
  {
    name: 'github',
    href: 'https://www.github.com/gjsoaresc',
    icon: AiFillGithub,
  },
  {
    name: 'twitter',
    href: 'https://www.twitter.com/evrenttv',
    icon: AiFillTwitterCircle,
  },
  // {
  //   name: 'codepen',
  //   href: 'https://www.codepen.io',
  //   icon: AiFillCodepenCircle,
  // },
]

export const Socials = () => {
  return (
    <div className="flex gap-3">
      {links.map((link, index) => {
        const delay = index * 0.1
        const Icon = link.icon

        return (
          <motion.span
            key={link.name}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay }}
          >
            <Link
              href={link.href}
              target="_blank"
              rel="nofollow"
              className="relative opacity-50 z-20 hover:text-brand hover:opacity-100"
            >
              <Icon size="1.6rem" />
            </Link>
          </motion.span>
        )
      })}
    </div>
  )
}
