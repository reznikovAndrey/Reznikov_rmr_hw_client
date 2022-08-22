import { Routes, Route } from 'react-router-dom';

import { KittyScreen } from './KittyScreen';
import { LoginScreen } from './LoginScreen';
import { NotFoundScreen } from './NotFoundScreen';
import { PrivateScreen } from './PrivateScreen';
import { ProfileScreen } from './ProfileScreen';

import App from '../App';
import { routingService } from '../infrastructure/routingService';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path={routingService.ROOT} element={<App />}>
      <Route path={routingService.LOGIN} element={<LoginScreen />} />
      <Route path={routingService.ROOT} element={<PrivateScreen />}>
        <Route path={routingService.PROFILE} element={<ProfileScreen />} />
        <Route path={routingService.KITTY} element={<KittyScreen />} />
        <Route path={routingService.NOT_FOUND} element={<NotFoundScreen />} />
      </Route>
    </Route>
  </Routes>
);

export default AppRoutes;
