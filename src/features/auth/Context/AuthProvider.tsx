import { FC, PropsWithChildren, useMemo, useState } from 'react';

import AuthContext from './AuthContext';

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const value = useMemo(() => ({ loggedIn, setLoggedIn }), []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
