import { useState } from 'react';

import styles from './Kitty.module.scss';

import { Loader } from '../../../../../ui-library/components';
import { useAuth } from '../../../../auth';

const Kitty: React.FC = () => {
  const { imgSrc } = useAuth();

  const [show, setShow] = useState(false);

  return imgSrc ? (
    <>
      {show ? <h1 className={styles.header}>Okay, here is your cat</h1> : <Loader />}
      <img src={imgSrc} alt="kitty" className={styles.kitty} onLoad={() => setShow(true)} />
    </>
  ) : (
    <Loader />
  );
};

export default Kitty;
