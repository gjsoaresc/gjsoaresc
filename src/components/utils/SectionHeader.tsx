import { Reveal } from './Reveal'

interface Props {
  title: string
  dir?: 'l' | 'r'
}

export const SectionHeader = ({ title, dir = 'r' }: Props) => {
  return (
    <div
      className="flex items-center gap-4 mb-10"
      style={{ flexDirection: dir === 'r' ? 'row' : 'row-reverse' }}
    >
      <div className="w-full h-[1px] bg-white opacity-30" />
      <h3>
        <Reveal>
          <span className="text-6xl font-black text-center">
            {title}
            <span className="text-brand">.</span>
          </span>
        </Reveal>
      </h3>
    </div>
  )
}
