import { ExecuteButton } from '../Button/Button'
import './Header.css'
import logo from './logo64.png'

export default function Header() {
  return (
    <header>
      <section id='left'>
        <ExecuteButton id='header-logo' e='clear'>
          <img id='logo' src={logo} alt='logo' />
        </ExecuteButton>
      </section>
      <section id='right'></section>
    </header>
  )
}
