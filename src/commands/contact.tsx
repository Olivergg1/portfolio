import Executable from '@/classes/executable'
import { createOutput } from '@/helpers/entry.helpers'
import { CommandFunction, Command } from '@/types/console.types'
import ContactView from '@/views/ContactView/ContactView'

const method: CommandFunction = (command: Command) => {
  return createOutput(<ContactView />)
}

const contact = new Executable(
  <p>Displays alternatives to contacting me</p>,
  method
)

export default contact
