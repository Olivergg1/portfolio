export interface Theme extends Record<string, string> {
  primary: string
  secondary: string
  accent: string
  text: string
  icon: string
  border: string
  name: string
  theme: string
}

export interface ThemeConfig extends Record<string, Theme> {}

const Themes = {
  default: {
    primary: '#111213',
    secondary: '#26292d',
    accent: '#404040',
    text: '#e5dfde',
    icon: '#e5dfde',
    theme: '#1A64C4',
    border: '#707070',
    name: 'Natten',
  },
  light: {
    primary: '#fff',
    secondary: '#e5dfde',
    accent: '#151515',
    text: '#111213',
    icon: '#e5dfde',
    theme: '#8DBAF3',
    border: '#4f4f4f',
    name: 'Dagen',
  },
  skogen: {
    primary: '#3a5a40',
    secondary: '#344e41',
    accent: '#588157',
    text: '#d1fdea',
    icon: '#e5dfde',
    theme: '#588157',
    border: '#8ab9a5',
    name: 'Skogen',
  },
  havet: {
    primary: '#caf0f8',
    secondary: '#8dc0cb',
    accent: '#90e0ef',
    text: '#03045e',
    icon: '#e5dfde',
    theme: '#90e0ef',
    border: '#16454f',
    name: 'Havet',
  },
  fall: {
    name: 'Hösten',
    primary: '#a9361a',
    secondary: '#6d2a22',
    accent: '#c7680b',
    icon: '#fff',
    theme: '#5d1a0a',
    text: '#fff6c6',
    border: '#5d1a0a',
  },
} as ThemeConfig

export const DEFAULT_THEME_KEY = 'default'
export const DEFAULT_THEME = Themes[DEFAULT_THEME_KEY]

export default Themes
