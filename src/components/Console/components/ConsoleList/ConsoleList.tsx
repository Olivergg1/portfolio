import './ConsoleList.css'
import Entry from '../Entry/Entry'
import { ConsoleEntry } from '@/types/console.types'

interface ConsoleOutputProps {
  entries: ConsoleEntry[]
}

export default function ConsoleList({ entries }: ConsoleOutputProps) {
  function key(entry: ConsoleEntry) {
    return entry.isInput.toString() + entry.time.toTimeString()
  }

  return (
    <div id='console-list-wrapper'>
      <ul id='console-list'>
        {entries.map((entry) => (
          <Entry key={key(entry)} entry={entry} />
        ))}
      </ul>
    </div>
  )
}
