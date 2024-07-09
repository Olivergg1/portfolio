import View from '@/components/View/View'
import ContactList from './components/ContactList/ContactList'
import contacts from '@/config/contact.config'

export default function ContactView() {
  return (
    <View>
      <ContactList contacts={contacts} />
    </View>
  )
}
