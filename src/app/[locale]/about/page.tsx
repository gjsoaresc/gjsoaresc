import { Socials } from '@/components/nav/Socials'
import { Reveal } from '@/components/utils/Reveal'
import { SectionHeader } from '@/components/utils/SectionHeader'
import { useTranslations } from 'next-intl'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Stats } from './components/Stats'

const About = () => {
  const t = useTranslations('About')

  const styles = {
    aboutText: 'py-2 mb-6 text-lg leading-10 text-white opacity-80',
  }

  return (
    <>
      <SectionHeader title={t('title')} dir="l" />
      <div className="grid grid-cols-[1fr_300px] gap-10">
        <div>
          <Reveal>
            <p
              className={`${styles.aboutText} first-letter:bg-light-fg first-letter:px-2 first-letter:rounded first-letter:mr-2 first-letter:text-4xl`}
            >
              {t('t-one')}
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>{t('t-two')}</p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>{t('t-three')}</p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>{t('t-four')}</p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center text-brand text-lg">
                <span>{t('my-links')}</span>
                <AiOutlineArrowRight />
              </div>
              <Socials />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </>
  )
}

export default About
