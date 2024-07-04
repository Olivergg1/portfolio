import commands from '../commands'
import { useContext, useEffect, useState } from 'react'
import { ConsoleContext } from '../providers/ConsoleProvider'
import { createInput, createOutput } from '../helpers/entry.helpers'
import { Flags, Command } from '../types/console.types'

// Maps a main command to a defined Executable in 'commands' object.
// Throws error if no command is found in commands object
function getCommand(main: string) {
  if (main in commands) return commands[main]

  throw new Error(
    `'${main}' is not recognized as a command. Use command 'help' for options.`
  )
}

function getArgs(command: string) {
  // Matches the first part of string until the first flag.
  // If no flag is present, match whole string and ignore trailing spaces.
  let argumentsStringMatches =
    command.match(/^(\w+(?:\s+\w+)*)(?=\s*?-?)/g) ?? []
  const argumentsString = argumentsStringMatches[0] as String | undefined

  const args = argumentsString?.split(/\s+/)

  return args
}

// Function for retrieving the flags from a raw command entry
function getFlags(command: string) {
  const flags = [...command.matchAll(/-{1,2}(\w+)(?:\s+(\w+))?/g)]

  return Object.fromEntries(flags.map((flag) => [flag[1], flag[2]])) as Flags
}

// Function for breaking down a raw command into an executable command
function toCommand(raw: string) {
  const [main, ...args] = getArgs(raw) ?? []
  const flags = getFlags(raw)

  return { main, args, flags }
}

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
