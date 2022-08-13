import styles from './Button.module.scss';

type ButtonType = 'submit' | 'button';

type ButtonTypes = {
  text: string;
  type: ButtonType;
  disabled?: boolean;
};

const Button: React.FC<ButtonTypes> = ({ text, type, disabled = false }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={styles.button} disabled={disabled}>
    {text}
  </button>
);

export default Button;
