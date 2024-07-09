import { getEnvironment } from '@/config/env.config'
import { GithubApi } from '@/config/axios.config'
import { getGithubProfileAsync, getGithubReposAsync } from '@/api/github.api'
import { GithubProfile, GithubRepository } from '@/types/github.types'
import { asMock } from '@/helpers/mock.helpers'

jest.mock('@/config/env.config', () => ({
  getEnvironment: jest.fn(),
}))

jest.mock('@/config/axios.config', () => ({
  GithubApi: {
    get: jest.fn(),
  },
}))

beforeEach(() => {
  jest.clearAllMocks()
})

const mockGithubUser = 'some-user'

const mockGithubProfile = {
  login: mockGithubUser,
} as GithubProfile

const mockGithubRepos: GithubRepository[] = [
  { name: 'Repo 1' },
  { name: 'Repo 2' },
] as GithubRepository[]

test('getGithubProfileAsync should return GitHub profile data', async () => {
  asMock(getEnvironment).mockReturnValue(mockGithubUser)
  asMock(GithubApi.get).mockResolvedValue({ data: mockGithubProfile })

  const actual = await getGithubProfileAsync()

  expect(getEnvironment).toHaveBeenCalledWith('GITHUB')
  expect(GithubApi.get).toHaveBeenCalledWith(`users/${mockGithubUser}`)
  expect(actual).toBe(mockGithubProfile)
})

test('getGithubReposAsync returns GitHub repository data', async () => {
  asMock(getEnvironment).mockReturnValue(mockGithubUser)
  asMock(GithubApi.get).mockResolvedValue({ data: mockGithubRepos })

  const actual = await getGithubReposAsync()

  expect(getEnvironment).toHaveBeenCalledWith('GITHUB')
  expect(GithubApi.get).toHaveBeenCalledWith(`users/${mockGithubUser}/repos`)
  expect(actual).toEqual(mockGithubRepos)
})
