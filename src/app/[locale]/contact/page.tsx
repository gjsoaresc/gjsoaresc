import { Reveal } from '@/components/utils/Reveal'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { AiFillMail } from 'react-icons/ai'

const Contact = () => {
  const t = useTranslations(Contact.name)

  return (
    <div className="wrapper m-auto text-center">
      <Reveal width="100%">
        <h4 className="text-8xl mb-8 font-extrabold">
          {t('title')}
          <span className="text-brand">.</span>
        </h4>
      </Reveal>
      <Reveal width="100%">
        <p className="text-lg text-center font-extralight mb-8">
          {t('description')}{' '}
          <Link
            href="https://www.linkedin.com/in/guilherme-jacob"
            target="_blank"
            rel="nofollow"
            className="text-brand"
          >
            Linkedin
          </Link>
          .
        </p>
      </Reveal>
      <Reveal width="100%">
        <Link href="mailto:bob.ross@notreal.com">
          <div className="flex justify-center items-center gap-[0.8rem] w-fit text-4xl font-medium m-auto transition-colors duration-300 hover:text-brand">
            <AiFillMail size="2.4rem" />
            <span>gjsoaresc@gmail.com</span>
          </div>
        </Link>
      </Reveal>
    </div>
  )
}

export default Contact
