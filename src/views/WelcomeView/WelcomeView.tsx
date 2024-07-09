import View from '@/components/View/View'
import { BsSearch } from 'react-icons/bs'
import { useGithubProfile } from '@/hooks/github.hooks'
import { ExecuteButton } from '@/components/Button/Button'

import './WelcomeView.css'

export default function WelcomeView() {
  const { loading, result } = useGithubProfile()

  return (
    <View id='home' className='erik'>
      {loading && <p>loading...</p>}
      {result && (
        <>
          <section data-testid='profile' id='github-profile'>
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
            <ExecuteButton e='help' data-testid='start-browse'>
              Start browsing my portfolio
            </ExecuteButton>
          </section>
        </>
      )}
    </View>
  )
}
