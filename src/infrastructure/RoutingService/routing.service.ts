import { Routing } from './routing.entities';

const routingService: Routing = {
  root: () => '/',
  content: () => '/kitty',
  login: () => '/login',
  profile: () => '/profile',
  notFound: () => '*',
  logout: () => '/logout',
};

export default routingService;
