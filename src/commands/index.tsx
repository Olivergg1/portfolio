import help from './help'
import Executable from '../classes/executable'
import github from './github'
import clear from './clear'
import about from './about'

interface Commands {
  [k: string]: Executable
}

const commands: Commands = {
  // show: show, NOTE: should I use this or have separate commands for each view?
  help,
  github,
  clear,
  about,
}

export default commands
