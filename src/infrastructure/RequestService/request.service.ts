import axios, { AxiosResponse } from 'axios';

import { RequestServiceType, ServerSuccess, ServerSuccessContent } from './request.entities';

import { FormValues } from '../../features/auth';

const apiUrl = '/api/v1';

const instance = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
});

const responseBody = (response: AxiosResponse<ServerSuccess | ServerSuccessContent>) => response.data;

const reguestService: RequestServiceType = {
  get: (url: string) => instance.get<ServerSuccess | ServerSuccessContent>(url).then(responseBody),
  post: (url: string, body: FormValues) =>
    instance.post<ServerSuccess | ServerSuccessContent>(url, body).then(responseBody),
};

export default reguestService;
