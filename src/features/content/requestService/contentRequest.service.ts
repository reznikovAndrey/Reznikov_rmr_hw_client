import { AxiosResponse } from 'axios';

import { requestService } from '../../../infrastructure/requestService';
import { routingService } from '../../../infrastructure/routingService';
import { UserFromServer } from '../../auth';
import { ContentRequestServiceType, ServerKitty, ServerSuccessData } from '../content.entities';

const contentRequestService: ContentRequestServiceType = {
  getKitty() {
    return requestService
      .get<ServerSuccessData<ServerKitty>>(routingService.KITTY)
      .then((response: AxiosResponse<ServerSuccessData<ServerKitty>>) => response.data);
  },
  getProfile() {
    return requestService
      .get<ServerSuccessData<UserFromServer>>(routingService.PROFILE)
      .then((response: AxiosResponse<ServerSuccessData<UserFromServer>>) => response.data);
  },
};

export default contentRequestService;
