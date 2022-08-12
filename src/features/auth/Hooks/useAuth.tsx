import { useContext } from 'react';

import { AuthContextType } from '../auth.entities';

import { AuthContext } from '../Context';

export default (): AuthContextType => useContext(AuthContext);
