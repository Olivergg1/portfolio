import { useApi } from './api.hooks'
import { getGithubProfileAsync, getGithubReposAsync } from '../api/github.api'

export function useGithubProfile() {
  return useApi(getGithubProfileAsync)
}

export function useGithubRepos() {
  return useApi(getGithubReposAsync)
}
