import { IconType } from 'react-icons'
import {
  FaDiscord,
  FaEnvelopeSquare,
  FaGithubSquare,
  FaLinkedin,
  FaPhoneSquare,
} from 'react-icons/fa'

export default class Contact {
  private icon!: IconType
  readonly text!: string
  readonly link?: string

  constructor(icon: IconType, text: string, link?: string) {
    this.icon = icon
    this.text = text
    this.link = link
  }

  public isLink() {
    return typeof this.link === 'string' && this.link !== ''
  }

  public getIcon() {
    return <this.icon />
  }
}

export class EmailContact extends Contact {
  constructor(email: string) {
    super(FaEnvelopeSquare, email, `mailto:${email}`)
  }
}

export class GithubContact extends Contact {
  constructor(name: string) {
    super(FaGithubSquare, name, `https://github.com/${name}`)
  }
}

export class PhoneContact extends Contact {
  constructor(phone: string, countryCode: number) {
    const actualContryCode = `+${countryCode}`
    const displayPhoneNumber = `(${actualContryCode})${phone}`
    const fullPhoneNumber = actualContryCode + phone

    super(FaPhoneSquare, displayPhoneNumber, `tel:${fullPhoneNumber}`)
  }
}

export class LinkedinContact extends Contact {
  constructor(name: string, path: string) {
    super(FaLinkedin, name, `https://www.linkedin.com/in/${path}`)
  }
}

export class DiscordContact extends Contact {
  constructor(name: string) {
    super(FaDiscord, name)
  }
}
