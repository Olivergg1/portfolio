import { getGithubProfileAsync, getGithubReposAsync } from '@/api/github.api'
import { asMock } from '@/helpers/mock.helpers'
import { useGithubProfile, useGithubRepos } from '@/hooks/github.hooks'
import { cleanup, renderHook, waitFor } from '@testing-library/react'

jest.mock('@/api/github.api', () => ({
  getGithubProfileAsync: jest.fn(),
  getGithubReposAsync: jest.fn(),
}))

beforeEach(() => jest.clearAllMocks())
afterEach(() => cleanup())

describe('useGithubProfile', () => {
  test('should call useApi with getGithubProfileAsync', async () => {
    const data = { key: 'value' }
    asMock(getGithubProfileAsync).mockResolvedValue(data)

    const { result, rerender, unmount } = renderHook(() => useGithubProfile())
    await waitFor(getGithubProfileAsync)
    rerender()

    expect(getGithubProfileAsync).toHaveBeenCalled()
    expect(result.current.result).toBe(data)

    unmount()
  })
})

describe('useGithubRepos', () => {
  test('should call useApi with getGithubReposAsync', async () => {
    const data = [{ key: 'value' }]
    asMock(getGithubReposAsync).mockResolvedValue(data)

    const { result, rerender, unmount } = renderHook(() => useGithubRepos())
    await waitFor(getGithubReposAsync)
    rerender()

    expect(getGithubReposAsync).toHaveBeenCalled()
    expect(result.current.result).toBe(data)

    unmount()
  })
})
