import { ReactNode } from 'react'
import './View.css'

interface ViewProps {
  children?: ReactNode
}

export default function View({ children }: ViewProps) {
  return <article id='view'>{children}</article>
}
