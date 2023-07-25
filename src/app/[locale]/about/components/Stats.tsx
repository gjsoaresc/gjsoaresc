import { Reveal } from '@/components/utils/Reveal'
import { useTranslations } from 'next-intl'
import { AiFillCode } from 'react-icons/ai'

export const Stats = () => {
  const t = useTranslations('About')

  const techs = [
    {
      title: t('for-work'),
      techs: [
        'Node',
        'React',
        'NextJS',
        'Angular',
        'Typescript',
        'React Native',
        'Flutter',
        'Kotlin',
        'Swift',
        'Tailwind',
        'GraphQL',
        '.NET Core',
        'Java',
        'AWS',
        'NX',
        'Docker',
        'Cypress',
        'Jest',
        'Jenkins',
        'Git',
        'MongoDB',
        'PostgreSQL',
        'Redis',
      ],
    },
    {
      title: t('for-fun'),
      techs: ['Unity', 'Go', 'Python', 'C++', 'C#', 'Rust', 'Dart', 'Elixir'],
    },
  ]

  return (
    <div className="relative flex flex-col">
      {techs.map(({ title, techs }) => (
        <Reveal key={title}>
          <div>
            <h4 className="flex items-center mb-8">
              <AiFillCode size="2.4rem" className="text-brand" />
              <span className="text-2xl">{title}</span>
            </h4>
            <div className="flex flex-wrap gap-3 mb-16">
              {techs.map((tech, index) => (
                <div
                  key={index}
                  className="text-sm bg-light-fg py-1 px-3 rounded-2xl"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
