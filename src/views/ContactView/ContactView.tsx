import View from '@/components/View/View'
import ContactList from './components/ContactList/ContactList'
import contacts from '@/config/contact.config'

export default function ContactView() {
  return (
    <View data-testid='contacts-view'>
      <ContactList contacts={contacts} />
    </View>
  )
}
