import { MouseEventHandler } from 'react'

type ButtonProps = {
  children: string | JSX.Element
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-brand text-dark-fg rounded-md"
    >
      {children}
    </button>
  )
}

export const ButtonOutline = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="border border-brand text-brand px-4 py-2 rounded-md hover:bg-brand hover:text-dark-fg transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
