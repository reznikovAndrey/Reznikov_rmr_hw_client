import styles from './Footer.module.scss';

type Props = {
  children: React.ReactNode;
};

const Footer: React.FC<Props> = ({ children }) => <footer className={styles.footer}>{children}</footer>;

export default Footer;
