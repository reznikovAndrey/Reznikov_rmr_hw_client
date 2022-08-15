import styles from './Kitty.module.scss';

import { useAuth } from '../../../auth/Hooks';

const Kitty: React.FC = () => {
  const { imgSrc } = useAuth();

  return imgSrc ? <img src={imgSrc} alt="kitty" className={styles.kitty} /> : null;
};

export default Kitty;
