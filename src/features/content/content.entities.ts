import { UserFromServer } from '../auth';

export type ServerKitty = {
  src: string;
};

export type ServerSuccessData<T> = {
  data: T;
};

export type ContentRequestServiceType = {
  getKitty: () => Promise<ServerSuccessData<ServerKitty>>;
  getProfile: () => Promise<ServerSuccessData<UserFromServer>>;
};
