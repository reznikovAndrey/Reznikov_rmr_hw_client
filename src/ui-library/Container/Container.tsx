import styles from './Container.module.scss';

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => <div className={styles.container}>{children}</div>;

export default Container;
