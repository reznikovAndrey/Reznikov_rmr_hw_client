import styles from './FooterItem.module.scss';

type FooterItemProps = {
  text: string;
  href: string;
};

const FooterItem: React.FC<FooterItemProps> = ({ text, href }) => (
  <a href={href} target="blank" className={styles.footerItem}>
    {text}
  </a>
);

export default FooterItem;
