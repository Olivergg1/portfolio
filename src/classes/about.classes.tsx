import { LinkButton } from '@/components/Button/Button'
import { Field, FieldType } from '@/types/about.types'

interface AboutFieldProps {
  field: Field
}
function AboutField({ field, ...rest }: AboutFieldProps) {
  const type = field.type
  const text = field.text
  const href = field.optional ?? '/'

  if (type === 'header') return <h1>{text}</h1>
  if (type === 'subtitle') return <h2>{text}</h2>
  if (type === 'href') return <LinkButton to={href}>{text}</LinkButton>

  // type === 'p'
  // Default to paragraph if no type is provided
  return <p>{text}</p>
}

export default class AboutBuilder {
  public fields: Field[] = []

  constructor() {
    this.fields = []
  }

  public addField(text: string, type: FieldType = 'p', optional?: string) {
    this.fields.push({ text, type, optional })

    return this
  }

  public addHeader(text: string) {
    this.addField(text, 'header')

    return this
  }

  public addSubtitle(text: string) {
    this.addField(text, 'subtitle')

    return this
  }

  public addLink(text: string, to: string) {
    this.addField(text, 'href', to)
  }

  public build() {
    const fields = this.fields

    return function AboutComponent() {
      return (
        <ul>
          {fields.map((field, index) => (
            <AboutField key={index} field={field} />
          ))}
        </ul>
      )
    }
  }
}
