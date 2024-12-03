import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '@/helpers/localeStorage.helper'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

function useStored<T>(
  key: string,
  fallback: T
): [T, Dispatch<SetStateAction<T>>]
function useStored<T>(
  key: string
): [T | null, Dispatch<SetStateAction<T | null>>]
function useStored<T>(key: string, fallback?: T) {
  const initial = fallback !== undefined ? fallback : null

  const stored = useState<T | null>(() => getFromLocalStorage(key) ?? initial)
  const state = stored[0] as T | null

  useEffect(() => {
    saveToLocalStorage(key, state)
  }, [state, key])

  return stored
}

export default useStored
