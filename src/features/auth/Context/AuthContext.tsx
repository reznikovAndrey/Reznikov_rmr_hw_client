import { createContext } from 'react';

import { AuthContextType } from '../auth.entities';

export default createContext<AuthContextType>({
  loggedIn: false,
  setLoggedIn: () => undefined,
  imgSrc: '',
  userData: null,
});
