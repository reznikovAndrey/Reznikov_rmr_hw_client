import { useEffect, useState } from 'react';

import { isContent, requestService } from '../../../infrastructure/RequestService';
import { routingService } from '../../../infrastructure/RoutingService';

const ContentScreen: React.FC = () => {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    requestService.get(routingService.content()).then((response) => {
      if (isContent(response)) {
        setImgSrc(response.data.src);
      }
    });
  }, []);

  return <img src={imgSrc} alt="kitty" />;
};

export default ContentScreen;
