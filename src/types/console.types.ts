import { ReactNode } from 'react'

export interface Flags {
  [k: string]: string
}

export interface Command {
  main?: string
  args: string[]
  flags: Flags
}

export interface ConsoleEntry {
  raw?: string // Used when entry is an input from a user
  time: Date
  isInput: boolean
  element?: ReactNode // Used when entry is an output from a command
}

export type CommandFunction = (command: Command) => ConsoleEntry
