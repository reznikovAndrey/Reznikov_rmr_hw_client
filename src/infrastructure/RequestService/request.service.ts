import axios, { AxiosResponse } from 'axios';

import { RequestServiceType, ServerKitty, ServerSuccessData, ServerSuccessStatus } from './request.entities';

import { UserFromServer } from '../../features/auth';
import { routingService } from '../RoutingService';

const apiUrl = '/api/v1';

const instance = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
});

const reguestService: RequestServiceType = {
  login(body) {
    return instance
      .post<ServerSuccessStatus>(routingService.login(), body)
      .then((response: AxiosResponse<ServerSuccessStatus>) => response.data);
  },
  getKitty() {
    return instance
      .get<ServerSuccessData<ServerKitty>>(routingService.content())
      .then((response: AxiosResponse<ServerSuccessData<ServerKitty>>) => response.data);
  },
  getProfile() {
    return instance
      .get<ServerSuccessData<UserFromServer>>(routingService.profile())
      .then((response: AxiosResponse<ServerSuccessData<UserFromServer>>) => response.data);
  },
};

export default reguestService;
