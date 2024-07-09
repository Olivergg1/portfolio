import { getEnvironment } from './env.config'
import { Contacts } from '@/types/contact.types'
import {
  DiscordContact,
  EmailContact,
  GithubContact,
  LinkedinContact,
  PhoneContact,
} from '@/classes/contact.classes'

const github = getEnvironment('GITHUB')

export default {
  phone: new PhoneContact('0723321340', 46),
  email: new EmailContact('oliver.gustafsson17@gmail.com'),
  linkedin: new LinkedinContact('Oliver Gustafsson', 'olivergustaf'),
  github: new GithubContact(github),
  discord: new DiscordContact('olivergg'),
} satisfies Contacts
