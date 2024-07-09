import { useCallback, useEffect, useMemo, useState } from 'react'

export function useApi<F extends (...args: any[]) => Promise<any>>(
  call: F,
  ...args: Parameters<F>
) {
  type CallReturnType = Awaited<ReturnType<F>>

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [result, setResult] = useState<CallReturnType | null>(null)

  const memoizedArgs = useMemo(() => JSON.stringify(args), [args])

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const res = await call(...memoizedArgs)
      setResult(() => res)
    } catch (error) {
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }, [call, memoizedArgs])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { result, loading, error }
}
