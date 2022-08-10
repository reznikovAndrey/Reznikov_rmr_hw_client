import styles from './Navbar.module.scss';

type Props = {
  children: React.ReactNode;
};

const Navbar: React.FC<Props> = ({ children }) => <nav className={styles.navbar}>{children}</nav>;

export default Navbar;
