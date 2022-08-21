import axios, { AxiosError } from 'axios';
import { FC, PropsWithChildren, useEffect, useMemo, useState, createContext } from 'react';

import { contentRequestService, ServerError } from '../../../infrastructure/RequestService';
import { UserFromServer, AuthContextType, UserStatus } from '../auth.entities';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState<UserStatus>(null);
  const [imgSrc, setImgSrc] = useState('');
  const [userData, setUserData] = useState<UserFromServer | null>(null);

  useEffect(() => {
    contentRequestService
      .getProfile()
      .then(() => setLoggedIn(true))
      .catch((err: AxiosError<ServerError> | Error) => {
        if (axios.isAxiosError(err)) {
          if (err.response?.data.statusCode === 401) {
            setLoggedIn(false);
          } else {
            console.error(err);
          }
        } else {
          throw new Error('Unhandled error', err);
        }
      });
  }, []);

  useEffect(() => {
    if (loggedIn) {
      const promises = Promise.all([
        contentRequestService.getKitty().then((response) => setImgSrc(response.data.src)),
        contentRequestService.getProfile().then((response) => setUserData(response.data)),
      ]);
      promises.catch((err: AxiosError<ServerError> | Error) => {
        if (axios.isAxiosError(err)) {
          console.error(err);
        } else {
          throw new Error('Unhandled error', err);
        }
      });
    }
  }, [loggedIn]);

  const value = useMemo(() => ({ loggedIn, setLoggedIn, imgSrc, userData }), [loggedIn, imgSrc, userData]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
