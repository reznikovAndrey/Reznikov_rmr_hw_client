import { FC, PropsWithChildren } from 'react';

import styles from './Content.module.scss';

const Content: FC<PropsWithChildren> = ({ children }) => <main className={styles.content}>{children}</main>;

export default Content;
