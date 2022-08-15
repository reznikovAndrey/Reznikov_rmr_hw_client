import axios, { AxiosResponse } from 'axios';

import { UserFromServer } from '../../../features/auth';
import { API_URL } from '../../../utils/constants';
import { routingService } from '../../RoutingService';
import { ContentRequestServiceType, ServerKitty, ServerSuccessData } from '../request.entities';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

const contentRequestService: ContentRequestServiceType = {
  getKitty() {
    return instance
      .get<ServerSuccessData<ServerKitty>>(routingService.kitty())
      .then((response: AxiosResponse<ServerSuccessData<ServerKitty>>) => response.data);
  },
  getProfile() {
    return instance
      .get<ServerSuccessData<UserFromServer>>(routingService.profile())
      .then((response: AxiosResponse<ServerSuccessData<UserFromServer>>) => response.data);
  },
};

export default contentRequestService;
