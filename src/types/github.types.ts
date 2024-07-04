export interface GithubProfile {
  login: string
  avatar_url: string
  html_url: string
  name: string
  public_repos: string
  followers: number
  following: number
  created_at: string // Joined at
  hireable: boolean | null
  bio?: string
}

export interface GithubRepository {
  name: string
  full_name: string
  owner: GithubProfile
  language: string
  open_issues_count: number
  fork: boolean
  stargazers_count: number
  description: string
  html_url: string
}
