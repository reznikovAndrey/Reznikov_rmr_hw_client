import { Link } from 'react-router-dom';

import styles from './NavItem.module.scss';

import { NavItem as TNavItem } from '../../../layout.entities';

const NavItem: React.FC<TNavItem> = ({ text, href }) => (
  <Link to={href} className={styles.navItem}>
    {text}
  </Link>
);

export default NavItem;
