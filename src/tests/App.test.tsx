import { cleanup, render } from '@testing-library/react'
import App from '@/App'

test('app should render without errors', () => {
  render(<App />)
})

afterEach(cleanup)
