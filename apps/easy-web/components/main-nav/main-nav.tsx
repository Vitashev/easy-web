import { Button } from '@momo/shared/ui'
import Link from 'next/link'
import styles from './main-nav.module.scss'
import { useRouter } from 'next/router'
/* eslint-disable-next-line */
export interface MainNavProps {}

export const MainNav = (props: MainNavProps) => {
  const router = useRouter()
  const checkIsActive = (path: string) => router.pathname === path

  return (
    <div className={styles['main-nav']}>
      <Link href="/">
        <a>
          <Button isActive={checkIsActive('/')}>
            <div>😜 About</div>
          </Button>
        </a>
      </Link>
      <Link href="/blog">
        <a>
          <Button isActive={checkIsActive('/blog')}>
            <div>✍️ Blog</div>
          </Button>
        </a>
      </Link>
      <Link href="/contacts">
        <a>
          <Button isActive={checkIsActive('/contacts')}>
            <div>🤙 Contacts</div>
          </Button>
        </a>
      </Link>

      <a href="https://www.buymeacoffee.com/easyweb" target="_blank">
        <Button type="primary"> ☕ Cappuccino</Button>
      </a>
    </div>
  )
}

export default MainNav
