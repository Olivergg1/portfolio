import commands from '../../commands'
import Button from '../../components/Button/Button'
import View from '../../components/View/View'
import { useExecute } from '../../hooks/console.hooks'

import './OptionsView.css'

export default function Options() {
  const execute = useExecute()

  return (
    <View>
      <ul id='options'>
        {Object.keys(commands).map((c) => (
          <Button className='option' onClick={() => execute(c)}>
            {c}
          </Button>
        ))}
      </ul>
    </View>
  )
}
