import axios, { AxiosResponse } from 'axios';

import { RequestServiceType, ServerSuccessAnswerType } from './request.entities';

import { FormValues } from '../../features/auth';

const apiUrl = '/api/v1';

const instance = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
});

const responseBody = (response: AxiosResponse): Promise<ServerSuccessAnswerType> => response.data;

const reguestService: RequestServiceType = {
  get: (url: string) => instance.get<ServerSuccessAnswerType>(url).then(responseBody),
  post: (url: string, body: FormValues) => instance.post<ServerSuccessAnswerType>(url, body).then(responseBody),
};

export default reguestService;
