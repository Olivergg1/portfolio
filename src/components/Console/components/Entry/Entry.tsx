import { ConsoleEntry } from '@/types/console.types'
import { BsChevronRight } from 'react-icons/bs'

interface EntryProps {
  entry: ConsoleEntry
}

export default function Entry({ entry }: EntryProps) {
  return entry.isInput ? (
    <EntryInput entry={entry} />
  ) : (
    <EntryOutput entry={entry} />
  )
}

function EntryInput({ entry }: EntryProps) {
  return (
    <div className='console-entry'>
      <p className='cli-user'>
        stranger@portfolio <span className='location'>~</span>
      </p>
      <BsChevronRight className='icon arrow-right' />
      <p>{entry.raw}</p>
    </div>
  )
}

function EntryOutput({ entry }: EntryProps) {
  return <div className='console-entry'>{entry.element}</div>
}
