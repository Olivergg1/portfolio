import { asMock } from '@/helpers/mock.helpers'

test('should return mock function if valid', () => {
  const mockFunction = jest.fn()

  expect(() => asMock(mockFunction)).not.toThrowError()

  const actual = asMock(mockFunction)

  expect(actual).toBe(mockFunction)
})

test('should throw error if invalid', () => {
  const errorMessage = 'Target is not a mock function'
  const mockFunction = () => null

  expect(() => asMock(mockFunction)).toThrowError(errorMessage)
})
