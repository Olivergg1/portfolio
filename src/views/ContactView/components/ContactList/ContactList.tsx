import { Contacts } from '@/types/contact.types'
import ContactItem from '../ContactItem/ContactItem'
import Error from '@/components/Error/Error'

interface ContactListProps {
  contacts: Contacts
}

export default function ContactList({ contacts }: ContactListProps) {
  const contactEntries = Object.entries(contacts)

  return (
    <ul>
      {contactEntries.length === 0 && <Error>No contacts yet</Error>}
      {contactEntries.map(([key, value]) => (
        <ContactItem key={key} contact={value} />
      ))}
    </ul>
  )
}
