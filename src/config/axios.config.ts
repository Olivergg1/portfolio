import axios from 'axios'

export const GithubApi = axios.create({
  baseURL: `https://api.github.com/`,
})
