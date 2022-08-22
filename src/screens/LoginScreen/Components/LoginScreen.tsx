import { Navigate } from 'react-router-dom';

import { LoginForm, useAuth } from '../../../features/auth';
import { routingService } from '../../../infrastructure/RoutingService';

const LoginScreen: React.FC = () => {
  const { loggedIn } = useAuth();

  return loggedIn ? <Navigate to={routingService.kitty()} replace /> : <LoginForm />;
};

export default LoginScreen;
