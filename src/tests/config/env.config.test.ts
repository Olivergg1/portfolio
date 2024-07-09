import {
  EnvironmentKey,
  getEnvironment,
  isEnvironmentNameValid,
} from '@/config/env.config'

describe('isEnvironmentNameValid', () => {
  it('should return true with valid name', () => {
    const name = 'GITHUB'

    const actual = isEnvironmentNameValid(name)

    expect(actual).toBeTruthy()
  })

  it('should return false with invalid name', () => {
    const name = 'invalid-name' as EnvironmentKey

    const actual = isEnvironmentNameValid(name)

    expect(actual).toBeFalsy()
  })
})

describe('getEnvironment', () => {
  const github = 'some-username'
  const fallback = 'some-fallback'

  const originalEnv = { ...process.env }

  beforeEach(() => {
    jest.resetModules()
    process.env = originalEnv
    process.env.REACT_APP_GITHUB = github
  })

  afterEach(() => {
    process.env = originalEnv
  })

  it('should return value with valid name', () => {
    const name = 'GITHUB'

    const actual = getEnvironment(name)

    expect(actual).toBe(github)
  })

  it('returns the fallback value if the environment variable is invalid and fallback is provided', () => {
    const actual = getEnvironment('INVALID' as EnvironmentKey, fallback)

    expect(actual).toBe(fallback)
  })

  it('should throw error if name is invalid and no fallback is provided', () => {
    expect(() => getEnvironment('INVALID' as EnvironmentKey)).toThrowError(
      'Envrionment variable does not exist, and no fallback was specified'
    )
  })
})

describe('Node environment', () => {})
