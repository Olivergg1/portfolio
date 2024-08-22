import { Field } from '@/types/about.types'
import { ExecuteButton, LinkButton } from '../Button/Button'
import styles from './AboutField.module.css'

interface AboutFieldProps {
  field: Field
}

export default function AboutField({ field, ...rest }: AboutFieldProps) {
  const type = field.type
  const text = field.text
  const optional = field.optional

  if (type === 'header') return <h2 className={styles.header}>{text}</h2>
  if (type === 'subtitle') return <h3 className={styles.subtitle}>{text}</h3>

  if (type === 'exec')
    return (
      <ExecuteButton className={styles.exec} e={optional ?? '/'}>
        {text}
      </ExecuteButton>
    )

  if (type === 'href')
    return (
      <LinkButton className={styles.link} to={optional ?? ''}>
        {text}
      </LinkButton>
    )

  // type === 'p'
  // Default to paragraph if no type is provided
  return <p>{text}</p>
}
