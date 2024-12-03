export type Nullable<T> = T | null | undefined

export interface Theme extends Record<string, string> {
  primary: string
  secondary: string
  accent: string
  text: string
  name: string
  theme: string
}
