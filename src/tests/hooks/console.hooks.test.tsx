import { getCommand } from '@/helpers/command.helpers'
import { asMock } from '@/helpers/mock.helpers'
import { useCommand, useInterpreter } from '@/hooks/console.hooks'
import ConsoleProvider, { IConsoleContext } from '@/providers/ConsoleProvider'
import { renderHook } from '@testing-library/react'
import { PropsWithChildren, useContext } from 'react'

const wrapper = ({
  children,
}: PropsWithChildren & { value?: IConsoleContext }) => (
  <ConsoleProvider>{children}</ConsoleProvider>
)

describe('useCommand', () => {
  test('should call toCommand with specified string and return expected command object', () => {
    const commandData = {
      main: 'some',
      args: ['command'],
      flags: { with: 'flag' },
    }
    const raw = 'some command -with flag'

    const { result } = renderHook(() => useCommand(raw))

    expect(result.current).toStrictEqual(commandData)
  })

  test('should update state correctly when command changes', () => {
    const initCommandData = { main: 'a', args: [], flags: { b: 'b' } }
    const expectedCommandData = { main: 'a', args: ['c'], flags: { b: 'b' } }
    let raw = 'a -b b'

    const { result, rerender } = renderHook(() => useCommand(raw))
    let dataBefore = result.current
    raw = 'a c -b b'
    rerender()
    let dataAfter = result.current

    expect(dataBefore).toStrictEqual(initCommandData)
    expect(dataAfter).toStrictEqual(expectedCommandData)
  })
})

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}))

jest.mock('@/helpers/command.helpers', () => ({
  ...jest.requireActual('@/helpers/command.helpers'),
  getCommand: jest.fn(),
}))

beforeEach(() => {
  asMock(useContext).mockRestore()
  asMock(getCommand).mockRestore()
})

/*describe('useInterpreter', () => {
  test('should execute command and push the entry', () => {
    const contextProviderMock = { pushEntry: jest.fn() }
    const executeMockReturnValue = 'execute result'
    const executeMock = jest.fn().mockReturnValue(executeMockReturnValue)
    const commandMock = { main: 'some-command', args: [], flags: {} }
    asMock(getCommand).mockReturnValue({ execute: executeMock })
    asMock(useContext).mockReturnValue(contextProviderMock)

    const { result, rerender } = renderHook(() => useInterpreter(), { wrapper })
    result.current(commandMock)
    rerender()

    expect(useContext).toHaveReturnedWith(contextProviderMock)
    expect(executeMock).toHaveBeenCalledWith(executeMockReturnValue)
    //expect(getCommand).toHaveBeenCalledWith(commandMock)
  })
})

// test('some test', () => {
//   console.log(process.env.NODE_ENV)

//   const { result } = renderHook(() => useExecute(), { wrapper })

//   expect(result.current).toBeDefined()

//   expect(true).toBeTruthy()
// })*/
