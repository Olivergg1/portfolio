import { useEffect } from 'react'
import Executable from '../classes/executable'
import { ConsoleEntry } from '../types/console.types'
import { createOutput } from '../helpers/entry.helpers'

function method(): ConsoleEntry {
  function Dummy() {
    useEffect(() => {
      window.open('https://olivergg1.github.io/CV/', 'cv')
    })

    return <></>
  }

  return createOutput(<Dummy />)
}

const cv = new Executable(<p>Opens CV</p>, method)

export default cv
