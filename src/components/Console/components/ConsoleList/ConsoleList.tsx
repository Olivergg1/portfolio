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
    <div id='console-list-wrapper'>
      <ul ref={listElement} id='console-list'>
        {entries.map((entry) => (
          <div key={crypto.randomUUID()} className='console-entry'>
            {entry.isInput ? (
              <>
                <p className='cli-user'>
                  stranger@portfolio <span className='location'>~</span>
                </p>
                <BsChevronRight className='icon arrow-right' />
                <p>{entry.raw}</p>
              </>
            ) : (
              <>{entry.element}</>
            )}
          </div>
        ))}
      </ul>
    </div>
  )
}
