import styles from './button.module.scss';

type Props = {
  children: string;
  onClick: ()=> void;
};

const Button = ({ children, onClick }: Props) => {
  return <button className={styles.button} onClick={onClick}>{children}</button>;
};

export { Button };
