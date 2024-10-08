import View from '../../components/View/View'
import Profile from './components/Profile/Profile'
import ReposList from './components/ReposList/ReposList'

interface GithubViewProps {
  repos?: boolean
}

export default function GithubView({ repos }: GithubViewProps) {
  return (
    <View>
      {!repos && <Profile />}
      {repos && <ReposList />}
    </View>
  )
}
