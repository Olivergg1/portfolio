import { Field } from '@/types/about.types'
import { LinkButton } from '../Button/Button'
import styles from './AboutField.module.css'

interface AboutFieldProps {
  field: Field
}

export default function AboutField({ field, ...rest }: AboutFieldProps) {
  const type = field.type
  const text = field.text
  const href = field.optional ?? '/'

  if (type === 'header') return <h2 className={styles.about_header}>{text}</h2>
  if (type === 'subtitle') return <h3 className={styles.about_sub}>{text}</h3>
  if (type === 'href') return <LinkButton to={href}>{text}</LinkButton>

  // type === 'p'
  // Default to paragraph if no type is provided
  return <p>{text}</p>
}
