import { Link } from 'react-router-dom';

import styles from './NavItem.module.scss';

type NavItemProps = {
  text: string;
  href: string;
};

const NavItem: React.FC<NavItemProps> = ({ text, href }) => (
  <Link to={href} className={styles.navItem}>
    {text}
  </Link>
);

export default NavItem;
