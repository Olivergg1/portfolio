import commands from '@/commands'
import { Flags } from '@/types/console.types'

// Maps a main command to a defined Executable in 'commands' object.
// Throws error if no command is found in commands object
export function getCommand(main: string) {
  if (main in commands) return commands[main]

  throw new Error(
    `'${main}' is not recognized as a command. Use command 'help' for options.`
  )
}

export function getArgs(command: string) {
  if (typeof command !== 'string') return []

  // Matches the first part of string until the first flag.
  // If no flag is present, match whole string and ignore trailing spaces.
  let argumentsStringMatches = command.match(
    /^(\w+(?:\s+\w+)*)(?=\s*?-?)/g
  ) as string[]
  const argumentsString = argumentsStringMatches[0] as String | undefined

  const args = argumentsString?.split(/\s+/)

  return args
}

// Function for retrieving the flags from a raw command entry
export function getFlags(command: string) {
  if (typeof command !== 'string') return {}

  // Get all match groups in command
  const flags = [...command.matchAll(/-{1,2}(\w+)(?:\s+(\w+))?/g)]

  // Create key value pairs from entries
  return Object.fromEntries(flags.map((flag) => [flag[1], flag[2]])) as Flags
}

// Function for breaking down a raw command into an executable command
export function toCommand(raw: string) {
  const [main, ...args] = getArgs(raw) as string[]
  const flags = getFlags(raw)

  return { main, args, flags }
}
