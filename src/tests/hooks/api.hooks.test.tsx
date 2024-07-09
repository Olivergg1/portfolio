import { useApi } from '@/hooks/api.hooks'
import { cleanup, renderHook, waitFor } from '@testing-library/react'

const mockAsyncApiCall = jest.fn()

describe('useApi', () => {
  const data = { some: 'data' }

  afterEach(() => {
    jest.clearAllMocks()
    cleanup()
  })

  it('should have correct initial values', () => {
    const { result, unmount } = renderHook(() => useApi(mockAsyncApiCall))

    expect(result.current.loading).toBeTruthy()
    expect(result.current.result).toBeNull()
    expect(result.current.error).toBeNull()

    unmount()
  })

  it('should resolve and set result correctly', async () => {
    mockAsyncApiCall.mockResolvedValue(data)

    const { result, rerender, unmount } = renderHook(() =>
      useApi(mockAsyncApiCall)
    )

    await waitFor(mockAsyncApiCall)
    rerender()

    expect(result.current.loading).toBeFalsy()
    expect(result.current.result).toBe(data)
    expect(result.current.error).toBeNull()

    unmount()
  })

  it('should set error correctly when async api call throws error', async () => {
    const mockError = new Error('some error message')

    mockAsyncApiCall.mockRejectedValue(mockError)

    const { result, rerender, unmount } = renderHook(() =>
      useApi(mockAsyncApiCall)
    )

    try {
      await waitFor(mockAsyncApiCall)
    } catch (err) {}

    rerender()

    expect(result.current.loading).toBeFalsy()
    expect(result.current.result).toBeNull()
    expect(result.current.error).toBe(mockError)

    unmount()
  })
})
