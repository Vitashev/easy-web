import { Card } from '@momo/shared/ui'
import MainLayout from 'apps/easy-web/components/main-layout/main-layout'
import styles from './index.module.scss'
import { AiFillMediumSquare } from 'react-icons/ai'
import { BsTwitter, BsFacebook } from 'react-icons/bs'
import { FaDiscord, FaPatreon, FaLinkedin } from 'react-icons/fa'
import { BiCoffeeTogo } from 'react-icons/bi'
import { MdOutlineEmail } from 'react-icons/md'

/* eslint-disable-next-line */
export interface ContactsProps {}

export const Contacts = (props: ContactsProps) => {
  const contentLinks = [
    {
      icon: <AiFillMediumSquare color="black" size={32} />,
      url: 'https://easy-web.medium.com/subscribe',
      label: 'Medium',
    },
    {
      icon: <BsTwitter color="#1C9BEF" size={32} />,
      url: 'https://twitter.com/easy_web_org',
      label: 'Twitter',
    },
  ]

  const chatLinks = [
    {
      icon: <BsFacebook color="#0171E6" size={32} />,
      url: 'https://www.facebook.com/easyweb.org',
      label: 'Facebook',
    },
    {
      icon: <FaDiscord color="#404EED" size={32} />,
      url: 'https://discord.gg/Fkp98G9Y',
      label: 'Discord',
    },
  ]

  const businessLinks = [
    {
      icon: <FaLinkedin color="#0B65C2" size={32} />,
      url: 'https://www.linkedin.com/in/vitalii-shevchuk-86389a112/',
      label: 'LinkedIn',
    },
    {
      icon: <MdOutlineEmail color="#EA4335" size={32} />,
      url: 'mailto:email@example.com',
      label: 'Email',
    },
  ]

  const supportLinks = [
    {
      icon: <BiCoffeeTogo color="#FEDD03" size={32} />,
      url: 'https://www.buymeacoffee.com/easyweb',
      label: 'Buy me a cappuccino',
    },
    {
      icon: <FaPatreon color="#FF424D" size={32} />,
      url: 'https://www.patreon.com/easy_web',
      label: 'Become a Patreon',
    },
  ]

  const linkCards = [
    {
      title: '✍️ Content',
      links: contentLinks,
    },
    {
      title: '💬 Chat',
      links: chatLinks,
    },
    {
      title: '❤️ Support',
      links: supportLinks,
    },
    {
      title: '🤝 Business',
      links: businessLinks,
    },
  ]

  return (
    <MainLayout>
      <div className={styles['wrapper']}>
        <div className={styles['container']}>
          {linkCards.map((linkData) => (
            <Card>
              <div className={styles['card-content']}>
                <h2>{linkData.title}</h2>
                {linkData.links.map((link) => (
                  <div className={styles['social-link']}>
                    {link.icon}{' '}
                    <a href={link.url} target="_blank">
                      {link.label}
                    </a>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default Contacts
