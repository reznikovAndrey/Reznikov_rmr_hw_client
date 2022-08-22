import { AxiosResponse } from 'axios';

import { requestService, ServerSuccessStatus } from '../../../infrastructure/requestService';
import { routingService } from '../../../infrastructure/routingService';
import { AuthRequestServiceType } from '../auth.entities';

const authRequestService: AuthRequestServiceType = {
  login(body) {
    return requestService
      .post<ServerSuccessStatus>(routingService.login(), body)
      .then((response: AxiosResponse<ServerSuccessStatus>) => response.data);
  },
  logout() {
    return requestService
      .post<ServerSuccessStatus>(routingService.logout())
      .then((response: AxiosResponse<ServerSuccessStatus>) => response.data);
  },
};

export default authRequestService;
