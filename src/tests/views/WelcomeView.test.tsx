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

test("should render looking for job button if user is hireable", async () => {
  // Hireable = true or null, from github api
  asMock(useGithubProfile).mockReturnValue({ loading: false, result: { hireable: true } })
  
  render(<WelcomeView />)
  const hireableElement = await screen.findByText(/I'm looking for a job!/i)

  expect(hireableElement).toBeInTheDocument()
})

test("should not render looking for job button if user is not hireable", () => {
  // Hireable = true or null, from github api
  asMock(useGithubProfile).mockReturnValue({ loading: false, result: { hireable: null } })
  
  render(<WelcomeView />)
  const hireableElement = screen.queryByText(/I'm looking for a job!/i)

  expect(hireableElement).not.toBeInTheDocument()
})

test("should render error component upon thrown error", async () => {
  const error = new Error("some error")

  asMock(useGithubProfile).mockReturnValue({ error })

  render(<WelcomeView />)
  const errorElement = await screen.findByRole("status")

  expect(errorElement).toBeInTheDocument()
})