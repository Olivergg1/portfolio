const EXPECTED_ENV_VARS = ['GITHUB', 'CV'] as const

export type EnvironmentKey = (typeof EXPECTED_ENV_VARS)[number]

export function isEnvironmentNameValid(name: EnvironmentKey) {
  return EXPECTED_ENV_VARS.includes(name)
}

// Returns .env variable with name
// If a variable with name is not present, fallback to fallback value
// If no fallback is specified, the function throw an error
export function getEnvironment(name: EnvironmentKey): string | never
export function getEnvironment(name: EnvironmentKey, fallback: string): string

export function getEnvironment(name: EnvironmentKey, fallback?: string) {
  if (!isEnvironmentNameValid(name)) {
    if (typeof fallback === 'string') return fallback

    throw new Error(
      'Envrionment variable does not exist, and no fallback was specified'
    )
  }

  return process.env[`REACT_APP_${name}`]
}
