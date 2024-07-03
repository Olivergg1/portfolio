import Executable from '../classes/executable'
import { createOutput } from '../helpers/entry.helpers'
import { CommandFunction, Command } from '../types/console.types'
import AboutView from '../views/AboutView/AboutView'

const about: CommandFunction = (command: Command) => {
  return createOutput(<AboutView />)
}

const About = new Executable(<p>Displays 'About' view</p>, about)

export default About
