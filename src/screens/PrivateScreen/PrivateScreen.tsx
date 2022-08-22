import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../features/auth';
import { routingService } from '../../infrastructure/routingService';

const PrivateScreen: React.FC = () => {
  const { loggedIn } = useAuth();

  return loggedIn ? <Outlet /> : <Navigate to={routingService.LOGIN} replace />;
};

export default PrivateScreen;
