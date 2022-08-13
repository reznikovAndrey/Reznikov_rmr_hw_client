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

export type ServerSuccessContent = {
  data: {
    src: string;
  };
};

export function isContent(response: ServerSuccess | ServerSuccessContent): response is ServerSuccessContent {
  return (response as ServerSuccessContent).data !== undefined;
}

export type RequestServiceType = {
  get: (url: string) => Promise<ServerSuccess | ServerSuccessContent>;
  post: (url: string, body: FormValues) => Promise<ServerSuccess | ServerSuccessContent>;
};
