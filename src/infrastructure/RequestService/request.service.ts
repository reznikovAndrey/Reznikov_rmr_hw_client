import axios, { AxiosResponse } from 'axios';

import { RequestServiceType, ServerSuccess } from './request.entities';

import { FormValues } from '../../features/auth';

const apiUrl = '/api/v1';

const instance = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
});

const responseBody = (response: AxiosResponse): Promise<ServerSuccess> => response.data;

const reguestService: RequestServiceType = {
  get: (url: string) => instance.get<ServerSuccess>(url).then(responseBody),
  post: (url: string, body: FormValues) => instance.post<ServerSuccess>(url, body).then(responseBody),
};

export default reguestService;
