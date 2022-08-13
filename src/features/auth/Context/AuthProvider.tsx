import { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';

import AuthContext from './AuthContext';

import { requestService } from '../../../infrastructure/RequestService';
import { UserFromServer } from '../auth.entities';

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const [userData, setUserData] = useState<UserFromServer | null>(null);

  useEffect(() => {
    if (loggedIn) {
      Promise.allSettled([
        requestService
          .getKitty()
          .then((response) => setImgSrc(response.data.src))
          .catch((err) => console.error(err)),
        requestService
          .getProfile()
          .then((response) => setUserData(response.data))
          .catch((err) => console.error(err)),
      ]);
    }
  }, [loggedIn]);

  const value = useMemo(() => ({ loggedIn, setLoggedIn, imgSrc, userData }), [loggedIn, imgSrc, userData]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
