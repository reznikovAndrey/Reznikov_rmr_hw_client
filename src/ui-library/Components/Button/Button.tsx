import styles from './Button.module.scss';

type ButtonTypes = {
  text: string;
  submit?: boolean;
};

const Button: React.FC<ButtonTypes> = ({ text, submit }) => (
  <button type={submit ? 'submit' : 'button'} className={styles.button}>
    {text}
  </button>
);

export default Button;
