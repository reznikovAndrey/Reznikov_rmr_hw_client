import { FC, PropsWithChildren } from 'react';

import styles from './Footer.module.scss';

const Footer: FC<PropsWithChildren> = ({ children }) => <footer className={styles.footer}>{children}</footer>;

export default Footer;
