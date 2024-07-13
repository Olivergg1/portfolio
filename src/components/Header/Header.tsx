import './Header.css'
import logo from './logo64.png'
import { ExecuteButton } from '../Button/Button'

export default function Header() {
  return (
    <header>
      <section id='left'>
        <ExecuteButton id='header-logo' e='clear'>
          <img id='logo' src={logo} alt='logo' />
        </ExecuteButton>
      </section>
      <section id='right'>{/* Add content here if needed */}</section>
    </header>
  )
}
