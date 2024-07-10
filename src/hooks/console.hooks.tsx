import { useContext, useEffect, useState } from 'react'
import { ConsoleContext } from '../providers/ConsoleProvider'
import { createInput, createOutput } from '../helpers/entry.helpers'
import { Flags, Command } from '../types/console.types'
import { getCommand, toCommand } from '@/helpers/command.helpers'

// Custom hook for breaking down a command into usable parts.
// main = the main command to execute
// args = arguments, following the main command
// flags = key-value pairs denoted with -{name} or --{name}
export function useCommand(raw: string) {
  const [main, setMain] = useState<string>()
  const [args, setArgs] = useState<string[]>([])
  const [flags, setFlags] = useState<Flags>({})

  useEffect(() => {
    const { main, args, flags } = toCommand(raw)

    setMain(() => main)
    setArgs(() => args)
    setFlags(() => flags)
  }, [raw])

  return { main, args, flags } as Command
}

// Custom hook returning function to interpret a command
// Given a command, executes corresponding Executable
// Outputs error if it should occur
export function useInterpreter() {
  const { pushEntry } = useContext(ConsoleContext)

  return (command: Command) => {
    try {
      const executable = getCommand(command.main ?? '')
      pushEntry(executable.execute(command))
    } catch (error: any) {
      pushEntry(createOutput(error.message))
    }
  }
}

// Hook that returns function for executing a raw command.
// Uses toCommand and useInterpreter to break down raw command and interpret it
// Pushes raw command to entries as input
export function useExecute() {
  const interpret = useInterpreter()
  const { pushEntry } = useContext(ConsoleContext)

  return (raw: string) => {
    const command = toCommand(raw)
    pushEntry(createInput(raw))

    interpret(command)
  }
}
