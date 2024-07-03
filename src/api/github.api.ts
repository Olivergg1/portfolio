import axios from 'axios'
import { GithubProfile, GithubRepository } from '../types/github.types'

export async function getGithubProfileAsync() {
  const result = await axios.get('https://api.github.com/users/Olivergg1')

  return result.data as GithubProfile
}

export async function getGithubReposAsync() {
  const result = await axios.get('https://api.github.com/users/Olivergg1/repos')

  return result.data as GithubRepository[]
}
