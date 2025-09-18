import ProjectsView from '@/views/ProjectsView/ProjectsView'
import Executable from '../classes/executable'
import { createOutput } from '../helpers/entry.helpers'
import { CommandFunction, Command } from '../types/console.types'

const projects: CommandFunction = (command: Command) => {
  return createOutput(<ProjectsView />)
}

const Projects = new Executable(<p>Displays 'projects' view</p>, projects)

export default Projects
