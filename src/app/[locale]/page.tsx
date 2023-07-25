'use client'

import { DotGrid } from '@/components/DotGrid'
import { Button } from '@/components/button'
import { Reveal } from '@/components/utils/Reveal'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Home = () => {
  const router = useRouter()
  const t = useTranslations(Home.name)

  useEffect(() => {
    router.prefetch('/about')
  }, [router])

  return (
    <div className="flex items-center">
      <div className="relative w-fit my-8 z-10">
        <Reveal>
          <h1
            className="text-8xl font-black"
            dangerouslySetInnerHTML={{ __html: t.raw('title') }}
          />
        </Reveal>
        <Reveal>
          <h2
            className="text-4xl mt-6 font-extralight"
            dangerouslySetInnerHTML={{
              __html: t.raw('subtitle'),
            }}
          />
        </Reveal>
        <Reveal>
          <p
            className="my-10 max-w-[700px] text-lg font-extralight"
            dangerouslySetInnerHTML={{
              __html: t.raw('description'),
            }}
          />
        </Reveal>
        <Reveal>
          <Button onClick={() => router.push('/about')}>
            {t('know-more')}
          </Button>
        </Reveal>
      </div>
      <DotGrid />
    </div>
  )
}

export default Home
