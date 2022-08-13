import { useEffect, useState } from 'react';

import { requestService } from '../../../infrastructure/RequestService';

const ContentScreen: React.FC = () => {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    requestService.getKitty().then((response) => setImgSrc(response.data.src));
  }, []);

  return imgSrc ? <img src={imgSrc} alt="kitty" /> : null;
};

export default ContentScreen;
