import { useContext, useEffect, useRef } from 'react'
import { ConsoleContext } from '../../../../providers/ConsoleProvider'
import { BsChevronRight } from 'react-icons/bs'

import './ConsoleList.css'

interface ConsoleOutputProps {
  entries?: string[]
}

export default function ConsoleList(props: ConsoleOutputProps) {
  const { entries } = useContext(ConsoleContext)
  const listElement = useRef<HTMLUListElement>(null)
  const { entry } = useContext(ConsoleContext)

  useEffect(() => {
    listElement.current?.lastElementChild?.scrollIntoView()
  }, [entry])

  return (
    <ul ref={listElement} id='console-list'>
      {entries.map((entry) => (
        <div className='console-entry'>
          {entry.isInput ? (
            <>
              <p>{entry.time.toLocaleTimeString()}</p>
              <BsChevronRight className='icon' />
              <p>{entry.raw}</p>
            </>
          ) : (
            <>{entry.element}</>
          )}
        </div>
      ))}
    </ul>
  )
}
