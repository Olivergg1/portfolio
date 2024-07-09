export function asMock(target: any) {
  if (target?._isMockFunction !== true) {
    throw Error('Target is not a mock function')
  }

  return target as jest.Mock
}
