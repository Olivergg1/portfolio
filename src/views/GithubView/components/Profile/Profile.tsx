import Button from '../../../../components/Button/Button'
import { useExecute } from '../../../../hooks/console.hooks'
import { useGithubProfile } from '../../../../hooks/github.hooks'

export default function Profile() {
  const { loading, result, error } = useGithubProfile()
  const execute = useExecute()

  return (
    <>
      {loading && <p>Loading profile...</p>}
      {result && (
        <>
          <section>
            <div>
              <h3>{result.name}</h3>
              <h4>{result.login}</h4>
              <p>
                Followers: {result.followers}, following: {result.following}
              </p>
            </div>
          </section>
          <section>
            <p>Joined: {new Date(result.created_at).toLocaleDateString()}</p>
            <p>Public repos: {result.public_repos}</p>
          </section>
          <section>
            <a href={result.html_url} target='_blank' rel='noreferrer'>
              Visit profile on Github
            </a>
          </section>
          <section>
            <Button
              onClick={() => {
                execute('github -repos')
              }}>
              View Github repos
            </Button>
          </section>
        </>
      )}
      {error && <p>An error occurred!: {error.message}</p>}
    </>
  )
}
