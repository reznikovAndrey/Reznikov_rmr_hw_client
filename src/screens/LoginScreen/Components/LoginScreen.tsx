import { Navigate } from 'react-router-dom';

import { LoginForm } from '../../../features/auth';
import { useAuth } from '../../../features/auth/Hooks';
import { routingService } from '../../../infrastructure/RoutingService';

const LoginScreen: React.FC = () => {
  const { loggedIn } = useAuth();

  return loggedIn ? <Navigate to={routingService.kitty()} /> : <LoginForm />;
};

export default LoginScreen;
