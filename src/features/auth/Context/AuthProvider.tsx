import axios, { AxiosError } from 'axios';
import { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';

import AuthContext from './AuthContext';

import { contentRequestService, ServerError } from '../../../infrastructure/RequestService';
import { UserFromServer } from '../auth.entities';

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const [userData, setUserData] = useState<UserFromServer | null>(null);

  useEffect(() => {
    contentRequestService
      .getProfile()
      .then(() => setLoggedIn(true))
      .catch((err: AxiosError<ServerError> | Error) => {
        if (axios.isAxiosError(err)) {
          if (err.response?.data.statusCode === 403) {
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
      Promise.allSettled([
        contentRequestService
          .getKitty()
          .then((response) => setImgSrc(response.data.src))
          .catch((err: AxiosError<ServerError> | Error) => {
            if (axios.isAxiosError(err)) {
              console.error(err);
            } else {
              throw new Error('Unhandled error', err);
            }
          }),
        contentRequestService
          .getProfile()
          .then((response) => setUserData(response.data))
          .catch((err: AxiosError<ServerError> | Error) => {
            if (axios.isAxiosError(err)) {
              console.error(err);
            } else {
              throw new Error('Unhandled error', err);
            }
          }),
      ]);
    }
  }, [loggedIn]);

  const value = useMemo(() => ({ loggedIn, setLoggedIn, imgSrc, userData }), [loggedIn, imgSrc, userData]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
