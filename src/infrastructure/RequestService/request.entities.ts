import { FormValues } from '../../features/auth';

export type ServerError = {
  statusCode: number;
  error: string;
  message: string;
};

type SuccessStatus = 'OK!';

export type ServerSuccess = {
  status: SuccessStatus;
};

export type RequestServiceType = {
  get: (url: string) => Promise<ServerSuccess>;
  post: (url: string, body: FormValues) => Promise<ServerSuccess>;
};
