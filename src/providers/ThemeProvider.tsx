import { createContext, PropsWithChildren, useCallback, useEffect } from 'react'
import Themes, { DEFAULT_THEME_KEY, Theme } from '../config/themes.config'
import useStored from '@/hooks/stored.hooks'

interface IThemeContext {
  theme: Theme
  updateTheme: (theme: string) => unknown
  key: string
}

export const ThemeContext = createContext<IThemeContext | null>(null)

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [stored, setStored] = useStored('theme', DEFAULT_THEME_KEY)

  const theme = Themes[stored]

  const updateTheme = useCallback(
    (theme: string) => {
      setStored(theme)
    },
    [setStored]
  )

  useEffect(() => {
    const root = document.body.style
    const { name, ...actual } = theme

    for (let color in actual) {
      root.setProperty(`--${color}-color`, actual[color])
    }

    const meta = document.querySelector('meta[name="theme-color"]')

    if (!meta || !theme) return

    meta.setAttribute('content', theme.primary)
  }, [theme, stored])

  return (
    <ThemeContext.Provider value={{ theme, updateTheme, key: stored }}>
      {children}
    </ThemeContext.Provider>
  )
}
