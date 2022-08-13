import { FormValues } from '../../features/auth';

export type ServerErrorAnswerType = {
  statusCode: number;
  error: string;
  message: string;
};

type SuccessStatus = 'OK!';

export type ServerSuccessAnswerType = {
  status: SuccessStatus;
};

export type RequestServiceType = {
  get: (url: string) => Promise<ServerSuccessAnswerType>;
  post: (url: string, body: FormValues) => Promise<ServerSuccessAnswerType>;
};
