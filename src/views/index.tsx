import { ReactNode } from 'react'
import GithubView from './GithubView/GithubView'

const views: { [k: string]: ReactNode } = {
  github: <GithubView />,
}

export default views
