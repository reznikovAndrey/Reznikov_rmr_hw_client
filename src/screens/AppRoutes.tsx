import { Routes, Route } from 'react-router-dom';

import { ContentScreen } from './ContentScreen';
import { LoginScreen } from './LoginScreen';
import { NotFoundScreen } from './NotFoundScreen';
import { PrivateScreen } from './PrivateScreen';
import { ProfileScreen } from './ProfileScreen';

import { routingService } from '../infrastructure/RoutingService';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path={routingService.login()} element={<LoginScreen />} />
    <Route path="" element={<PrivateScreen />}>
      <Route path={routingService.profile()} element={<ProfileScreen />} />
      <Route path={routingService.content()} element={<ContentScreen />} />
      <Route path={routingService.notFound()} element={<NotFoundScreen />} />
    </Route>
  </Routes>
);

export default AppRoutes;
