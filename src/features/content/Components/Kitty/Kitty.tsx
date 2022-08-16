import { useState } from 'react';

import styles from './Kitty.module.scss';

import { Loader } from '../../../../ui-library/Components';
import { useAuth } from '../../../auth/Hooks';

const Kitty: React.FC = () => {
  const { imgSrc } = useAuth();

  const [show, setShow] = useState(false);

  return (
    <>
      <img src={imgSrc} alt="kitty" className={styles.kitty} onLoad={() => setShow(true)} />
      {!show && <Loader />}
    </>
  );
};

export default Kitty;
