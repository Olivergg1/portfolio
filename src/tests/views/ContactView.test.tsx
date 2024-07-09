import ContactView from '@/views/ContactView/ContactView'
import { render, screen } from '@testing-library/react'
import { DiscordContact, EmailContact } from '@/classes/contact.classes'
import { mockDefault } from '@/helpers/mock.helpers'

let ContactViewMock: typeof ContactView

const { restoreMock, populateMock } = mockDefault('@/config/contact.config', {})

afterEach(() => {
  jest.resetModules()
  restoreMock()
})

test('should render ContactView with correct contacts', async () => {
  ContactViewMock = populateMock('@/views/ContactView/ContactView', {
    email: new EmailContact('some-email'),
    discord: new DiscordContact('some-discord-username'),
  })

  render(<ContactViewMock />)

  const view = screen.getByTestId('contacts-view')
  const contacts = screen.getAllByRole('listitem')

  expect(view).toBeInTheDocument()
  expect(contacts.length).toBe(2)
})

test('should render error message if no contacts', () => {
  ContactViewMock = populateMock('@/views/ContactView/ContactView', {})

  render(<ContactViewMock />)

  const errorComponent = screen.getByTestId('error')

  expect(errorComponent).toBeInTheDocument()
})
