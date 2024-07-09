import Executable from '../classes/executable'
import { Command, ConsoleEntry } from '../types/console.types'
import { createOutput } from '../helpers/entry.helpers'

function method({ args, flags }: Command): ConsoleEntry {
  if (!args[0]) throw new Error('Expected at least 1 argument, got 0')

  const [main, ...vargs] = args

  const vflags = Object.entries(flags)
    .map(([k, v]) => `${k}=${v}`)
    .join(', ')

  return createOutput(
    <p>
      {main} args:[{vargs.join(', ')}] flags: ({vflags})
    </p>
  )
}

const run = new Executable(
  (
    <ul>
      <p>
        Test the interpreter by running some command with args (optional) and
        flags (denoted with - or --, optional)
      </p>
      <ul style={{ paddingLeft: '1rem', gap: '1rem' }}>
        <ul>
          <p>Example: 'run command arg1 arg2 --with flag'</p>
          <p>Output: 'command args:[arg1, arg2] flags: (with=flag)'</p>
        </ul>
        <ul>
          <p>
            Example: 'run some nonexistent command'
          </p>
          <p>
            Output: 'some args:[nonexistent, command] flags: ()'
          </p>
        </ul>
      </ul>
    </ul>
  ),
  method
)

export default run
