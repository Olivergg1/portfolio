import { createInput, createOutput } from '@/helpers/entry.helpers'

test('createInput should return with input', () => {
  const data = 'some input'

  const actual = createInput(data)

  expect(actual).not.toBeNull()
  expect(actual.isInput).toBeTruthy()
  expect(actual.raw).toBe(data)
})

test('createOutput should return with input', () => {
  const data = <p>Some ReactNode</p>

  const actual = createOutput(data)

  expect(actual).not.toBeNull()
  expect(actual.isInput).toBeFalsy()
  expect(actual.element).toBe(data)
})
