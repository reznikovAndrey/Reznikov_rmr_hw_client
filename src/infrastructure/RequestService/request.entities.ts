import { FormValues, User } from '../../features/auth';

export type RequestServiceType = {
  get: (url: string) => Promise<User>;
  post: (url: string, body: FormValues) => Promise<User>;
};
