import styles from './Button.module.scss';

type ButtonType = 'submit' | 'button';

type Button = {
  text: string;
  type: ButtonType;
  disabled?: boolean;
};

const Button: React.FC<Button> = ({ text, type, disabled = false }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={styles.button} disabled={disabled}>
    {text}
  </button>
);

export default Button;
