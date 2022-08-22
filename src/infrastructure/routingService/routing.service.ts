import { Routing } from './routing.entities';

const routingService: Routing = {
  root: () => '/',
  kitty: () => '/kitty',
  login: () => '/login',
  profile: () => '/profile',
  notFound: () => '*',
  logout: () => '/logout',
};

export default routingService;
