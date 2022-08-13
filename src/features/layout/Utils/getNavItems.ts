import routingService from '../../../infrastructure/RoutingService/routing.service';
import { NavItems } from '../layout.entities';

export default (): NavItems => [
  { text: 'Kitten', href: routingService.content() },
  { text: 'Profile', href: routingService.profile() },
];
