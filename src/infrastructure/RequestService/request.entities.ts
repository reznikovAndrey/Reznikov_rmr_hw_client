export type ServerError = {
  statusCode: number;
  error: string;
  message: string;
};

export type ServerSuccessStatus = {
  status: 'OK!';
};
