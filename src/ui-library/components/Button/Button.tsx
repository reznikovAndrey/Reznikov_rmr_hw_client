import styles from './Button.module.scss';

type ButtonType = 'submit' | 'button';

type Button = {
  text: string;
  type: ButtonType;
  action?: () => void;
  disabled?: boolean;
};

const Button: React.FC<Button> = ({ text, type, disabled = false, action }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={styles.button} disabled={disabled} onClick={action}>
    {text}
  </button>
);

export default Button;
