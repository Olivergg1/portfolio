import AboutField from '@/components/AboutField/AboutField'
import { Field, FieldType } from '@/types/about.types'

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

    return this
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
