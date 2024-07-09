import View from '@/components/View/View'
import { cleanup, render, screen } from '@testing-library/react'

afterEach(() => {
  cleanup()
})

test('View renders without errors', () => {
  render(<View />)
})

test('applies className correctly', async () => {
  const className = 'some-class'

  render(<View className={className} />)
  const actual = await screen.findByRole('article')

  expect(actual).toHaveClass('view', className)
})

test('spreads properties correctly', async () => {
  const properties = { id: 'some-id', title: 'some title with text' }

  render(<View {...properties} />)
  const actual = await screen.findByRole('article')

  expect(actual).toHaveAttribute('id', properties.id)
  expect(actual).toHaveAttribute('title', properties.title)
})

test('renders with children', async () => {
  const child = 'some child text'

  render(<View>{child}</View>)
  const actual = await screen.findByRole('article')

  expect(actual).toHaveTextContent(child)
})
