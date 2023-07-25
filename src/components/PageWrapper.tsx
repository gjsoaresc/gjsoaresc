'use client'

import { AnimatePresence, motion } from 'framer-motion'

type PageWrapperProps = {
  children: React.ReactNode
}

export const PageWrapper = ({ children }: PageWrapperProps) => (
  <AnimatePresence>
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 100,
      }}
      transition={{
        delay: 0.25,
      }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
)
