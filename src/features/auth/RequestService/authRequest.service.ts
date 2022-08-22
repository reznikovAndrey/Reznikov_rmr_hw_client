import { AxiosResponse } from 'axios';

import { requestService } from '../../../infrastructure/RequestService';
import { ServerSuccessStatus } from '../../../infrastructure/RequestService/request.entities';
import { routingService } from '../../../infrastructure/RoutingService';
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
