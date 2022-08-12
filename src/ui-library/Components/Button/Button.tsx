import styles from './Button.module.scss';

type ButtonType = 'submit' | 'button';

type ButtonTypes = {
  text: string;
  type: ButtonType;
};

const Button: React.FC<ButtonTypes> = ({ text, type }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={styles.button}>
    {text}
  </button>
);

export default Button;
