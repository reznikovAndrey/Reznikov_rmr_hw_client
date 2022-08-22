import { routingService } from '../../../infrastructure/routingService';
import { NavItems } from '../layout.entities';

export default (): NavItems => [
  { text: 'nav.links.kitten', href: routingService.kitty() },
  { text: 'nav.links.profile', href: routingService.profile() },
];
