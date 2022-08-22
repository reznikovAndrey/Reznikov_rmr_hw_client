import { Routing } from './routing.entities';

const routingService: Routing = {
  ROOT: '/',
  KITTY: '/kitty',
  LOGIN: '/login',
  PROFILE: '/profile',
  NOT_FOUND: '*',
  LOGOUT: '/logout',
};

export default routingService;
