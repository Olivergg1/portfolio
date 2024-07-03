import { CommandFunction, Command } from '../types/console.types'
import { createOutput } from '../helpers/entry.helpers'
import Executable from '../classes/executable'
import OptionsView from '../views/OptionsView/OptionsView'

export const options: CommandFunction = (command: Command) => {
  return createOutput(<OptionsView />)
}

const Options = new Executable(
  (
    <ul>
      <p>Lists all available commands</p>
    </ul>
  ),
  options
)

export default Options
