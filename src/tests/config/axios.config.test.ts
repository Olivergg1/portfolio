import { GithubApi } from '@/config/axios.config'

describe('Github Axios instance', function () {
  test('should have correct baseUrl', () => {
    expect(GithubApi.defaults.baseURL).toBe('https://api.github.com/')
  })
})
