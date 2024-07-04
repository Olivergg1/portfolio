import { ButtonHTMLAttributes } from 'react'

import './Button.css'
import { useExecute } from '../../hooks/console.hooks'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: boolean
}

export default function Button({ href, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`std-button ${href && 'href'} ${props.className ?? ''}`}>
      {props.children}
    </button>
  )
}

interface ExecuteButtonProps extends ButtonProps {
  e: string
}

export function ExecuteButton({ e, ...props }: ExecuteButtonProps) {
  const execute = useExecute()
  return (
    <Button {...props} onClick={() => execute(e)}>
      {props.children}
    </Button>
  )
}
