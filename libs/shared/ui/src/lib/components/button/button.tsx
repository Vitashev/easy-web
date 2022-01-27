import styles from './button.module.scss'

/* eslint-disable-next-line */
export interface ButtonProps {
  size?: 'lg' | 'md'
  children: JSX.Element | string
  title?: string
  isActive?: boolean
  type?: 'primary' | 'dafault'
}

export const Button = ({
  children,
  isActive = false,
  size = 'lg',
  type = 'dafault',
}: ButtonProps) => {
  return (
    <button
      className={[
        styles['button'],
        styles[size],
        styles[type],
        isActive ? styles['btn-active'] : '',
      ].join(' ')}
    >
      {children}
    </button>
  )
}

export default Button
