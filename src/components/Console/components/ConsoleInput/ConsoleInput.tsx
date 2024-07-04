import { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import { FaTerminal } from 'react-icons/fa'
import { ConsoleContext } from '../../../../providers/ConsoleProvider'

import './ConsoleInput.css'
import { useExecute } from '../../../../hooks/console.hooks'
import { BsEraser } from 'react-icons/bs'

export default function ConsoleInput() {
  const { clearEntries, entries } = useContext(ConsoleContext)
  const [command, setCommand] = useState('')
  const execute = useExecute()

  const formRef = useRef<HTMLFormElement>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!command) return

    execute(command)

    // Reset input
    setCommand('')
  }

  return (
    <div id='console-input-container'>
      <button
        className='console-input-btn'
        onClick={(e) => {
          e.preventDefault()

          execute('help')
        }}
        role='none'>
        <FaTerminal className='icon console-btn' />
      </button>

      <form ref={formRef} id='console-form' onSubmit={(e) => handleSubmit(e)}>
        <input
          id='console-input'
          autoComplete='off'
          value={command}
          onChange={(e) => setCommand(e.currentTarget.value)}
        />
      </form>
      <button
        className='console-input-btn'
        onClick={(e) => {
          e.preventDefault()
          clearEntries()
        }}
        disabled={entries.length === 0}
        title='Clears all entries from the console'>
        <BsEraser className='icon console-btn' />
      </button>
    </div>
  )
}
