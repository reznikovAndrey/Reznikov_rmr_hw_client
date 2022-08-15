import routingService from '../../../infrastructure/RoutingService/routing.service';
import { NavItems } from '../layout.entities';

export default (): NavItems => [
  { text: 'nav.links.kitten', href: routingService.kitty() },
  { text: 'nav.links.profile', href: routingService.profile() },
];
