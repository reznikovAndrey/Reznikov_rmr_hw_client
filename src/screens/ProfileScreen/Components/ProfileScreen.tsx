import { useEffect, useState } from 'react';

import { UserFromServer } from '../../../features/auth';
import { requestService } from '../../../infrastructure/RequestService';

const ProfileScreen: React.FC = () => {
  const [userData, setUserData] = useState<UserFromServer | null>(null);

  useEffect(() => {
    requestService.getProfile().then((response) => setUserData(response.data));
  }, []);

  return (
    <>
      <h1>Profile data</h1>
      {userData && (
        <ul>
          <li>Id: {userData.id}</li>
          <li>Email: {userData.email}</li>
          <li>Phone: {userData.phone}</li>
          <li>Name: {userData.name}</li>
        </ul>
      )}
    </>
  );
};

export default ProfileScreen;
