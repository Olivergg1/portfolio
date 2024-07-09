import { useEffect } from 'react'
import Executable from '../classes/executable'
import { ConsoleEntry } from '../types/console.types'
import { createOutput } from '../helpers/entry.helpers'
import { getEnvironment } from '@/config/env.config'

function method(): ConsoleEntry {
  function Dummy() {
    const CV = getEnvironment('CV')

    useEffect(() => {
      window.open(CV, 'cv')
    }, [CV])

    return (
      <p>
        Opened CV at <a href={CV}>{CV}</a>
      </p>
    )
  }

  return createOutput(<Dummy />)
}

const cv = new Executable(<p>Opens CV</p>, method)

export default cv
