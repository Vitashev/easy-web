import MainNav from '../main-nav/main-nav'
import Image from 'next/image'
import slothLogo from '../../public/images/sloth-logo.png'
import styles from './header.module.scss'

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <div className={styles['container']}>
      {/* <Image
        src={slothLogo}
        layout="fixed"
        width={165}
        height={115}
        alt="Sloth logo"
      /> */}

      <img src="images/sloth-logo.png" width={165} height={115} alt="" />
      <MainNav />
    </div>
  )
}

export default Header
