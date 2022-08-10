import styles from './Header.module.scss';

type Props = {
  children: React.ReactNode;
};

const Header: React.FC<Props> = ({ children }) => <header className={styles.header}>{children}</header>;

export default Header;
