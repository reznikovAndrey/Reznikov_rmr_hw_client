import { routingService } from '../../../infrastructure/routingService';
import { NavItems } from '../layout.entities';

export default (): NavItems => [
  { text: 'nav.links.kitten', href: routingService.KITTY },
  { text: 'nav.links.profile', href: routingService.PROFILE },
];
