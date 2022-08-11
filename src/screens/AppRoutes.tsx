import { Routes, Route } from 'react-router-dom';

import { ContentScreen } from './ContentScreen';
import { LoginScreen } from './LoginScreen';
import { NotFoundScreen } from './NotFoundScreen';
import { ProfileScreen } from './ProfileScreen';

import routingService from '../infrastructure/RoutingService/routing.service';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path={routingService.login()} element={<LoginScreen />} />
    <Route path={routingService.profile()} element={<ProfileScreen />} />
    <Route path={routingService.content()} element={<ContentScreen />} />
    <Route path="*" element={<NotFoundScreen />} />
  </Routes>
);

export default AppRoutes;
