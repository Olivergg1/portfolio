import { Nullable } from '../types'

export function getFromLocalStorage<T>(withKey: string): Nullable<T> {
  const stored = localStorage.getItem(withKey)

  if (!stored) return null

  try {
    return JSON.parse(stored) as T
  } catch (error) {
    return null
  }
}

export function saveToLocalStorage(key: string, value: any) {
  const stringifiedData = JSON.stringify(value)

  localStorage.setItem(key, stringifiedData)
}
