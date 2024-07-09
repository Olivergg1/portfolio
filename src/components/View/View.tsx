import { HTMLAttributes } from 'react'
import './View.css'

interface ViewProps extends HTMLAttributes<HTMLDivElement> {}

export default function View({ className, ...props }: ViewProps) {
  return (
    <article className={`view ${className ?? ''}`} {...props}>
      {props.children}
    </article>
  )
}
