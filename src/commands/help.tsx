import Executable from '../classes/executable'
import { createOutput } from '../helpers/entry.helpers'
import Help from '../views/HelpView/HelpView'

function method() {
  return createOutput(<Help />)
}

const help = new Executable(<p>You just used this command</p>, method)

export default help
