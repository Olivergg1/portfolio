import { Contacts } from '@/types/contact.types'
import ContactItem from '../ContactItem/ContactItem'

interface ContactListProps {
  contacts: Contacts
}

export default function ContactList({ contacts }: ContactListProps) {
  return (
    <ul>
      {Object.entries(contacts).map(([key, value]) => (
        <ContactItem key={key} contact={value} />
      ))}
    </ul>
  )
}
