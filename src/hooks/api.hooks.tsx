import { useCallback, useEffect, useState } from 'react'

export function useApi<F extends (...args: any[]) => Promise<any>>(
  call: F,
  ...args: Parameters<F>
) {
  type CallReturnType = Awaited<ReturnType<F>>

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [result, setResult] = useState<CallReturnType | null>(null)

  const fetchData = useCallback(async () => {
    try {
      const res = await call(args)
      setResult(() => res)
    } catch (error) {
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }, [call, args])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { result, loading, error }
}
