import { BsEraser } from 'react-icons/bs'
import { FaTerminal } from 'react-icons/fa'
import commands from '../../commands'
import Button from '../../components/Button/Button'
import View from '../../components/View/View'
import { useExecute } from '../../hooks/console.hooks'

import './HelpView.css'

export default function Help() {
  const execute = useExecute()

  const { help: _, ...cmds } = commands

  return (
    <View>
      <section>
        <ul>
          <p>
            Use <BsEraser className='icon' /> to clear all entries from the
            console and return to the landing view.
          </p>
          <p>
            Use <FaTerminal className='icon' /> to run the 'help' command,
            listing all available commands.
          </p>
        </ul>
      </section>
      <ul className='options'>
        <p>To execute a command, click one of the underscored options below</p>
        {Object.entries(cmds).map(([key, exe]) => (
          <div>
            <Button href onClick={() => execute(key)}>
              '{key}'
            </Button>
            {exe.getHelp() && exe.getHelp()}
          </div>
        ))}
      </ul>
    </View>
  )
}
