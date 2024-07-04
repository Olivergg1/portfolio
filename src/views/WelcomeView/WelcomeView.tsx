import View from '../../components/View/View'
import { useExecute } from '../../hooks/console.hooks'
import Button, { ExecuteButton } from '../../components/Button/Button'

import './WelcomeView.css'
import { useGithubProfile } from '../../hooks/github.hooks'
import { BsSearch } from 'react-icons/bs'

export default function WelcomeView() {
  const { loading, result } = useGithubProfile()
  const execute = useExecute()

  return (
    <>
      {loading && <p>loading...</p>}
      {result && (
        <View id='home'>
          <section id='github-profile'>
            <img
              id='github-profile-img'
              src={result.avatar_url}
              alt='profile'
            />
            <h2>{result.name}</h2>
            <p>{result.bio}</p>
            {result.hireable === true && (
              <ExecuteButton href id='hireable' e='contact'>
                <BsSearch />
                <p>I'm looking for a job!</p>
              </ExecuteButton>
            )}
          </section>
          <section>
            <Button onClick={() => execute('help')}>
              Start browsing my portfolio
            </Button>
          </section>
        </View>
      )}
    </>
  )
}
