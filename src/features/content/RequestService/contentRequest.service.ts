import { AxiosResponse } from 'axios';

import { requestService } from '../../../infrastructure/RequestService';
import { routingService } from '../../../infrastructure/RoutingService';
import { UserFromServer } from '../../auth';
import { ContentRequestServiceType, ServerKitty, ServerSuccessData } from '../content.entities';

const contentRequestService: ContentRequestServiceType = {
  getKitty() {
    return requestService
      .get<ServerSuccessData<ServerKitty>>(routingService.kitty())
      .then((response: AxiosResponse<ServerSuccessData<ServerKitty>>) => response.data);
  },
  getProfile() {
    return requestService
      .get<ServerSuccessData<UserFromServer>>(routingService.profile())
      .then((response: AxiosResponse<ServerSuccessData<UserFromServer>>) => response.data);
  },
};

export default contentRequestService;
