import styles from './footer.module.scss'

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className={styles['footer']}>
      <h1>Ideal Footer 🦿</h1>
    </div>
  )
}

export default Footer
