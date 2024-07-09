import WelcomeView from '@/views/WelcomeView/WelcomeView'
import { cleanup, render, screen } from '@testing-library/react'
import { useExecute } from '@/hooks/console.hooks'
import { GithubProfile } from '@/types/github.types'
import { useGithubProfile } from '@/hooks/github.hooks'
import { asMock } from '@/helpers/mock.helpers'

const mockGithubProfile: GithubProfile = {
  login: 'username',
  avatar_url: 'avatar_url',
  html_url: 'html_url',
  name: 'some name',
  public_repos: 'public_repos',
  followers: 0,
  following: 0,
  created_at: new Date().toISOString(),
  hireable: null,
}

jest.mock('@/hooks/console.hooks', () => ({
  useExecute: jest.fn(),
}))

jest.mock('@/hooks/github.hooks', () => ({
  useGithubProfile: jest.fn(),
}))

beforeEach(() => {
  jest.clearAllMocks()
})

afterEach(cleanup)

test('should render result branch when profile is resolved', async () => {
  asMock(useGithubProfile).mockReturnValue({
    result: mockGithubProfile,
    loading: false,
  })

  render(<WelcomeView />)
  const profileSection = await screen.findByTestId('profile')

  expect(useGithubProfile).toBeCalled()
  expect(profileSection).not.toBeEmptyDOMElement()
})

test('browse portfolio button executes command', async () => {
  asMock(useExecute).mockReturnValue(jest.fn())
  asMock(useGithubProfile).mockReturnValue({
    result: mockGithubProfile,
    loading: false,
  })

  render(<WelcomeView />)
  const execute = useExecute()

  const button = await screen.findByTestId('start-browse')
  button.click()

  expect(execute).toBeCalledWith('help')
})
