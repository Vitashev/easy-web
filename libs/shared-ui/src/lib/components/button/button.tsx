import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: JSX.Element;
  title?: string;
}

export function Button(props: ButtonProps) {
  return (
    <>
      <button className={styles['nmButton']}>{props.children}</button>
    </>
  );
}

export default Button;
