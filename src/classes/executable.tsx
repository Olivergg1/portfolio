import { ReactNode } from 'react'
import { CommandFunction, Command } from '../types/console.types'

export default class Executable {
  private help!: ReactNode
  private method!: CommandFunction

  constructor(help: ReactNode, method: CommandFunction) {
    this.help = help
    this.method = method
  }

  public getHelp() {
    return this.help
  }

  public execute(command: Command) {
    return this.method(command)
  }
}
