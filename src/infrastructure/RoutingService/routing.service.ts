import { RoutingType } from './routing.entities';

const routingService: RoutingType = {
  root: () => '/',
  content: () => '/kitty',
  login: () => '/login',
  profile: () => '/profile',
  notFound: () => '*',
};

export default routingService;
