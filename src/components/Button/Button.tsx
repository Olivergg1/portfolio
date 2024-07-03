import { ButtonHTMLAttributes } from 'react'

import './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: ButtonProps) {
  return (
    <button {...props} className={`std-button ${props.className}`}>
      {props.children}
    </button>
  )
}
