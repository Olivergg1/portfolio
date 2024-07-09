export function asMock(target: any) {
  if (target?._isMockFunction !== true) {
    throw Error('Target is not a mock function')
  }

  return target as jest.Mock
}

export function mockDefault<T>(module: string, mockValue: any) {
  jest.mock(module, () => ({
    __esModule: true,
    default: mockValue,
  }))

  const restoreMock = () => restoreDefaultMock(module)
  const populateMock = (componentModule: string, mockValue: any) =>
    populateDefaultMock(module, componentModule, mockValue)

  return { populateMock, restoreMock }
}

export function populateDefaultMock(
  module: string,
  componentModule: string,
  mock: any
) {
  jest.doMock(module, () => ({
    __esModule: true,
    default: mock,
  }))

  return require(componentModule).default
}

export function restoreDefaultMock(module: string) {
  jest.dontMock(module)
}
