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
    <Route path={routingService.root()} element={<App />}>
      <Route path={routingService.login()} element={<LoginScreen />} />
      <Route path={routingService.root()} element={<PrivateScreen />}>
        <Route path={routingService.profile()} element={<ProfileScreen />} />
        <Route path={routingService.kitty()} element={<KittyScreen />} />
        <Route path={routingService.notFound()} element={<NotFoundScreen />} />
      </Route>
    </Route>
  </Routes>
);

export default AppRoutes;
