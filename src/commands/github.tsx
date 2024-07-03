import Executable from '../classes/executable'
import { createOutput } from '../helpers/entry.helpers'
import { CommandFunction, Command } from '../types/console.types'
import GithubView from '../views/GithubView/GithubView'

export const github: CommandFunction = (command: Command) => {
  if (Object.keys(command.flags).includes('repos')) {
    return createOutput(<GithubView repos />)
  }

  return createOutput(<GithubView />)
}

const Github = new Executable(
  (
    <ul>
      <p>Displays info about my Github profile</p>
      <p>Use flag '-repos' to list my public repos</p>
    </ul>
  ),
  github
)

export default Github
