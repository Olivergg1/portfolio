import help from './help'
import Executable from '../classes/executable'
import github from './github'
import clear from './clear'
import about from './about'
import cv from './cv'
import run from './run'
import contact from './contact'
import projects from './projects'

type Commands = Record<string, Executable>

const commands: Commands = {
  help,
  run,
  projects,
  contact,
  github,
  clear,
  about,
  cv,
}

export default commands
