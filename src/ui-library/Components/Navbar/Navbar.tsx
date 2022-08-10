import { FC } from 'react';

import styles from './Navbar.module.scss';

type NavbarTypes = {
  children: React.ReactNode;
};

const Navbar: FC<NavbarTypes> = ({ children }) => <nav className={styles.navbar}>{children}</nav>;

export default Navbar;
