import { ReactNode } from 'react'
import { ConsoleEntry } from '../types/console.types'

export function createOutput(output: ReactNode): ConsoleEntry {
  return { isInput: false, time: new Date(), element: output }
}

export function createInput(input: string): ConsoleEntry {
  return { isInput: true, time: new Date(), raw: input }
}
