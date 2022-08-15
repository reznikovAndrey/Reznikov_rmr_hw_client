import axios, { AxiosResponse } from 'axios';

import { API_URL } from '../../../utils/constants';
import { routingService } from '../../RoutingService';
import { AuthRequestServiceType, ServerSuccessStatus } from '../request.entities';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

const authRequestService: AuthRequestServiceType = {
  login(body) {
    return instance
      .post<ServerSuccessStatus>(routingService.login(), body)
      .then((response: AxiosResponse<ServerSuccessStatus>) => response.data);
  },
  logout() {
    return instance
      .post<ServerSuccessStatus>(routingService.logout())
      .then((response: AxiosResponse<ServerSuccessStatus>) => response.data);
  },
};

export default authRequestService;
