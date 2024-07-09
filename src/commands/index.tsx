import help from './help'
import Executable from '../classes/executable'
import github from './github'
import clear from './clear'
import about from './about'
import cv from './cv'
import run from './run'
import contact from './contact'

type Commands = Record<string, Executable>

const commands: Commands = {
  help,
  run,
  contact,
  github,
  clear,
  about,
  cv,
}

export default commands
