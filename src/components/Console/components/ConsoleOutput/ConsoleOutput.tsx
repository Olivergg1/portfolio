import './ConsoleOutput.css'
import { useContext } from 'react'
import ConsoleList from '../ConsoleList/ConsoleList'
import { ConsoleContext } from '@/providers/ConsoleProvider'
import WelcomeView from '@/views/WelcomeView/WelcomeView'

export default function ConsoleOutput() {
  const { entries } = useContext(ConsoleContext)

  return (
    <div id='console-output'>
      {entries.length === 0 ? (
        <WelcomeView />
      ) : (
        <ConsoleList entries={entries} />
      )}
    </div>
  )
}
