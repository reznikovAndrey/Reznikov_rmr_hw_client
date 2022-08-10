import styles from './Content.module.scss';

type Props = {
  children: React.ReactNode;
};

const Content: React.FC<Props> = ({ children }) => <main className={styles.content}>{children}</main>;

export default Content;
