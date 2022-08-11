import routingService from '../../../infrastructure/RoutingService/routing.service';

export default () => [
  { text: 'Kitten', href: routingService.content() },
  { text: 'Profile', href: routingService.profile() },
];
