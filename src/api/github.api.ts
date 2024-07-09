import { getEnvironment } from '@/config/env.config'
import { GithubApi } from '@/config/axios.config'
import { GithubProfile, GithubRepository } from '@/types/github.types'

export async function getGithubProfileAsync() {
  const github = getEnvironment('GITHUB')
  const result = await GithubApi.get(`users/${github}`)

  return result.data as GithubProfile
}

export async function getGithubReposAsync() {
  const github = getEnvironment('GITHUB')
  const result = await GithubApi.get(`users/${github}/repos`)

  return result.data as GithubRepository[]
}
