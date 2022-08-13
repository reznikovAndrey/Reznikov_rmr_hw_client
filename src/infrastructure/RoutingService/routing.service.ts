import { Routing } from './routing.entities';

const routingService: Routing = {
  root: () => '/',
  content: () => '/kitty',
  login: () => '/login',
  profile: () => '/profile',
  notFound: () => '*',
};

export default routingService;
