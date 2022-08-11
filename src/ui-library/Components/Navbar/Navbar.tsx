import { FC, PropsWithChildren } from 'react';

import styles from './Navbar.module.scss';

import { ReactComponent as Logo } from '../../Icons/typescript.svg';

const Navbar: FC<PropsWithChildren> = ({ children }) => (
  <nav className={styles.navbar}>
    <Logo className={styles.logo} />
    {children}
  </nav>
);

export default Navbar;
