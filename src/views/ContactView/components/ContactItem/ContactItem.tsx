import Contact from '@/classes/contact.classes'

import './ContactItem.css'

interface ContactItemProps {
  contact: Contact
}

export default function ContactItem({ contact }: ContactItemProps) {
  return (
    <div className='contact-item' role='listitem'>
      {contact.getIcon()}
      {contact.isLink() ? (
        <a href={contact.link}>{contact.text}</a>
      ) : (
        <p>{contact.text}</p>
      )}
    </div>
  )
}
