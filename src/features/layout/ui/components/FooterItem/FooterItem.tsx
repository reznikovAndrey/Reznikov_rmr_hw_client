import styles from './FooterItem.module.scss';

import { FooterItem as TFooterItem } from '../../../layout.entities';

const FooterItem: React.FC<TFooterItem> = ({ text, href }) => (
  <a href={href} target="blank" className={styles.footerItem}>
    {text}
  </a>
);

export default FooterItem;
