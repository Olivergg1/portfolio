import { asMock } from '@/helpers/mock.helpers'
import { isProduction } from '@/helpers/node.helpers'
import { cleanup } from '@testing-library/react'
import ReactDOM from 'react-dom/client'

// jest.mock('react-dom/client', () => ({
//   createRoot: jest.fn(),
// }))

jest.mock('@/reportWebVitals', () => jest.fn())
jest.mock('@/helpers/node.helpers', () => ({
  isProduction: jest.fn(),
}))

const mockCreateRoot = jest
  .spyOn(ReactDOM, 'createRoot')
  .mockReturnValue({ render: jest.fn(), unmount: jest.fn() })

beforeEach(() => {
  asMock(isProduction).mockReset()
})

afterEach(() => {
  cleanup()
  //jest.resetModules()
})

test('createRoot is called', () => {
  asMock(mockCreateRoot).mockReturnValue({ render: jest.fn() })

  require('@/index')

  expect(mockCreateRoot).toHaveBeenCalled()
})

// it.todo('reportWebVitals', () => {
// describe('reportWebVitals', () => {
//   test('should be called if in development', () => {
//     asMock(mockCreateRoot).mockReturnValue({ render: jest.fn() })
//     asMock(isProduction).mockReturnValue(false)
//     const test = require('@/index')
//     expect(isProduction).toHaveBeenCalled()
//     expect(reportWebVitals).toBeCalledWith(console.log)
//   })
//   test('should not be called if in production', () => {
//     //asMock(mockCreateRoot).mockReturnValue({ render: jest.fn() })
//     asMock(isProduction).mockReturnValue(true)
//     //console.log(createRoot(document.createElement('div')))
//     require('../index')
//     expect(mockCreateRoot).toHaveBeenCalled()
//     expect(reportWebVitals).not.toBeCalled()
//   })
// })
// })
