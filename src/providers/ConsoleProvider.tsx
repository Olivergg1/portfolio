import { createContext, ReactNode, useState } from 'react'
import { ConsoleEntry } from '../types/console.types'

interface ConsoleProviderProps {
  children?: ReactNode
}

interface IConsoleContext {
  entries: ConsoleEntry[]
  entry?: ConsoleEntry
  pushEntry: (entry: ConsoleEntry) => void
  clearEntries: () => void
}

export const ConsoleContext = createContext<IConsoleContext>({
  entries: [],
  pushEntry: () => null,
  clearEntries: () => {},
})

export default function ConsoleProvider({ children }: ConsoleProviderProps) {
  const [actual, setActual] = useState<ConsoleEntry>()
  const [entries, setEntries] = useState<ConsoleEntry[]>([])

  function pushEntry(entry: ConsoleEntry) {
    setEntries((entries) => [...entries, entry])
    setActual(entry)
  }

  function clearEntries() {
    setEntries([])
    setActual(undefined)
  }

  return (
    <ConsoleContext.Provider
      value={{ entry: actual, entries, pushEntry, clearEntries }}>
      {children}
    </ConsoleContext.Provider>
  )
}
