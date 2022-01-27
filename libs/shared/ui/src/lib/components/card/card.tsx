import styles from './card.module.scss'

/* eslint-disable-next-line */
export interface CardProps {
  children: JSX.Element | string
}

export const Card = (props: CardProps) => {
  const theme = 'neumorph'
  return <div className={styles['card-wrapper']}>{props.children}</div>
}

export default Card
