import help from './help'
import Executable from '../classes/executable'
import github from './github'
import clear from './clear'
import about from './about'
import cv from './cv'
import run from './run'

interface Commands {
  [k: string]: Executable
}

const commands: Commands = {
  // show: show, NOTE: should I use this or have separate commands for each view?
  help,
  run,
  github,
  clear,
  about,
  cv,
}

export default commands
