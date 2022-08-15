import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../../features/auth/Hooks';
import routingService from '../../../infrastructure/RoutingService/routing.service';

const PrivateScreen: React.FC = () => {
  const { loggedIn } = useAuth();

  return loggedIn ? <Outlet /> : <Navigate to={routingService.login()} replace />;
};

export default PrivateScreen;
