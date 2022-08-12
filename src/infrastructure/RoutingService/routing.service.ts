import { RoutingType } from './routing.entities';

const routingService: RoutingType = {
  content: () => '/',
  login: () => '/login',
  profile: () => '/profile',
  notFound: () => '*',
};

export default routingService;
