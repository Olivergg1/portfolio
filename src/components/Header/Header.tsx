import './Header.css'
import logo from './logo64.png'
import { ExecuteButton } from '../Button/Button'
import ThemeToggler from '../ThemeToggler/ThemeToggler'

export default function Header() {
  return (
    <header>
      <section id="left">
        <ExecuteButton id="header-logo" e="clear">
          <img id="logo" src={logo} alt="logo" />
        </ExecuteButton>
      </section>
      <section id="right">
        <ThemeToggler />
      </section>
    </header>
  )
}
