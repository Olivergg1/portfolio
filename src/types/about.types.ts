const FIELD_TYPES = ['header', 'subtitle', 'href', 'p'] as const

type FieldTypeKey = typeof FIELD_TYPES
export type FieldType = FieldTypeKey[number]

export interface Field {
  text: string
  type?: FieldType
  optional?: string
}
