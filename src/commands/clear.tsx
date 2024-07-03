import { useContext, useEffect } from 'react'
import Executable from '../classes/executable'
import { ConsoleEntry } from '../types/console.types'
import { ConsoleContext } from '../providers/ConsoleProvider'
import { createOutput } from '../helpers/entry.helpers'

function clear(): ConsoleEntry {
  function Dummy() {
    const { clearEntries } = useContext(ConsoleContext)

    useEffect(() => {
      clearEntries()
    }, [])

    return <></>
  }

  return createOutput(<Dummy />)
}

const Clear = new Executable(<p>Clears entries</p>, clear)

export default Clear
