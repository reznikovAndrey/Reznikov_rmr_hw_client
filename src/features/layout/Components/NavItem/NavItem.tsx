import styles from './NavItem.module.scss';

type NavItemProps = {
  text: string;
  href: string;
};

const NavItem: React.FC<NavItemProps> = ({ text, href }) => (
  <a href={href} className={styles.navItem}>
    {text}
  </a>
);

export default NavItem;
