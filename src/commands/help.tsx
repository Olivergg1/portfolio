import commands from '.'
import Executable from '../classes/executable'
import { createOutput } from '../helpers/entry.helpers'

function method() {
  return createOutput(
    <ul>
      {Object.entries(commands).map(([key, exe]) => (
        <div style={{ marginBottom: '1rem' }}>
          <p>'{key}'</p>
          {exe.getHelp() && exe.getHelp()}
        </div>
      ))}
    </ul>
  )
}

const Help = new Executable(<p>You just used this command</p>, method)

export default Help
