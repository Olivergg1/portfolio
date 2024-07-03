import { BsEraser } from 'react-icons/bs'
import View from '../../components/View/View'
import { FaTerminal } from 'react-icons/fa'
import { useExecute } from '../../hooks/console.hooks'
import Button from '../../components/Button/Button'

export default function WelcomeView() {
  const execute = useExecute()

  return (
    <View>
      <h2>Welcome to my portfolio!</h2>
      <section>
        <p>Navigate using the command line.</p>
        <p>Use the command 'options' to get a list of commands</p>
      </section>
      <section>
        <ul>
          <p>
            Use <BsEraser className='icon' /> to clear all entries from the
            console and return to the landing view.
          </p>
          <p>
            Use <FaTerminal className='icon' /> to open a list of quick
            commands.
          </p>
        </ul>
      </section>
      <section>
        <p>Here are some quick actions:</p>
        <br />
        <ul>
          <Button onClick={() => execute('github')}>View Github profile</Button>
          <Button onClick={() => execute('github -repos')}>
            View Github repos
          </Button>
          <Button onClick={() => execute('options')}>List all commands</Button>
        </ul>
      </section>
    </View>
  )
}
