import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

import { routingService } from '../../../infrastructure/routingService';
import { ReactComponent as Logo } from '../../icons/typescript.svg';
import { Dropdown } from '../Dropdown';

const Navbar: FC<PropsWithChildren> = ({ children }) => {
  const navClasses = cn(styles.navbar, styles.container);

  return (
    <nav className={navClasses}>
      <Link to={routingService.root()} className={styles.logo}>
        <Logo />
      </Link>
      <Dropdown>{children}</Dropdown>
      <div className={styles.menu}>{children}</div>
    </nav>
  );
};

export default Navbar;
