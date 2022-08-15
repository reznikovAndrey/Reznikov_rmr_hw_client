import { useContext } from 'react';

import { AuthContextType } from '../auth.entities';
import { AuthContext } from '../Context';

export default (): AuthContextType | never => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error('useAuth should be used within AuthProvider');
  }

  return value;
};
