import { UserFromServer, FormValues } from '../../features/auth';

export type ServerError = {
  statusCode: number;
  error: string;
  message: string;
};

export type ServerSuccessStatus = {
  status: 'OK!';
};

export type ServerKitty = {
  src: string;
};

export type ServerSuccessData<T> = {
  data: T;
};

export type AuthRequestServiceType = {
  login: (body: FormValues) => Promise<ServerSuccessStatus>;
  logout: () => Promise<ServerSuccessStatus>;
};

export type ContentRequestServiceType = {
  getKitty: () => Promise<ServerSuccessData<ServerKitty>>;
  getProfile: () => Promise<ServerSuccessData<UserFromServer>>;
};
