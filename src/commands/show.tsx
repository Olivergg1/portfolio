import { Command, CommandFunction } from '../types/console.types'
import { createOutput } from '../helpers/entry.helpers'
import Executable from '../classes/executable'
import views from '../views'

export const show: CommandFunction = (command: Command) => {
  const [view] = command.args

  if (!view || !Object.keys(views).includes(view)) {
    return createOutput(
      <>
        <p>available views:</p>
        {Object.keys(views).map((view) => (
          <p>{view}</p>
        ))}
      </>
    )
  }

  return createOutput(views[view])
}

const Show = new Executable(
  (
    <ul>
      <p>used to display a view.</p>
      <p>usage: show (view: string)</p>
    </ul>
  ),
  show
)

export default Show
