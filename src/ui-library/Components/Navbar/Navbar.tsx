import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

import routingService from '../../../infrastructure/RoutingService/routing.service';
import { ReactComponent as Logo } from '../../Icons/typescript.svg';

const Navbar: FC<PropsWithChildren> = ({ children }) => (
  <nav className={styles.navbar}>
    <Link to={routingService.content()} className={styles.logo}>
      <Logo />
    </Link>
    {children}
  </nav>
);

export default Navbar;
