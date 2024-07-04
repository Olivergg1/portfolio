import { HTMLAttributes, ReactNode } from 'react'
import './View.css'

interface ViewProps extends HTMLAttributes<HTMLDivElement> {}

export default function View(props: ViewProps) {
  return (
    <article className={`view ${props.className}`} {...props}>
      {props.children}
    </article>
  )
}
