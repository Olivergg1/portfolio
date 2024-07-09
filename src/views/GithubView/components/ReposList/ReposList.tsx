import { randomUUID } from 'crypto'
import { getGithubReposAsync } from '../../../../api/github.api'
import { useApi } from '../../../../hooks/api.hooks'

import './ReposList.css'

export default function ReposList() {
  const { result, loading, error } = useApi(getGithubReposAsync)

  return (
    <>
      {loading && <p>Loading repos...</p>}
      {result && (
        <section id='github-repos'>
          {result.map((repo) => (
            <div key={repo.name}>
              <h3>{repo.name}</h3>
              <p>{repo.language}</p>
              <p>Stars: {repo.stargazers_count}</p>
              <p>Open issues: {repo.open_issues_count}</p>
              <p>{repo.description}</p>
              <a href={repo.html_url} target='_blank' rel='noreferrer'>
                View on Github.com
              </a>
              {repo.fork && (
                <p>
                  <b>This repo was forked</b>
                </p>
              )}
            </div>
          ))}
        </section>
      )}
      {error && error.message}
    </>
  )
}
