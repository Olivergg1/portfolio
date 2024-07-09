import { getArgs, getCommand, getFlags } from '@/helpers/command.helpers'

describe('getCommand', () => {
  test('should return correct Executable with valid command', () => {
    const name = 'github'

    const actual = getCommand(name)

    expect(actual).toBeDefined()
  })

  test('should throw error with invalid command', () => {
    const name = 'invalid-command'
    const errorMessage = `'${name}' is not recognized as a command. Use command 'help' for options.`

    try {
      getCommand(name)
    } catch (error: any) {
      expect(error.message).toBe(errorMessage)
    }
  })
})

describe('getArgs', () => {
  test('should return correct args', () => {
    const args = ['some', 'args']

    const actual = getArgs(args.join(' '))

    expect(actual).toStrictEqual(args)
  })

  test('should return empty args with invalid command', () => {
    const actual = getArgs(null as unknown as string)

    expect(actual?.length).toBe(0)
  })
})

describe('getFlags', () => {
  test('should return correct flags if present in command', () => {
    const flags = { some: 'flag', another: 'flag', empty: undefined }

    const actual = getFlags('--some flag --another flag --empty')

    expect(actual).toStrictEqual(flags)
  })

  test('should return empty object if no flags are present in command', () => {
    const flags = {}

    const actual = getFlags('no flags command')

    expect(actual).toStrictEqual(flags)
  })

  test('should return empty object if command is invalid', () => {
    const flags = {}

    const actual = getFlags(null as unknown as string)

    expect(actual).toStrictEqual(flags)
  })
})
