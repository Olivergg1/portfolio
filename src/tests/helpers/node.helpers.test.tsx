import { isDevelopment, isProduction } from '@/helpers/node.helpers'

let env = process.env.NODE_ENV

afterEach(() => {
  ;(process.env as any).NODE_ENV = env
})

describe('production', () => {
  beforeEach(() => {
    ;(process.env as any).NODE_ENV = 'production'
  })

  test('isProduction should return true', () => {
    const actual = isProduction()

    expect(actual).toBeTruthy()
  })

  test('isDevelopment should return false', () => {
    const actual = isDevelopment()

    expect(actual).toBeFalsy()
  })
})

describe('development', () => {
  beforeEach(() => {
    ;(process.env as any).NODE_ENV = 'development'
  })

  test('isProduction should return false', () => {
    const actual = isProduction()

    expect(actual).toBeFalsy()
  })

  test('isDevelopment should return true', () => {
    const actual = isDevelopment()

    expect(actual).toBeTruthy()
  })
})
