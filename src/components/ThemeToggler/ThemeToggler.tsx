import useTheme from '@/hooks/theme.hooks'
import Button from '../Button/Button'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import './ThemeToggler.css'

function ThemeToggler() {
  const { key, updateTheme } = useTheme()
  const isDark = key === 'default'

  const icon = isDark ? <BsMoonFill /> : <BsSunFill />

  const toggle = () => (isDark ? updateTheme('light') : updateTheme('default'))

  return (
    <Button id="theme-toggle" onClick={toggle}>
      {icon}
    </Button>
  )
}

export default ThemeToggler
