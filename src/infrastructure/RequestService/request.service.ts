import axios, { AxiosResponse } from 'axios';

import { RequestServiceType } from './request.entities';

import { FormValues, User } from '../../features/auth';

const apiUrl = '/api/v1';

const instance = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
});

const responseBody = (response: AxiosResponse): Promise<User> => response.data;

const reguestService: RequestServiceType = {
  get: (url: string) => instance.get<User>(url).then(responseBody),
  post: (url: string, body: FormValues) => instance.post<User>(url, body).then(responseBody),
};

export default reguestService;
